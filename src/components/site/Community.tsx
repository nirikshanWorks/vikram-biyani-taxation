import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Video, Send } from "lucide-react";

export function Community() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent via-background to-card p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-navy/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                Community
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
                Join India's growing taxation learning community
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                Discussion groups, live doubt sessions, exclusive webinars and mentorship — all in
                one place with 30,000+ active students.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90 h-12">
                  <Send className="mr-2 h-4 w-4" /> Join Telegram
                </Button>
                <Button size="lg" variant="outline" className="h-12 border-navy/20 text-navy">
                  Join Discussion Group
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, k: "30k+", v: "Active Members" },
                { icon: MessageCircle, k: "Daily", v: "Doubt Sessions" },
                { icon: Video, k: "Weekly", v: "Live Webinars" },
                { icon: Send, k: "1-on-1", v: "Mentorship" },
              ].map((i) => (
                <div key={i.v} className="rounded-2xl bg-card border border-border p-5">
                  <i.icon className="h-5 w-5 text-gold" />
                  <div className="mt-4 font-display text-xl font-bold text-navy">{i.k}</div>
                  <div className="text-xs text-muted-foreground">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
