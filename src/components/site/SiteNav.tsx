import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { business, navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass py-2 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]" : "py-5",
      )}
    >
      <div className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${business.name} home`}>
          <img
            src="/gadal-logo.png"
            alt=""
            width={72}
            height={72}
            className={cn(
              "transition-all duration-500",
              scrolled ? "h-16 w-16" : "h-20 w-20",
              "object-contain",
            )}
          />
          <span
            className={cn(
              "font-display font-bold uppercase tracking-[0.18em] transition-all duration-500",
              scrolled ? "text-sm" : "text-base",
            )}
          >
            Gadal <span className="text-primary">Restores</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary lg:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {business.phone}
          </a>
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-[var(--glow-primary)] transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary xl:hidden"
          >
            
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-background px-6 pb-10 pt-24 backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <NavItem
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                className="animate-fade-in border-b border-border/60 py-4 font-display text-2xl font-semibold uppercase tracking-wide"
              >
                {link.label}
              </NavItem>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-full bg-primary px-6 py-4 text-center font-display text-base font-bold uppercase tracking-wide text-primary-foreground"
          >
            I Want My Headlights Restored
          </Link>
          <a
            href={business.phoneHref}
            className="mt-4 text-center text-sm text-muted-foreground"
          >
            Call {business.phone}
          </a>
        </div>
      ) : null}
    </header>
  );
}

function NavItem({
  href,
  className,
  onClick,
  style,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const isHash = href.startsWith("/#");
  return (
    <Link
      to={(isHash ? "/" : href) as "/"}
      hash={isHash ? href.slice(2) : undefined}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </Link>
  );
}
