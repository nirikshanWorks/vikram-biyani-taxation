import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatBot } from "@/components/site/ChatBot";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — CA Vikram Biyani" },
      {
        name: "description",
        content: "Read the Terms of Service for enrollment, lecture access, and code of conduct under VBTC.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.vikrambiyani.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Banner */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-navy via-brand-900 to-navy text-white">
          <div className="absolute inset-0 bg-grid-dots opacity-20" aria-hidden />
          <div className="container-page relative text-center">
            <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold mb-4 shadow-soft">
              <FileText className="h-6 w-6 animate-pulse-slow" />
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-white/70 max-w-md mx-auto text-sm md:text-base">
              Please read these terms carefully before enrolling in our taxation batches.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container-page max-w-3xl">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed text-sm md:text-base">
              
              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  1. Terms of Admission & Access
                </h2>
                <p>
                  By enrolling in any course (CA Inter, CA Final, CMA Final) at VBTC, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide authentic academic and identification information.</li>
                  <li>Use the stream player exclusively on the designated number of devices configured for your student login profile.</li>
                  <li>Maintain secure login credentials. Sharing accounts is strictly prohibited and leads to immediate suspension.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  2. Intellectual Property Rights
                </h2>
                <p>
                  All content provided — including recorded videos, live sessions, special VB charts, study books, revision files, and notes — are the sole intellectual property of CA Vikram Biyani.
                </p>
                <p className="border-l-4 border-gold pl-4 italic bg-gold/5 py-2">
                  No portion of these materials may be copied, redistributed, recorded, or screenshotted for public or private distribution. Violators are subject to legal prosecution under copyright infringement laws.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  3. Batch Deliveries and Schedules
                </h2>
                <p>
                  Live batches adhere strictly to guidelines and timelines defined by the faculty. Recorded back-up lectures are dispatched or uploaded within 24-48 hours of live broadcast. VBTC reserves the right to alter batch schedules due to academic adjustments, notification updates, or health situations. All students will be notified of alterations in advance.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  4. Class Integrity
                </h2>
                <p>
                  Students are expected to maintain decencies in live chats, forums, and chat groups. Constructive questions are highly encouraged, whereas misbehaviors, promotion of other services, or spamming will lead to immediate cancellation of class access without refund.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  5. Modifications to Terms
                </h2>
                <p>
                  We reserve the update rights of these terms to accommodate structural course revisions or academic board adjustments (ICAI/ICMAI). Your continued usage of VBTC courses establishes acceptance of updated terms.
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
