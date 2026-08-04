import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function CompareSlider({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-border bg-surface touch-none"
    >
      <img
        src={after}
        alt={`${alt} — after restoration`}
        loading="lazy"
        width={1024}
        height={768}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={before}
          alt={`${alt} — before restoration`}
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: containerRef.current?.clientWidth ?? undefined }}
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-destructive backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-primary"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--glow-primary)] transition-transform duration-300 group-hover:scale-110">
          <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <label className="sr-only" htmlFor={`compare-${alt}`}>
        {alt} before and after comparison
      </label>
      <input
        id={`compare-${alt}`}
        type="range"
        min={0}
        max={100}
        value={Math.round(position)}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-8 w-full cursor-ew-resize opacity-0"
        aria-label={`${alt} before and after comparison`}
      />
    </div>
  );
}
