import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { business } from "@/content/site";

const title = "Privacy Policy | Gadal Restores";
const description =
  "How Gadal Restores collects, uses and protects the information you share when requesting a mobile headlight restoration quote.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 lg:px-8">
        <Link to="/" className="text-xs uppercase tracking-widest text-primary">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This page is maintained by {business.name} and describes how we handle information you
          share with us.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
            <p className="mt-2">
              When you submit a quote request we collect the name, phone number, email address and
              ZIP code you provide, along with any message or photos you choose to send. We do not
              ask for a street address through this website.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
            <p className="mt-2">
              Your details are used only to respond to your request, provide a price, schedule
              service and follow up about the work. We do not sell or rent your information.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Photos you send</h2>
            <p className="mt-2">
              Photos are used to assess lens condition and quote accurately. If we would like to
              feature a before-and-after image publicly, we will ask you first.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact preferences</h2>
            <p className="mt-2">
              We contact you by phone, text or email using the details you supply. You can ask us to
              stop contacting you at any time.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Questions</h2>
            <p className="mt-2">
              Email{" "}
              <a href={`mailto:${business.email}`} className="text-primary">
                {business.email}
              </a>{" "}
              or call{" "}
              <a href={business.phoneHref} className="text-primary">
                {business.phone}
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
