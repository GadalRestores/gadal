import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { business, navLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/gadal-logo.png"
                alt=""
                loading="lazy"
                width={64}
                height={64}
                className="h-20 w-20 object-contain"
              />
              <span className="font-display text-base font-bold uppercase tracking-[0.18em]">
                Gadal <span className="text-primary">Restores</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Mobile headlight, foglight and emblem restoration using a professional multi-stage
              sanding and polishing process.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={business.social.facebook.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={business.social.instagram.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-primary">
              Navigate
            </h2>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#quote"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Quote
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-primary">
              Contact
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={business.phoneHref} className="hover:text-foreground">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="break-all hover:text-foreground">
                  {business.email}
                </a>
              </li>
              {business.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-primary">Hours</h2>
            <p className="mt-5 text-sm text-muted-foreground">{business.hours.days}</p>
            <p className="text-sm font-medium text-foreground">{business.hours.time}</p>
            <a
              href="#quote"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Get a free quote
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
