"use server";

import connectDB from "@/lib/db";
import leadersModel from "@/lib/models/leadersModel";
import { Leader } from "@/lib/types/leader";

export async function getAllLeaders() {
  await connectDB();
  try {
    const leaders = await leadersModel.find().exec();
    const parsed = JSON.parse(JSON.stringify(leaders));
    return parsed;
  } catch (err) {
    console.error("Error fetching leaders:", err);
    return [];
  }
}

export async function getLeaders() {
  await connectDB();
  try {
    const leaders = await leadersModel.find({ is_available: true }).exec();
    const parsed = JSON.parse(JSON.stringify(leaders));
    return parsed;
  } catch (err) {
    console.error("Error fetching leaders:", err);
    return [];
  }
}

export async function filterLeaders({
  online,
  locations,
  days,
}: {
  online?: boolean;
  locations?: string[];
  days?: string[];
} = {}): Promise<Leader[]> {
  const groupLeaders = await getLeaders();

  // If no filters are applied, return all leaders
  if (online === undefined && !locations?.length && !days?.length) {
    return groupLeaders;
  }

  // Filter leaders based on the provided conditions
  return groupLeaders.filter((leader: Leader) => {
    // Check online condition
    if (online !== undefined && leader.isOnline !== online) {
      return false;
    }

    // Check locations condition
    if (
      locations?.length &&
      !locations.some(
        (location) => leader.location.toLowerCase() === location.toLowerCase()
      )
    ) {
      return false;
    }

    // Check days condition
    if (days?.length) {
      const matchesDay = days.some((day) => {
        const normalizedDay = day.toLowerCase();
        const leaderDay = leader.day.toLowerCase();

        // Check for exact match
        if (leaderDay === normalizedDay) {
          return true;
        }

        // Check for "weekdays" match (Monday-Friday)
        if (
          leaderDay === "weekdays" &&
          ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(
            normalizedDay
          )
        ) {
          return true;
        }

        // Check for "weekends" match (Saturday-Sunday)
        if (
          leaderDay === "weekends" &&
          ["saturday", "sunday"].includes(normalizedDay)
        ) {
          return true;
        }

        return false;
      });

      if (!matchesDay) {
        return false;
      }
    }

    return true; // Include the leader if all conditions pass
  });
}

export async function getLeader(
  id: string | undefined
): Promise<Leader | undefined> {
  if (!id) return undefined;

  const groupLeaders = await getLeaders();
  return groupLeaders.find((leader: Leader) => leader.id.toString() === id);
}
