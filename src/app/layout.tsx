import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Anton, DM_Sans, Mona_Sans } from "next/font/google";

import Footer from "@/components/footer";
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
        className={`${anton.variable} ${DMSans.variable} ${monaSans.variable} w-full antialiased bg-contain bg-[url(/bg-vertical.jpg)] md:bg-[url(/bg-horizontal.jpg)]`}
      >
        <Navbar />
        <div className="flex w-full justify-center overflow-hidden md:mb-32">
          <div className="z-5">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
