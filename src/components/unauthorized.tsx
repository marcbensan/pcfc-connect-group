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

export function Unauthorized({
  title = "Access Denied",
  description = "You do not have permission to view this page. Please contact the administrator if you believe this is a mistake.",
  buttonText = "Go Back Home",
  onButtonClick,
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}) {
  const router = useRouter();

  return (
    <Card className="md:w-[40rem] w-[20rem] min-h-[20rem] flex flex-col bg-pcfcwhite font-caption">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-red-800 whitespace-nowrap">
          {title}
        </CardTitle>
        <CardDescription className="text-pcfcprimary/60 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6">
        <Button
          className="px-6 py-2 bg-pcfcprimary text-white rounded-full hover:bg-blue-80 0"
          onClick={onButtonClick || (() => router.push("/"))}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
