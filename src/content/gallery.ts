/** Photo gallery images. Add new entries here as more photos come in. */

import g1 from "@/assets/gallery-1.jpg.asset.json";
import g2 from "@/assets/gallery-2.jpg.asset.json";
import g3 from "@/assets/gallery-3.jpg.asset.json";
import g4 from "@/assets/gallery-4.jpg.asset.json";
import g5 from "@/assets/gallery-5.jpg.asset.json";
import g6 from "@/assets/gallery-6.jpg.asset.json";
import g7 from "@/assets/gallery-7.jpg.asset.json";
import g8 from "@/assets/gallery-8.jpg.asset.json";
import g9 from "@/assets/gallery-9.jpg.asset.json";
import g10 from "@/assets/gallery-10.jpg.asset.json";

export type GalleryPhoto = { id: string; title: string; url: string | null };

export const galleryPhotos: GalleryPhoto[] = [
  { id: "g1", title: "Lexus headlight before and after restoration", url: g1.url },
  { id: "g2", title: "GMC Acadia headlight before and after restoration", url: g2.url },
  { id: "g3", title: "2009 Honda Accord headlight before and after restoration", url: g3.url },
  { id: "g4", title: "2013 Honda CR-V headlight before and after restoration", url: g4.url },
  { id: "g5", title: "2007 Toyota Solara headlight before and after restoration", url: g5.url },
  { id: "g6", title: "2015 Honda CR-V headlight before and after restoration", url: g6.url },
  { id: "g7", title: "2009 Infiniti M35x headlight before and after restoration", url: g7.url },
  { id: "g8", title: "2019 Acura MDX headlight before and after restoration", url: g8.url },
  { id: "g9", title: "SUV headlight before and after restoration", url: g9.url },
  { id: "g10", title: "2009 Toyota Camry headlight before and after restoration", url: g10.url },
  { id: "g11", title: "Coming soon", url: null },
  { id: "g12", title: "Coming soon", url: null },
];
