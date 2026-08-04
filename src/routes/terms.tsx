import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { business } from "@/content/site";

const title = "Terms of Service | Gadal Restores";
const description =
  "Service terms for Gadal Restores mobile headlight, foglight and emblem restoration, including scheduling, pricing and results expectations.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 lg:px-8">
        <Link to="/" className="text-xs uppercase tracking-widest text-primary">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          These terms cover mobile restoration services provided by {business.name}.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Quotes and pricing</h2>
            <p className="mt-2">
              Prices listed on this site cover a standard multi-stage restoration. Final pricing is
              confirmed after we see the vehicle or clear photos of the lenses. Severe oxidation,
              damage or non-standard assemblies may affect the quote.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Scheduling</h2>
            <p className="mt-2">
              Appointments are scheduled by phone, text or email. Service requires a safe, legal and
              accessible place to park the vehicle with room to work around the front end.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Results</h2>
            <p className="mt-2">
              Restoration removes surface oxidation and hazing. It cannot repair internal cracking,
              moisture inside a sealed housing, damaged reflectors or failed bulbs. We will tell you
              in advance when a lens cannot be fully corrected.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Payment and cancellation</h2>
            <p className="mt-2">
              Payment is due on completion. Please give as much notice as possible if you need to
              cancel or reschedule.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Call{" "}
              <a href={business.phoneHref} className="text-primary">
                {business.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${business.email}`} className="text-primary">
                {business.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
