import { ExpandableCard } from "@/components/cards";
import SearchFilters from "@/components/filters";
import { getLeaders } from "./actions/leaders";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { online, locations, days } = await searchParams;
  const onlineValue = online ? online : undefined;
  let onlineBool = undefined;

  if (onlineValue !== undefined) onlineBool = onlineValue === "true";

  const locationsValue = locations
    ? (locations as string).split(",")
    : undefined;
  const daysValue = days ? (days as string).split(",") : undefined;

  const leaders = await getLeaders({
    online: onlineBool,
    locations: locationsValue,
    days: daysValue,
  });

  return (
    <div className="flex flex-col items-center space-y-12 md:my-12">
      <SearchFilters />
      <ExpandableCard leaders={leaders} />
    </div>
  );
}
