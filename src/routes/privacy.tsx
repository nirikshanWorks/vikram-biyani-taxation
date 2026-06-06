import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatBot } from "@/components/site/ChatBot";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CA Vikram Biyani" },
      {
        name: "description",
        content: "Learn how CA Vikram Biyani (VBTC) collects, uses, and safeguards student data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Banner */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-navy via-brand-900 to-navy text-white">
          <div className="absolute inset-0 bg-grid-dots opacity-20" aria-hidden />
          <div className="container-page relative text-center">
            <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold mb-4 shadow-soft">
              <Shield className="h-6 w-6 animate-pulse-slow" />
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-white/70 max-w-md mx-auto text-sm md:text-base">
              Effective date: June 7, 2026. Your privacy and trust are our utmost priority.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container-page max-w-3xl">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed text-sm md:text-base">
              
              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  1. Information We Collect
                </h2>
                <p>
                  We collect personal details that you voluntarily provide to us during registration, enrollment, or when contacting us through our site. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Identification Details:</strong> Name, email address, phone number, and postal address (for dispatching hard copy study materials).</li>
                  <li><strong>Academic Details:</strong> Course level (CA Inter, CA Final, CMA Final) and batch year.</li>
                  <li><strong>Billing Data:</strong> Payments are processed securely via third-party gateways. VBTC does not store or see your credit/debit card numbers or UPI PINs.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  2. How We Use Your Information
                </h2>
                <p>
                  The collected information is solely used to facilitate premium educational services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivering lectures, processing admissions, and shipping physical textbook volumes.</li>
                  <li>Sending automated batch notifications, schedule updates, and exam results.</li>
                  <li>Providing chatbot-assisted counselling and prompt query support.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  3. Intellectual Property and Security
                </h2>
                <p>
                  VBTC values data safety. We implement standard encryption systems to secure user databases. Student accounts, video streams, and portal materials are tied to user access parameters to ensure high security and anti-piracy protection.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  4. Third-Party Services
                </h2>
                <p>
                  We do not sell, trade, or transfer your personal data to external parties. However, we utilize trusted third-party providers to operate payment channels and logistics/courier services for book deliveries. All external service channels adhere to professional privacy standards.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  5. Contact Us
                </h2>
                <p>
                  If you have questions regarding this Privacy Policy or data storage, please feel free to reach out to us:
                </p>
                <p className="bg-card border border-border rounded-2xl p-5 mt-3">
                  <strong>Email:</strong> vbtaxclasses@gmail.com<br />
                  <strong>Phone:</strong> +91 98307 73655 / +91 90519 03915<br />
                  <strong>Address:</strong> Kenderdine Ln, Bowbazar, Kolkata, West Bengal 700012
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
