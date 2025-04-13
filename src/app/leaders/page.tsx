import { getLeaders } from "@/app/actions/leaders";
import { ExpandableCard } from "@/components/cards";
import SearchFilters from "@/components/filters";
import Image from "next/image";

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
    <div className="flex flex-col w-full items-center px-8 justify-center space-y-12 mt-12 mb-20 md:my-12">
      <div className="flex flex-col text-center">
        <h1 className="font-subheading text-4xl text-pcfcwhite">FIND A</h1>
        <Image
          src="/CONNECT.png"
          width={250}
          height={100}
          alt="group"
          className="mt-[-2.3rem] mb-[-3rem]"
        />
      </div>
      <SearchFilters />
      <ExpandableCard leaders={leaders} />
    </div>
  );
}
