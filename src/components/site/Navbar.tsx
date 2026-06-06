import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-navy-foreground font-display text-lg font-bold">V</span>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-navy">CA Vikram Biyani</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Taxation Mentor</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" className="text-navy">Sign in</Button>
          <Button className="bg-navy text-navy-foreground hover:bg-navy/90">Enroll Now</Button>
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
            <Button className="bg-navy text-navy-foreground hover:bg-navy/90 mt-2">Enroll Now</Button>
          </div>
        </div>
      )}
    </header>
  );
}
