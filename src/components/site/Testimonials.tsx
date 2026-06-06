import { Star, Quote } from "lucide-react";

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
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Student Stories</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Loved by thousands of CA & CMA students
            </h2>
            <p className="mt-4 text-muted-foreground">Real, unedited reviews from students on Google.</p>
          </div>
          <a
            href="https://www.google.com/search?q=Vikram+Biyani+Tax+Classes+VBTC+Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3 shadow-soft hover:shadow-elevated transition-shadow"
          >
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <div className="text-left">
              <div className="font-display text-lg font-bold text-navy leading-none">5.0 / 5.0</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">669+ Google reviews</div>
            </div>
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <figure key={i} className="relative rounded-2xl border border-border bg-background p-6 flex flex-col">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/30" />
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-foreground/80 leading-relaxed text-sm flex-1">
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
                <svg className="ml-auto h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-label="Google" role="img">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.12A6.6 6.6 0 0 1 5.48 12c0-.74.13-1.46.36-2.12V7.04H2.18A10.99 10.99 0 0 0 1 12c0 1.78.43 3.46 1.18 4.96l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
                </svg>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
