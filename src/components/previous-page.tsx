"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PreviousPage() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex ml-4 flex-row w-20 space-x-4 cursor-pointer"
    >
      <ChevronLeftIcon className="mr-2" /> Back
    </button>
  );
}
