import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ForYouHero() {
  return (
    <div className="flex flex-col space-y-12 px-12 py-16 justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-5xl font-subheading px-4 mb-[-20px] text-pcfcwhite">
          THERE IS A
        </h1>
        <Image
          src="/connect-group.png"
          width={1000}
          height={1000}
          alt="connect-groups"
        />
        <h1 className="text-5xl font-subheading px-4 mt-[-40px] text-pcfcwhite">
          FOR YOU
        </h1>

        <p className="text-sm font-caption text-pcfctertiary">
          description to talk about demographics & how there’s always a place to
          belong.
        </p>
      </div>
      <Image
        src="/group-types.png"
        width={1000}
        height={1000}
        alt="hero-pic"
        className="object-contain justify-center size-100 mb-12"
      />
      <Link href="/leaders" className="w-full">
        <Button className="w-full rounded-xl p-8 bg-pcfcsecondary text-xl font-subheading">
          FIND MY GROUP
        </Button>
      </Link>
    </div>
  );
}
