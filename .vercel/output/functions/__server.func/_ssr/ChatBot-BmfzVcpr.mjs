import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useChat } from "../_libs/ai-sdk__react.mjs";
import { D as DefaultChatTransport } from "../_libs/ai.mjs";
import { n as Phone, u as ChevronDown, e as BookOpen, G as GraduationCap, k as Award, X, v as Menu, w as Linkedin, x as Twitter, y as Facebook, q as MapPin, o as Mail, M as MessageCircle, a as Sparkles, m as Send, z as Sun, E as Moon } from "../_libs/lucide-react.mjs";
import { M as Markdown } from "../_libs/react-markdown.mjs";
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
function useTheme() {
  const [theme, setTheme] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => t === "light" ? "dark" : "light");
  return { theme, toggleTheme, setTheme };
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/80 hover:text-brand hover:border-brand/40 hover:scale-105 active:scale-95 transition-all shadow-soft overflow-hidden",
      "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-5 w-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Sun,
          {
            className: `absolute inset-0 h-5 w-5 text-amber-500 transition-all duration-500 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Moon,
          {
            className: `absolute inset-0 h-5 w-5 text-brand transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`
          }
        )
      ] })
    }
  );
}
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
    color: "from-brand to-brand-700",
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
                        className: "col-span-3 mt-1 rounded-2xl bg-gradient-to-r from-brand to-brand-700 text-white px-4 py-3 flex items-center justify-between text-sm font-semibold hover:shadow-brand transition-shadow",
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
                href: "https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-sm font-medium text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }),
                  " WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gradient-to-r from-brand to-brand-700 text-white hover:shadow-brand", children: "Enroll Now" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gradient-to-r from-brand to-brand-700 text-white mt-2", children: "Enroll Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground/80", children: "Toggle Theme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
          ] })
        ] }) })
      ]
    }
  );
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm text-navy-foreground/80", children: [
          { label: "Courses", href: "/#courses" },
          { label: "About", href: "/#about" },
          { label: "Student Reviews", href: "/#testimonials" },
          { label: "Resources", href: "/#resources" },
          { label: "Results", href: "/#results" },
          { label: "FAQ", href: "/#faq" },
          { label: "Contact", href: "/#contact" }
        ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, className: "hover:text-gold transition-colors", children: link.label }) }, link.label)) })
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
                href: "https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-gold", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/refund-policy", className: "hover:text-gold", children: "Refund Policy" })
      ] })
    ] }) })
  ] });
}
const heroImg = "/assets/viram%20biyani%20profile-LbCwSKju.jpg";
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand via-brand-600 to-brand-800 text-white shadow-brand-lg hover:scale-110 transition-transform", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-4 py-3 bg-gradient-to-br from-brand via-brand-600 to-brand-800 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-dots opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: heroImg,
                    alt: "VB",
                    className: "h-11 w-11 rounded-full object-cover object-top border-2 border-white/80 shadow-soft"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-bold flex items-center gap-1.5", children: [
                  "Vikram Sir Bot ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" })
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
export {
  Button as B,
  ChatBot as C,
  Footer as F,
  Navbar as N,
  cn as c,
  heroImg as h
};
