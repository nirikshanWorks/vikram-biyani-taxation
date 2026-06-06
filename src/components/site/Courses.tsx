import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Globe, Star, Play, BookOpen, Infinity as InfinityIcon } from "lucide-react";
import { TiltCard } from "./TiltCard";
import ca1 from "@/assets/ca1.jpg.asset.json";
import ca2 from "@/assets/ca2.jpg.asset.json";
import ca3 from "@/assets/ca3.jpg.asset.json";
import ca4 from "@/assets/ca4.jpg.asset.json";
import ca5 from "@/assets/ca5.jpg.asset.json";
import ca6 from "@/assets/ca6.jpg.asset.json";
import ca7 from "@/assets/ca7.jpg.asset.json";
import ca8 from "@/assets/ca8.jpg.asset.json";
import ca9 from "@/assets/ca9.jpg.asset.json";
import cma1 from "@/assets/cma1.jpg.asset.json";
import cma2 from "@/assets/cma2.jpg.asset.json";
import cma3 from "@/assets/cma3.jpg.asset.json";
import cma4 from "@/assets/cma4.jpg.asset.json";

const categories = ["All", "CA Final", "CA Inter", "CMA Final", "Combo", "Hard Books", "PDF"];

const courses = [
  { img: ca1.url, tag: "CA Final", title: "CA Final — Direct Tax (Hard Books)", batch: "May 2027", hours: "200 hrs", books: "Hard Books · 5 Vol", price: 10500, mrp: 13500, rating: 4.9, live: true, cat: "CA Final", media: "Hard Books" },
  { img: ca2.url, tag: "CA Final", title: "CA Final — Direct Tax (Hard Books)", batch: "November 2026", hours: "200 hrs", books: "Hard Books · 5 Vol", price: 8600, mrp: 11500, rating: 4.9, live: true, cat: "CA Final", media: "Hard Books" },
  { img: ca3.url, tag: "CA Final", title: "CA Final — DT + IDT Combo (Hard Books)", batch: "November 2026", hours: "350 hrs", books: "Hard Books", price: 15000, mrp: 19999, rating: 4.9, live: true, cat: "Combo", media: "Hard Books" },
  { img: ca4.url, tag: "CA Final", title: "CA Final — DT + IDT Combo (PDF)", batch: "November 2026", hours: "350 hrs", books: "PDF", price: 13200, mrp: 17500, rating: 4.8, live: false, cat: "Combo", media: "PDF" },
  { img: ca5.url, tag: "CA Final", title: "CA Final — DT + IDT Combo (Hard Books)", batch: "May 2027", hours: "350 hrs", books: "Hard Books", price: 16500, mrp: 21000, rating: 4.9, live: true, cat: "Combo", media: "Hard Books" },
  { img: ca6.url, tag: "CA Final", title: "CA Final — Indirect Tax (Hard Books)", batch: "May 2027", hours: "150 hrs", books: "Hard Books · 4 Vol", price: 8600, mrp: 11000, rating: 4.9, live: true, cat: "CA Final", media: "Hard Books" },
  { img: ca7.url, tag: "CA Final", title: "CA Final — Indirect Tax (Hard Books)", batch: "November 2026", hours: "150 hrs", books: "Hard Books · 4 Vol", price: 7500, mrp: 9999, rating: 4.9, live: true, cat: "CA Final", media: "Hard Books" },
  { img: ca8.url, tag: "CA Inter", title: "CA Inter — Taxation DT + GST (Hard Books)", batch: "Sep 2026", hours: "220 hrs", books: "Hard Books · 4 Vol", price: 7500, mrp: 9999, rating: 4.9, live: true, cat: "CA Inter", media: "Hard Books" },
  { img: ca9.url, tag: "CA Inter", title: "CA Inter — Taxation DT + GST (PDF)", batch: "Sep 2026", hours: "220 hrs", books: "PDF", price: 6000, mrp: 8500, rating: 4.8, live: false, cat: "CA Inter", media: "PDF" },
  { img: cma1.url, tag: "CMA Final", title: "CMA Final — Direct Tax (Hard Books)", batch: "June & Dec 2027", hours: "200 hrs", books: "Hard Books", price: 10600, mrp: 13500, rating: 4.9, live: true, cat: "CMA Final", media: "Hard Books" },
  { img: cma2.url, tag: "CMA Final", title: "CMA Final — Direct Tax (Hard Books)", batch: "December 2026", hours: "200 hrs", books: "Hard Books", price: 8600, mrp: 11000, rating: 4.9, live: true, cat: "CMA Final", media: "Hard Books" },
  { img: cma3.url, tag: "CMA Final", title: "CMA Final — Indirect Tax (Hard Books)", batch: "June & Dec 2027", hours: "150 hrs", books: "Hard Books", price: 8600, mrp: 11000, rating: 4.9, live: true, cat: "CMA Final", media: "Hard Books" },
  { img: cma4.url, tag: "CMA Final", title: "CMA Final — Indirect Tax (Hard Books)", batch: "December 2026", hours: "150 hrs", books: "Hard Books", price: 8600, mrp: 11000, rating: 4.9, live: true, cat: "CMA Final", media: "Hard Books" },
];

export function Courses() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter(c => c.cat === active || c.media === active);

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
