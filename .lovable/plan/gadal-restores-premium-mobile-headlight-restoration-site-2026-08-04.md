# Gadal Restores — Premium Mobile Headlight Restoration Site

A dark, cinematic one-page site (plus Privacy/Terms) built to look like a high-end automotive agency build: black base, lime green highlights, restrained red accents, glassmorphism, soft shadows, scroll and hover micro-animations.

## One technical note first

This project runs on Lovable's React + TanStack stack. Pure static HTML/CSS/JS isn't supported here, but the outcome you asked for is: no WordPress, no Bootstrap, no heavy dependencies, clean maintainable code, fast loading, and all content held in simple, clearly labeled data files so photos, reviews, FAQs, services, and pricing can be swapped without touching layout code.

## Sections (in order)

1. **Sticky nav** — logo left; Home, Services, Pricing, Before & After, Reviews, FAQ, Contact, Quote. Shrinks on scroll; full-screen hamburger menu on mobile.
2. **Hero** — cinematic full-height panel with a video-ready background layer (elegant automotive still until a 4K video is dropped in). Centered logo, "Clarity Restored, Safety Secured.", subheadline, primary CTA "Get A Free Instant Quote", secondary "View Our Results", trust badges: Mobile Service / Professional Sanding Process / Fully Experienced.
3. **Process promise strip** — the multi-stage sanding statement, prominent, directly under the hero.
4. **Services** — three cards: Headlight, Foglight, Emblem Restoration, each with icon, short copy, CTA.
5. **Pricing** — four vehicle-tier cards ($100 / $125 / $150 / $175) plus an add-ons panel (Foglights +$50, Emblems +$50, Tail Lights from $80) and a "not sure? request a custom quote" CTA.
6. **Before & After** — the showcase section: interactive drag comparison sliders, a carousel of results, and category filters (Headlights / Foglights / Emblems). Placeholder images in one folder, easy to replace.
7. **Process** — six numbered steps (Inspection → Wet Sanding → Progressive Refinement → Machine Polishing → UV Protection → Final Inspection) with an animated connecting line that draws in as you scroll.
8. **Why Choose Us** — benefit grid covering the sanding process, mobile convenience, lasting clarity, night visibility, appearance, cost vs replacement, experience.
9. **Reviews** — auto-scrolling testimonial carousel with avatars and star ratings; placeholder reviews in a single data file for later Google review swap.
10. **Quote form** — premium glass card: first name, last name, phone, email, ZIP, optional message, photo upload. No street address. Large submit button with success state.
11. **FAQ** — accordion cards, easy to extend.
12. **Contact** — phone 267-248-5673, email, service areas (Lower Bucks County, Philadelphia, South Jersey), hours Sun–Fri 8:00 AM–7:00 PM, Facebook and Instagram icons.
13. **Footer** — logo, nav, contact, hours, socials, copyright, Privacy Policy and Terms links (both pages created).

## Quote form handling

To start, the form validates input and opens a prefilled email/handoff so no quote is lost, with a clear success state. If you'd like submissions stored in a dashboard with the uploaded photos saved, I can add Lovable Cloud for that as a follow-up — say the word and I'll build it in from the start.

## Design system

- Tokens in `src/styles.css`: near-black surfaces, lime green primary, red as a sparing accent, white text; large radii, soft elevation, glass surfaces.
- Premium display typeface for headings paired with a clean grotesque for body — no default Inter/Poppins look.
- Custom scroll-reveal hook, hover lift states, restrained motion that respects reduced-motion settings.

## Technical details

- Route files: `/` (all sections), `/privacy`, `/terms`; each with its own SEO title, description, OG/Twitter tags, single H1, semantic landmarks, alt text, lazy-loaded imagery, LocalBusiness JSON-LD (name, phone, hours, service areas).
- Content lives in `src/content/*.ts` (services, pricing, faqs, reviews, gallery) so future edits are one-file changes.
- Components split small: nav, hero, section blocks, comparison slider, carousel, accordion, quote form.
- Generated automotive placeholder imagery in `src/assets/`, hero video slot ready via a single source swap.
