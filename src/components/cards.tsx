"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Leader } from "@/lib/types/leader";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export function ExpandableCard({ leaders }: { leaders: Leader[] }) {
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
      {leaders.length > 0 ? (
        <>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10 "
            />
          )}
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid  place-items-center z-[100]">
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
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.name}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-fit max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 overflow-hidden"
              >
                <motion.div layoutId={`image-${active.name}-${id}`}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt={active.name}
                    className="w-full h-80 lg:h-80 object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.name}
                      </motion.h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {active.day} - {active.time}
                      </p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.name}-${id}`}
                      href={`/form/?leader=${active.id}`}
                      className="px-7 py-3 text-sm rounded-lg font-bold bg-blue-800 text-white"
                    >
                      Join
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      className="text-neutral-600 text-sm lg:text-base h-40 h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {active.description}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
          <ul className="max-w-2xl space-y-4 mx-auto w-full">
            {leaders.map((card, index) => (
              <motion.div
                layoutId={`card-${card.name}-${id}`}
                key={`card-${card.name}-${id}`}
                onClick={() => setActive(card)}
                className="p-4 flex border-1 flex-row justify-between bg-white shadow-sm items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-full cursor-pointer"
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
                      width={100}
                      height={100}
                      src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
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
                      className={`font-medium text-neutral-800 dark:text-neutral-200  ${
                        index % 2 !== 0 ? "text-right" : "text-left"
                      }`}
                    >
                      {card.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-start">
                      {card.day} - {card.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </>
      ) : (
        <div className="p-12 text-center w-full text-gray-700">
          No leaders match your selected schedule.
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
