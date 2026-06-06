import { Star, Quote } from "lucide-react";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { Reveal } from "./Reveal";

const reviews = [
  { name: "Santosh Sarkar", meta: "3 reviews · a year ago", text: "Vikram sir is an exceptional tax mentor who truly knows how to inspire and motivate his students. His unique teaching style combines in-depth knowledge with engaging delivery. He ensures every student understands the material and is always approachable for clearing doubts." },
  { name: "Abhishek Mohata", meta: "Local Guide · 14 reviews", text: "Old student from 7/1A Grant Lane, year 2010. We had a wonderful time taking tax and life lessons from Sir. He would randomly ask questions to test us and always wanted us to score big — not merely get pass marks. Thanks & regards." },
  { name: "Aaditya (166_AADITYA)", meta: "3 years ago", text: "Studied from Dada for Nov 22. Best faculty for preparing tax. Dada treats his students like his own kids, never misses any query and always prepares us conceptually. The charts he prepares are extremely helpful during revision." },
  { name: "Nagesh Naik", meta: "2 reviews · 2 years ago", text: "Have seen many teachers teaching taxation but what VB sir does is unthinkable. He creates magic while you learn. You'll fall in love with the subject. Full of fun, in-depth discussions and practical insights. He's the best!" },
  { name: "Karan Chaudhary", meta: "a year ago", text: "Hello Dada 🙏 Your passion for teaching is contagious and has made learning truly enjoyable. The way you explain complex topics is clear, concise, and engaging — specially the charts prepared during sessions. Brilliant teaching style!" },
  { name: "Abhrasom Chakraborty", meta: "2 reviews · a year ago", text: "Vikram sir (Dada) is the best teacher in my life. If anyone has simplified tax in our heads, it is only Vikram sir. In my eyes he is definitely a TAX GOD 😊" },
  { name: "Umesh Khunger", meta: "4 reviews · 3 years ago", text: "I am blessed to have a teacher like you ❤ who not only teaches subjects. Best faculty for taxation and famous for loveable teaching style 🔥 & motivation through poetry. Thanks a million Dada for your love & support." },
  { name: "Sayan Makhal", meta: "3 years ago", text: "THE BEST TEACHER FOR TAX ❤ Sir is not only an amazing teacher but an amazing person with a beautiful heart. His teaching makes concepts easy to understand and remember. Cleared my tax paper thanks to him." },
  { name: "Hansinee", meta: "2 reviews · 2 years ago", text: "No one teaches with such high enthusiasm and love for this subject. Every time the charts get simpler. He covers 20–30 pages of concept in 1–2 pages by SPECIAL VB CHARTS. Highly recommended! Always grateful to sir." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Student Stories</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Loved by thousands of CA &amp; CMA students
            </h2>
            <p className="mt-4 text-muted-foreground">Real, unedited reviews from students on Google.</p>
          </Reveal>
          <Reveal direction="left" delay={120}>
            <a
              href="https://www.google.com/search?q=Vikram+Biyani+Tax+Classes+VBTC+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <div className="text-left">
                <div className="font-display text-lg font-bold text-navy leading-none">5.0 / 5.0</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">669+ Google reviews</div>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 max-w-3xl mx-auto">
          <TestimonialCarousel reviews={reviews} />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.slice(0, 6).map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="group relative h-full rounded-2xl border border-border bg-background p-6 flex flex-col hover:-translate-y-1 hover:shadow-elevated transition-all">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/30 group-hover:text-gold/60 transition-colors" />
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-foreground/80 leading-relaxed text-sm flex-1 line-clamp-5">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-navy to-navy/60 grid place-items-center text-navy-foreground font-semibold text-sm">
                    {r.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-navy text-sm truncate">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{r.meta}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
