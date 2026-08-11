import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { PromiseStrip } from "@/components/site/PromiseStrip";
import { Results } from "@/components/site/Results";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { SiteFooter } from "@/components/site/SiteFooter";
import { business, faqs } from "@/content/site";


const title = "Gadal Restores | Mobile Headlight Restoration in Bucks County & Philly";
const description =
  "Professional mobile headlight restoration in Lower Bucks County, Philadelphia and South Jersey. Multi-stage sanding and polishing from $100 — not wipe-on coatings.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: business.name,
          description,
          telephone: business.phone,
          email: business.email,
          areaServed: business.serviceAreas,
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "19:00",
            },
          ],
          sameAs: [business.social.facebook.url, business.social.instagram.url],
        }),
      },
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <PromiseStrip />
        <Results />
        <Process />
        <WhyUs />
        <Reviews />

      </main>
      <SiteFooter />
    </div>
  );
}
