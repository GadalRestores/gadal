import { Sparkles } from "lucide-react";
import { business } from "@/content/site";
import { Reveal } from "./Reveal";

export function PromiseStrip() {
  return (
    <section className="relative border-y border-border bg-surface/40">
      <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
        <Reveal className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="text-pretty font-display text-lg font-medium leading-snug sm:text-xl lg:text-2xl">
            {business.promise}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
