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
    <Card className="md:w-[40rem] w-[20rem] min-h-[20rem] flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-red-700 whitespace-nowrap">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6">
        <Button
          className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-80 0"
          onClick={onButtonClick || (() => router.push("/"))}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
