import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MainHero() {
  return (
    <div className="relative flex flex-col justify-center items-center px-8 py-12">
      <div className="absolute inset-0 z-0 bg-[url(/white-bg.png)] bg-cover pointer-events-none" />
      <div className="md:w-[50%] z-1">
        <div className="flex z-1 flex-col items-center justify-center space-y-8">
          <Image
            src="/connect-group.png"
            width={1000}
            height={1000}
            alt="connect-groups"
          />
          <h1 className="font-subheading md:text-center text-4xl text-pcfcsecondary">
            FAITH GROWS BEST IN{" "}
            <span className="relative z-20 inline-block rounded-lg bg-blue-900/50 py-1 text-pcfcsecondary underline decoration-pcfcwhite decoration-[3px] underline-offset-[4px] backdrop-blur-sm">
              COMMUNITY,
            </span>{" "}
            NOT IN ISOLATION.
          </h1>
          <p className="text-md md:text-lg font-caption text-pcfctertiary">
            We believe you were created to grow spiritually so you can fulfill
            God&apos;s purpose and calling—but growth doesn&apos;t happen in
            isolation. Faith is a journey we take together—learning, applying,
            and walking side by side.
          </p>
          <Link href="/leaders" className="w-full z-1">
            <Button className="w-full rounded-xl p-8 bg-pcfcsecondary text-xl font-subheading">
              JOIN A GROUP
            </Button>
          </Link>
        </div>
        <Image
          src="/main-hero-pic.png"
          width={1000}
          height={1000}
          alt="hero-pic"
          className="object-contain h-70 my-12 z-1 md:h-100"
        />
      </div>
    </div>
  );
}
