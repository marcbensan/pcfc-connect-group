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
    <div className="flex items-center justify-center  md:w-[50rem] bg-gray-100 dark:bg-gray-900">
      <Card className="md:w-[50rem] w-[20rem] h-[20rem] shadow-lg border border-gray-200 dark:border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Page Not Found</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex justify-center">
          <Button
            className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
            onClick={() => router.push("/")}
          >
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
