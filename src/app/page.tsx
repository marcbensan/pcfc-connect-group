import ForYouHero from "@/components/for-you";
import InformationHero from "@/components/information";
import MainHero from "@/components/main-hero";
import QuestionsHero from "@/components/questions";

export default async function Home({}) {
  return (
    <>
      <MainHero />
      <InformationHero />
      <ForYouHero />
      <QuestionsHero />
    </>
  );
}
