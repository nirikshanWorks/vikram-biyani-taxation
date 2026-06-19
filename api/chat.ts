import type { VercelRequest, VercelResponse } from "@vercel/node";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "../src/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are "Vikram Sir Bot" — the friendly student counsellor for CA Vikram Biyani Tax Classes (VBTC), Kolkata. You help CA Inter, CA Final, CMA Final students and their parents understand the courses, batches and admission process.

Tone: warm, encouraging, professional, like an elder brother (Dada) — concise replies, use simple language, sprinkle light emojis occasionally.

Faculty: CA Vikram Biyani (VB Sir / Dada) — India's leading Taxation faculty, 15+ years experience, 50,000+ students taught, 5.0★ on Google (669+ reviews).

Location: Kenderdine Ln, Bowbazar, Kolkata, WB 700012
Call: +91 98307 73655 | WhatsApp: +91 90519 03915 | Email: vbtaxclasses@gmail.com

COURSES & PRICES (all "Inclusive of GST", views = unlimited):

CA Inter — Taxation (DT + GST), Sep 2026, 220 hrs
• Hard Books (4 vol): ₹7,500
• PDF: ₹6,000

CA Final — Direct Tax, 200 hrs, Hard Books (5 vol coloured)
• Nov 2026: ₹8,600
• May 2027: ₹10,500

CA Final — Indirect Tax (GST), 150 hrs, Hard Books (4 vol coloured)
• Nov 2026: ₹7,500
• May 2027: ₹8,600

CA Final — DT + IDT Combo, 350 hrs
• Nov 2026 Hard Books: ₹15,000
• Nov 2026 PDF: ₹13,200
• May 2027 Hard Books: ₹16,500

CMA Final — Direct Tax, 200 hrs, Hard Books
• Dec 2026: ₹8,600
• June & Dec 2027: ₹10,600

CMA Final — Indirect Tax, 150 hrs, Hard Books
• Dec 2026: ₹8,600
• June & Dec 2027: ₹8,600

Rules:
- Only answer about taxation courses, admissions, fees, schedule, study material, doubt-solving, career guidance for CA/CMA, and general info about VB Sir's classes.
- For anything off-topic, politely steer back. Never invent prices, batches or guarantees.
- If a parent or student wants to enrol, share WhatsApp +91 90519 03915 or Call +91 98307 73655.
- Keep replies short (2-5 sentences) unless asked for details. Use bullet points for course comparisons.`;

function getFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (
    q.includes("contact") ||
    q.includes("phone") ||
    q.includes("call") ||
    q.includes("whatsapp") ||
    q.includes("email") ||
    q.includes("address") ||
    q.includes("location") ||
    q.includes("office") ||
    q.includes("map") ||
    q.includes("number")
  ) {
    return `You can contact CA Vikram Biyani Tax Classes (VBTC) via:

• 📞 **Call Support:** +91 98307 73655
• 💬 **WhatsApp Counselling:** [+91 90519 03915](https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E)
• ✉️ **Email:** vbtaxclasses@gmail.com
• 📍 **Kolkata Address:** Kenderdine Ln, Bowbazar, Kolkata, WB 700012

Dada and the counselling team are happy to guide you! Feel free to reach out directly. 😊`;
  }

  if (
    q.includes("ca final") ||
    q.includes("final dt") ||
    q.includes("final idt") ||
    q.includes("combo")
  ) {
    return `Here are our CA Final Taxation batches (all include unlimited views):

1. **Direct Tax (DT) — 200 hours (5 Vol Coloured Hard Books):**
   • Nov 2026 Batch: ₹8,600
   • May 2027 Batch: ₹10,500

2. **Indirect Tax (GST) — 150 hours (4 Vol Coloured Hard Books):**
   • Nov 2026 Batch: ₹7,500
   • May 2027 Batch: ₹8,600

3. **DT + IDT Combo — 350 hours:**
   • Nov 2026 (Hard Books): ₹15,000 | (PDF): ₹13,200
   • May 2027 (Hard Books): ₹16,500

Would you like to enroll in any of these batches? 🎓`;
  }

  if (
    q.includes("ca inter") ||
    q.includes("inter dt") ||
    q.includes("inter gst") ||
    q.includes("ipcc")
  ) {
    return `Here are our CA Inter Taxation (Direct Tax + GST) courses for Sep 2026 (220 hours, unlimited views):

• 📚 **Hard Books (4 Volumes):** ₹7,500
• 📄 **PDF / Digital Material:** ₹6,000

All CA Inter batches focus heavily on ICAI concept coverage and practice problems. Let me know if you would like the enrollment link!`;
  }

  if (q.includes("cma final") || q.includes("cma")) {
    return `Here are our CMA Final Taxation courses (unlimited views, hard books included):

1. **Direct Tax (DT) — 200 hours:**
   • Dec 2026 Batch: ₹8,600
   • June & Dec 2027 Batch: ₹10,600

2. **Indirect Tax (GST) — 150 hours:**
   • Dec 2026 Batch: ₹8,600
   • June & Dec 2027 Batch: ₹8,600

Let me know which batch targets your exam term! 📚`;
  }

  if (
    q.includes("refund") ||
    q.includes("cancel") ||
    q.includes("return") ||
    q.includes("money back")
  ) {
    return `Our Refund Policy permits cancellations within **48 hours** of enrollment, subject to these conditions:

• No lectures have been streamed or downloaded.
• The video player activation key has not been used.
• Physical textbooks have not yet been dispatched from our printing hub.

All approved refunds are credited back to the original payment source within 5-7 banking days. For assistance, email vbtaxclasses@gmail.com.`;
  }

  if (
    q.includes("enroll") ||
    q.includes("register") ||
    q.includes("buy") ||
    q.includes("join") ||
    q.includes("payment") ||
    q.includes("admission") ||
    q.includes("fees")
  ) {
    return `You can enroll in our classes easily:

1. **Online Registry**: Browse our courses in the ledger, select the batch, and click **Enroll Now**.
2. **Direct Setup**: WhatsApp us at [**+91 90519 03915**](https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E) or call **+91 98307 73655** for manual registration and instant player activation keys.

We support GPay, PhonePe, credit/debit cards, net banking, and bank transfers.`;
  }

  if (
    q.includes("book") ||
    q.includes("material") ||
    q.includes("pdf") ||
    q.includes("notes") ||
    q.includes("chart")
  ) {
    return `Depending on your course selection, you can opt for:

• 📚 **Hard Books**: Coloured volumes printed on-demand and shipped directly to your address.
• 📄 **PDF / Digital Notes**: Provided directly in your account for online viewing.
• 📊 **Special VB Charts**: Comprehensive maps condensing 20-30 pages of tax law into 1-2 pages.

All books and revision charts are fully aligned with the latest ICAI/ICMAI exam patterns.`;
  }

  return `Namaste! I am **Vikram Sir Bot**, counselling assistant for CA Vikram Biyani Tax Classes. 

How can I help you? I can answer queries about:
• 📚 **Courses & Fees** (CA Inter, CA Final, CMA Final batches)
• 📞 **Contact Information** (Phone, WhatsApp, Kolkata office address)
• 📝 **Admissions & Enrolment** (Payment channels and registration steps)
• 🔄 **Refund and Cancellation policies**`;
}

async function writeFallbackResponse(messages: UIMessage[], res: VercelResponse) {
  const userMessages = messages.filter((m) => m.role === "user");
  const lastUserMessage = userMessages[userMessages.length - 1];
  const queryText =
    lastUserMessage?.parts
      ?.map((p) => (p.type === "text" ? p.text : ""))
      .join("") || "";

  const text = getFallbackResponse(queryText);
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("x-vercel-ai-data-stream", "v1");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    const chunk = words[i] + (i < words.length - 1 ? " " : "");
    const formattedChunk = `0:${JSON.stringify(chunk)}\n`;
    res.write(formattedChunk);
    await new Promise((resolve) => setTimeout(resolve, 25));
  }

  const doneFrame = `d:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0}}\n`;
  res.write(doneFrame);
  res.end();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  let incomingMessages: UIMessage[] = [];
  try {
    const body = req.body || {};
    if (Array.isArray(body.messages)) {
      incomingMessages = body.messages;
    }
  } catch (_) {}

  if (incomingMessages.length === 0) {
    return res.status(400).json({ error: "Messages are required" });
  }

  try {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) {
      return await writeFallbackResponse(incomingMessages, res);
    }

    const gateway = createLovableAiGatewayProvider(key);
    const result = streamText({
      model: gateway("google/gemini-3-flash-preview"),
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(incomingMessages),
    });

    const streamResponse = result.toUIMessageStreamResponse({ originalMessages: incomingMessages });
    
    streamResponse.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    if (streamResponse.body) {
      const reader = streamResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err: any) {
    console.error("chat error, triggering fallback", err);
    try {
      return await writeFallbackResponse(incomingMessages, res);
    } catch (e) {
      return res.status(500).json({ error: "Chat failed: " + err.message });
    }
  }
}
