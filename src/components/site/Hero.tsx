import { ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-headlight.jpg";
import logo from "@/assets/gadal-logo.png";
import { business, trustBadges } from "@/content/site";

/**
 * To use a 4K background video later, drop the file in /public and swap the
 * <img> below for a <video autoPlay muted loop playsInline poster={heroImage}>.
 */
export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Restored headlight glowing on a dark vehicle at night"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_10%,transparent,oklch(0.13_0.008_150/0.72)_45%,oklch(0.13_0.008_150)_88%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-36 text-center lg:px-8">
        <img
          src={logo}
          alt={`${business.name} logo`}
          width={112}
          height={112}
          className="mx-auto h-20 w-20 object-contain drop-shadow-[0_0_28px_oklch(0.85_0.23_130/0.45)] sm:h-28 sm:w-28"
        />
        <h1 className="mt-8 text-balance font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Clarity Restored, <span className="text-primary">Safety Secured.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          {business.subheadline}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#quote"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--glow-primary)] transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
          >
            Get A Free Instant Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#results"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-colors duration-300 hover:border-primary hover:text-primary sm:w-auto"
          >
            View Our Results
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground sm:text-sm"
            >
              <Check className="h-4 w-4 text-primary" aria-hidden="true" />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
