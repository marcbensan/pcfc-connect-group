"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="z-10 flex items-center min-h-screen justify-center">
      <Card className="w-[20rem] bg-pcfcwhite text-pcfcprimary font-caption my-8 py-8">
        <CardHeader>
          <CardTitle className="text-2xl font-caption">Admin Login</CardTitle>
          <CardDescription className="text-pcfcprimary/60">
            This path is only accessible for admins.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            type="submit"
            onClick={() => signIn()}
            className="w-full bg-pcfcprimary rounded-full"
          >
            Go to Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
