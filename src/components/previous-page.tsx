"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PreviousPage() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex flex-row w-24 cursor-pointer text-pcfcprimary font-subheading"
    >
      <ChevronLeftIcon className="mr-2" /> Back
    </button>
  );
}
