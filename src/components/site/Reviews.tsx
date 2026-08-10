import { Star, Quote } from "lucide-react";
import { reviews } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-28 border-y border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="Drivers across Bucks, Philly and South Jersey."
          description="Real 5-star Google reviews from Gadal Restores customers."
        />


        <Reveal className="mt-14">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-5">
              {reviews.map((review) => (
                <CarouselItem key={review.name} className="pl-5 sm:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-3xl border border-border bg-background/70 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                    <Quote className="h-7 w-7 text-primary/60" aria-hidden="true" />
                    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">
                      "{review.quote}"
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/12 font-display text-sm font-bold text-primary">
                        {initials(review.name)}
                      </span>
                      <figcaption>
                        <p className="text-sm font-semibold">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.location}</p>
                      </figcaption>
                      <span
                        className="ml-auto flex gap-0.5"
                        aria-label={`${review.rating} out of 5 stars`}
                      >
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                        ))}
                      </span>
                    </div>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 hidden border-border bg-surface text-foreground hover:bg-primary hover:text-primary-foreground lg:flex" />
            <CarouselNext className="-right-3 hidden border-border bg-surface text-foreground hover:bg-primary hover:text-primary-foreground lg:flex" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
