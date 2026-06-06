import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Globe, Star, Play, BookOpen, Infinity as InfinityIcon } from "lucide-react";
import { TiltCard } from "./TiltCard";
import ca1 from "@/assets/ca1.jpeg";
import ca2 from "@/assets/ca2.jpeg";
import ca3 from "@/assets/ca3.jpeg";
import ca4 from "@/assets/ca4.jpeg";
import ca5 from "@/assets/ca5.jpeg";
import ca6 from "@/assets/ca6.jpeg";
import ca7 from "@/assets/ca7.jpeg";
import ca8 from "@/assets/ca8.jpeg";
import ca9 from "@/assets/ca9.jpeg";
import cma1 from "@/assets/cma1.jpeg";
import cma2 from "@/assets/cma2.jpeg";
import cma3 from "@/assets/cma3.jpeg";
import cma4 from "@/assets/cma4.jpeg";

const categories = ["All", "CA Final", "CA Inter", "CMA Final", "Combo", "Hard Books", "PDF"];

const courses = [
  {
    img: ca1,
    tag: "CA Final",
    title: "CA Final — Direct Tax (Hard Books)",
    batch: "May 2027",
    hours: "200 hrs",
    books: "Hard Books · 5 Vol",
    price: 10500,
    mrp: 13500,
    rating: 4.9,
    live: true,
    cat: "CA Final",
    media: "Hard Books",
  },
  {
    img: ca2,
    tag: "CA Final",
    title: "CA Final — Direct Tax (Hard Books)",
    batch: "November 2026",
    hours: "200 hrs",
    books: "Hard Books · 5 Vol",
    price: 8600,
    mrp: 11500,
    rating: 4.9,
    live: true,
    cat: "CA Final",
    media: "Hard Books",
  },
  {
    img: ca3,
    tag: "CA Final",
    title: "CA Final — DT + IDT Combo (Hard Books)",
    batch: "November 2026",
    hours: "350 hrs",
    books: "Hard Books",
    price: 15000,
    mrp: 19999,
    rating: 4.9,
    live: true,
    cat: "Combo",
    media: "Hard Books",
  },
  {
    img: ca4,
    tag: "CA Final",
    title: "CA Final — DT + IDT Combo (PDF)",
    batch: "November 2026",
    hours: "350 hrs",
    books: "PDF",
    price: 13200,
    mrp: 17500,
    rating: 4.8,
    live: false,
    cat: "Combo",
    media: "PDF",
  },
  {
    img: ca5,
    tag: "CA Final",
    title: "CA Final — DT + IDT Combo (Hard Books)",
    batch: "May 2027",
    hours: "350 hrs",
    books: "Hard Books",
    price: 16500,
    mrp: 21000,
    rating: 4.9,
    live: true,
    cat: "Combo",
    media: "Hard Books",
  },
  {
    img: ca6,
    tag: "CA Final",
    title: "CA Final — Indirect Tax (Hard Books)",
    batch: "May 2027",
    hours: "150 hrs",
    books: "Hard Books · 4 Vol",
    price: 8600,
    mrp: 11000,
    rating: 4.9,
    live: true,
    cat: "CA Final",
    media: "Hard Books",
  },
  {
    img: ca7,
    tag: "CA Final",
    title: "CA Final — Indirect Tax (Hard Books)",
    batch: "November 2026",
    hours: "150 hrs",
    books: "Hard Books · 4 Vol",
    price: 7500,
    mrp: 9999,
    rating: 4.9,
    live: true,
    cat: "CA Final",
    media: "Hard Books",
  },
  {
    img: ca8,
    tag: "CA Inter",
    title: "CA Inter — Taxation DT + GST (Hard Books)",
    batch: "Sep 2026",
    hours: "220 hrs",
    books: "Hard Books · 4 Vol",
    price: 7500,
    mrp: 9999,
    rating: 4.9,
    live: true,
    cat: "CA Inter",
    media: "Hard Books",
  },
  {
    img: ca9,
    tag: "CA Inter",
    title: "CA Inter — Taxation DT + GST (PDF)",
    batch: "Sep 2026",
    hours: "220 hrs",
    books: "PDF",
    price: 6000,
    mrp: 8500,
    rating: 4.8,
    live: false,
    cat: "CA Inter",
    media: "PDF",
  },
  {
    img: cma1,
    tag: "CMA Final",
    title: "CMA Final — Direct Tax (Hard Books)",
    batch: "June & Dec 2027",
    hours: "200 hrs",
    books: "Hard Books",
    price: 10600,
    mrp: 13500,
    rating: 4.9,
    live: true,
    cat: "CMA Final",
    media: "Hard Books",
  },
  {
    img: cma2,
    tag: "CMA Final",
    title: "CMA Final — Direct Tax (Hard Books)",
    batch: "December 2026",
    hours: "200 hrs",
    books: "Hard Books",
    price: 8600,
    mrp: 11000,
    rating: 4.9,
    live: true,
    cat: "CMA Final",
    media: "Hard Books",
  },
  {
    img: cma3,
    tag: "CMA Final",
    title: "CMA Final — Indirect Tax (Hard Books)",
    batch: "June & Dec 2027",
    hours: "150 hrs",
    books: "Hard Books",
    price: 8600,
    mrp: 11000,
    rating: 4.9,
    live: true,
    cat: "CMA Final",
    media: "Hard Books",
  },
  {
    img: cma4,
    tag: "CMA Final",
    title: "CMA Final — Indirect Tax (Hard Books)",
    batch: "December 2026",
    hours: "150 hrs",
    books: "Hard Books",
    price: 8600,
    mrp: 11000,
    rating: 4.9,
    live: true,
    cat: "CMA Final",
    media: "Hard Books",
  },
];

export function Courses() {
  const [active, setActive] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const filtered =
    active === "All" ? courses : courses.filter((c) => c.cat === active || c.media === active);

  // Derive the displayed course, fallback to first item of filtered list if current selection is filtered out
  const displayCourse = filtered.some(
    (c) => c.title === selectedCourse.title && c.batch === selectedCourse.batch
  )
    ? selectedCourse
    : filtered[0] || courses[0];

  return (
    <section id="courses" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid-dots opacity-30 -z-10" aria-hidden />
      
      <div className="container-page">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
            Our Courses
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            Built for every <span className="text-gradient-brand">taxation aspirant</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Regular, fast-track, live and recorded batches — choose a course from the ledger to view details.
          </p>
        </div>

        {/* Split Pane Container */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left sticky showcase panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start animate-fade-up">
            <TiltCard className="rounded-3xl shadow-elevated border border-border bg-card overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={displayCourse.img}
                  alt={displayCourse.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-white/95 dark:bg-navy/95 backdrop-blur text-brand text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                    {displayCourse.tag}
                  </span>
                  {displayCourse.live && (
                    <span className="rounded-full bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 inline-flex items-center gap-1.5 shadow-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Live
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-white/80 uppercase tracking-widest font-semibold">
                    {displayCourse.batch} Batch
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight min-h-[3.5rem]">
                  {displayCourse.title}
                </h3>
                
                {/* Key specifications */}
                <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-brand-50/60 dark:bg-secondary/40 border border-brand-100/30 p-3">
                    <Clock className="h-4.5 w-4.5 text-brand mx-auto mb-1.5" />
                    <div className="font-semibold text-foreground">{displayCourse.hours}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">Duration</div>
                  </div>
                  <div className="rounded-xl bg-brand-50/60 dark:bg-secondary/40 border border-brand-100/30 p-3">
                    <BookOpen className="h-4.5 w-4.5 text-brand mx-auto mb-1.5" />
                    <div className="font-semibold text-foreground truncate">{displayCourse.media}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">Format</div>
                  </div>
                  <div className="rounded-xl bg-brand-50/60 dark:bg-secondary/40 border border-brand-100/30 p-3">
                    <InfinityIcon className="h-4.5 w-4.5 text-brand mx-auto mb-1.5" />
                    <div className="font-semibold text-foreground">Unlimited</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">Validity</div>
                  </div>
                </div>

                {/* Inclusions checklist */}
                <div className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {[
                    "Full syllabus coverage for CA & CMA examinations",
                    "Visual mapping with special VB charts & revision guides",
                    "Comprehensive MCQ question bank & mock tests",
                    "24/7 dedicated query resolution & mentorship support",
                  ].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="h-4.5 w-4.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing and Action */}
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Price (Inclusive of GST)</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display text-3xl font-extrabold text-foreground">
                        ₹{displayCourse.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{displayCourse.mrp.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-1">
                      Save {Math.round((1 - displayCourse.price / displayCourse.mrp) * 100)}% Today
                    </span>
                  </div>
                  
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg px-8 h-12 shrink-0"
                  >
                    Enroll
                  </Button>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right ledger list */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            {/* Category Filter bar */}
            <div className="flex flex-wrap gap-2 border-b border-border/60 pb-5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4.5 py-2 text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                    active === c
                      ? "bg-brand text-white border-brand shadow-brand"
                      : "bg-card text-foreground/80 border-border hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Courses list Ledger */}
            <div className="flex flex-col gap-3 max-h-[680px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border hover:scrollbar-thumb-brand-300">
              {filtered.map((c) => {
                const isSelected =
                  c.title === displayCourse.title && c.batch === displayCourse.batch;
                return (
                  <div
                    key={`${c.title}-${c.batch}`}
                    onClick={() => setSelectedCourse(c)}
                    className={`group relative rounded-2xl border p-4 flex flex-col sm:flex-row items-center gap-4 cursor-pointer transition-all ${
                      isSelected
                        ? "bg-brand-50/50 dark:bg-secondary/40 border-brand shadow-soft"
                        : "bg-card border-border hover:border-brand/30 hover:shadow-soft"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full sm:w-24 aspect-[4/3] rounded-xl overflow-hidden bg-secondary shrink-0">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {c.live && (
                        <span className="absolute top-1.5 left-1.5 rounded-full bg-red-500 text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5">
                          Live
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] font-bold uppercase tracking-wider text-brand">
                        <span>{c.tag}</span>
                        <span>•</span>
                        <span className="text-muted-foreground">{c.hours}</span>
                      </div>
                      <h4 className="mt-1 font-display text-lg font-bold text-foreground leading-snug group-hover:text-brand transition-colors truncate">
                        {c.title}
                      </h4>
                      <div className="mt-1 text-xs text-muted-foreground flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-0.5">
                        <span>
                          Batch: <strong className="text-foreground/85">{c.batch}</strong>
                        </span>
                        <span>
                          Books: <strong className="text-foreground/85">{c.books}</strong>
                        </span>
                      </div>
                    </div>

                    {/* Price & showcase selector */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-border shrink-0">
                      <div className="text-right">
                        <div className="font-display text-xl font-bold text-foreground">
                          ₹{c.price.toLocaleString("en-IN")}
                        </div>
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          {Math.round((1 - c.price / c.mrp) * 100)}% OFF
                        </div>
                      </div>
                      <div
                        className={`hidden sm:grid h-7 w-7 place-items-center rounded-full border transition-all ${
                          isSelected
                            ? "bg-brand border-brand text-white"
                            : "border-border text-muted-foreground group-hover:border-brand/40 group-hover:text-brand"
                        }`}
                      >
                        <span className="text-xs">→</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
