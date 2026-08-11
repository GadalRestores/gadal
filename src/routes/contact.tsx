import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Contact & Free Quote | Gadal Restores";
const description =
  "Request a free instant quote for mobile headlight, foglight or emblem restoration in Lower Bucks County, Philadelphia and South Jersey.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-24">
        <QuoteForm />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
