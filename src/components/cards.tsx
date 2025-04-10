"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Leader } from "@/lib/types/leader";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export function ExpandableCard({ leaders }: { leaders: Leader[] | undefined }) {
  const [active, setActive] = useState<Leader[][number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {leaders && leaders.length > 0 ? (
        <>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-pcfcwhite h-full md:w-full md:bg-gray-900/50 w-full z-10 font-caption"
            />
          )}
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid  place-items-center z-[100] font-caption text-pcfcprimary">
              <motion.button
                key={`button-${active.name}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full size-10"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.name}-${id}`}
                ref={ref}
                className="w-full md:w-[30rem] md:p-4 rounded-4xl flex flex-col bg-pcfcwhite overflow-hidden"
              >
                <motion.div
                  layoutId={`image-${active.name}-${id}`}
                  className="flex justify-center items-center space-y-4"
                >
                  <Image
                    priority
                    width={1000}
                    height={1000}
                    src={
                      active.img_url ||
                      `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`
                    }
                    alt={active.name}
                    className="size-90 md:size-60 object-cover rounded-full object-top mb-8 md:mb-0 md:mt-4"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-bold text-xl"
                      >
                        {active.name}
                      </motion.h3>
                      <p className="text-pcfcprimary/70">
                        {active.day} - {active.time}
                      </p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.name}-${id}`}
                      href={`/form/?leader=${active.id}`}
                      className="px-7 py-3 text-sm rounded-full font-bold bg-blue-800 text-white"
                    >
                      Join
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      className="text-sm lg:text-base  h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {active.description}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
          <ul className="space-y-4 w-full flex flex-col md:items-center md:w-[40rem] font-caption text-pcfcprimary">
            {leaders.map((card, index) => (
              <motion.div
                layoutId={`card-${card.name}-${id}`}
                key={`card-${card.name}-${id}`}
                onClick={() => setActive(card)}
                className="p-4 flex border-1 md:w-[45rem] flex-row justify-between bg-pcfcwhite shadow-sm items-center hover:bg-pcfcwhite/90 rounded-full cursor-pointer"
              >
                <div
                  className={`flex gap-4 flex-row w-full ${
                    index % 2 !== 0 && "justify-end"
                  }`}
                >
                  <motion.div
                    layoutId={`image-${card.name}-${id}`}
                    className={`${
                      index % 2 === 0 ? "order-first" : "order-last"
                    }`}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src={
                        card.img_url ||
                        `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`
                      }
                      alt={card.name}
                      className={`h-14 w-14 rounded-full object-cover object-top`}
                    />
                  </motion.div>
                  <div
                    className={`${
                      index % 2 === 0 ? "order-last" : "order-first"
                    }`}
                  >
                    <h3
                      className={`text-lg font-semibold  ${
                        index % 2 !== 0 ? "text-right" : "text-left"
                      }`}
                    >
                      {card.name}
                    </h3>
                    <p className=" text-start text-pcfcprimary/70">
                      {card.day} | {card.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </>
      ) : (
        <div className="py-20 px-12 text-center max-w-78 rounded-xl bg-pcfcwhite w-full text-pcfcprimary font-bold md:max-w-full">
          No leaders match your selected schede.
        </div>
      )}
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
