import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Courses } from "@/components/site/Courses";
import { Featured } from "@/components/site/Featured";
import { Testimonials } from "@/components/site/Testimonials";
import { Results } from "@/components/site/Results";
import { Resources } from "@/components/site/Resources";
import { Community } from "@/components/site/Community";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CA Vikram Biyani — India's Trusted Taxation Mentor for CA & CMA" },
      { name: "description", content: "Master Direct Tax & GST with CA Vikram Biyani. Structured learning, practical examples and exam-focused strategies for CA Inter, CA Final and CMA students." },
      { property: "og:title", content: "CA Vikram Biyani — Master Taxation with Confidence" },
      { property: "og:description", content: "Trusted by 50,000+ CA & CMA students. Direct Tax, GST, live & recorded batches, revision notes and mentorship." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChoose />
        <Courses />
        <Featured />
        <Testimonials />
        <Results />
        <Resources />
        <Community />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
