import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Services | Gadal Restores Mobile Headlight Restoration";
const description =
  "Headlight, foglight and emblem restoration done with a full multi-stage sanding and polishing process — mobile across Bucks County, Philadelphia and South Jersey.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-24">
        <Services />
      </main>
      <SiteFooter />
    </div>
  );
}
