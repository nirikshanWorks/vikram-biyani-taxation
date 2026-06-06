import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";
import course from "@/assets/course-cafinal.jpg";

const inclusions = [
  "Complete Direct Tax syllabus",
  "Complete GST + Customs syllabus",
  "5 Volume coloured hard books",
  "350+ hours live mentorship",
  "Unlimited views & validity",
  "10,000+ MCQ question bank",
  "Full-length mock test series",
  "24×7 doubt support",
];

export function Featured() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-navy via-brand-900 to-navy text-white">
      <div
        className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:4s]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-dots opacity-20" aria-hidden />

      <div className="container-page relative grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Bestselling · #1 in CA Final 2026
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            CA Final —{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              DT + IDT
            </span>{" "}
            Combo
          </h2>
          <p className="mt-5 text-white/80 max-w-lg text-lg">
            One batch. Both papers. Everything you need to crack CA Final Taxation — Direct Tax +
            GST + Customs with hard books, mocks & live mentorship.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {inclusions.map((i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-400/20 text-emerald-300 shrink-0">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-white/90">{i}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-12 bg-white text-brand-700 hover:bg-white/90 hover:shadow-2xl group"
            >
              Enroll Now{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="text-sm">
              <div className="text-amber-300 font-semibold flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 fill-current" /> Early bird · Limited seats
              </div>
              <div className="text-white/60">Save ₹4,999 — offer ends soon</div>
            </div>
          </div>
        </div>

        {/* 3D tilted poster */}
        <div className="relative" style={{ perspective: "1500px" }}>
          <div
            className="relative animate-float-soft"
            style={{ transform: "rotateY(-12deg) rotateX(6deg)", transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent via-brand to-navy blur-2xl opacity-50"
              aria-hidden
            />
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img src={course} alt="CA Final DT IDT Combo" className="w-full h-auto" />
            </div>
            <div
              className="absolute -top-5 -right-5 rounded-2xl bg-white text-brand-700 shadow-2xl px-4 py-3"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Starting
              </div>
              <div className="font-display text-2xl font-bold">
                ₹15,000<span className="text-sm font-medium text-muted-foreground">/-</span>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -left-5 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-2xl px-4 py-3"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="text-[10px] uppercase tracking-widest opacity-90">Save</div>
              <div className="font-display text-2xl font-bold">₹4,999</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
