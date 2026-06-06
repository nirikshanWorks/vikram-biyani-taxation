import { Button } from "@/components/ui/button";
import { Clock, Globe, Star, Play } from "lucide-react";
import dt from "@/assets/course-dt.jpg";
import gst from "@/assets/course-gst.jpg";
import caFinal from "@/assets/course-cafinal.jpg";
import cma from "@/assets/course-cma.jpg";

const categories = ["All", "CA Inter", "CA Final", "CMA", "GST", "Fast Track", "Recorded", "Live"];

const courses = [
  { img: dt, tag: "CA Inter", title: "CA Inter — Direct Tax Complete", duration: "120 hrs", validity: "18 months", lang: "Hindi + English", price: 8499, mrp: 11999, rating: 4.9, live: true },
  { img: gst, tag: "CA Inter", title: "CA Inter — GST Mastery Batch", duration: "85 hrs", validity: "12 months", lang: "Hindi + English", price: 6499, mrp: 8999, rating: 4.9, live: false },
  { img: caFinal, tag: "CA Final", title: "CA Final — Direct Tax (Regular)", duration: "180 hrs", validity: "24 months", lang: "English", price: 12999, mrp: 17999, rating: 4.8, live: true },
  { img: cma, tag: "CA Final", title: "CA Final — DT Fast Track", duration: "55 hrs", validity: "9 months", lang: "Hindi + English", price: 5499, mrp: 7999, rating: 4.8, live: false },
  { img: gst, tag: "GST", title: "GST Master Course (Pro)", duration: "70 hrs", validity: "12 months", lang: "Hindi + English", price: 5999, mrp: 8499, rating: 4.9, live: false },
  { img: dt, tag: "CMA", title: "CMA Inter — Taxation Full", duration: "110 hrs", validity: "18 months", lang: "Hindi + English", price: 7499, mrp: 9999, rating: 4.8, live: true },
];

export function Courses() {
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our Courses</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Built for every taxation aspirant
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose from regular, fast-track, live and recorded batches — designed for CA Inter, CA Final and CMA students.
            </p>
          </div>
          <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy/5">View all courses</Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                i === 0
                  ? "bg-navy text-navy-foreground border-navy"
                  : "bg-card text-foreground/80 border-border hover:border-navy/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(c => (
            <article key={c.title} className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:shadow-elevated hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img src={c.img} alt={c.title} width={1024} height={640} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded-full bg-navy text-navy-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">{c.tag}</span>
                  {c.live && (
                    <span className="rounded-full bg-gold text-gold-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" /> Live
                    </span>
                  )}
                </div>
                <button aria-label="Preview" className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-navy backdrop-blur-sm shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-4 w-4 fill-current" />
                </button>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-semibold text-navy leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">By CA Vikram Biyani</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{c.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" />{c.lang}</span>
                  <span>· {c.validity} validity</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-gold text-sm">
                  {[...Array(5)].map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  <span className="ml-1 text-xs text-muted-foreground">{c.rating} · 2.4k students</span>
                </div>
                <div className="mt-5 pt-5 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="font-display text-2xl font-bold text-navy">₹{c.price.toLocaleString("en-IN")}</div>
                    <div className="text-xs"><span className="text-muted-foreground line-through">₹{c.mrp.toLocaleString("en-IN")}</span> <span className="text-gold font-semibold">{Math.round((1-c.price/c.mrp)*100)}% off</span></div>
                  </div>
                  <Button size="sm" className="bg-navy text-navy-foreground hover:bg-navy/90">Enroll</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
