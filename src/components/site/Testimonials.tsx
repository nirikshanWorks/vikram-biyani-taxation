import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Riya Sharma", course: "CA Inter Taxation", text: "Taxation became my strongest subject because of Vikram Sir's teaching. The way he simplifies complex provisions is just unmatched." },
  { name: "Aditya Verma", course: "CA Final DT", text: "Scored 78 in DT — purely because of his structured approach and amazing revision notes. Highly recommended for serious aspirants." },
  { name: "Sneha Patil", course: "GST Master Course", text: "The practical examples helped me understand concepts quickly. I cleared GST in my first attempt with great confidence." },
  { name: "Karan Mehta", course: "CMA Inter Tax", text: "Best taxation mentor in India. His doubt-solving sessions and notes are pure gold. Worth every rupee." },
  { name: "Ananya Iyer", course: "CA Inter Complete", text: "From zero to scoring exemption — Vikram Sir made it possible. His teaching changed how I approach taxation." },
  { name: "Rahul Khanna", course: "CA Final Fast Track", text: "The fast-track batch was a lifesaver. Crisp, focused, exam-ready content. Cleared in first attempt." },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Student Stories</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
            Loved by thousands of CA & CMA students
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <figure key={i} className="relative rounded-2xl border border-border bg-background p-6 flex flex-col">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/30" />
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-foreground/80 leading-relaxed text-sm flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-navy to-navy/60 grid place-items-center text-navy-foreground font-semibold text-sm">
                  {r.name.split(" ").map(n=>n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.course}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
