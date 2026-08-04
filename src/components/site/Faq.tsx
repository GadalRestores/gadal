import { faqs } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-28 border-y border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Answers before you book." />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-background/60 px-6 transition-colors duration-300 hover:border-primary/40"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
