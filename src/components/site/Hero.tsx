import { Button } from "@/components/ui/button";
import {
  Play,
  ArrowRight,
  Star,
  Trophy,
  Users,
  BadgeCheck,
  Sparkles as SparkIcon,
} from "lucide-react";
import vikramAsset from "@/assets/viram biyani profile.jpg";
import { WordRotate } from "./WordRotate";
import { AnimatedCounter } from "./AnimatedCounter";
import { Sparkles } from "./Sparkles";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-brand-50"
        aria-hidden
      />
      <div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl animate-blob -z-10"
        aria-hidden
      />
      <div
        className="absolute -top-20 right-0 h-[24rem] w-[24rem] rounded-full bg-brand-300/20 blur-3xl animate-blob [animation-delay:3s] -z-10"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:6s] -z-10"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-dots opacity-[0.35] -z-10" aria-hidden />
      <Sparkles count={18} className="-z-10" />

      <div className="container-page grid lg:grid-cols-12 gap-10 items-center pt-14 pb-24 lg:pt-20 lg:pb-32">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-brand-700 shadow-soft hover:scale-105 transition-transform">
            <SparkIcon className="h-3.5 w-3.5 text-gold animate-wiggle" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            India's #1 Taxation Mentor for CA & CMA
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            Master{" "}
            <WordRotate
              words={["Taxation", "Direct Tax", "GST", "Success"]}
              className="text-gradient-animated"
            />
            <br />
            with{" "}
            <span className="relative inline-block">
              Confidence
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="14"
                viewBox="0 0 300 14"
                fill="none"
              >
                <path
                  d="M2 9 C 80 2, 220 2, 298 9"
                  stroke="url(#u)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="u" x1="0" x2="1">
                    <stop stopColor="oklch(0.58 0.16 195)" />
                    <stop offset="1" stopColor="oklch(0.91 0.035 195)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="inline-block ml-2 animate-bounce-soft">🎓</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Live & recorded courses in Direct Tax and GST by{" "}
            <strong className="text-foreground">CA Vikram Biyani</strong> — trusted by 50,000+ CA &
            CMA students across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => window.dispatchEvent(new CustomEvent("trigger-enroll", { detail: null }))}
              className="group relative h-12 px-6 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5 transition-all overflow-hidden animate-gradient cursor-pointer"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
              <span className="relative">Enroll Now</span>{" "}
              <ArrowRight className="relative ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 border-brand/30 text-brand-700 hover:bg-brand-50 hover:scale-105 transition-transform"
            >
              Explore Courses
            </Button>
            <Button size="lg" variant="ghost" className="h-12 px-4 text-foreground group">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white mr-2 group-hover:scale-110 transition-transform">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Watch Demo
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-4">
            {[
              { i: Users, v: 50, suf: "K+", l: "Students" },
              { i: Trophy, v: 1200, suf: "+", l: "Top Rankers" },
              { i: Star, v: 4.9, suf: "/5", l: "12K Reviews", dec: 1 },
            ].map((s) => (
              <div
                key={s.l}
                className="group rounded-2xl border border-border/70 bg-white/60 backdrop-blur p-3 hover:bg-white hover:-translate-y-1 hover:shadow-soft transition-all"
              >
                <s.i className="h-4 w-4 text-brand group-hover:scale-125 group-hover:text-gold transition-all" />
                <div className="mt-2 font-display text-xl font-bold text-foreground">
                  <AnimatedCounter to={s.v} suffix={s.suf} decimals={s.dec ?? 0} />
                </div>
                <div className="text-[11px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right portrait composition */}
        <div className="lg:col-span-5 relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md aspect-[4/5]" style={{ perspective: "1200px" }}>
            {/* Glow ring */}
            <div
              className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand via-accent to-navy blur-2xl opacity-40 animate-pulse-slow"
              aria-hidden
            />
            {/* Dotted bg */}
            <div
              className="absolute inset-0 rounded-[2.5rem] bg-grid-dots opacity-60"
              aria-hidden
            />

            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white shadow-elevated bg-gradient-to-br from-brand-50 to-white animate-float-soft">
              <img
                src={vikramAsset}
                alt="CA Vikram Biyani"
                className="h-full w-full object-cover object-top"
              />
              {/* Bottom name tag */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white font-display text-2xl font-bold leading-tight">
                  CA Vikram Biyani
                </div>
                <div className="text-white/80 text-xs">B.Com, FCA · 15+ years teaching</div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-10 rounded-2xl bg-white border border-border shadow-elevated p-4 w-52 animate-float-soft [animation-delay:.6s]">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Live Batch</div>
                  <div className="text-sm font-semibold">CA Final Nov '26</div>
                </div>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[78%] bg-gradient-to-r from-brand to-accent" />
              </div>
              <div className="mt-1 text-[10px] text-muted-foreground">78% seats filled</div>
            </div>

            <div className="absolute -right-4 top-32 rounded-2xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-brand-lg p-4 w-44 animate-float-soft [animation-delay:1.2s]">
              <div className="text-[10px] uppercase tracking-widest opacity-80">All India Rank</div>
              <div className="mt-1 text-3xl font-display font-bold">AIR 12</div>
              <div className="text-xs opacity-90">CA Final DT — May '25</div>
            </div>

            <div className="absolute -bottom-4 left-8 rounded-2xl bg-white border border-border shadow-elevated p-3 w-56 animate-float-soft [animation-delay:1.8s]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-brand to-accent"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-xs font-semibold">50,000+ students</div>
                  <div className="flex items-center gap-0.5 text-[10px] text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-current" />
                    ))}
                    <span className="ml-1 text-muted-foreground">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="container-page pb-6">
        <div className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="h-px w-10 bg-border" /> Trusted by India's top CA & CMA aspirants
        </div>
      </div>
    </section>
  );
}
