"use client";

import { MultiselectOption } from "@/lib/types/filters";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { MultiSelect } from "./ui/multi-select";
import { Switch } from "./ui/switch";

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
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

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
    router.push("/leaders");
  }

  return (
    <div className=" md:w-[45rem] w-[20rem] font-caption text-pcfcprimary rounded-2xl p-4 md:p-6 bg-pcfcsecondary shadow-md ">
      <div className="flex flex-col w-full md:items-center space-y-8 md:space-y-0 py-2 md:justify-between">
        <div className="items-center w-full ">
          <div className="flex space-x-2 items-center md:mb-8">
            <Switch
              checked={isOnline}
              onCheckedChange={handleOnlineClick}
              id="online"
            />
          </div>
        </div>
        <div className="space-y-4 items-start flex-grow flex w-full flex-col md:flex-row md:space-x-4">
          <div className={`w-full ${!isOnline ? "md:w-full" : "md:w-1/2"}`}>
            <MultiSelect
              options={days}
              onValueChange={setSelectedDays}
              defaultValue={selectedDays}
              placeholder="Days"
              variant="default"
              animation={0}
            />
          </div>
          <div className={`${isOnline ? "hidden" : ""} w-full`}>
            <MultiSelect
              options={locations}
              onValueChange={setSelectedLocations}
              defaultValue={selectedLocations}
              placeholder="Locations"
              variant="default"
              animation={0}
            />
          </div>
        </div>
      </div>
      <hr className="h-px my-4 bg-pcfctertiary border-1 border-pcfctertiary" />
      <div className="flex flex-row space-x-2 max-w-full">
        <Button
          onClick={handleSearch}
          className="flex-grow my-2 text-md rounded-full bg-pcfcprimary text-pcfcwhite hover:bg-blue-950"
        >
          Search
        </Button>
        <Button
          onClick={handleClearFilters}
          variant="secondary"
          className="w-1/2 my-2 text-md bg-pcfcwhite rounded-full"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
