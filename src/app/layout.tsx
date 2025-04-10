import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Anton, DM_Sans, Mona_Sans } from "next/font/google";

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-dmsans",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-monasans",
});

export const metadata: Metadata = {
  title: "PCFC Connect Group",
  description:
    "Sign up and belong to a small group where you can grow in faith.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-white.png" />
      </head>
      <body
        className={`${anton.variable} ${DMSans.variable} ${monaSans.variable} w-full bg-contain bg-[url(/bg-vertical.jpg)] md:bg-[url(/bg-horizontal.jpg)]`}
      >
        <Toaster className="bg-green-500" richColors closeButton />
        <Navbar />
        <div className="flex w-full justify-center">
          <div className="z-5 w-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
