import { ExpandableCard } from "@/components/cards";
import SearchFilters from "@/components/filters";
import { getLeaders } from "./actions/leaders";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Parse query parameters using URLSearchParams
  const online = Boolean(searchParams?.online);
  const locations = searchParams?.locations
    ? (searchParams.locations as string).split(",")
    : undefined;
  const days = searchParams?.days
    ? (searchParams.days as string).split(",")
    : undefined;

  const leaders = await getLeaders({ online, locations, days });

  return (
    <div className="flex flex-col items-center space-y-12 mx-2 my-12 md:my-24">
      <SearchFilters />
      <ExpandableCard leaders={leaders} />
    </div>
  );
}
