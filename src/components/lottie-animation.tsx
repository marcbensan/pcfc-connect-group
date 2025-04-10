"use client";

import { useLottie } from "lottie-react";

const lottieOptions = {
  loop: false,
  autoplay: true,
  animationData: require("@/lib/data/success.json"),
};

const LottieAnimation: React.FC = () => {
  const { View } = useLottie(lottieOptions);
  return <div className="w-full">{View}</div>;
};

export default LottieAnimation;
