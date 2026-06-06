import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatBot } from "@/components/site/ChatBot";
import { BadgeHelp } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — CA Vikram Biyani" },
      {
        name: "description",
        content: "Understand the terms of cancelations, refunds, and batch transfer policies for CA Vikram Biyani courses.",
      },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Banner */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-navy via-brand-900 to-navy text-white">
          <div className="absolute inset-0 bg-grid-dots opacity-20" aria-hidden />
          <div className="container-page relative text-center">
            <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold mb-4 shadow-soft">
              <BadgeHelp className="h-6 w-6 animate-pulse-slow" />
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Refund & Cancellation
            </h1>
            <p className="mt-4 text-white/70 max-w-md mx-auto text-sm md:text-base">
              Learn about our parameters for cancellations, returns, and course transfers.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container-page max-w-3xl">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed text-sm md:text-base">
              
              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  1. Policy Overview
                </h2>
                <p>
                  At VBTC, we aim to offer the highest academic standard in tax mentorship. Because our services consist of digital deliveries (video lectures, streaming access) and physical logistics (custom hard book volumes printed on order), the terms of refund are strictly structured.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  2. Eligibility for Refunds
                </h2>
                <p>
                  Refund requests must be formally submitted within <strong>48 hours</strong> of enrollment/purchase. Requests made after this window are not eligible for a refund.
                </p>
                <p>
                  Please note that a refund request will only be processed if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No video files/lectures have been streamed or downloaded.</li>
                  <li>The activation key for the video player has not been registered or utilized.</li>
                  <li>Physical textbooks have not been dispatched from our printing/warehouse hub. If books have been dispatched, the printing and courier cost will be deducted from the refund sum.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  3. Batch/Format Transfers
                </h2>
                <p>
                  If a student wants to swap formats (e.g. PDF to Hard Books or vice versa) or transfer to a different batch year:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transfers are permissible subject to approval by the support desk.</li>
                  <li>Students must pay the variance fee (if transferring to a higher cost package).</li>
                  <li>For hard book dispatch swaps, courier fees are paid by the student.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  4. Processing of Refunds
                </h2>
                <p>
                  Approved refunds are processed via the original payment source channel. Please allow <strong>5 to 7 bank business days</strong> for the credit to reflect in your bank account, depending on your financial institution.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  5. Contact Support for Assistance
                </h2>
                <p>
                  To request a refund or raise a billing concern, please send a mail detailing your order transaction ID and name to:
                </p>
                <p className="bg-card border border-border rounded-2xl p-5 mt-3">
                  <strong>Email:</strong> vbtaxclasses@gmail.com<br />
                  <strong>Phone Support:</strong> +91 98307 73655 / +91 90519 03915
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
