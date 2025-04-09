"use client";

import { images } from "@/lib/data/images";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function InformationHero() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="relative flex flex-col items-center justify-center bg-pcfcwhite px-8 py-16">
      <div className="absolute inset-0 z-0 bg-[url(/white-bg.png)] bg-cover opacity-40 pointer-events-none" />
      <div className="md:w-[50%] z-1 ">
        <div className="flex flex-col space-y-6 z-1">
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
          <p className="text-md md:text-lg font-caption text-pcfctertiary">
            Connect Groups are <strong>a community</strong> of{" "}
            <strong>people who build each other up</strong> through
            relationship, prayer, and the Word.
          </p>
          <h1 className="font-subheading text-start text-3xl w-full text-pcfcprimary">
            IT&apos;S WHERE STRANGERS TURN INTO{" "}
            <span className="relative z-20 inline-block rounded-lg bg-orange-500/40 px-2 py-1 text-pcfcprimary underline decoration-pcfctertiary decoration-[3px] underline-offset-[14px] backdrop-blur-sm">
              FAMILY
            </span>
          </h1>
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
                  className="grayscale rounded-lg z-1 mt-8 md:mt-16"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
