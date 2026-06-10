import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./Footer-BaHlnXZP.mjs";
import { O as Clock, h as BookOpen, W as Infinity } from "../_libs/lucide-react.mjs";
function TiltCard({
  children,
  className = "",
  intensity = 12
}) {
  const ref = reactExports.useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * intensity;
    const ry = (x - 0.5) * intensity;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: { transformStyle: "preserve-3d", perspective: "1200px" },
      className,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative h-full w-full transition-transform duration-300 ease-out will-change-transform",
          style: {
            transform: "rotateX(var(--rx,0)) rotateY(var(--ry,0))",
            transformStyle: "preserve-3d"
          },
          children: [
            children,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                style: {
                  background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--brand) 22%, transparent), transparent 60%)"
                }
              }
            )
          ]
        }
      )
    }
  );
}
const ca1 = "/assets/ca1-CRKuEwda.jpeg";
const ca2 = "/assets/ca2-yn-TRpf0.jpeg";
const ca3 = "/assets/ca3-CNbMfg10.jpeg";
const ca4 = "/assets/ca4-S3MFkhWH.jpeg";
const ca5 = "/assets/ca5-B11Mt4Gi.jpeg";
const ca6 = "/assets/ca6-BksghEl8.jpeg";
const ca7 = "/assets/ca7-BpwJuO2C.jpeg";
const ca8 = "/assets/ca8-DkYyOWNb.jpeg";
const ca9 = "/assets/ca9-BzbwYfMt.jpeg";
const cma1 = "/assets/cma1-4K9jtpse.jpeg";
const cma2 = "/assets/cma2-BA6tAdsw.jpeg";
const cma3 = "/assets/cma3-gvqew9x9.jpeg";
const cma4 = "/assets/cma4-DowOjwfu.jpeg";
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
    media: "Hard Books"
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
    media: "Hard Books"
  },
  {
    img: ca3,
    tag: "CA Final",
    title: "CA Final — DT + IDT Combo (Hard Books)",
    batch: "November 2026",
    hours: "350 hrs",
    books: "Hard Books",
    price: 15e3,
    mrp: 19999,
    rating: 4.9,
    live: true,
    cat: "Combo",
    media: "Hard Books"
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
    media: "PDF"
  },
  {
    img: ca5,
    tag: "CA Final",
    title: "CA Final — DT + IDT Combo (Hard Books)",
    batch: "May 2027",
    hours: "350 hrs",
    books: "Hard Books",
    price: 16500,
    mrp: 21e3,
    rating: 4.9,
    live: true,
    cat: "Combo",
    media: "Hard Books"
  },
  {
    img: ca6,
    tag: "CA Final",
    title: "CA Final — Indirect Tax (Hard Books)",
    batch: "May 2027",
    hours: "150 hrs",
    books: "Hard Books · 4 Vol",
    price: 8600,
    mrp: 11e3,
    rating: 4.9,
    live: true,
    cat: "CA Final",
    media: "Hard Books"
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
    media: "Hard Books"
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
    media: "Hard Books"
  },
  {
    img: ca9,
    tag: "CA Inter",
    title: "CA Inter — Taxation DT + GST (PDF)",
    batch: "Sep 2026",
    hours: "220 hrs",
    books: "PDF",
    price: 6e3,
    mrp: 8500,
    rating: 4.8,
    live: false,
    cat: "CA Inter",
    media: "PDF"
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
    media: "Hard Books"
  },
  {
    img: cma2,
    tag: "CMA Final",
    title: "CMA Final — Direct Tax (Hard Books)",
    batch: "December 2026",
    hours: "200 hrs",
    books: "Hard Books",
    price: 8600,
    mrp: 11e3,
    rating: 4.9,
    live: true,
    cat: "CMA Final",
    media: "Hard Books"
  },
  {
    img: cma3,
    tag: "CMA Final",
    title: "CMA Final — Indirect Tax (Hard Books)",
    batch: "June & Dec 2027",
    hours: "150 hrs",
    books: "Hard Books",
    price: 8600,
    mrp: 11e3,
    rating: 4.9,
    live: true,
    cat: "CMA Final",
    media: "Hard Books"
  },
  {
    img: cma4,
    tag: "CMA Final",
    title: "CMA Final — Indirect Tax (Hard Books)",
    batch: "December 2026",
    hours: "150 hrs",
    books: "Hard Books",
    price: 8600,
    mrp: 11e3,
    rating: 4.9,
    live: true,
    cat: "CMA Final",
    media: "Hard Books"
  }
];
function Courses() {
  const [active, setActive] = reactExports.useState("All");
  const [selectedCourse, setSelectedCourse] = reactExports.useState(courses[0]);
  const filtered = active === "All" ? courses : courses.filter((c) => c.cat === active || c.media === active);
  const displayCourse = filtered.some(
    (c) => c.title === selectedCourse.title && c.batch === selectedCourse.batch
  ) ? selectedCourse : filtered[0] || courses[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "courses", className: "py-24 lg:py-32 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-dots opacity-30 -z-10", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-brand font-semibold", children: "Our Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold text-foreground", children: [
          "Built for every ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "taxation aspirant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Regular, fast-track, live and recorded batches — choose a course from the ledger to view details." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 lg:sticky lg:top-24 self-start animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TiltCard, { className: "rounded-3xl shadow-elevated border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: displayCourse.img,
                alt: displayCourse.title,
                className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/95 dark:bg-navy/95 backdrop-blur text-brand text-[10px] font-bold uppercase tracking-wider px-3 py-1", children: displayCourse.tag }),
              displayCourse.live && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 inline-flex items-center gap-1.5 shadow-soft", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-white animate-pulse" }),
                " Live"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-white/80 uppercase tracking-widest font-semibold", children: [
              displayCourse.batch,
              " Batch"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-bold text-foreground leading-tight min-h-[3.5rem]", children: displayCourse.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-3 gap-2 text-center text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-brand-50/60 dark:bg-secondary/40 border border-brand-100/30 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4.5 w-4.5 text-brand mx-auto mb-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: displayCourse.hours }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: "Duration" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-brand-50/60 dark:bg-secondary/40 border border-brand-100/30 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4.5 w-4.5 text-brand mx-auto mb-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground truncate", children: displayCourse.media }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: "Format" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-brand-50/60 dark:bg-secondary/40 border border-brand-100/30 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "h-4.5 w-4.5 text-brand mx-auto mb-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "Unlimited" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: "Validity" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2.5 border-t border-border pt-6", children: [
              "Full syllabus coverage for CA & CMA examinations",
              "Visual mapping with special VB charts & revision guides",
              "Comprehensive MCQ question bank & mock tests",
              "24/7 dedicated query resolution & mentorship support"
            ].map((inc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-sm text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4.5 w-4.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: inc })
            ] }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Price (Inclusive of GST)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl font-extrabold text-foreground", children: [
                    "₹",
                    displayCourse.price.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground line-through", children: [
                    "₹",
                    displayCourse.mrp.toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-1", children: [
                  "Save ",
                  Math.round((1 - displayCourse.price / displayCourse.mrp) * 100),
                  "% Today"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  onClick: () => window.dispatchEvent(new CustomEvent("trigger-enroll", { detail: displayCourse })),
                  className: "bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg px-8 h-12 shrink-0 cursor-pointer",
                  children: "Enroll"
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col gap-6 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-border/60 pb-5", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActive(c),
              className: `rounded-full px-4.5 py-2 text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${active === c ? "bg-brand text-white border-brand shadow-brand" : "bg-card text-foreground/80 border-border hover:border-brand/40 hover:text-brand"}`,
              children: c
            },
            c
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 max-h-[680px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border hover:scrollbar-thumb-brand-300", children: filtered.map((c) => {
            const isSelected = c.title === displayCourse.title && c.batch === displayCourse.batch;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => setSelectedCourse(c),
                className: `group relative rounded-2xl border p-4 flex flex-col sm:flex-row items-center gap-4 cursor-pointer transition-all ${isSelected ? "bg-brand-50/50 dark:bg-secondary/40 border-brand shadow-soft" : "bg-card border-border hover:border-brand/30 hover:shadow-soft"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-24 aspect-[4/3] rounded-xl overflow-hidden bg-secondary shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: c.img,
                        alt: c.title,
                        className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      }
                    ),
                    c.live && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 left-1.5 rounded-full bg-red-500 text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5", children: "Live" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 text-center sm:text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center sm:justify-start gap-2 text-[10px] font-bold uppercase tracking-wider text-brand", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.tag }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.hours })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-1 font-display text-lg font-bold text-foreground leading-snug group-hover:text-brand transition-colors truncate", children: c.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Batch: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground/85", children: c.batch })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Books: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground/85", children: c.books })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-border shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-foreground", children: [
                        "₹",
                        c.price.toLocaleString("en-IN")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold", children: [
                        Math.round((1 - c.price / c.mrp) * 100),
                        "% OFF"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `hidden sm:grid h-7 w-7 place-items-center rounded-full border transition-all ${isSelected ? "bg-brand border-brand text-white" : "border-border text-muted-foreground group-hover:border-brand/40 group-hover:text-brand"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "→" })
                      }
                    )
                  ] })
                ]
              },
              `${c.title}-${c.batch}`
            );
          }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Courses as C,
  courses as c
};
