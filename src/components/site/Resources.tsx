import { FileText, Youtube, Newspaper, Download, ArrowUpRight } from "lucide-react";

const resources = [
  { icon: Newspaper, tag: "Tax Updates", title: "Budget 2026 — Key Direct Tax Changes Explained", date: "5 min read" },
  { icon: FileText, tag: "GST", title: "Latest GST Amendments You Must Know Before Exam", date: "8 min read" },
  { icon: Youtube, tag: "Video", title: "Capital Gains Made Simple — Full Concept", date: "32 min watch" },
  { icon: Download, tag: "Free PDF", title: "DT Revision Charts — Last 7 Days Strategy", date: "Download" },
];

export function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Free Resources</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Free updates, notes & strategy guides
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
            View blog <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map(r => (
            <a key={r.title} href="#" className="group rounded-2xl border border-border bg-background p-6 hover:shadow-elevated hover:-translate-y-1 transition-all">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-navy text-navy-foreground">
                <r.icon className="h-5 w-5" />
              </span>
              <div className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-gold">{r.tag}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy leading-snug">{r.title}</h3>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{r.date}</span>
                <ArrowUpRight className="h-4 w-4 group-hover:text-gold transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
