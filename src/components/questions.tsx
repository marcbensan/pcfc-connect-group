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
    <div className="relative flex flex-col items-center justify-center bg-pcfcwhite ">
      <div className="absolute inset-0 z-0 bg-[url(/white-bg.png)] opacity-30 pointer-events-none" />
      <div className="md:w-[50%] w-[80%] z-1">
        <div className="flex z-2 flex-col space-y-12 items-center text-pcfcprimary font-subheading mt-16 mb-24">
          <h1 className="text-4xl md:text-5xl">I HAVE QUESTIONS</h1>
          <Accordion type="single" collapsible className="z-2 w-full">
            {questions.map((question) => (
              <div key={question.title}>
                <AccordionItem value={question.title}>
                  <AccordionTrigger className="py-4 text-xl md:text-3xl">
                    {question.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-caption md:text-lg">
                    {question.description}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
