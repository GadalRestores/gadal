import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Reviews } from "@/components/site/Reviews";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Reviews | Gadal Restores Mobile Headlight Restoration";
const description =
  "Read real 5-star Google reviews from Gadal Restores customers across Lower Bucks County, Philadelphia and South Jersey.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-24">
        <Reviews />
      </main>
      <SiteFooter />
    </div>
  );
}
