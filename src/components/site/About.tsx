import { BadgeCheck, BookOpen, GraduationCap, Scale, Sparkles, Users } from "lucide-react";
import heroImg from "@/assets/viram biyani profile.jpg";

const features = [
  { icon: Scale, label: "Direct Tax Specialist" },
  { icon: BookOpen, label: "GST Expert" },
  { icon: GraduationCap, label: "CA & CMA Mentor" },
  { icon: Users, label: "Student-Centric" },
  { icon: Sparkles, label: "Practical Approach" },
  { icon: BadgeCheck, label: "ICAI Aligned" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-border shadow-elevated">
            <img
              src={heroImg}
              alt="CA Vikram Biyani"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-navy text-navy-foreground rounded-2xl p-5 shadow-elevated max-w-[220px]">
            <div className="font-display text-3xl font-bold text-gold">15+</div>
            <div className="text-xs uppercase tracking-wider opacity-90">
              Years teaching CA & CMA students
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">About</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
            Meet CA Vikram Biyani
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              CA Vikram Biyani is a renowned Chartered Accountant and Taxation Faculty specializing
              in Direct Tax and GST for CA and CMA students. Known for his practical teaching
              methodology, conceptual clarity, and exam-oriented approach, he has helped thousands
              of students build strong foundations in taxation and achieve professional success.
            </p>
            <p>
              His teaching philosophy focuses on simplifying complex tax provisions through
              real-world examples, visual learning techniques, and structured study plans that
              maximize exam performance.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-navy">
                  <f.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm font-medium text-navy">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
