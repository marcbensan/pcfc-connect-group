"use client";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("./lottie-animation"), {
  ssr: false,
});

export default function Success() {
  return <LottieAnimation />;
}
