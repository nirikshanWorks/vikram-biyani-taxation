import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Globe, Star, Play, BookOpen, Infinity as InfinityIcon } from "lucide-react";
import { TiltCard } from "./TiltCard";
import dt from "@/assets/course-dt.jpg.asset.json";
import idt from "@/assets/course-idt.jpg.asset.json";
import dtIdtHard from "@/assets/course-dt-idt-hard.jpg.asset.json";
import dtIdtPdf from "@/assets/course-dt-idt-pdf.jpg.asset.json";

const categories = ["All", "CA Final", "CA Inter", "CMA", "Combo", "Live"];

const courses = [
  { img: dtIdtHard.url, tag: "CA Final", title: "CA Final — DT + IDT Combo (Hard Books)", batch: "November 2026", hours: "350 hrs", books: "Hard Books", price: 15000, mrp: 19999, rating: 4.9, live: true, cat: "Combo" },
  { img: dt.url, tag: "CA Final", title: "CA Final — Direct Tax", batch: "November 2026", hours: "200 hrs", books: "5 Vol Coloured", price: 8600, mrp: 11500, rating: 4.9, live: true, cat: "CA Final" },
  { img: idt.url, tag: "CA Final", title: "CA Final — Indirect Tax (GST)", batch: "November 2026", hours: "150 hrs", books: "4 Vol Coloured", price: 7500, mrp: 9999, rating: 4.9, live: true, cat: "CA Final" },
  { img: dtIdtPdf.url, tag: "CA Final", title: "CA Final — DT + IDT (PDF Books)", batch: "November 2026", hours: "350 hrs", books: "PDF", price: 13200, mrp: 17500, rating: 4.8, live: false, cat: "Combo" },
  { img: dt.url, tag: "CA Inter", title: "CA Inter — Taxation Complete", batch: "May 2026", hours: "180 hrs", books: "Hard Books", price: 8499, mrp: 11999, rating: 4.9, live: true, cat: "CA Inter" },
  { img: idt.url, tag: "CMA", title: "CMA Inter — Taxation Full", batch: "Dec 2026", hours: "150 hrs", books: "Hard Books", price: 7499, mrp: 9999, rating: 4.8, live: false, cat: "CMA" },
];

export function Courses() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter(c => c.cat === active || (active === "Live" && c.live));

  return (
    <section id="courses" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid-dots opacity-30 -z-10" aria-hidden />
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Our Courses</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
              Built for every <span className="text-gradient-brand">taxation aspirant</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Regular, fast-track, live and recorded batches — built for CA Inter, CA Final and CMA students.
            </p>
          </div>
          <Button variant="outline" className="border-brand/30 text-brand-700 hover:bg-brand-50">View all courses</Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                active === c
                  ? "bg-gradient-to-r from-brand to-brand-600 text-white border-transparent shadow-brand"
                  : "bg-card text-foreground/80 border-border hover:border-brand/40 hover:text-brand-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <TiltCard key={c.title} className="group rounded-2xl">
              <article className="relative rounded-2xl border border-border bg-card overflow-hidden flex flex-col h-full shadow-soft hover:shadow-elevated transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="rounded-full bg-white/95 backdrop-blur text-brand text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">{c.tag}</span>
                    {c.live && (
                      <span className="rounded-full bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Live
                      </span>
                    )}
                  </div>
                  <button aria-label="Preview" className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full bg-white text-brand shadow-elevated opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <Play className="h-4 w-4 fill-current" />
                  </button>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-semibold text-foreground leading-snug min-h-[3.5rem]">{c.title}</h3>
                  <p className="mt-1 text-xs text-brand font-medium">{c.batch} batch</p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                    <span className="rounded-lg bg-brand-50 text-brand-700 px-2 py-1.5 inline-flex items-center gap-1 font-medium"><Clock className="h-3 w-3" />{c.hours}</span>
                    <span className="rounded-lg bg-brand-50 text-brand-700 px-2 py-1.5 inline-flex items-center gap-1 font-medium"><BookOpen className="h-3 w-3" />{c.books}</span>
                    <span className="rounded-lg bg-brand-50 text-brand-700 px-2 py-1.5 inline-flex items-center gap-1 font-medium"><InfinityIcon className="h-3 w-3" />Unlimited</span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-amber-500 text-sm">
                    {[...Array(5)].map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    <span className="ml-1 text-xs text-muted-foreground">{c.rating} · 2.4k students</span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex items-end justify-between">
                    <div>
                      <div className="font-display text-2xl font-bold text-foreground">₹{c.price.toLocaleString("en-IN")}</div>
                      <div className="text-xs"><span className="text-muted-foreground line-through">₹{c.mrp.toLocaleString("en-IN")}</span> <span className="text-emerald-600 font-semibold">{Math.round((1-c.price/c.mrp)*100)}% off</span></div>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-brand to-brand-600 text-white hover:shadow-brand">Enroll</Button>
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
