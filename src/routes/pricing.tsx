import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Pricing } from "@/components/site/Pricing";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Pricing | Gadal Restores Headlight Restoration";
const description =
  "Straightforward mobile headlight restoration pricing from $100, plus add-ons for foglights, emblems and tail lights.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-24">
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  );
}
