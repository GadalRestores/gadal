import { Check } from "lucide-react";
import { benefits } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Why Gadal Restores"
        title="Built on results you can see at night."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <Reveal key={benefit.title} delay={(i % 3) * 80} className="bg-background">
            <div className="group h-full p-8 transition-colors duration-500 hover:bg-surface">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-primary transition-transform duration-500 group-hover:scale-110">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
