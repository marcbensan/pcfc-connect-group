"use server";

import { Leader } from "@/lib/types/leader";
import { createClient } from "@/utils/supabase/server";

export async function getSupabaseLeaders() {
  const supabase = await createClient();
  const { data: leaders, error } = await supabase.from("leaders").select();

  if (error) {
    console.error(error);
  }

  return leaders;
}

export async function getLeaders({
  online,
  locations,
  days,
}: {
  online: boolean | undefined;
  locations: string[] | undefined;
  days: string[] | undefined;
}): Promise<Leader[] | undefined> {
  const groupLeaders = await getSupabaseLeaders();

  // Filter leaders based on the provided conditions
  const filteredLeaders = groupLeaders?.filter((leader) => {
    // Check online condition
    if (online !== undefined && leader.isOnline !== online) {
      return false;
    }

    // Check locations condition
    if (
      locations &&
      !locations.some(
        (location) => leader.location.toLowerCase() === location.toLowerCase()
      )
    ) {
      return false;
    }

    // Check days condition
    if (
      days &&
      !days.some((day) => {
        const normalizedDay = day.toLowerCase();
        const leaderDay = leader.day.toLowerCase();

        // Check for exact match
        if (leaderDay === normalizedDay) {
          return true;
        }

        // Check for "weekdays" match
        const weekdays = [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
        ];
        if (weekdays.includes(normalizedDay) && leaderDay === "weekdays") {
          return true;
        }

        // Check for "weekends" match
        const weekends = ["saturday", "sunday"];
        if (weekends.includes(normalizedDay) && leaderDay === "weekends") {
          return true;
        }

        return false;
      })
    ) {
      return false;
    }

    return true; // Include the leader if all conditions pass
  });

  return filteredLeaders;
}

export async function getLeader(id: string | undefined) {
  const groupLeaders = await getSupabaseLeaders();
  console.log(groupLeaders);
  const leader: Leader | undefined = groupLeaders?.find(
    (leader) => leader.id.toString() === id
  );

  return leader;
}
