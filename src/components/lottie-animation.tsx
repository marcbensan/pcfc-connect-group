"use client";

import animationData from "@/lib/data/success.json"; // Correctly import the JSON file
import { useLottie } from "lottie-react";

const lottieOptions = {
  loop: false,
  autoplay: true,
  animationData,
};

const LottieAnimation: React.FC = () => {
  const { View } = useLottie(lottieOptions);
  return <div className="w-full">{View}</div>;
};

export default LottieAnimation;
