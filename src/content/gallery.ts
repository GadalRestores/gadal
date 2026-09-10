/** Photo gallery images. Add new entries here as more photos come in. */


export type GalleryPhoto = { id: string; title: string; url: string | null };

export const galleryPhotos: GalleryPhoto[] = [
  { id: "g1", title: "Lexus headlight before and after restoration", url: "/photos/gallery-1.jpg" },
  { id: "g2", title: "GMC Acadia headlight before and after restoration", url: "/photos/gallery-2.jpg" },
  { id: "g3", title: "2009 Honda Accord headlight before and after restoration", url: "/photos/gallery-3.jpg" },
  { id: "g4", title: "2013 Honda CR-V headlight before and after restoration", url: "/photos/gallery-4.jpg" },
  { id: "g5", title: "2007 Toyota Solara headlight before and after restoration", url: "/photos/gallery-5.jpg" },
  { id: "g6", title: "2015 Honda CR-V headlight before and after restoration", url: "/photos/gallery-6.jpg" },
  { id: "g7", title: "2009 Infiniti M35x headlight before and after restoration", url: "/photos/gallery-7.jpg" },
  { id: "g8", title: "2019 Acura MDX headlight before and after restoration", url: "/photos/gallery-8.jpg" },
  { id: "g9", title: "SUV headlight before and after restoration", url: "/photos/gallery-9.jpg" },
  { id: "g10", title: "2009 Toyota Camry headlight before and after restoration", url: "/photos/gallery-10.jpg" },
  { id: "g11", title: "Coming soon", url: null },
  { id: "g12", title: "Coming soon", url: null },
];
