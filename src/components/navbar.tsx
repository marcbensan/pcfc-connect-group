import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="h-20 flex justify-start p-4 bg-pcfcprimarydark">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href="/"
            className="text-white font-monasans font-extrabold w-full items-center justify-start flex flex-row space-x-2"
          >
            <Image
              src="/logo-white.png"
              width={24}
              height={24}
              alt="pcfc-logo"
              className="size-10"
            />
            <p className="w-40 text-sm">PRAISE CHRISTIAN FAMILY CHURCH</p>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
