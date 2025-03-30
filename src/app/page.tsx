import { ExpandableCard } from "@/components/cards";
import SearchFilters from "@/components/filters";
import { getLeaders } from "./actions/leaders";

export default async function Home() {
  const leaders = await getLeaders();
  return (
    <div className="flex flex-col items-center space-y-12 mx-2 my-12 md:my-24">
      <SearchFilters />
      <ExpandableCard leaders={leaders} />;
    </div>
  );
}
