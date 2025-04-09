"use client";

import { questions } from "@/lib/data/questions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function QuestionsHero() {
  return (
    <div className="relative flex flex-col bg-pcfcwhite ">
      <div className="absolute inset-0 z-1 bg-[url(/white-bg.png)] opacity-30 pointer-events-none" />
      <div className="flex z-2 flex-col space-y-12 items-center text-pcfcprimary font-subheading mt-16 mb-24">
        <h1 className="text-4xl">I HAVE QUESTIONS</h1>
        <Accordion type="single" collapsible className="w-[75%] z-2">
          {questions.map((question) => (
            <div key={question.title}>
              <AccordionItem value={question.title}>
                <AccordionTrigger className="py-4  text-2xl md:text-2xl">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-caption md:mt-4 md:text-xl">
                  {question.description}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
