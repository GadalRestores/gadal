import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { business } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Mobile service, straight to your driveway."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <a
            href={business.phoneHref}
            className="flex h-full flex-col rounded-3xl border border-border bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
          >
            <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
            <p className="mt-1 font-display text-lg font-semibold">{business.phone}</p>
          </a>
        </Reveal>
        <Reveal delay={80}>
          <a
            href={`mailto:${business.email}`}
            className="flex h-full flex-col rounded-3xl border border-border bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
          >
            <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <p className="mt-1 break-all font-display text-base font-semibold">{business.email}</p>
          </a>
        </Reveal>
        <Reveal delay={160}>
          <div className="flex h-full flex-col rounded-3xl border border-border bg-surface/50 p-7">
            <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
              Service Area
            </p>
            <ul className="mt-1 space-y-0.5 text-sm font-medium">
              {business.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex h-full flex-col rounded-3xl border border-border bg-surface/50 p-7">
            <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Hours</p>
            <p className="mt-1 text-sm font-medium">{business.hours.days}</p>
            <p className="text-sm font-medium text-primary">{business.hours.time}</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-surface/50 p-7 sm:flex-row">
          <p className="text-sm text-muted-foreground">Follow the latest restorations</p>
          <div className="flex items-center gap-3">
            <a
              href={business.social.facebook.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
              {business.social.facebook.label}
            </a>
            <a
              href={business.social.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              {business.social.instagram.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
