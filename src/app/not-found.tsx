"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Card className="md:w-[50rem] w-[20rem] space-y-4 h-[20rem] text-pcfcprimary bg-pcfcwhite font-caption">
      <CardHeader className="text-center space-y-8">
        <CardTitle className="text-3xl font-extrabold text-pcfcprimarydark">
          Page Not Found
        </CardTitle>
        <CardDescription className="mt-2">
          Sorry, the page you are looking for does not exist or has been moved.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6 flex justify-center">
        <Button
          className="px-6 py-2 bg-pcfcprimary text-white rounded-full hover:bg-blue-800"
          onClick={() => router.push("/")}
        >
          Go Back Home
        </Button>
      </CardContent>
    </Card>
  );
}
