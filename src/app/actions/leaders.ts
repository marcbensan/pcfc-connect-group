"use server";

import leadersModel, { MongooseLeader } from "@/lib/models/leadersModel";
import { Leader, NewLeader } from "@/lib/types/leader";

export async function getAllLeaders() {
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
} = {}): Promise<MongooseLeader[]> {
  const groupLeaders = await getLeaders();

  // If no filters are applied, return all leaders
  if (online === undefined && !locations?.length && !days?.length) {
    return groupLeaders;
  }

  // Filter leaders based on the provided conditions
  return groupLeaders.filter((leader: MongooseLeader) => {
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
): Promise<MongooseLeader> {
  const groupLeaders = await getAllLeaders();
  return groupLeaders.find(
    (leader: MongooseLeader) => leader.id.toString() === id
  );
}

export async function createLeader({ leader }: { leader: NewLeader }) {
  try {
    const leaderIds: number[] = [];
    const leaders = await getAllLeaders();

    leaders.forEach((leader: Leader) => {
      leaderIds.push(Number(leader.id));
    });

    const generatedId = Math.max(...leaderIds) + 1;
    await leadersModel.create({
      id: generatedId,
      name: leader.name.toString(),
      day: leader.day.toString(),
      time: leader.time.toString(),
      isOnline: leader.isOnline,
      location: leader.location.toString(),
      description: leader.description.toString(),
      img_url: leader.img_url.toString(),
      is_available: true,
    });

    return { message: "Leader created" };
  } catch (err) {
    console.error("Error fetching leaders:", err);
  }
}

export async function updateLeader({ leader }: { leader: Leader }) {
  try {
    await leadersModel.updateOne(
      { id: leader.id }, // Query to find the leader
      {
        $set: {
          name: leader.name,
          day: leader.day,
          time: leader.time,
          isOnline: leader.isOnline,
          location: leader.location,
          description: leader.description,
          img_url: leader.img_url,
          is_available: true,
        },
      }
    );
    return { message: "Leader availability updated" };
  } catch (err) {
    console.log("Update failed");
    return { message: err };
  }
}

export async function updateAvailability(leaderId: number) {
  try {
    const leader = await getLeader(leaderId.toString());
    console.log("Leader found", leader);
    const updatedLeader = await leadersModel.updateOne(
      { id: leader.id }, // Query to find the leader
      { $set: { is_available: !leader.is_available } } // Toggle the value
    );
    console.log("Update successful");

    return { message: "Leader availability updated", updatedLeader };
  } catch (err) {
    console.log("Update failed");
    return { message: err };
  }
}
