import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Which course is suitable for CA Inter?", a: "Our CA Inter Taxation Complete Batch covers both Direct Tax and GST as per the latest ICAI syllabus and is the best fit for CA Inter aspirants." },
  { q: "Are recorded lectures available?", a: "Yes. Every live batch is recorded and available in your dashboard with full validity, so you can revise any topic anytime." },
  { q: "How long is the course validity?", a: "Validity ranges from 9 to 24 months depending on the batch type. Each course page shows the exact validity." },
  { q: "Do I get study materials?", a: "Yes — printed and digital revision notes, charts, summary sheets, MCQ banks and mock tests are all included." },
  { q: "Are classes available in Hindi and English?", a: "Most of our batches are delivered in a Hindi + English mix. Some advanced batches are in English only — clearly mentioned on each course." },
  { q: "How can I contact support?", a: "Reach us via the contact form below, WhatsApp, email, or the Telegram community. Our team responds within a few hours." },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-page grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">FAQ</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">
            Everything you wanted to ask
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't find your answer? Drop us a message — we usually reply within a few hours.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
