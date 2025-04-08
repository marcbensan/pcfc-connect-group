import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MainHero() {
  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-col items-center justify-center space-y-6">
        <Image
          src="/connect-group.png"
          width={1000}
          height={1000}
          alt="connect-groups"
        />
        <h1 className="font-subheading text-3xl text-pcfcsecondary">
          LIFE IS BETTER{" "}
          <span className="relative z-20 inline-block rounded-lg bg-blue-900/50 px-2 py-1 text-pcfcsecondary underline decoration-pcfcwhite decoration-[3px] underline-offset-[14px] backdrop-blur-sm">
            TOGETHER
          </span>
        </h1>
        <p className="text-sm font-caption text-pcfcwhite">
          be in a community to spiritually grow and live out God's purpose and
          calling.
        </p>
        <Link href="/leaders" className="w-full">
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
        className="object-contain h-60"
      />
    </div>
  );
}
