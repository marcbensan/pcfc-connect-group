import Success from "@/components/success";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="bg-pcfcwhite flex flex-col items-center min-h-screen py-16 space-y-8">
      <div className="flex flex-col items-center px-12">
        <Success />
        <p className="text-md font-semibold text-pcfcprimary mt-2 mb-12">
          Congratulations! You’ve successfully signed up for a Connect Group.
        </p>
        <Link href="/">
          <Button className="p-8 bg-pcfcprimary font-subheading text-lg text-pcfcwhite rounded-full hover:bg-blue-800">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
