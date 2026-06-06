import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-gold-foreground font-display text-lg font-bold">
              V
            </span>
            <div>
              <div className="font-display text-base font-semibold">CA Vikram Biyani</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold">
                Taxation Mentor
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-navy-foreground/70 leading-relaxed">
            India's trusted taxation faculty for CA & CMA students. Master Direct Tax and GST with
            structured, exam-focused learning.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vikram-biyani-44810817b/" },
              { Icon: Twitter, href: "https://x.com/CAVikramBiyani" },
              { Icon: Facebook, href: "https://www.facebook.com/CaVikramBiyani/" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 border border-white/10 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-gold uppercase tracking-wider">
            Quick Links
          </div>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/80">
            {["Courses", "About", "Student Reviews", "Resources", "Blog", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-gold uppercase tracking-wider">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Kenderdine Ln, Bowbazar,
              Kolkata, WB 700012
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold shrink-0" />{" "}
              <a href="tel:+919830773655" className="hover:text-gold">
                +91 98307 73655
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold shrink-0" />{" "}
              <a
                href="https://wa.me/919051903915"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                +91 90519 03915 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold shrink-0" />{" "}
              <a href="mailto:vbtaxclasses@gmail.com" className="hover:text-gold">
                vbtaxclasses@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-navy-foreground/60">
          <div>© {new Date().getFullYear()} CA Vikram Biyani. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
            <a href="#" className="hover:text-gold">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
