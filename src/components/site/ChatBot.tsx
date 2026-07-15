import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import vikram from "@/assets/viram biyani profile.jpg";

const SUGGESTIONS = [
  "What's the fee for CA Inter Taxation?",
  "Difference between Hard Books and PDF?",
  "Which batch is best for May 2027?",
  "How do I enrol?",
];

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const GREETING: Message = {
  id: "welcome",
  role: "assistant",
  text: "Namaste 🙏 I'm **Vikram Sir Bot** — here to help you choose the right CA / CMA Taxation course. Ask me anything about batches, fees, books or admissions!",
};

// Static lookup responses for user queries
function getStaticReply(query: string): string {
  const q = query.toLowerCase().trim();
  
  if (
    q.includes("fee") || 
    q.includes("price") || 
    q.includes("cost") || 
    q.includes("charge") || 
    q.includes("rupee") || 
    q.includes("inr") || 
    q.includes("amount") ||
    q.includes("discount")
  ) {
    return `Here are the course fee details for **CA Vikram Biyani Tax Classes (VBTC)**:
    
* **CA Inter Taxation (DT + GST)**:
  * 📚 **With Hard Books**: ₹7,500 (Physical textbooks printed & posted)
  * 📱 **With PDF Materials**: ₹6,000 (Digital instant access)
* **CA Final Direct Tax (Regular)**: ₹8,600+ (Comprehensive coverage)
* **CA Final Combo (DT + IDT)**: ₹13,200+
* **CMA Final Classes**: ₹8,600 per subject

*All fees are inclusive of GST. You can enrol directly online via the **Enroll Now** button!*`;
  }
  
  if (
    q.includes("book") || 
    q.includes("pdf") || 
    q.includes("material") || 
    q.includes("notes") || 
    q.includes("hard copy") ||
    q.includes("soft copy")
  ) {
    return `We offer two types of study materials for our batches:

1. **Hard Books (Recommended)**:
   * You will receive printed physical books at your address via courier.
   * Highly recommended for CA/CMA studies to easily write notes and tag sections.
2. **PDF Materials**:
   * You get immediate digital access to textbooks on our mobile app or web portal.
   * Save on printing/shipping costs. Perfect for tablet-based study.`;
  }

  if (
    q.includes("enrol") || 
    q.includes("join") || 
    q.includes("admission") || 
    q.includes("register") || 
    q.includes("buy") || 
    q.includes("checkout") || 
    q.includes("payment") ||
    q.includes("pay")
  ) {
    return `Enrolling in our classes is very quick and simple:

1. Click the **"Enroll"** button on the course cards in the courses section.
2. Enter your email and verify the **OTP** code sent to your inbox.
3. Provide your basic student profile details (Name, Phone, City, target course).
4. Verify the billing summary and click **Confirm & Activate**.
5. Once checkout completes, your course is immediately active in your **Student Dashboard** (/profile)!`;
  }

  if (
    q.includes("batch") || 
    q.includes("class") || 
    q.includes("course") || 
    q.includes("level") || 
    q.includes("inter") || 
    q.includes("final") || 
    q.includes("cma") || 
    q.includes("may 2027") || 
    q.includes("nov 2026") || 
    q.includes("sep 2026") ||
    q.includes("time") ||
    q.includes("duration")
  ) {
    return `We are currently enrolling for the following exam batches:

* **CA Inter Taxation**: Targeting **Sep 2026** exams (DT + GST batch).
* **CA Final Direct Tax**: Targeting **Nov 2026 / May 2027** terms.
* **CA Final DT + IDT Combo**: Full package for **May 2027** onwards.
* **CMA Final DT / IDT**: Regular and fast-track schedules for **Dec 2026** exams.

*All live batches include query-solving support and unlimited video replay view hours.*`;
  }

  if (
    q.includes("contact") || 
    q.includes("phone") || 
    q.includes("number") || 
    q.includes("whatsapp") || 
    q.includes("call") || 
    q.includes("support") || 
    q.includes("email") || 
    q.includes("address") || 
    q.includes("office") ||
    q.includes("help")
  ) {
    return `You can get in touch with our helpdesk team directly:

* 📞 **Phone Support**: Call or SMS at **+91 98307 73655**
* 💬 **WhatsApp Chat**: Connect with our coordinator at **+91 90519 03915** for instant answers.
* ✉️ **Email Address**: Reach out at **vbtaxclasses@gmail.com**
* 📍 **Kolkata Head Office**: Bowbazar, Kolkata, West Bengal 700012

*Our support desk is open Monday to Saturday, 10 AM to 7 PM.*`;
  }

  if (
    q.includes("hello") || 
    q.includes("hi") || 
    q.includes("hey") || 
    q.includes("namaste") || 
    q.includes("greetings") || 
    q.includes("hola") ||
    q.includes("sir")
  ) {
    return `Namaste! 🙏 I'm Vikram Sir Bot. 

I can answer queries about:
1. 💸 **Fees / Pricing** for CA & CMA classes
2. 📖 **Study Material** options (PDF vs Hard Books)
3. 🗓️ **Exam Batches** (CA Inter, Final, CMA)
4. 📝 **Admissions & Online Enrollment**

*How can I assist you today?*`;
  }

  // Fallback response
  return `Thank you for reaching out! I can help you with queries regarding:

1. **Course Fees & Combos** (CA Inter/Final, CMA)
2. **Study Materials** (Hard Books vs. PDF)
3. **Current Batches** (Targeting Sep 2026, May 2027, etc.)
4. **Admissions Process** (Online registration & activation)
5. **Support Hotline** (Phone, WhatsApp, Office Location)

*Please ask a question about one of these topics, or select one of the quick suggestions below!*`;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const submit = (text: string) => {
    const t = text.trim();
    if (!t || busy) return;

    // 1. Add User Message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: t,
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setBusy(true);

    // 2. Simulate Chatbot Response Delay (smooth micro-animation)
    setTimeout(() => {
      const responseText = getStaticReply(t);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        text: responseText,
      };
      setMessages((prev) => [...prev, botMsg]);
      setBusy(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 group cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-brand/40 blur-xl animate-pulse-slow" />
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand via-brand-600 to-brand-800 text-white shadow-brand-lg hover:scale-110 transition-all duration-300">
          {open ? <X className="h-6 w-6 animate-fade-in" /> : <MessageCircle className="h-6 w-6 animate-fade-in" />}
          {!open && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
          )}
        </span>
        {!open && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-semibold px-3 py-1.5 shadow-elevated opacity-0 group-hover:opacity-100 transition-opacity">
            Ask Vikram Sir Bot
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-w-md animate-fade-up">
          <div
            className="rounded-3xl bg-background border border-border shadow-elevated overflow-hidden flex flex-col"
            style={{ height: "min(70vh, 600px)" }}
          >
            {/* Header */}
            <div className="relative px-4 py-3 bg-gradient-to-br from-brand via-brand-600 to-brand-800 text-white">
              <div className="absolute inset-0 bg-grid-dots opacity-20" />
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <img
                    src={vikram}
                    alt="VB"
                    className="h-11 w-11 rounded-full object-cover object-top border-2 border-white/80 shadow-soft"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-base font-bold flex items-center gap-1.5">
                    Vikram Sir Bot <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-[11px] opacity-90 font-medium">
                    Usually replies instantly · CA & CMA counselling
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-brand-50/40 to-background"
            >
              {messages.map((m) => {
                const text = m.text;
                if (!text) return null;
                const mine = m.role === "user";
                return (
                  <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"} animate-fade-in`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-soft ${
                        mine
                          ? "bg-gradient-to-br from-brand to-brand-600 text-white rounded-br-md"
                          : "bg-card border border-border text-foreground rounded-bl-md"
                      }`}
                    >
                      <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-strong:text-current font-medium">
                        <ReactMarkdown>{text}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                );
              })}
              {busy && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-soft">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-2 w-2 rounded-full bg-brand/60 animate-bounce"
                          style={{ animationDelay: `${i * 120}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5 border-t border-border pt-3 bg-background animate-fade-in">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => submit(s)}
                    disabled={busy}
                    className="text-[11px] px-2.5 py-1.5 rounded-full border border-brand/35 text-brand-700 bg-brand-50 hover:bg-brand hover:text-white transition-colors cursor-pointer disabled:opacity-50 font-bold"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="flex items-center gap-2 px-3 py-3 border-t border-border bg-background"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about courses, fees, batches…"
                disabled={busy}
                className="flex-1 h-11 px-4 rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:opacity-60 font-semibold"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-brand disabled:opacity-40 hover:scale-105 transition-transform cursor-pointer"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
