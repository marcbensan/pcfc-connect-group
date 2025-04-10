"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"light"}
      position="top-center"
      className="toaster group bg-green-500"
      {...props}
    />
  );
};
