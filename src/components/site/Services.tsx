import { ArrowUpRight, Lightbulb, CloudFog, BadgeCheck } from "lucide-react";
import { services } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";

const icons = {
  headlight: Lightbulb,
  fog: CloudFog,
  emblem: BadgeCheck,
} as const;

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="What We Restore"
        title="Three specialties. Done properly."
        description="We don't do everything — we do lens and trim restoration, and we do it with a full sanding and polishing process on every job."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.title} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[var(--shadow-luxe)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  {service.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
