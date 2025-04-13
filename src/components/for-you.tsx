import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ForYouHero() {
  return (
    <div className="relative flex flex-col px-8 py-16 justify-center items-center">
      <div className="absolute inset-0 z-1 bg-[url(/white-bg.png)] bg-cover pointer-events-none" />
      <div className="md:w-[50%] z-1">
        <div className="flex z-10 flex-col items-center justify-center space-y-6">
          <h1 className="text-5xl font-subheading px-4 mb-[-20px] text-pcfcwhite">
            THERE IS A
          </h1>
          <Image
            src="/CONNECT.png"
            width={1000}
            height={500}
            alt="connect-groups"
            className="my-[-1.5rem] md:my-[-4rem]"
          />
          <h1 className="text-5xl font-subheading px-4 mt-[-15px] text-pcfcwhite">
            FOR YOU
          </h1>
          <p className="text-md font-captio md:text-xl text-pcfctertiary my-8">
            No matter your age, background, or interests, there is a Connect
            Group where you can belong.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/group-types.png"
            width={1000}
            height={1000}
            alt="hero-pic"
            className="object-contain justify-center h-72 mb-12 z-1 md:size-[40rem]"
          />
        </div>
        <Link href="/leaders" className="w-full z-1">
          <Button className="w-full rounded-xl p-8 bg-pcfcsecondary text-xl font-subheading">
            FIND MY GROUP
          </Button>
        </Link>
      </div>
    </div>
  );
}
