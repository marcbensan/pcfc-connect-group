"use client";

import { Tag, TagInput } from "emblor";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MultiSelect } from "./ui/multi-select";
import { MultiselectOption } from "@/lib/types/filters";

const days: MultiselectOption[] = [
  { label: "Sunday", value: "sunday" },
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
];

const locations: MultiselectOption[] = [
  { label: "Church", value: "church" },
  { label: "Home-based", value: "home-based" },
];

export default function SearchFilters() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [activeLocationIndex, setActiveLocationIndex] = useState<number | null>(
    null
  );
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const locationsId = selectedLocations.map((location) => location).join(",");
    const daysId = selectedDays.map((day) => day).join(",");
    let query = "";
    if (isOnline !== null) {
      query += `?online=${isOnline}`;
    }
    if (locationsId) {
      query += `&locations=${locationsId}`;
    }
    if (daysId) {
      query += `&days=${daysId}`;
    }
    router.push(query);
  }

  function handleOnlineClick() {
    setIsOnline(!isOnline);
    setSelectedLocations([]);
  }

  function handleClearFilters() {
    setIsOnline(false);
    setSelectedDays([]);
    setSelectedLocations([]);
    router.push("/");
  }

  return (
    <div className=" md:w-[45rem] w-[20rem] rounded-2xl p-4 bg-orange-300 shadow-md ">
      <div className="flex flex-col md:flex-row w-full md:items-center space-y-8 md:space-y-0 py-2 md:justify-between">
        <div className="items-center w-full ">
          <div className="flex space-x-2">
            <Checkbox
              checked={isOnline}
              onCheckedChange={handleOnlineClick}
              id="online"
              className="border-blue-900"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="online"
                className="text-md font-medium text-blue-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                ONLINE
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-4 items-start flex-grow flex w-full flex-col">
          <div className={`${isOnline ? "hidden" : ""} w-full`}>
            <MultiSelect
              options={locations}
              onValueChange={setSelectedLocations}
              defaultValue={selectedLocations}
              placeholder="Select Location"
              variant="default"
              animation={0}
            />
          </div>
          <div className="w-full">
            <MultiSelect
              options={days}
              onValueChange={setSelectedDays}
              defaultValue={selectedDays}
              placeholder="Select Days"
              variant="default"
              animation={0}
            />
          </div>
        </div>
      </div>
      <hr className="h-px my-4 bg-orange-400 border-0" />
      <div className="flex flex-row space-x-2 max-w-full">
        <Button
          onClick={handleSearch}
          className="flex-grow my-2 bg-blue-900 hover:bg-blue-950"
        >
          Search
        </Button>
        <Button
          onClick={handleClearFilters}
          variant="outline"
          className="flex-grow my-2"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
