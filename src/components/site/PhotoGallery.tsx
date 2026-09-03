import { useState } from "react";
import { X } from "lucide-react";
import { galleryPhotos } from "@/content/gallery";
import { Reveal, SectionHeading } from "./Reveal";

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);
  const activePhoto = active !== null ? galleryPhotos[active] : null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Photo Gallery"
        title="More before & afters."
        description="A wider look at real restorations. Tap any photo to view it full size."
      />

      <Reveal className="mt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((photo, i) =>
            photo.url ? (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActive(i)}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ) : (
              <div
                key={photo.id}
                className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-border bg-surface/40 px-3 text-center text-xs uppercase tracking-widest text-muted-foreground"
              >
                Coming soon
              </div>
            ),
          )}
        </div>
      </Reveal>

      {activePhoto?.url ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={activePhoto.url}
            alt={activePhoto.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl sm:max-w-[560px] lg:max-h-[72vh] lg:max-w-[640px]"
          />
        </div>
      ) : null}
    </section>
  );
}
