import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/vb-logo.jpg.asset.json";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-soft" : "bg-transparent"}`}>
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo.url} alt="VB" className="h-10 w-10 rounded-xl object-contain bg-white p-0.5 shadow-soft" />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground">CA Vikram Biyani</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-brand font-semibold">Taxation Mentor</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" className="text-foreground">Sign in</Button>
          <Button className="bg-gradient-to-r from-brand to-brand-600 text-white hover:shadow-brand">Enroll Now</Button>
        </div>
        <button aria-label="Toggle menu" className="lg:hidden p-2" onClick={() => setOpen(o => !o)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">{l.label}</a>
            ))}
            <Button className="bg-gradient-to-r from-brand to-brand-600 text-white mt-2">Enroll Now</Button>
          </div>
        </div>
      )}
    </header>
  );
}
