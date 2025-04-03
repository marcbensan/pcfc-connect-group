"use client";

import { Tag, TagInput } from "emblor";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

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
  const [selectedDays, setSelectedDays] = useState<Tag[]>([]);
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<Tag[]>([]);
  const [activeLocationIndex, setActiveLocationIndex] = useState<number | null>(
    null
  );
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const locationsId = selectedLocations
      .map((location) => location.text)
      .join(",");
    const daysId = selectedDays.map((day) => day.text).join(",");
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
    console.log(query);
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
    <div className="border w-full md:max-w-[45rem] rounded-2xl p-4 bg-white shadow-md">
      <h1 className="text-xl font-semibold">Find a Group</h1>
      <hr className="my-4" />
      <div className="flex flex-col md:flex-row w-full md:items-center space-y-8 md:space-y-0 py-4 md:justify-between">
        <div className="items-center w-full ">
          <div className="flex space-x-2">
            <Checkbox
              checked={isOnline}
              onCheckedChange={handleOnlineClick}
              id="online"
            />
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
        <div className="space-x-4 items-center flex flex-grow flex-row">
          <div className={`${isOnline ? "hidden" : ""}`}>
            <TagInput
              tags={selectedLocations}
              setTags={(newTags) => {
                setSelectedLocations(newTags);
              }}
              placeholder="Locations"
              styleClasses={{
                input: "w-32 outline-none",
                tagPopover: {
                  popoverTrigger: "hidden",
                  popoverContent: "outline-none hidden",
                },
                autoComplete: {
                  popoverContent: "w-12 p-2",
                  popoverTrigger: "mx-2 cursor-pointer",
                },
              }}
              activeTagIndex={activeLocationIndex}
              setActiveTagIndex={setActiveLocationIndex}
              autocompleteOptions={locations}
              enableAutocomplete={true}
              usePopoverForTags={true}
              restrictTagsToAutocompleteOptions={true}
            />
          </div>
          <div className={`${isOnline && "w-40"}`}>
            <TagInput
              tags={selectedDays}
              setTags={(newTags) => {
                setSelectedDays(newTags);
              }}
              placeholder="Days"
              styleClasses={{
                input: "w-28 outline-none",
                inlineTagsContainer: "w-32",
                tagPopover: {
                  popoverTrigger: "hidden",
                  popoverContent: "outline-none hidden",
                },
                autoComplete: {
                  popoverContent: "w-24 p-2",
                  popoverTrigger: "mx-2 cursor-pointer",
                },
              }}
              activeTagIndex={activeDayIndex}
              setActiveTagIndex={setActiveDayIndex}
              autocompleteOptions={days}
              enableAutocomplete={true}
              usePopoverForTags={true}
              restrictTagsToAutocompleteOptions={true}
            />
          </div>
        </div>
      </div>
      <hr className="my-4" />
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
