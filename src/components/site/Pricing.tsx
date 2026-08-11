import { pricing } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-28 border-y border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward pricing, no surprises."
          description="Prices cover a complete multi-stage restoration of both headlights, including UV sealing."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={`${tier.vehicle}-${tier.year}`} delay={i * 80}>
              <div
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5",
                  tier.featured
                    ? "border-primary/60 bg-primary/[0.07] shadow-[var(--glow-primary)]"
                    : "border-border bg-background/60 hover:border-primary/40",
                )}
              >
                {tier.featured ? (
                  <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Most Booked
                  </span>
                ) : null}
                <p className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {tier.vehicle}
                </p>
                <p className="mt-1 text-lg font-semibold">{tier.year}</p>
                <p className="mt-7 font-display text-5xl font-bold text-primary">${tier.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">Full headlight restoration</p>
                <a
                  href="/contact"
                  className={cn(
                    "mt-8 rounded-full px-5 py-3 text-center font-display text-xs font-bold uppercase tracking-wider transition-transform duration-300 hover:scale-[1.03]",
                    tier.featured
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  Book this
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="grid gap-6 rounded-3xl border border-border bg-background/60 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-display text-sm uppercase tracking-[0.22em] text-primary">
                Additional Services
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {pricing.addOns.map((add) => (
                  <li
                    key={add.label}
                    className="flex items-baseline justify-between gap-3 border-b border-border pb-3"
                  >
                    <span className="text-sm text-muted-foreground">{add.label}</span>
                    <span className="font-display text-lg font-bold">{add.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:border-l lg:border-border lg:pl-8">
              <p className="max-w-xs text-sm text-muted-foreground">
                Not sure which tier fits your vehicle? Send a photo and we'll price it exactly.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Request a custom quote
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
