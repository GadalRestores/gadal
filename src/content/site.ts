/**
 * All editable site content lives here.
 * Update text, pricing, reviews, FAQs and gallery items in this one file.
 */

import headlightBefore from "@/assets/headlight-before-real.jpg.asset.json";
import headlightAfter from "@/assets/headlight-after-real.jpg.asset.json";
import foglightBefore from "@/assets/foglight-before-real.jpg.asset.json";
import foglightAfter from "@/assets/foglight-after-real.jpg.asset.json";
import emblemBefore from "@/assets/emblem-before-real.jpg.asset.json";
import emblemAfter from "@/assets/emblem-after-real.jpg.asset.json";

export const business = {
  name: "Gadal Restores",
  tagline: "Clarity Restored, Safety Secured.",
  subheadline: "Professional-Level Mobile Headlight Restoration Service",
  promise:
    "Every restoration is completed using a professional multi-stage sanding and polishing process—not temporary wipe-on coatings.",
  phone: "267-248-5673",
  phoneHref: "tel:+12672485673",
  email: "GadalRestores@gmail.com",
  serviceAreas: ["Lower Bucks County", "Philadelphia", "South Jersey"],
  hours: { days: "Sunday – Friday", time: "8:00 AM – 7:00 PM" },
  social: {
    facebook: {
      label: "Gadal's Headlight Restoration",
      url: "https://www.facebook.com/",
    },
    instagram: { label: "@GadalRestores", url: "https://www.instagram.com/gadalrestores" },
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Before & After", href: "/#results" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];


export const services = [
  {
    icon: "headlight",
    title: "Headlight Restoration",
    description:
      "Faded, oxidized and yellowed lenses are wet sanded through multiple grits, machine polished to optical clarity, then sealed with UV protection.",
    cta: "Restore my headlights",
  },
  {
    icon: "fog",
    title: "Foglight Restoration",
    description:
      "Cloudy foglights scatter light where you need it most. The same multi-stage process brings back sharp, usable output in poor weather.",
    cta: "Add foglights",
  },
  {
    icon: "emblem",
    title: "Emblem Restoration",
    description:
      "Dull, hazed badges and trim are refined and polished back to a deep, reflective finish that sharpens the whole front end.",
    cta: "Refinish my emblems",
  },
] as const;

export const pricing = {
  tiers: [
    { vehicle: "Cars", year: "Before 2014", price: 100 },
    { vehicle: "Cars", year: "2014 and newer", price: 125, featured: true },
    { vehicle: "Truck / SUV", year: "Before 2014", price: 150 },
    { vehicle: "Truck / SUV", year: "2014 and newer", price: 175 },
  ],
  addOns: [
    { label: "Foglights", price: "+$50" },
    { label: "Emblems", price: "+$50" },
    { label: "Tail Lights", price: "Starting at $80" },
  ],
};

export const gallery = [
  {
    id: "headlights-sedan",
    category: "Headlights",
    title: "Sedan Headlight Restoration",
    before: headlightBefore.url,
    after: headlightAfter.url,
  },
  {
    id: "foglights-coupe",
    category: "Foglights",
    title: "Coupe Headlight & Foglight",
    before: foglightBefore.url,
    after: foglightAfter.url,
  },
  {
    id: "emblem-grille",
    category: "Emblems",
    title: "Grille Emblem Refinish",
    before: emblemBefore.url,
    after: emblemAfter.url,
  },
];

export const galleryFilters = ["All", "Headlights", "Foglights", "Emblems"] as const;

export const processSteps = [
  {
    step: "01",
    title: "Inspection",
    description: "Lens condition, depth of oxidation and any cracking are assessed before work begins.",
  },
  {
    step: "02",
    title: "Professional Sanding",
    description: "Oxidation is physically removed with sanding — never masked with a wipe-on liquid.",
  },
  {
    step: "04",
    title: "Machine Polishing",
    description: "Compound and polish stages bring the plastic back to true optical clarity.",
  },
  {
    step: "05",
    title: "UV Protection",
    description: "A protective sealant locks in the finish and slows future oxidation.",
  },
  {
    step: "06",
    title: "Final Inspection",
    description: "Headlights are assessed for optimal clarity. The project area is cleaned, and photos are taken for later delivery to the customer.",
  },
];

export const benefits = [
  {
    title: "True Multi-Stage Sanding",
    description: "Oxidation is removed at the surface, not covered with a temporary coating.",
  },
  {
    title: "Mobile Convenience",
    description: "We come to your driveway, workplace or lot. No shop visit, no waiting room.",
  },
  {
    title: "Long-Lasting Clarity",
    description: "Sealed lenses hold their finish far longer than wipe-on products.",
  },
  {
    title: "Better Night Visibility",
    description: "Clear lenses project light where it belongs instead of scattering it.",
  },
  {
    title: "Sharper Appearance",
    description: "Clear lenses instantly make a vehicle look newer and better maintained.",
  },
  {
    title: "Cheaper Than Replacement",
    description: "A fraction of the cost of new assemblies, with results you can see the same day.",
  },
  {
    title: "Experienced Workmanship",
    description: "Every vehicle is finished by hand with a process refined over hundreds of lenses.",
  },
];

export const reviews = [
  {
    name: "Sevvy S",
    location: "Doylestown, PA",
    rating: 5,
    quote:
      "Amazing work! Professional, courteous and a true master of his craft. Highly recommend!",
  },
  {
    name: "Diego A",
    location: "Philadelphia, PA",
    rating: 5,
    quote:
      "Amazing work, professionalism and great price. His work is a art work, and like any great painter he is the best at his craft. I'm extremely grateful.",
  },
  {
    name: "Thomas S",
    location: "Burlington, NJ",
    rating: 5,
    quote:
      "Gadal Restores did an amazing job bringing back the lustre to my Acura RDX headlights! Gadal was on time and a very nice person, very knowledgeable about his work. The headlights look like new and the work was absolutely worth every penny! Highly recommend this mobile service for headlight restoration. Thanks Gadal!",
  },
];


export const faqs = [
  {
    question: "How long does a restoration take?",
    answer:
      "Most vehicles take about 60 to 90 minutes. Heavily oxidized or cracked lenses can take longer since additional sanding stages are needed.",
  },
  {
    question: "Is this a wipe-on coating?",
    answer:
      "No. This is a professional multi-stage sanding and polishing process. The oxidized layer is physically removed and the lens is then sealed for UV protection.",
  },
  {
    question: "How long do the results last?",
    answer:
      "Because the oxidation is removed rather than covered, sealed lenses typically hold their clarity for years. Garage-kept vehicles hold up the longest.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "Not necessarily. As long as the vehicle is accessible and we can confirm the details ahead of time, we can complete the work while you go about your day.",
  },
  {
    question: "What do you need on site?",
    answer:
      "A flat spot to park and access to the front of the vehicle. Everything else is brought with us.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Lower Bucks County, Philadelphia and South Jersey. If you're just outside those areas, reach out and we'll let you know what's possible.",
  },
  {
    question: "Can badly cracked or damaged lenses be restored?",
    answer:
      "Internal cracking or moisture inside the housing can't be fixed by restoration. Send photos with your quote request and we'll tell you honestly what's achievable.",
  },
];

export const trustBadges = ["Mobile Service", "Professional Sanding Process", "Fully Experienced"];
