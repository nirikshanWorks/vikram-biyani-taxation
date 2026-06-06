import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/vikram-hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-accent px-3 py-1.5 text-xs font-medium text-navy">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            India's Trusted Taxation Mentor
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-navy">
            Master Taxation with <span className="text-gradient-gold">Confidence</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Master Direct Tax and GST through structured learning, practical examples,
            and exam-focused strategies from CA Vikram Biyani — trusted by 50,000+ CA & CMA students.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90 h-12 px-6">
              Enroll Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 border-navy/20 text-navy hover:bg-navy/5">
              Explore Courses
            </Button>
            <Button size="lg" variant="ghost" className="h-12 px-4 text-navy">
              <Play className="mr-1 h-4 w-4 fill-current" /> Watch Demo
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-navy to-navy/60" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                <span className="ml-1 text-sm font-semibold text-foreground">4.9/5</span>
              </div>
              <p className="text-xs text-muted-foreground">from 12,000+ student reviews</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div
            className="absolute -inset-6 rounded-[2rem] -z-10 blur-2xl opacity-60"
            style={{ background: "var(--gradient-gold)" }}
            aria-hidden
          />
          <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card shadow-elevated">
            <img
              src={heroImg}
              alt="CA Vikram Biyani — Taxation Faculty"
              width={1024}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -left-4 bottom-10 rounded-2xl bg-card border border-border shadow-soft p-4 w-56 animate-float-soft">
            <div className="text-xs text-muted-foreground">Live Batch</div>
            <div className="font-semibold text-navy">CA Inter Tax 2026</div>
            <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-3/4 bg-gold" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Enrollment 75% full</div>
          </div>
          <div className="absolute -right-2 top-8 rounded-2xl bg-navy text-navy-foreground shadow-elevated p-4 w-44 animate-float-soft [animation-delay:1.2s]">
            <div className="text-xs text-gold uppercase tracking-widest">Rank</div>
            <div className="mt-1 text-2xl font-display font-bold">AIR 12</div>
            <div className="text-xs opacity-80">CA Final DT — May '25</div>
          </div>
        </div>
      </div>
    </section>
  );
}
