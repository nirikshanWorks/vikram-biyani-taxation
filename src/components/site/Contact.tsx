import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="container-page grid lg:grid-cols-2 gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Get in touch
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
            Have questions? <br className="hidden md:block" />
            Talk to our team
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Fill the form and our counsellor will help you choose the right batch and answer your
            questions.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Call us", value: "+91 98307 73655", href: "tel:+919830773655" },
              { icon: Mail, label: "Email", value: "vbtaxclasses@gmail.com", href: "mailto:vbtaxclasses@gmail.com" },
              {
                icon: MessageSquare,
                label: "WhatsApp",
                value: "+91 90519 03915",
                href: "https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E",
              },
              {
                icon: MapPin,
                label: "Office",
                value: "Kenderdine Ln, Bowbazar, Kolkata, West Bengal 700012",
                href: "https://maps.google.com/?q=Kenderdine+Ln,+Bowbazar,+Kolkata,+West+Bengal+700012",
              },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-navy-foreground shrink-0">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-navy hover:text-brand transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-medium text-navy">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl bg-background border border-border p-6 md:p-8 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" className="mt-1.5" placeholder="Your name" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" className="mt-1.5" placeholder="+91" required />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="mt-1.5"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="course">Course interested in</Label>
            <Input id="course" className="mt-1.5" placeholder="e.g. CA Inter Taxation" />
          </div>
          <div className="mt-4">
            <Label htmlFor="msg">Message</Label>
            <Textarea id="msg" className="mt-1.5 min-h-28" placeholder="Tell us how we can help" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              type="submit"
              className="bg-navy text-navy-foreground hover:bg-navy/90 h-11 px-6"
            >
              Submit Inquiry
            </Button>
            <Button type="button" variant="outline" className="border-navy/20 text-navy h-11 px-6">
              Request Callback
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            By submitting, you agree to be contacted about our courses.
          </p>
        </form>
      </div>
    </section>
  );
}
