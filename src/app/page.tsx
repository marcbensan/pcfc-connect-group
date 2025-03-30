import { ExpandableCard } from "@/components/cards";
import SearchFilters from "@/components/filters";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12 mx-2 my-12 md:my-24">
      <SearchFilters />
      <hr />
      <ExpandableCard />;
    </div>
  );
}
