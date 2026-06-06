import { Trophy, Users, Award, TrendingUp } from "lucide-react";

const items = [
  { icon: Users, value: "50,000+", label: "Students Trained" },
  { icon: TrendingUp, value: "95%", label: "Student Satisfaction" },
  { icon: Trophy, value: "1,200+", label: "Top Rankers Mentored" },
  { icon: Award, value: "All India", label: "National Reach" },
];

export function Results() {
  return (
    <section id="results" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Proven Results</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
            Student results speak for themselves
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every batch produces rankers, exemption-scorers, and confident professionals.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(i => (
            <div key={i.label} className="rounded-2xl bg-card border border-border p-8 text-center hover:shadow-elevated transition-shadow">
              <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-accent text-navy">
                <i.icon className="h-6 w-6" />
              </span>
              <div className="mt-5 font-display text-4xl font-bold text-navy">{i.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
