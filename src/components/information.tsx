"use client";

import { images } from "@/lib/data/images";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function InformationHero() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col space-y-12 bg-pcfcwhite px-12 py-16">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h1 className="text-5xl font-subheading px-4 mb-[-10px] text-pcfcprimary">
            <strong>WHAT IS A</strong>
          </h1>
          <Image
            src="/connect-group-1.png"
            width={1000}
            height={1000}
            alt="connect-group"
          />
        </div>
        <p className="text-md font-caption text-pcfcsecondary">
          Connect Groups are <strong>a community</strong> of{" "}
          <strong>people who build each other up</strong> through relationship,
          prayer, and the Word.
        </p>
        <h1 className="font-subheading text-start text-4xl max-w-[80%] text-pcfcprimary">
          IT'S WHERE STRANGERS TURN INTO{" "}
          <span className="relative z-20 inline-block rounded-lg bg-orange-500/40 px-2 py-1 text-pcfcprimary underline decoration-pcfctertiary decoration-[3px] underline-offset-[14px] backdrop-blur-sm">
            FAMILY
          </span>
        </h1>
        <Link href="/leaders" className="w-full">
          <Button className="w-full rounded-xl p-8 bg-pcfcsecondary text-xl font-subheading">
            FIND MY GROUP
          </Button>
        </Link>
      </div>
      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img}>
              <Image
                width={1000}
                height={1000}
                alt="sample-img"
                src={img}
                className="grayscale rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
