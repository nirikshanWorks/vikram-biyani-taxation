import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const inclusions = [
  "Complete Direct Tax syllabus",
  "Complete GST syllabus",
  "Printed + digital revision notes",
  "10,000+ MCQ question bank",
  "Full-length mock tests",
  "Recorded sessions, lifetime access",
  "24×7 doubt support",
  "Live mentorship with Vikram Sir",
];

export function Featured() {
  return (
    <section className="py-20 lg:py-28 bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 -z-0" style={{
        background: "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 82 / 0.5), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.78 0.14 82 / 0.3), transparent 40%)"
      }} />
      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1.5 text-xs font-medium text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Bestselling Batch
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight">
            CA Inter Taxation <span className="text-gradient-gold">Complete Batch</span>
          </h2>
          <p className="mt-4 text-navy-foreground/80 max-w-lg">
            One batch. Both papers. Everything you need to score exemption in CA Inter Taxation —
            Direct Tax + GST + notes + mocks + doubt support.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {inclusions.map(i => (
              <div key={i} className="flex items-start gap-2.5 text-sm">
                <Check className="h-4.5 w-4.5 text-gold mt-0.5 shrink-0" />
                <span className="text-navy-foreground/90">{i}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" className="h-12 bg-gold text-gold-foreground hover:bg-gold/90">
              Enroll Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <div className="text-sm">
              <div className="text-gold font-semibold">Limited Time · Early bird</div>
              <div className="text-navy-foreground/70">Save ₹4,000 — offer ends soon</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-bold text-gold">₹13,499</span>
              <span className="text-navy-foreground/60 line-through">₹17,999</span>
            </div>
            <div className="mt-1 text-sm text-gold">25% off · 18 months validity</div>

            <div className="mt-8 space-y-4">
              {[
                { k: "Duration", v: "200+ hours" },
                { k: "Language", v: "Hindi + English" },
                { k: "Mode", v: "Live + Recorded" },
                { k: "Faculty", v: "CA Vikram Biyani" },
                { k: "Start Date", v: "1st of every month" },
              ].map(r => (
                <div key={r.k} className="flex justify-between text-sm pb-3 border-b border-white/10 last:border-0">
                  <span className="text-navy-foreground/60">{r.k}</span>
                  <span className="font-medium">{r.v}</span>
                </div>
              ))}
            </div>

            <Button className="mt-8 w-full bg-white text-navy hover:bg-white/90 h-12">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
