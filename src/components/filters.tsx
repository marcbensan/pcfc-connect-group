"use client";

import { Tag, TagInput } from "emblor";
import { ChevronDownIcon } from "lucide-react";
import { Label } from "./ui/label";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const days = [
  { id: "1", text: "Sunday" },
  { id: "2", text: "Monday" },
  { id: "3", text: "Tuesday" },
  { id: "4", text: "Wednesday" },
  { id: "5", text: "Thursday" },
  { id: "6", text: "Friday" },
  { id: "7", text: "Saturday" },
];

const locations = [
  { id: "1", text: "Church" },
  { id: "2", text: "Home-based" },
];

export default function SearchFilters() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(false);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [selectedDays, setSelectedDays] = useState<Tag[]>([]);
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<Tag[]>([]);
  const [activeLocationIndex, setActiveLocationIndex] = useState<number | null>(
    null
  );

  return (
    <div className="border w-full md:max-w-[45rem] rounded-2xl p-4">
      <h1 className="text-xl font-semibold">Find a Group</h1>
      <hr className="my-4" />
      <div className="flex flex-col md:flex-row w-full md:items-center space-y-8 md:space-y-0 py-4 md:justify-between">
        <div className="items-center w-full ">
          <div className="flex space-x-2">
            <Checkbox id="online" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="online"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Online
              </label>
              <p className="text-sm text-muted-foreground">
                You prefer online meetings than in-person
              </p>
            </div>
          </div>
        </div>
        <div className="space-x-4 items-center flex-grow flex flex-row">
          <TagInput
            tags={selectedLocations}
            setTags={(newTags) => {
              setSelectedLocations(newTags);
            }}
            placeholder="Locations"
            styleClasses={{
              input: "w-[100px]",
            }}
            activeTagIndex={activeLocationIndex}
            setActiveTagIndex={setActiveLocationIndex}
            autocompleteOptions={locations}
            enableAutocomplete={true}
            restrictTagsToAutocompleteOptions={true}
          />
          <TagInput
            tags={selectedDays}
            setTags={(newTags) => {
              setSelectedDays(newTags);
            }}
            placeholder="Days"
            styleClasses={{
              input: "w-[100px]",
            }}
            activeTagIndex={activeDayIndex}
            setActiveTagIndex={setActiveDayIndex}
            autocompleteOptions={days}
            enableAutocomplete={true}
            restrictTagsToAutocompleteOptions={true}
          />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row space-x-2 max-w-full">
        <Button className="flex-grow my-2">Search</Button>
        <Button variant="outline" className="flex-grow my-2">
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
