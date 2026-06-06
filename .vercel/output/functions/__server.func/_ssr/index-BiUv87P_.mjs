import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { u as useChat } from "../_libs/ai-sdk__react.mjs";
import { D as DefaultChatTransport } from "../_libs/ai.mjs";
import { P as Phone, C as ChevronDown, B as BookOpen, G as GraduationCap, A as Award, X, M as Menu, S as Sparkles$1, a as ArrowRight, b as Play, U as Users, T as Trophy, c as Star, d as BadgeCheck, e as Scale, L as Lightbulb, f as ChartLine, R as RefreshCcw, F as FileCheckCorner, g as BookMarked, H as Headphones, h as Clock, I as Infinity, i as Check, Z as Zap, Q as Quote, j as TrendingUp, k as ArrowUpRight, N as Newspaper, l as FileText, Y as Youtube, D as Download, m as Send, n as MessageCircle, V as Video, o as Mail, p as MessageSquare, q as MapPin, r as Linkedin, s as Twitter, t as Facebook, u as ChevronLeft, v as Pause, w as ChevronRight } from "../_libs/lucide-react.mjs";
import { M as Markdown } from "../_libs/react-markdown.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/throttleit.mjs";
import "../_libs/ai-sdk__gateway.mjs";
import "../_libs/ai-sdk__provider-utils.mjs";
import "../_libs/ai-sdk__provider.mjs";
import "../_libs/eventsource-parser.mjs";
import "../_libs/zod.mjs";
import "../_libs/@vercel/oidc.mjs";
import "path";
import "fs";
import "os";
import "../_libs/opentelemetry__api.mjs";
import "../_libs/devlop.mjs";
import "../_libs/unified.mjs";
import "../_libs/bail.mjs";
import "../_libs/extend.mjs";
import "../_libs/is-plain-obj.mjs";
import "../_libs/trough.mjs";
import "../_libs/vfile.mjs";
import "../_libs/vfile-message.mjs";
import "../_libs/unist-util-stringify-position.mjs";
import "node:process";
import "node:path";
import "node:url";
import "../_libs/remark-parse.mjs";
import "../_libs/mdast-util-from-markdown.mjs";
import "../_libs/micromark-util-decode-numeric-character-reference+[...].mjs";
import "../_libs/micromark-util-decode-string.mjs";
import "../_libs/decode-named-character-reference+[...].mjs";
import "../_libs/character-entities.mjs";
import "../_libs/micromark-util-normalize-identifier+[...].mjs";
import "../_libs/micromark.mjs";
import "../_libs/micromark-util-combine-extensions+[...].mjs";
import "../_libs/micromark-util-chunked.mjs";
import "../_libs/micromark-factory-space.mjs";
import "../_libs/micromark-util-character.mjs";
import "../_libs/micromark-core-commonmark.mjs";
import "../_libs/micromark-util-classify-character+[...].mjs";
import "../_libs/micromark-util-resolve-all.mjs";
import "../_libs/micromark-util-subtokenize.mjs";
import "../_libs/micromark-factory-destination.mjs";
import "../_libs/micromark-factory-label.mjs";
import "../_libs/micromark-factory-title.mjs";
import "../_libs/micromark-factory-whitespace.mjs";
import "../_libs/micromark-util-html-tag-name.mjs";
import "../_libs/mdast-util-to-string.mjs";
import "../_libs/remark-rehype.mjs";
import "../_libs/mdast-util-to-hast.mjs";
import "../_libs/ungap__structured-clone.mjs";
import "../_libs/micromark-util-sanitize-uri.mjs";
import "../_libs/unist-util-position.mjs";
import "../_libs/trim-lines.mjs";
import "../_libs/unist-util-visit.mjs";
import "../_libs/unist-util-visit-parents.mjs";
import "../_libs/unist-util-is.mjs";
import "../_libs/hast-util-to-jsx-runtime.mjs";
import "../_libs/comma-separated-tokens.mjs";
import "../_libs/property-information.mjs";
import "../_libs/space-separated-tokens.mjs";
import "../_libs/style-to-js.mjs";
import "../_libs/style-to-object.mjs";
import "../_libs/inline-style-parser.mjs";
import "../_libs/hast-util-whitespace.mjs";
import "../_libs/estree-util-is-identifier-name.mjs";
import "../_libs/html-url-attributes.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logo = "/assets/VB-logo-BGlHIX8n.jpg";
const courseGroups = [
  {
    icon: BookOpen,
    title: "CA Inter",
    subtitle: "Taxation (DT + GST)",
    color: "from-sky-500 to-blue-600",
    items: [
      { label: "Sep 2026 · Hard Books", price: "₹7,500" },
      { label: "Sep 2026 · PDF", price: "₹6,000" }
    ]
  },
  {
    icon: GraduationCap,
    title: "CA Final",
    subtitle: "DT · IDT · Combo",
    color: "from-brand to-indigo-600",
    items: [
      { label: "Direct Tax — Nov 26 / May 27", price: "₹8,600+" },
      { label: "Indirect Tax — Nov 26 / May 27", price: "₹7,500+" },
      { label: "DT + IDT Combo", price: "₹13,200+" }
    ]
  },
  {
    icon: Award,
    title: "CMA Final",
    subtitle: "DT & IDT — Dec 26 / 27",
    color: "from-amber-500 to-orange-600",
    items: [
      { label: "Direct Tax — Hard Books", price: "₹8,600+" },
      { label: "Indirect Tax — Hard Books", price: "₹8,600+" }
    ]
  }
];
const links = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [coursesOpen, setCoursesOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `sticky top-0 z-40 transition-all ${scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft" : "bg-background/40 backdrop-blur"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-gradient-to-r from-navy via-brand-800 to-navy text-white/90 text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-between h-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-gold" }),
              " +91 98307 73655"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "vbtaxclasses@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "★ 5.0 / 5.0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50,000+ students trained" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logo,
                alt: "VB",
                className: "h-10 w-10 rounded-xl object-contain bg-white p-0.5 shadow-soft"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold text-foreground", children: "CA Vikram Biyani" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-brand font-semibold", children: "Taxation Mentor · VBTC" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setCoursesOpen(true),
                onMouseLeave: () => setCoursesOpen(false),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setCoursesOpen((o) => !o),
                      className: "flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-brand transition-colors py-2",
                      "aria-expanded": coursesOpen,
                      children: [
                        "Courses",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: `h-3.5 w-3.5 transition-transform ${coursesOpen ? "rotate-180" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  coursesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px] animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-elevated p-3 grid grid-cols-3 gap-2", children: [
                    courseGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "#courses",
                        onClick: () => setCoursesOpen(false),
                        className: "group relative rounded-2xl p-4 hover:bg-brand-50 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-soft`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-5 w-5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-base font-bold text-foreground", children: g.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-brand-700 font-medium", children: g.subtitle }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "li",
                            {
                              className: "text-[12px] text-foreground/75 flex items-start justify-between gap-2 leading-tight",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-semibold whitespace-nowrap", children: it.price })
                              ]
                            },
                            it.label
                          )) })
                        ]
                      },
                      g.title
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "#courses",
                        onClick: () => setCoursesOpen(false),
                        className: "col-span-3 mt-1 rounded-2xl bg-gradient-to-r from-brand to-indigo-600 text-white px-4 py-3 flex items-center justify-between text-sm font-semibold hover:shadow-brand transition-shadow",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "See all 13 batches with full details" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
                        ]
                      }
                    )
                  ] }) })
                ]
              }
            ),
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: l.href,
                className: "text-sm font-medium text-foreground/80 hover:text-brand transition-colors relative group",
                children: [
                  l.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all group-hover:w-full" })
                ]
              },
              l.href
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/919051903915",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-sm font-medium text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }),
                  " WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gradient-to-r from-brand to-indigo-600 text-white hover:shadow-brand", children: "Enroll Now" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              className: "lg:hidden p-2",
              onClick: () => setOpen((o) => !o),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-4 flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-brand font-bold pt-2 pb-1", children: "Courses" }),
          courseGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#courses",
              onClick: () => setOpen(false),
              className: "flex items-center gap-3 py-2.5 rounded-xl hover:bg-brand-50 px-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${g.color} text-white`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: g.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: g.subtitle })
                ] })
              ]
            },
            g.title
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border my-2" }),
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "py-2 text-sm font-medium",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gradient-to-r from-brand to-indigo-600 text-white mt-2", children: "Enroll Now" })
        ] }) })
      ]
    }
  );
}
const vikram = "/assets/viram%20biyani%20profile-LbCwSKju.jpg";
function WordRotate({
  words,
  className = "",
  interval = 2200
}) {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `relative inline-grid align-bottom overflow-hidden ${className}`, children: [
    words.map((w, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "col-start-1 row-start-1 transition-all duration-500 ease-out",
        style: {
          opacity: idx === i ? 1 : 0,
          transform: `translateY(${idx === i ? "0" : idx < i ? "-100%" : "100%"})`
        },
        "aria-hidden": idx !== i,
        children: w
      },
      w
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-start-1 row-start-1 invisible whitespace-nowrap", children: words.reduce((a, b) => a.length > b.length ? a : b) })
  ] });
}
function AnimatedCounter({
  to,
  duration = 1600,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = ""
}) {
  const [value, setValue] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(to * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    prefix,
    value.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }),
    suffix
  ] });
}
function Sparkles({ count = 14, className = "" }) {
  const sparkles = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 4,
      duration: 2.5 + Math.random() * 2.5
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
      "aria-hidden": true,
      children: sparkles.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "absolute animate-sparkle text-gold",
          style: {
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`
          },
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" })
        },
        s.id
      ))
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-brand-50",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl animate-blob -z-10",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-20 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-400/25 blur-3xl animate-blob [animation-delay:3s] -z-10",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-indigo-400/20 blur-3xl animate-blob [animation-delay:6s] -z-10",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-dots opacity-[0.35] -z-10", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 18, className: "-z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-10 items-center pt-14 pb-24 lg:pt-20 lg:pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-brand-700 shadow-soft hover:scale-105 transition-transform", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles$1, { className: "h-3.5 w-3.5 text-gold animate-wiggle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-brand" })
          ] }),
          "India's #1 Taxation Mentor for CA & CMA"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground", children: [
          "Master",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            WordRotate,
            {
              words: ["Taxation", "Direct Tax", "GST", "Success"],
              className: "text-gradient-animated"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
            "Confidence",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "absolute -bottom-2 left-0 w-full",
                height: "14",
                viewBox: "0 0 300 14",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M2 9 C 80 2, 220 2, 298 9",
                      stroke: "url(#u)",
                      strokeWidth: "4",
                      strokeLinecap: "round",
                      fill: "none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "u", x1: "0", x2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "oklch(0.55 0.22 264)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "oklch(0.72 0.18 220)" })
                  ] }) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block ml-2 animate-bounce-soft", children: "🎓" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed", children: [
          "Live & recorded courses in Direct Tax and GST by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "CA Vikram Biyani" }),
          " — trusted by 50,000+ CA & CMA students across India."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "group relative h-12 px-6 bg-gradient-to-r from-brand via-indigo-500 to-brand-600 text-white shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5 transition-all overflow-hidden animate-gradient",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Enroll Now" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "relative ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "h-12 px-6 border-brand/30 text-brand-700 hover:bg-brand-50 hover:scale-105 transition-transform",
              children: "Explore Courses"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "ghost", className: "h-12 px-4 text-foreground group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-brand text-white mr-2 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5 fill-current" }) }),
            "Watch Demo"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 max-w-md gap-4", children: [
          { i: Users, v: 50, suf: "K+", l: "Students" },
          { i: Trophy, v: 1200, suf: "+", l: "Top Rankers" },
          { i: Star, v: 4.9, suf: "/5", l: "12K Reviews", dec: 1 }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group rounded-2xl border border-border/70 bg-white/60 backdrop-blur p-3 hover:bg-white hover:-translate-y-1 hover:shadow-soft transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "h-4 w-4 text-brand group-hover:scale-125 group-hover:text-gold transition-all" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-xl font-bold text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { to: s.v, suffix: s.suf, decimals: s.dec ?? 0 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: s.l })
            ]
          },
          s.l
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative animate-fade-up [animation-delay:120ms]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-md aspect-[4/5]", style: { perspective: "1200px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand via-cyan-400 to-indigo-500 blur-2xl opacity-40 animate-pulse-slow",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[2.5rem] bg-grid-dots opacity-60",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full rounded-[2rem] overflow-hidden border border-white shadow-elevated bg-gradient-to-br from-brand-50 to-white animate-float-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: vikram,
              alt: "CA Vikram Biyani",
              className: "h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-display text-2xl font-bold leading-tight", children: "CA Vikram Biyani" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-xs", children: "B.Com, FCA · 15+ years teaching" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -left-6 top-10 rounded-2xl bg-white border border-border shadow-elevated p-4 w-52 animate-float-soft [animation-delay:.6s]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Live Batch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "CA Final Nov '26" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[78%] bg-gradient-to-r from-brand to-cyan-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-muted-foreground", children: "78% seats filled" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -right-4 top-32 rounded-2xl bg-gradient-to-br from-brand to-indigo-600 text-white shadow-brand-lg p-4 w-44 animate-float-soft [animation-delay:1.2s]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest opacity-80", children: "All India Rank" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-display font-bold", children: "AIR 12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-90", children: "CA Final DT — May '25" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 left-8 rounded-2xl bg-white border border-border shadow-elevated p-3 w-56 animate-float-soft [animation-delay:1.8s]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-brand to-cyan-400"
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "50,000+ students" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 text-[10px] text-amber-500", children: [
              [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-2.5 w-2.5 fill-current" }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-muted-foreground", children: "4.9/5" })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border" }),
      " Trusted by India's top CA & CMA aspirants"
    ] }) })
  ] });
}
const stats = [
  { value: "50,000+", label: "Students Trained" },
  { value: "100K+", label: "Hours Delivered" },
  { value: "500+", label: "Video Lectures" },
  { value: "95%", label: "Satisfaction Rate" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page grid grid-cols-2 md:grid-cols-4 gap-8 py-10", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl font-bold text-navy", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs md:text-sm uppercase tracking-wider text-muted-foreground", children: s.label })
  ] }, s.label)) }) });
}
const features = [
  { icon: Scale, label: "Direct Tax Specialist" },
  { icon: BookOpen, label: "GST Expert" },
  { icon: GraduationCap, label: "CA & CMA Mentor" },
  { icon: Users, label: "Student-Centric" },
  { icon: Sparkles$1, label: "Practical Approach" },
  { icon: BadgeCheck, label: "ICAI Aligned" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-12 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden border border-border shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: vikram,
          alt: "CA Vikram Biyani",
          width: 1024,
          height: 1280,
          loading: "lazy",
          className: "w-full"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-4 bg-navy text-navy-foreground rounded-2xl p-5 shadow-elevated max-w-[220px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-gold", children: "15+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider opacity-90", children: "Years teaching CA & CMA students" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-navy", children: "Meet CA Vikram Biyani" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-foreground/80 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CA Vikram Biyani is a renowned Chartered Accountant and Taxation Faculty specializing in Direct Tax and GST for CA and CMA students. Known for his practical teaching methodology, conceptual clarity, and exam-oriented approach, he has helped thousands of students build strong foundations in taxation and achieve professional success." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "His teaching philosophy focuses on simplifying complex tax provisions through real-world examples, visual learning techniques, and structured study plans that maximize exam performance." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 rounded-xl border border-border bg-card p-3.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-accent text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-navy", children: f.label })
          ]
        },
        f.label
      )) })
    ] })
  ] }) });
}
const items$1 = [
  {
    icon: Lightbulb,
    title: "Concept Clarity",
    body: "Learn taxation from fundamentals to advanced concepts, step by step."
  },
  {
    icon: ChartLine,
    title: "Exam-Oriented",
    body: "Focused strategies designed for scoring exemption-level marks."
  },
  {
    icon: RefreshCcw,
    title: "Updated Content",
    body: "Always aligned with the latest ICAI and ICMAI syllabus & amendments."
  },
  {
    icon: FileCheckCorner,
    title: "Practical Examples",
    body: "Real-world tax scenarios, case studies and applied problem solving."
  },
  {
    icon: BookMarked,
    title: "Structured Notes",
    body: "Easy-to-revise study material, charts and summaries before exams."
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    body: "Continuous student guidance, doubt-solving and mentorship sessions."
  }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-y border-border py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "Why Vikram Sir" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-navy", children: [
        "Why students choose ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Vikram Biyani" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A teaching system built around clarity, practice and exam performance — refined over 15 years." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: items$1.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-elevated hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid h-12 w-12 place-items-center rounded-xl bg-navy text-navy-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-semibold text-navy", children: i.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: i.body })
        ]
      },
      i.title
    )) })
  ] }) });
}
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
  const filtered = active === "All" ? courses : courses.filter((c) => c.cat === active || c.media === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "courses", className: "py-24 lg:py-32 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-dots opacity-30 -z-10", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-brand font-semibold", children: "Our Courses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold text-foreground", children: [
            "Built for every ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "taxation aspirant" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Regular, fast-track, live and recorded batches — built for CA Inter, CA Final and CMA students." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "border-brand/30 text-brand-700 hover:bg-brand-50", children: "View all courses" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActive(c),
          className: `rounded-full px-4 py-2 text-sm font-medium border transition-all ${active === c ? "bg-gradient-to-r from-brand to-brand-600 text-white border-transparent shadow-brand" : "bg-card text-foreground/80 border-border hover:border-brand/40 hover:text-brand-700"}`,
          children: c
        },
        c
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { className: "group rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative rounded-2xl border border-border bg-card overflow-hidden flex flex-col h-full shadow-soft hover:shadow-elevated transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: c.img,
              alt: c.title,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/95 backdrop-blur text-brand text-[10px] font-bold uppercase tracking-wider px-2.5 py-1", children: c.tag }),
            c.live && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-white animate-pulse" }),
              " Live"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Preview",
              className: "absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full bg-white text-brand shadow-elevated opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 fill-current" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground leading-snug min-h-[3.5rem]", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-brand font-medium", children: [
            c.batch,
            " batch"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-2 text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg bg-brand-50 text-brand-700 px-2 py-1.5 inline-flex items-center gap-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              c.hours
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg bg-brand-50 text-brand-700 px-2 py-1.5 inline-flex items-center gap-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
              c.books
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg bg-brand-50 text-brand-700 px-2 py-1.5 inline-flex items-center gap-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "h-3 w-3" }),
              "Unlimited"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1 text-amber-500 text-sm", children: [
            [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs text-muted-foreground", children: [
              c.rating,
              " · 2.4k students"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-5 border-t border-border flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-foreground", children: [
                "₹",
                c.price.toLocaleString("en-IN")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground line-through", children: [
                  "₹",
                  c.mrp.toLocaleString("en-IN")
                ] }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600 font-semibold", children: [
                  Math.round((1 - c.price / c.mrp) * 100),
                  "% off"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "bg-gradient-to-r from-brand to-brand-600 text-white hover:shadow-brand",
                children: "Enroll"
              }
            )
          ] })
        ] })
      ] }) }, c.title)) })
    ] })
  ] });
}
const course = "/assets/course-cafinal-Cg4qeutg.jpg";
const inclusions = [
  "Complete Direct Tax syllabus",
  "Complete GST + Customs syllabus",
  "5 Volume coloured hard books",
  "350+ hours live mentorship",
  "Unlimited views & validity",
  "10,000+ MCQ question bank",
  "Full-length mock test series",
  "24×7 doubt support"
];
function Featured() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-indigo-900 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-400/30 blur-3xl animate-blob",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-indigo-500/30 blur-3xl animate-blob [animation-delay:4s]",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-dots opacity-20", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles$1, { className: "h-3.5 w-3.5 text-amber-300" }),
          " Bestselling · #1 in CA Final 2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05]", children: [
          "CA Final —",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent", children: "DT + IDT" }),
          " ",
          "Combo"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/80 max-w-lg text-lg", children: "One batch. Both papers. Everything you need to crack CA Final Taxation — Direct Tax + GST + Customs with hard books, mocks & live mentorship." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3", children: inclusions.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-400/20 text-emerald-300 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3", strokeWidth: 3 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90", children: i })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "h-12 bg-white text-brand-700 hover:bg-white/90 hover:shadow-2xl group",
              children: [
                "Enroll Now",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-300 font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 fill-current" }),
              " Early bird · Limited seats"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60", children: "Save ₹4,999 — offer ends soon" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", style: { perspective: "1500px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative animate-float-soft",
          style: { transform: "rotateY(-12deg) rotateX(6deg)", transformStyle: "preserve-3d" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-400 via-brand to-indigo-500 blur-2xl opacity-50",
                "aria-hidden": true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: course, alt: "CA Final DT IDT Combo", className: "w-full h-auto" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute -top-5 -right-5 rounded-2xl bg-white text-brand-700 shadow-2xl px-4 py-3",
                style: { transform: "translateZ(40px)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Starting" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold", children: [
                    "₹15,000",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "/-" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute -bottom-5 -left-5 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-2xl px-4 py-3",
                style: { transform: "translateZ(40px)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest opacity-90", children: "Save" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold", children: "₹4,999" })
                ]
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}
function TestimonialCarousel({ reviews: reviews2 }) {
  const [index, setIndex] = reactExports.useState(0);
  const [playing, setPlaying] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews2.length), 5e3);
    return () => clearInterval(id);
  }, [playing, reviews2.length]);
  const go = (delta) => setIndex((i) => (i + delta + reviews2.length) % reviews2.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-indigo-400/15 to-gold/20 blur-2xl opacity-70",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[360px] md:h-[300px]", children: reviews2.map((r, i) => {
        const offset = i - index;
        const active = i === index;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "figure",
          {
            "aria-hidden": !active,
            className: "absolute inset-0 p-8 md:p-12 flex flex-col transition-all duration-700 ease-out",
            style: {
              opacity: active ? 1 : 0,
              transform: active ? "translateX(0) scale(1)" : `translateX(${offset > 0 ? 40 : -40}px) scale(0.97)`,
              pointerEvents: active ? "auto" : "none"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-gold/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center gap-1 text-gold", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: "h-4 w-4 fill-current",
                  style: {
                    animation: active ? `sparkle 1.2s ease-out ${j * 100}ms both` : "none"
                  }
                },
                j
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-base md:text-lg text-foreground/85 leading-relaxed flex-1 line-clamp-5", children: [
                '"',
                r.text,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 pt-4 border-t border-border flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-gradient-to-br from-brand to-indigo-500 grid place-items-center text-white font-semibold", children: r.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy truncate", children: r.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: r.meta })
                ] })
              ] })
            ]
          },
          i
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-gradient-to-r from-brand via-indigo-500 to-gold",
          style: {
            animation: playing ? "progress 5s linear forwards" : "none",
            width: playing ? void 0 : "0%"
          }
        },
        `${index}-${playing}`
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => go(-1),
          className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-brand hover:text-white hover:border-brand transition-all hover:-translate-x-0.5",
          "aria-label": "Previous review",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: reviews2.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIndex(i),
          "aria-label": `Go to review ${i + 1}`,
          className: "h-2 rounded-full transition-all",
          style: {
            width: i === index ? 28 : 8,
            background: i === index ? "linear-gradient(90deg, var(--brand), oklch(0.8 0.16 78))" : "var(--border)"
          }
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setPlaying((p) => !p),
            className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-brand-50 transition-colors",
            "aria-label": playing ? "Pause" : "Play",
            children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => go(1),
            className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-brand hover:text-white hover:border-brand transition-all hover:translate-x-0.5",
            "aria-label": "Next review",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const translate = direction === "up" ? "translate3d(0,28px,0)" : direction === "down" ? "translate3d(0,-28px,0)" : direction === "left" ? "translate3d(28px,0,0)" : direction === "right" ? "translate3d(-28px,0,0)" : "none";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform"
      },
      children
    }
  );
}
const reviews = [
  {
    name: "Santosh Sarkar",
    meta: "3 reviews · a year ago",
    text: "Vikram sir is an exceptional tax mentor who truly knows how to inspire and motivate his students. His unique teaching style combines in-depth knowledge with engaging delivery. He ensures every student understands the material and is always approachable for clearing doubts."
  },
  {
    name: "Abhishek Mohata",
    meta: "Local Guide · 14 reviews",
    text: "Old student from 7/1A Grant Lane, year 2010. We had a wonderful time taking tax and life lessons from Sir. He would randomly ask questions to test us and always wanted us to score big — not merely get pass marks. Thanks & regards."
  },
  {
    name: "Aaditya (166_AADITYA)",
    meta: "3 years ago",
    text: "Studied from Dada for Nov 22. Best faculty for preparing tax. Dada treats his students like his own kids, never misses any query and always prepares us conceptually. The charts he prepares are extremely helpful during revision."
  },
  {
    name: "Nagesh Naik",
    meta: "2 reviews · 2 years ago",
    text: "Have seen many teachers teaching taxation but what VB sir does is unthinkable. He creates magic while you learn. You'll fall in love with the subject. Full of fun, in-depth discussions and practical insights. He's the best!"
  },
  {
    name: "Karan Chaudhary",
    meta: "a year ago",
    text: "Hello Dada 🙏 Your passion for teaching is contagious and has made learning truly enjoyable. The way you explain complex topics is clear, concise, and engaging — specially the charts prepared during sessions. Brilliant teaching style!"
  },
  {
    name: "Abhrasom Chakraborty",
    meta: "2 reviews · a year ago",
    text: "Vikram sir (Dada) is the best teacher in my life. If anyone has simplified tax in our heads, it is only Vikram sir. In my eyes he is definitely a TAX GOD 😊"
  },
  {
    name: "Umesh Khunger",
    meta: "4 reviews · 3 years ago",
    text: "I am blessed to have a teacher like you ❤ who not only teaches subjects. Best faculty for taxation and famous for loveable teaching style 🔥 & motivation through poetry. Thanks a million Dada for your love & support."
  },
  {
    name: "Sayan Makhal",
    meta: "3 years ago",
    text: "THE BEST TEACHER FOR TAX ❤ Sir is not only an amazing teacher but an amazing person with a beautiful heart. His teaching makes concepts easy to understand and remember. Cleared my tax paper thanks to him."
  },
  {
    name: "Hansinee",
    meta: "2 reviews · 2 years ago",
    text: "No one teaches with such high enthusiasm and love for this subject. Every time the charts get simpler. He covers 20–30 pages of concept in 1–2 pages by SPECIAL VB CHARTS. Highly recommended! Always grateful to sir."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "py-20 lg:py-28 bg-card border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "Student Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-navy", children: "Loved by thousands of CA & CMA students" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Real, unedited reviews from students on Google." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.google.com/search?q=Vikram+Biyani+Tax+Classes+VBTC+Kolkata",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-gold", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold text-navy leading-none", children: "5.0 / 5.0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: "669+ Google reviews" })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, className: "mt-12 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCarousel, { reviews }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: reviews.slice(0, 6).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative h-full rounded-2xl border border-border bg-background p-6 flex flex-col hover:-translate-y-1 hover:shadow-elevated transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-5 right-5 h-8 w-8 text-gold/30 group-hover:text-gold/60 transition-colors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-gold", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, j)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-foreground/80 leading-relaxed text-sm flex-1 line-clamp-5", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 pt-5 border-t border-border flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gradient-to-br from-navy to-navy/60 grid place-items-center text-navy-foreground font-semibold text-sm", children: r.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy text-sm truncate", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: r.meta })
        ] })
      ] })
    ] }) }, i)) })
  ] }) });
}
const items = [
  { icon: Users, value: "50,000+", label: "Students Trained" },
  { icon: TrendingUp, value: "95%", label: "Student Satisfaction" },
  { icon: Trophy, value: "1,200+", label: "Top Rankers Mentored" },
  { icon: Award, value: "All India", label: "National Reach" }
];
function Results() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "results", className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "Proven Results" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-navy", children: "Student results speak for themselves" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every batch produces rankers, exemption-scorers, and confident professionals." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl bg-card border border-border p-8 text-center hover:shadow-elevated transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid h-14 w-14 place-items-center rounded-2xl bg-accent text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 font-display text-4xl font-bold text-navy", children: i.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: i.label })
        ]
      },
      i.label
    )) })
  ] }) });
}
const resources = [
  {
    icon: Newspaper,
    tag: "Tax Updates",
    title: "Budget 2026 — Key Direct Tax Changes Explained",
    date: "5 min read"
  },
  {
    icon: FileText,
    tag: "GST",
    title: "Latest GST Amendments You Must Know Before Exam",
    date: "8 min read"
  },
  {
    icon: Youtube,
    tag: "Video",
    title: "Capital Gains Made Simple — Full Concept",
    date: "32 min watch"
  },
  {
    icon: Download,
    tag: "Free PDF",
    title: "DT Revision Charts — Last 7 Days Strategy",
    date: "Download"
  }
];
function Resources() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "resources", className: "py-20 lg:py-28 bg-card border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "Free Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-navy", children: "Free updates, notes & strategy guides" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#",
          className: "inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors",
          children: [
            "View blog ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: resources.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "#",
        className: "group rounded-2xl border border-border bg-background p-6 hover:shadow-elevated hover:-translate-y-1 transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid h-11 w-11 place-items-center rounded-xl bg-navy text-navy-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-[10px] font-semibold uppercase tracking-wider text-gold", children: r.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-lg font-semibold text-navy leading-snug", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 group-hover:text-gold transition-colors" })
          ] })
        ]
      },
      r.title
    )) })
  ] }) });
}
function Community() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent via-background to-card p-8 md:p-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-navy/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "Community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-navy leading-tight", children: "Join India's growing taxation learning community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-lg", children: "Discussion groups, live doubt sessions, exclusive webinars and mentorship — all in one place with 30,000+ active students." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-navy text-navy-foreground hover:bg-navy/90 h-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 h-4 w-4" }),
            " Join Telegram"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "h-12 border-navy/20 text-navy", children: "Join Discussion Group" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
        { icon: Users, k: "30k+", v: "Active Members" },
        { icon: MessageCircle, k: "Daily", v: "Doubt Sessions" },
        { icon: Video, k: "Weekly", v: "Live Webinars" },
        { icon: Send, k: "1-on-1", v: "Mentorship" }
      ].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "h-5 w-5 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-xl font-bold text-navy", children: i.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: i.v })
      ] }, i.v)) })
    ] })
  ] }) }) });
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const faqs = [
  {
    q: "Which course is suitable for CA Inter?",
    a: "Our CA Inter Taxation Complete Batch covers both Direct Tax and GST as per the latest ICAI syllabus and is the best fit for CA Inter aspirants."
  },
  {
    q: "Are recorded lectures available?",
    a: "Yes. Every live batch is recorded and available in your dashboard with full validity, so you can revise any topic anytime."
  },
  {
    q: "How long is the course validity?",
    a: "Validity ranges from 9 to 24 months depending on the batch type. Each course page shows the exact validity."
  },
  {
    q: "Do I get study materials?",
    a: "Yes — printed and digital revision notes, charts, summary sheets, MCQ banks and mock tests are all included."
  },
  {
    q: "Are classes available in Hindi and English?",
    a: "Most of our batches are delivered in a Hindi + English mix. Some advanced batches are in English only — clearly mentioned on each course."
  },
  {
    q: "How can I contact support?",
    a: "Reach us via the contact form below, WhatsApp, email, or the Telegram community. Our team responds within a few hours."
  }
];
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-bold text-navy", children: "Everything you wanted to ask" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Can't find your answer? Drop us a message — we usually reply within a few hours." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AccordionItem,
      {
        value: `item-${i}`,
        className: "rounded-2xl border border-border bg-card px-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-semibold text-navy hover:no-underline py-5", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed pb-5", children: f.a })
        ]
      },
      i
    )) }) })
  ] }) });
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-20 lg:py-28 bg-card border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-2 gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-navy", children: [
        "Have questions? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
        "Talk to our team"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "Fill the form and our counsellor will help you choose the right batch and answer your questions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5", children: [
        { icon: Phone, label: "Call us", value: "+91 98307 73655" },
        { icon: Mail, label: "Email", value: "vbtaxclasses@gmail.com" },
        { icon: MessageSquare, label: "WhatsApp", value: "+91 90519 03915" },
        {
          icon: MapPin,
          label: "Office",
          value: "Kenderdine Ln, Bowbazar, Kolkata, West Bengal 700012"
        }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-navy text-navy-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-navy", children: c.value })
        ] })
      ] }, c.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: (e) => e.preventDefault(),
        className: "rounded-3xl bg-background border border-border p-6 md:p-8 shadow-soft",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", className: "mt-1.5", placeholder: "Your name", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", className: "mt-1.5", placeholder: "+91", required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                className: "mt-1.5",
                placeholder: "you@example.com",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "course", children: "Course interested in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "course", className: "mt-1.5", placeholder: "e.g. CA Inter Taxation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "msg", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "msg", className: "mt-1.5 min-h-28", placeholder: "Tell us how we can help" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "bg-navy text-navy-foreground hover:bg-navy/90 h-11 px-6",
                children: "Submit Inquiry"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", className: "border-navy/20 text-navy h-11 px-6", children: "Request Callback" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "By submitting, you agree to be contacted about our courses." })
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy text-navy-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-gold text-gold-foreground font-display text-lg font-bold", children: "V" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-semibold", children: "CA Vikram Biyani" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-gold", children: "Taxation Mentor" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-navy-foreground/70 leading-relaxed", children: "India's trusted taxation faculty for CA & CMA students. Master Direct Tax and GST with structured, exam-focused learning." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [
          { Icon: Linkedin, href: "https://www.linkedin.com/in/vikram-biyani-44810817b/" },
          { Icon: Twitter, href: "https://x.com/CAVikramBiyani" },
          { Icon: Facebook, href: "https://www.facebook.com/CaVikramBiyani/" }
        ].map(({ Icon, href }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "grid h-10 w-10 place-items-center rounded-lg bg-white/5 border border-white/10 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gold uppercase tracking-wider", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm text-navy-foreground/80", children: ["Courses", "About", "Student Reviews", "Resources", "Blog", "Contact"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gold uppercase tracking-wider", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
            " Kenderdine Ln, Bowbazar, Kolkata, WB 700012"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold shrink-0" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919830773655", className: "hover:text-gold", children: "+91 98307 73655" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold shrink-0" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/919051903915",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-gold",
                children: "+91 90519 03915 (WhatsApp)"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-gold shrink-0" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:vbtaxclasses@gmail.com", className: "hover:text-gold", children: "vbtaxclasses@gmail.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-navy-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CA Vikram Biyani. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Refund Policy" })
      ] })
    ] }) })
  ] });
}
const SUGGESTIONS = [
  "What's the fee for CA Inter Taxation?",
  "Difference between Hard Books and PDF?",
  "Which batch is best for May 2027?",
  "How do I enrol?"
];
const GREETING = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Namaste 🙏 I'm **Vikram Sir Bot** — here to help you choose the right CA / CMA Taxation course. Ask me anything about batches, fees, books or admissions!"
    }
  ]
};
function ChatBot() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const scrollRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const { messages, sendMessage, status } = useChat({
    id: "vbtc-bot",
    messages: [GREETING],
    transport: new DefaultChatTransport({ api: "/api/chat" })
  });
  const busy = status === "submitted" || status === "streaming";
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);
  reactExports.useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);
  const submit = (text) => {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((o) => !o),
        "aria-label": "Open chat",
        className: "fixed bottom-5 right-5 z-50 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-brand/40 blur-xl animate-pulse-slow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand via-brand-600 to-indigo-600 text-white shadow-brand-lg hover:scale-110 transition-transform", children: [
            open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
            !open && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" })
          ] }),
          !open && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-medium px-3 py-1.5 shadow-elevated opacity-0 group-hover:opacity-100 transition-opacity", children: "Ask Vikram Sir Bot" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-24 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-w-md animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-3xl bg-background border border-border shadow-elevated overflow-hidden flex flex-col",
        style: { height: "min(70vh, 600px)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-4 py-3 bg-gradient-to-br from-brand via-brand-600 to-indigo-700 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-dots opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: vikram,
                    alt: "VB",
                    className: "h-11 w-11 rounded-full object-cover object-top border-2 border-white/80 shadow-soft"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-bold flex items-center gap-1.5", children: [
                  "Vikram Sir Bot ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles$1, { className: "h-3.5 w-3.5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] opacity-90", children: "Usually replies instantly · CA & CMA counselling" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  "aria-label": "Close",
                  className: "p-1.5 rounded-lg hover:bg-white/10 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: scrollRef,
              className: "flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-brand-50/40 to-background",
              children: [
                messages.map((m) => {
                  const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
                  if (!text) return null;
                  const mine = m.role === "user";
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${mine ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-soft ${mine ? "bg-gradient-to-br from-brand to-brand-600 text-white rounded-br-md" : "bg-card border border-border text-foreground rounded-bl-md"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-strong:text-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: text }) })
                    }
                  ) }, m.id);
                }),
                status === "submitted" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "h-2 w-2 rounded-full bg-brand/60 animate-bounce",
                    style: { animationDelay: `${i * 120}ms` }
                  },
                  i
                )) }) }) })
              ]
            }
          ),
          messages.length <= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-2 flex flex-wrap gap-1.5 border-t border-border pt-3 bg-background", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => submit(s),
              disabled: busy,
              className: "text-[11px] px-2.5 py-1.5 rounded-full border border-brand/30 text-brand-700 bg-brand-50 hover:bg-brand hover:text-white transition-colors disabled:opacity-50",
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                submit(input);
              },
              className: "flex items-center gap-2 px-3 py-3 border-t border-border bg-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: inputRef,
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    placeholder: "Ask about courses, fees, batches…",
                    disabled: busy,
                    className: "flex-1 h-11 px-4 rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:opacity-60"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: busy || !input.trim(),
                    className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-brand disabled:opacity-40 hover:scale-105 transition-transform",
                    "aria-label": "Send",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                  }
                )
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChoose, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Courses, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Featured, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Results, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Resources, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Community, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatBot, {})
  ] });
}
export {
  Index as component
};
