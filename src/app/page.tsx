import ForYouHero from "@/components/for-you";
import InformationHero from "@/components/information";
import MainHero from "@/components/main-hero";

export default async function Home({}) {
  return (
    <>
      <MainHero />
      <InformationHero />
      <ForYouHero />
    </>
  );
}
