import { useState } from "react";
import { gallery, galleryFilters } from "@/content/site";
import { CompareSlider } from "./CompareSlider";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Results() {
  const [filter, setFilter] = useState<string>("All");
  const items = gallery.filter((g) => filter === "All" || g.category === filter);

  return (
    <section id="results" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8 lg:py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Before & After"
          title="Drag the slider. That's the difference."
          description="Real restorations, no filters. Every result below came from the same multi-stage sanding and polishing process."
        />
        <Reveal className="flex flex-wrap gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors duration-300",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <Carousel
          orientation="vertical"
          opts={{ align: "start", loop: items.length > 1 }}
          className="w-full"
        >
          <CarouselContent className="-mt-5 h-[560px] lg:h-[520px]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pt-5 basis-full">
                <div className="lg:mx-auto lg:max-w-2xl">
                  <CompareSlider before={item.before} after={item.after} alt={item.title} />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-display text-base font-semibold">{item.title}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.category}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-top-3 left-1/2 hidden -translate-x-1/2 border-border bg-surface text-foreground hover:bg-primary hover:text-primary-foreground lg:flex" />
          <CarouselNext className="-bottom-3 left-1/2 hidden -translate-x-1/2 border-border bg-surface text-foreground hover:bg-primary hover:text-primary-foreground lg:flex" />
        </Carousel>
      </Reveal>

    </section>
  );
}
