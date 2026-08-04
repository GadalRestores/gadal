import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Check, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { business } from "@/content/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9()+\-.\s]+$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  zip: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "Enter a 5-digit ZIP code"),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof quoteSchema>, string>>;

const fields = [
  { name: "firstName", label: "First Name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last Name", type: "text", autoComplete: "family-name" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { name: "zip", label: "ZIP Code", type: "text", autoComplete: "postal-code" },
] as const;

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [photos, setPhotos] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = quoteSchema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    const v = parsed.data;
    const body = [
      `Name: ${v.firstName} ${v.lastName}`,
      `Phone: ${v.phone}`,
      `Email: ${v.email}`,
      `ZIP: ${v.zip}`,
      `Photos ready to attach: ${photos.length}`,
      "",
      v.message ? `Message: ${v.message}` : "Message: (none)",
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      `Quote request — ${v.firstName} ${v.lastName}`,
    )}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      form.reset();
      setPhotos([]);
      toast.success("Quote request ready to send — attach your photos and hit send.");
    }, 700);
  }

  return (
    <section
      id="quote"
      className="relative scroll-mt-28 overflow-hidden py-24 lg:py-32"
      aria-labelledby="quote-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Free Instant Quote</p>
          <h2 id="quote-heading" className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Tell us about your vehicle.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Send a couple of photos of your lenses and you'll get an exact price — no street address
            needed.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-[2rem] p-6 shadow-[var(--shadow-luxe)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className={field.name === "zip" ? "sm:col-span-2" : undefined}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    className={cn(
                      "w-full rounded-xl border bg-background/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary",
                      errors[field.name] ? "border-destructive" : "border-border",
                    )}
                  />
                  {errors[field.name] ? (
                    <p id={`${field.name}-error`} className="mt-1.5 text-xs text-destructive">
                      {errors[field.name]}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              >
                Message <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Year, make, model and what you'd like restored."
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            <div className="mt-5">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Photo Upload
              </span>
              <label
                htmlFor="photos"
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background/40 px-4 py-8 text-center transition-colors duration-300 hover:border-primary"
              >
                <Upload className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">
                  {photos.length ? `${photos.length} photo(s) selected` : "Add photos of your lenses"}
                </span>
                <input
                  id="photos"
                  name="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) =>
                    setPhotos(Array.from(e.target.files ?? []).map((f) => f.name).slice(0, 8))
                  }
                />
              </label>
              {photos.length ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {photos.map((name) => (
                    <li
                      key={name}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--glow-primary)] transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {sent ? "Send another request" : "Get My Free Quote"}
            </button>

            {sent ? (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-primary">
                <Check className="h-4 w-4" /> Your email is ready — attach your photos and send.
              </p>
            ) : (
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Prefer to talk? Call or text{" "}
                <a href={business.phoneHref} className="text-primary">
                  {business.phone}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
