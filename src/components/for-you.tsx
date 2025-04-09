import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ForYouHero() {
  return (
    <div className="relative flex flex-col px-12 py-16 justify-center items-center">
      <div className="absolute inset-0 z-1 bg-[url(/white-bg.png)] pointer-events-none" />
      <div className="flex z-10 flex-col items-center justify-center space-y-6">
        <h1 className="text-5xl font-subheading px-4 mb-[-20px] text-pcfcwhite">
          THERE IS A
        </h1>
        <Image
          src="/CONNECT.png"
          width={1000}
          height={500}
          alt="connect-groups"
          className="my-[-35px]"
        />
        <h1 className="text-5xl font-subheading px-4 mt-[-15px] text-pcfcwhite">
          FOR YOU
        </h1>
        <p className="text-md font-caption text-pcfctertiary my-8">
          description to talk about demographics & how there’s always a place to
          belong.
        </p>
      </div>
      <Image
        src="/group-types.png"
        width={1000}
        height={1000}
        alt="hero-pic"
        className="object-contain justify-center size-100 mb-12 z-1"
      />
      <Link href="/leaders" className="w-full z-1">
        <Button className="w-full rounded-xl p-8 bg-pcfcsecondary text-xl font-subheading">
          FIND MY GROUP
        </Button>
      </Link>
    </div>
  );
}
