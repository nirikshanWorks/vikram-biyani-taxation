import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Review = { name: string; meta: string; text: string };

export function TestimonialCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, [playing, reviews.length]);

  const go = (delta: number) => setIndex((i) => (i + delta + reviews.length) % reviews.length);

  return (
    <div className="relative">
      {/* glow */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-indigo-400/15 to-gold/20 blur-2xl opacity-70"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated">
        {/* slides */}
        <div className="relative h-[360px] md:h-[300px]">
          {reviews.map((r, i) => {
            const offset = i - index;
            const active = i === index;
            return (
              <figure
                key={i}
                aria-hidden={!active}
                className="absolute inset-0 p-8 md:p-12 flex flex-col transition-all duration-700 ease-out"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active
                    ? "translateX(0) scale(1)"
                    : `translateX(${offset > 0 ? 40 : -40}px) scale(0.97)`,
                  pointerEvents: active ? "auto" : "none",
                }}
              >
                <Quote className="h-10 w-10 text-gold/40" />
                <div className="mt-3 flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-current"
                      style={{
                        animation: active ? `sparkle 1.2s ease-out ${j * 100}ms both` : "none",
                      }}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-base md:text-lg text-foreground/85 leading-relaxed flex-1 line-clamp-5">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand to-indigo-500 grid place-items-center text-white font-semibold">
                    {r.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-navy truncate">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{r.meta}</div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* progress bar */}
        <div className="h-1 w-full bg-secondary overflow-hidden">
          <div
            key={`${index}-${playing}`}
            className="h-full bg-gradient-to-r from-brand via-indigo-500 to-gold"
            style={{
              animation: playing ? "progress 5s linear forwards" : "none",
              width: playing ? undefined : "0%",
            }}
          />
        </div>
      </div>

      {/* controls */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          onClick={() => go(-1)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-brand hover:text-white hover:border-brand transition-all hover:-translate-x-0.5"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === index ? 28 : 8,
                background:
                  i === index
                    ? "linear-gradient(90deg, var(--brand), oklch(0.8 0.16 78))"
                    : "var(--border)",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-brand-50 transition-colors"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-brand hover:text-white hover:border-brand transition-all hover:translate-x-0.5"
            aria-label="Next review"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
