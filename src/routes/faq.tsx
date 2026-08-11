import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Faq } from "@/components/site/Faq";
import { SiteFooter } from "@/components/site/SiteFooter";
import { faqs } from "@/content/site";

const title = "FAQ | Gadal Restores Headlight Restoration";
const description =
  "Answers about how long restoration takes, how long results last, what we need on site and which areas we serve.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-24">
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
