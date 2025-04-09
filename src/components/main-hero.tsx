import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MainHero() {
  return (
    <div className="relative flex flex-col px-12 py-12">
      <div className="absolute inset-0 z-1 bg-[url(/white-bg.png)] pointer-events-none" />
      <div className="flex z-1 flex-col items-center justify-center space-y-8">
        <Image
          src="/connect-group.png"
          width={1000}
          height={1000}
          alt="connect-groups"
        />
        <h1 className="font-subheading text-4xl text-pcfcsecondary">
          LIFE IS BETTER{" "}
          <span className="relative z-20 inline-block rounded-lg bg-blue-900/50 px-2 py-1 text-pcfcsecondary underline decoration-pcfcwhite decoration-[3px] underline-offset-[14px] backdrop-blur-sm">
            TOGETHER
          </span>
        </h1>
        <p className="text-md font-caption text-pcfcsecondary">
          be in a community to spiritually grow and live out God's purpose and
          calling.
        </p>
        <Link href="/leaders" className="w-full z-1">
          <Button className="w-full rounded-xl p-8 bg-pcfcsecondary text-xl font-subheading">
            FIND MY GROUP
          </Button>
        </Link>
      </div>
      <Image
        src="/main-hero-pic.png"
        width={1000}
        height={1000}
        alt="hero-pic"
        className="object-contain h-70 my-12 z-1"
      />
    </div>
  );
}
