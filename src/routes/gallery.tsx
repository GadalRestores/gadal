import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PhotoGallery } from "@/components/site/PhotoGallery";

const title = "Photo Gallery | Gadal Restores Headlight Restoration";
const description =
  "Browse a full gallery of real headlight restoration before and after photos from Gadal Restores in Bucks County, Philadelphia and South Jersey.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-24">
        <PhotoGallery />
      </main>
      <SiteFooter />
    </div>
  );
}
