import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, GraduationCap, BookOpen, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/VB-logo.jpg";
import { ThemeToggle } from "./ThemeToggle";

const courseGroups = [
  {
    icon: BookOpen,
    title: "CA Inter",
    subtitle: "Taxation (DT + GST)",
    color: "from-sky-500 to-blue-600",
    items: [
      { label: "Sep 2026 · Hard Books", price: "₹7,500" },
      { label: "Sep 2026 · PDF", price: "₹6,000" },
    ],
  },
  {
    icon: GraduationCap,
    title: "CA Final",
    subtitle: "DT · IDT · Combo",
    color: "from-brand to-brand-700",
    items: [
      { label: "Direct Tax — Nov 26 / May 27", price: "₹8,600+" },
      { label: "Indirect Tax — Nov 26 / May 27", price: "₹7,500+" },
      { label: "DT + IDT Combo", price: "₹13,200+" },
    ],
  },
  {
    icon: Award,
    title: "CMA Final",
    subtitle: "DT & IDT — Dec 26 / 27",
    color: "from-amber-500 to-orange-600",
    items: [
      { label: "Direct Tax — Hard Books", price: "₹8,600+" },
      { label: "Indirect Tax — Hard Books", price: "₹8,600+" },
    ],
  },
];

const links = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft" : "bg-background/40 backdrop-blur"}`}
    >
      {/* Top utility bar */}
      <div className="hidden md:block bg-gradient-to-r from-navy via-brand-800 to-navy text-white/90 text-[11px]">
        <div className="container-page flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-gold" /> +91 98307 73655
            </span>
            <span className="opacity-60">|</span>
            <span>vbtaxclasses@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold">★ 5.0 / 5.0</span>
            <span className="opacity-60">|</span>
            <span>50,000+ students trained</span>
          </div>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="VB"
            className="h-10 w-10 rounded-xl object-contain bg-white p-0.5 shadow-soft"
          />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground">CA Vikram Biyani</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-brand font-semibold">
              Taxation Mentor · VBTC
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              onClick={() => setCoursesOpen((o) => !o)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-brand transition-colors py-2"
              aria-expanded={coursesOpen}
            >
              Courses{" "}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${coursesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {coursesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px] animate-fade-up">
                <div className="rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-elevated p-3 grid grid-cols-3 gap-2">
                  {courseGroups.map((g) => (
                    <a
                      key={g.title}
                      href="#courses"
                      onClick={() => setCoursesOpen(false)}
                      className="group relative rounded-2xl p-4 hover:bg-brand-50 transition-colors"
                    >
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-soft`}
                      >
                        <g.icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 font-display text-base font-bold text-foreground">
                        {g.title}
                      </div>
                      <div className="text-[11px] text-brand-700 font-medium">{g.subtitle}</div>
                      <ul className="mt-3 space-y-1.5">
                        {g.items.map((it) => (
                          <li
                            key={it.label}
                            className="text-[12px] text-foreground/75 flex items-start justify-between gap-2 leading-tight"
                          >
                            <span>{it.label}</span>
                            <span className="text-brand font-semibold whitespace-nowrap">
                              {it.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </a>
                  ))}
                  <a
                    href="#courses"
                    onClick={() => setCoursesOpen(false)}
                    className="col-span-3 mt-1 rounded-2xl bg-gradient-to-r from-brand to-brand-700 text-white px-4 py-3 flex items-center justify-between text-sm font-semibold hover:shadow-brand transition-shadow"
                  >
                    <span>See all 13 batches with full details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> WhatsApp
          </a>
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-brand to-brand-700 text-white hover:shadow-brand">
            Enroll Now
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="container-page py-4 flex flex-col gap-1">
            <div className="text-[10px] uppercase tracking-widest text-brand font-bold pt-2 pb-1">
              Courses
            </div>
            {courseGroups.map((g) => (
              <a
                key={g.title}
                href="#courses"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2.5 rounded-xl hover:bg-brand-50 px-2"
              >
                <div
                  className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${g.color} text-white`}
                >
                  <g.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{g.title}</div>
                  <div className="text-[11px] text-muted-foreground">{g.subtitle}</div>
                </div>
              </a>
            ))}
            <div className="h-px bg-border my-2" />
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-brand to-brand-700 text-white mt-2">
              Enroll Now
            </Button>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-sm font-medium text-foreground/80">Toggle Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
