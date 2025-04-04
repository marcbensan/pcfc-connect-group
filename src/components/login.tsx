"use client";

import { signInUser } from "@/app/actions/authentication";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";

export default function SignIn() {
  const [error, action, isLoading] = useActionState(signInUser, "");

  return (
   
  );
}