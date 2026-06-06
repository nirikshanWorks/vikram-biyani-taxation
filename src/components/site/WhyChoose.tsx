import { BookMarked, FileCheck2, LineChart, Lightbulb, RefreshCcw, Headphones } from "lucide-react";

const items = [
  { icon: Lightbulb, title: "Concept Clarity", body: "Learn taxation from fundamentals to advanced concepts, step by step." },
  { icon: LineChart, title: "Exam-Oriented", body: "Focused strategies designed for scoring exemption-level marks." },
  { icon: RefreshCcw, title: "Updated Content", body: "Always aligned with the latest ICAI and ICMAI syllabus & amendments." },
  { icon: FileCheck2, title: "Practical Examples", body: "Real-world tax scenarios, case studies and applied problem solving." },
  { icon: BookMarked, title: "Structured Notes", body: "Easy-to-revise study material, charts and summaries before exams." },
  { icon: Headphones, title: "Lifetime Support", body: "Continuous student guidance, doubt-solving and mentorship sessions." },
];

export function WhyChoose() {
  return (
    <section className="bg-card border-y border-border py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Why Vikram Sir</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
            Why students choose <span className="text-gradient-gold">Vikram Biyani</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A teaching system built around clarity, practice and exam performance — refined over 15 years.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(i => (
            <div key={i.title} className="group relative rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-elevated hover:-translate-y-1">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-navy text-navy-foreground">
                <i.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
