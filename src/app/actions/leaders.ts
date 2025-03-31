"use server";

import { Leader } from "@/lib/types/leader";

// export async function getLeaders({
//   online,
//   locations,
//   days,
// }: {
//   online: boolean | undefined;
//   locations: string[] | undefined;
//   days: string[] | undefined;
// }): Promise<Leader[]> {
//   const groupLeaders: Leader[] = [
//     {
//       name: "Rose Carandang",
//       day: "Saturday",
//       time: "2:00 PM",
//       isOnline: false,
//       location: "Church",
//       description:
//         "Join Rose's Saturday group at the church for fellowship and spiritual growth in a welcoming community.",
//     },
//     {
//       name: "Juliet Guinto",
//       day: "Thursday",
//       time: "Evening",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Connect with Juliet's Thursday evening online group for meaningful discussions and encouragement.",
//     },
//     {
//       name: "Jasmin Gines-Japa",
//       day: "Wednesday",
//       time: "7:30 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Be part of Jasmin's midweek fellowship to recharge and grow in faith with others.",
//     },
//     {
//       name: "Joy Manlupig",
//       day: "Sunday",
//       time: "After Service",
//       isOnline: false,
//       location: "Church",
//       description:
//         "Join Joy's Sunday group after service for deeper connections and spiritual insights.",
//     },
//     {
//       name: "Jojo Tagarda",
//       day: "Sunday",
//       time: "After Service",
//       isOnline: false,
//       location: "Church",
//       description:
//         "Connect with Jojo's Sunday group to build relationships and grow in your walk with God.",
//     },
//     {
//       name: "Jocelyn Bensan",
//       day: "Weekdays",
//       time: "Afternoon",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Join Jocelyn's weekday afternoon online group for encouragement and fellowship.",
//     },
//     {
//       name: "Riza Dizon",
//       day: "Sunday",
//       time: "3:00 PM",
//       isOnline: false,
//       location: "Home-based",
//       description:
//         "Be part of Riza's Sunday afternoon group for a warm, home-based fellowship experience.",
//     },
//     {
//       name: "Omer Dizon",
//       day: "Saturday",
//       time: "9:00 PM",
//       isOnline: false,
//       location: "Home-based",
//       description:
//         "Join Omer's late Saturday evening group for meaningful discussions in a relaxed setting.",
//     },
//     {
//       name: "Juvy Kalaw",
//       day: "Friday",
//       time: "8:30 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Connect with Juvy's Friday night online group for encouragement and spiritual growth.",
//     },
//     {
//       name: "Gerry Kalaw",
//       day: "Saturday",
//       time: "7:30 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Join Gerry's Saturday evening online group for fellowship and inspiring discussions.",
//     },
//     {
//       name: "Cyrus Gonzalo",
//       day: "Saturday",
//       time: "Afternoon",
//       isOnline: false,
//       location: "Home-based",
//       description:
//         "Be part of Cyrus's Saturday afternoon group for a home-based fellowship experience.",
//     },
//     {
//       name: "Lourdes Galaang",
//       day: "Tuesday",
//       time: "7:30 PM",
//       isOnline: true,
//       location: "Virtual",
//       description:
//         "Join Lourdes's Tuesday evening virtual group for encouragement and spiritual growth.",
//     },
//     {
//       name: "Rodel Valledor",
//       day: "Friday",
//       time: "7:30 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Connect with Rodel's Friday evening online group for fellowship and faith-building discussions.",
//     },
//     {
//       name: "Mark Namnama",
//       day: "Friday",
//       time: "7:00 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Join Mark's Friday evening online group to grow in faith and connect with others.",
//     },
//     {
//       name: "Jamil Namnama",
//       day: "Weekdays",
//       time: "Evening",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Be part of Jamil's weekday evening online group for encouragement and spiritual growth.",
//     },
//     {
//       name: "May Soriano",
//       day: "Saturday",
//       time: "6:00 PM",
//       isOnline: false,
//       location: "Home-based",
//       description:
//         "Join May's Saturday evening group for a warm, home-based fellowship experience.",
//     },
//     {
//       name: "Kheana Quiddaeon",
//       day: "Thursday",
//       time: "7:00 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Connect with Kheana's Thursday evening online group for encouragement and spiritual growth.",
//     },
//     {
//       name: "Maery Bagay",
//       day: "Saturday",
//       time: "7:30 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Join Maery's Saturday evening online group for fellowship and inspiring discussions.",
//     },
//     {
//       name: "Venna Domingsil",
//       day: "Weekdays",
//       time: "Evening",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Be part of Venna's weekday evening online group for encouragement and spiritual growth.",
//     },
//     {
//       name: "Paz Virrey",
//       day: "Thursday",
//       time: "8:00 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Join Paz's Thursday evening online group for fellowship and faith-building discussions.",
//     },
//     {
//       name: "Allan Virrey",
//       day: "Thursday",
//       time: "8:00 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Connect with Allan's Thursday evening online group for encouragement and spiritual growth.",
//     },
//     {
//       name: "Stanley Esquierdo",
//       day: "Tuesday",
//       time: "7:00 PM",
//       isOnline: true,
//       location: "Discord",
//       description:
//         "Join Stanley's Tuesday evening group on Discord for fellowship and meaningful discussions.",
//     },
//     {
//       name: "Mercy Cusilit",
//       day: "Weekend",
//       time: "4:00 PM",
//       isOnline: false,
//       location: "Home-based",
//       description:
//         "Be part of Mercy's weekend afternoon group for a warm, home-based fellowship experience.",
//     },
//     {
//       name: "Via Manuel",
//       day: "Tuesday",
//       time: "7:00 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Join Via's Tuesday evening online group for encouragement and spiritual growth.",
//     },
//     {
//       name: "Jun Esquierdo",
//       day: "Friday",
//       time: "8:30 PM",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Connect with Jun's Friday night online group for fellowship and faith-building discussions.",
//     },
//     {
//       name: "Ana Mae Duca",
//       day: "Weekdays",
//       time: "Morning",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Join Ana Mae's weekday morning online group for encouragement and spiritual growth.",
//     },
//     {
//       name: "Wilma Aurellio",
//       day: "Weekdays",
//       time: "Evening",
//       isOnline: true,
//       location: "Zoom",
//       description:
//         "Be part of Wilma's weekday evening online group for fellowship and inspiring discussions.",
//     },
//     {
//       name: "Reli Guiterrez",
//       day: "Saturday",
//       time: "2:00 PM",
//       isOnline: false,
//       location: "Church",
//       description:
//         "Join Reli's Saturday group at the church for fellowship and spiritual growth in a welcoming community.",
//     },
//     {
//       name: "Bong",
//       day: "Weekdays",
//       time: "Evening",
//       isOnline: true,
//       location: "Virtual",
//       description:
//         "Connect with Bong's weekday evening virtual group for encouragement and spiritual growth.",
//     },
//   ];

//   let filteredLeaders: Leader[] = [];

//   if (online === undefined && locations === undefined && days === undefined) {
//     return groupLeaders;
//   }

//   if (online === true) {
//     groupLeaders.map((leader) => {
//       if (leader.isOnline) {
//         filteredLeaders.push(leader);
//       }
//     });
//   } else if (online === false) {
//     groupLeaders.map((leader) => {
//       if (!leader.isOnline) {
//         filteredLeaders.push(leader);
//       }
//     });
//   }

//   if (locations) {
//     filteredLeaders.filter((leader) =>
//       locations.map(
//         (location) => leader.location.toLowerCase() === location.toLowerCase()
//       )
//     );
//   }

//   if (days) {
//     filteredLeaders.filter((leader) =>
//       days.map((day) => leader.day.toLowerCase() === day.toLowerCase())
//     );
//   }

//   return filteredLeaders;
// }

export async function getLeaders({
  online,
  locations,
  days,
}: {
  online: boolean | undefined;
  locations: string[] | undefined;
  days: string[] | undefined;
}): Promise<Leader[]> {
  const groupLeaders: Leader[] = [
    {
      name: "Rose Carandang",
      day: "Saturday",
      time: "2:00 PM",
      isOnline: false,
      location: "Church",
      description:
        "Join Rose's Saturday group at the church for fellowship and spiritual growth in a welcoming community.",
    },
    {
      name: "Juliet Guinto",
      day: "Thursday",
      time: "Evening",
      isOnline: true,
      location: "Zoom",
      description:
        "Connect with Juliet's Thursday evening online group for meaningful discussions and encouragement.",
    },
    {
      name: "Jasmin Gines-Japa",
      day: "Wednesday",
      time: "7:30 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Be part of Jasmin's midweek fellowship to recharge and grow in faith with others.",
    },
    {
      name: "Joy Manlupig",
      day: "Sunday",
      time: "After Service",
      isOnline: false,
      location: "Church",
      description:
        "Join Joy's Sunday group after service for deeper connections and spiritual insights.",
    },
    {
      name: "Jojo Tagarda",
      day: "Sunday",
      time: "After Service",
      isOnline: false,
      location: "Church",
      description:
        "Connect with Jojo's Sunday group to build relationships and grow in your walk with God.",
    },
    {
      name: "Jocelyn Bensan",
      day: "Weekdays",
      time: "Afternoon",
      isOnline: true,
      location: "Zoom",
      description:
        "Join Jocelyn's weekday afternoon online group for encouragement and fellowship.",
    },
    {
      name: "Riza Dizon",
      day: "Sunday",
      time: "3:00 PM",
      isOnline: false,
      location: "Home-based",
      description:
        "Be part of Riza's Sunday afternoon group for a warm, home-based fellowship experience.",
    },
    {
      name: "Omer Dizon",
      day: "Saturday",
      time: "9:00 PM",
      isOnline: false,
      location: "Home-based",
      description:
        "Join Omer's late Saturday evening group for meaningful discussions in a relaxed setting.",
    },
    {
      name: "Juvy Kalaw",
      day: "Friday",
      time: "8:30 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Connect with Juvy's Friday night online group for encouragement and spiritual growth.",
    },
    {
      name: "Gerry Kalaw",
      day: "Saturday",
      time: "7:30 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Join Gerry's Saturday evening online group for fellowship and inspiring discussions.",
    },
    {
      name: "Cyrus Gonzalo",
      day: "Saturday",
      time: "Afternoon",
      isOnline: false,
      location: "Home-based",
      description:
        "Be part of Cyrus's Saturday afternoon group for a home-based fellowship experience.",
    },
    {
      name: "Lourdes Galaang",
      day: "Tuesday",
      time: "7:30 PM",
      isOnline: true,
      location: "Virtual",
      description:
        "Join Lourdes's Tuesday evening virtual group for encouragement and spiritual growth.",
    },
    {
      name: "Rodel Valledor",
      day: "Friday",
      time: "7:30 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Connect with Rodel's Friday evening online group for fellowship and faith-building discussions.",
    },
    {
      name: "Mark Namnama",
      day: "Friday",
      time: "7:00 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Join Mark's Friday evening online group to grow in faith and connect with others.",
    },
    {
      name: "Jamil Namnama",
      day: "Weekdays",
      time: "Evening",
      isOnline: true,
      location: "Zoom",
      description:
        "Be part of Jamil's weekday evening online group for encouragement and spiritual growth.",
    },
    {
      name: "May Soriano",
      day: "Saturday",
      time: "6:00 PM",
      isOnline: false,
      location: "Home-based",
      description:
        "Join May's Saturday evening group for a warm, home-based fellowship experience.",
    },
    {
      name: "Kheana Quiddaeon",
      day: "Thursday",
      time: "7:00 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Connect with Kheana's Thursday evening online group for encouragement and spiritual growth.",
    },
    {
      name: "Maery Bagay",
      day: "Saturday",
      time: "7:30 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Join Maery's Saturday evening online group for fellowship and inspiring discussions.",
    },
    {
      name: "Venna Domingsil",
      day: "Weekdays",
      time: "Evening",
      isOnline: true,
      location: "Zoom",
      description:
        "Be part of Venna's weekday evening online group for encouragement and spiritual growth.",
    },
    {
      name: "Paz Virrey",
      day: "Thursday",
      time: "8:00 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Join Paz's Thursday evening online group for fellowship and faith-building discussions.",
    },
    {
      name: "Allan Virrey",
      day: "Thursday",
      time: "8:00 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Connect with Allan's Thursday evening online group for encouragement and spiritual growth.",
    },
    {
      name: "Stanley Esquierdo",
      day: "Tuesday",
      time: "7:00 PM",
      isOnline: true,
      location: "Discord",
      description:
        "Join Stanley's Tuesday evening group on Discord for fellowship and meaningful discussions.",
    },
    {
      name: "Mercy Cusilit",
      day: "Weekends",
      time: "4:00 PM",
      isOnline: false,
      location: "Home-based",
      description:
        "Be part of Mercy's weekend afternoon group for a warm, home-based fellowship experience.",
    },
    {
      name: "Via Manuel",
      day: "Tuesday",
      time: "7:00 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Join Via's Tuesday evening online group for encouragement and spiritual growth.",
    },
    {
      name: "Jun Esquierdo",
      day: "Friday",
      time: "8:30 PM",
      isOnline: true,
      location: "Zoom",
      description:
        "Connect with Jun's Friday night online group for fellowship and faith-building discussions.",
    },
    {
      name: "Ana Mae Duca",
      day: "Weekdays",
      time: "Morning",
      isOnline: true,
      location: "Zoom",
      description:
        "Join Ana Mae's weekday morning online group for encouragement and spiritual growth.",
    },
    {
      name: "Wilma Aurellio",
      day: "Weekdays",
      time: "Evening",
      isOnline: true,
      location: "Zoom",
      description:
        "Be part of Wilma's weekday evening online group for fellowship and inspiring discussions.",
    },
    {
      name: "Reli Guiterrez",
      day: "Saturday",
      time: "2:00 PM",
      isOnline: false,
      location: "Church",
      description:
        "Join Reli's Saturday group at the church for fellowship and spiritual growth in a welcoming community.",
    },
    {
      name: "Bong",
      day: "Weekdays",
      time: "Evening",
      isOnline: true,
      location: "Virtual",
      description:
        "Connect with Bong's weekday evening virtual group for encouragement and spiritual growth.",
    },
  ];

  console.log(online, locations, days);

  // Filter leaders based on the provided conditions
  const filteredLeaders = groupLeaders.filter((leader) => {
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
