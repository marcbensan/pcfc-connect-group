import { ChevronDownIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function SearchFilters() {
  return (
    <div className="border w-full md:max-w-[45rem] rounded-2xl p-4">
      <h1 className="text-xl font-semibold">Find a Group</h1>
      <hr className="my-4" />
      <div className="flex flex-col md:flex-row w-full md:items-center space-y-8 md:space-x-48 md:justify-between">
        <div className="flex flex-row my-4 space-x-2 items-center">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Online</Label>
        </div>
        <div className=" space-x-4 items-center flex-grow flex flex-row">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full border p-3 rounded-lg">
              <div className="flex flex-row justify-between w-full">
                Location <ChevronDownIcon />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full border p-3 rounded-lg">
              <div className="flex flex-row justify-between w-full">
                Day <ChevronDownIcon />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <hr className="my-4" />
      <Button className="w-full my-2">Search</Button>
    </div>
  );
}
