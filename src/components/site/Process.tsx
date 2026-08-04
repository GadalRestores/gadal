import processImage from "@/assets/process-sanding.jpg";
import { processSteps } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";
import { useReveal } from "@/hooks/use-reveal";

export function Process() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.05);

  return (
    <section
      id="process"
      className="relative scroll-mt-28 border-y border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="Six stages. No shortcuts."
          description="This is what separates a real restoration from a wipe-on product that fades in a few months."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div ref={ref} className="relative pl-10">
            <div className="absolute bottom-2 left-[15px] top-2 w-px bg-border" aria-hidden="true" />
            <div
              className="absolute left-[15px] top-2 w-px origin-top bg-primary transition-transform duration-[1600ms] ease-out"
              style={{ bottom: "0.5rem", transform: `scaleY(${shown ? 1 : 0})` }}
              aria-hidden="true"
            />
            <ol className="space-y-9">
              {processSteps.map((step, i) => (
                <li key={step.step} className="relative">
                  <span
                    className="absolute -left-10 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background font-display text-xs font-bold text-primary transition-all duration-700"
                    style={{
                      transitionDelay: `${i * 160}ms`,
                      opacity: shown ? 1 : 0.25,
                      transform: shown ? "scale(1)" : "scale(0.75)",
                    }}
                  >
                    {step.step}
                  </span>
                  <Reveal delay={i * 90}>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal className="lg:sticky lg:top-28">
            <img
              src={processImage}
              alt="Technician wet sanding a headlight lens during a multi-stage restoration"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-luxe)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
