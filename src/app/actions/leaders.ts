"use server";

import { Leader } from "@/lib/types/leader";
import { createClient } from "@/utils/supabase/server";

// Global server-side cache with timestamp
let leadersCache: {
  data: Leader[] | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

// Cache duration (24 hours in milliseconds)
const CACHE_DURATION = 24 * 60 * 60 * 1000;

// Background revalidation flag to avoid concurrent updates
let isRevalidating = false;

/**
 * Fetches leaders from Supabase only when needed, using server memory cache
 * to minimize database calls
 */
export async function getSupabaseLeaders(): Promise<Leader[]> {
  const now = Date.now();

  // Case 1: Cache is valid and fresh - return immediately
  if (leadersCache.data && now - leadersCache.timestamp < CACHE_DURATION) {
    console.log("Serving leaders from server memory cache");
    return leadersCache.data;
  }

  // Case 2: Cache is expired or empty - fetch new data
  if (!isRevalidating) {
    isRevalidating = true;

    try {
      console.log("Fetching leaders from Supabase");
      const supabase = await createClient();
      const { data: leaders, error } = await supabase
        .from("leaders")
        .select()
        .eq("is_available", true);

      if (error) {
        console.error("Error fetching leaders:", error);
        // Return existing cache if available, even if expired
        isRevalidating = false;
        return leadersCache.data || [];
      }

      // Sort the leaders by name
      const sortedLeaders =
        leaders?.sort((a, b) => a.name.localeCompare(b.name)) || [];

      // Update the cache with new data and timestamp
      leadersCache = {
        data: sortedLeaders,
        timestamp: now,
      };

      isRevalidating = false;
      return sortedLeaders;
    } catch (e) {
      isRevalidating = false;
      console.error("Error during leaders fetch:", e);
      // Fallback to existing cache or empty array
      return leadersCache.data || [];
    }
  } else {
    // Return existing cache while revalidation is in progress
    return leadersCache.data || [];
  }
}

/**
 * Gets filtered leaders based on search parameters
 */
export async function getLeaders({
  online,
  locations,
  days,
}: {
  online?: boolean;
  locations?: string[];
  days?: string[];
} = {}): Promise<Leader[]> {
  const groupLeaders = await getSupabaseLeaders();

  // If no filters are applied, return all leaders
  if (online === undefined && !locations?.length && !days?.length) {
    return groupLeaders;
  }

  // Filter leaders based on the provided conditions
  return groupLeaders.filter((leader) => {
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

  const groupLeaders = await getSupabaseLeaders();
  return groupLeaders.find((leader) => leader.id.toString() === id);
}

// Optional: Function to manually invalidate cache if needed
export async function invalidateLeadersCache() {
  leadersCache = {
    data: null,
    timestamp: 0,
  };
}
