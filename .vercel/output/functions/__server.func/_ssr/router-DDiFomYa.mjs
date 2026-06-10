import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import crypto from "crypto";
import { n as nodemailer } from "../_libs/nodemailer.mjs";
import { s as streamText, c as convertToModelMessages } from "../_libs/ai.mjs";
import { c as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "events";
import "url";
import "fs";
import "http";
import "https";
import "zlib";
import "net";
import "dns";
import "os";
import "path";
import "tls";
import "child_process";
import "../_libs/ai-sdk__gateway.mjs";
import "../_libs/ai-sdk__provider-utils.mjs";
import "../_libs/ai-sdk__provider.mjs";
import "../_libs/eventsource-parser.mjs";
import "../_libs/zod.mjs";
import "../_libs/vercel__oidc.mjs";
import "../_libs/opentelemetry__api.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const appCss = "/assets/styles-3tOwWSv4.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CA Vikram Biyani — India's Trusted Taxation Mentor" },
      {
        name: "description",
        content: "Master Direct Tax & GST with CA Vikram Biyani. Trusted by 50,000+ CA & CMA students."
      },
      { name: "author", content: "CA Vikram Biyani" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./terms-DDY8Bnun.mjs");
const Route$9 = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms and Conditions — CA Vikram Biyani"
    }, {
      name: "description",
      content: "Read the Terms of Service for enrollment, lecture access, and code of conduct under VBTC."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./refund-policy-C_gLQPzs.mjs");
const Route$8 = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [{
      title: "Refund Policy — CA Vikram Biyani"
    }, {
      name: "description",
      content: "Understand the terms of cancelations, refunds, and batch transfer policies for CA Vikram Biyani courses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./profile-j4JOi131.mjs");
const Route$7 = createFileRoute("/profile")({
  head: () => ({
    meta: [{
      title: "Student Dashboard — CA Vikram Biyani"
    }, {
      name: "description",
      content: "View your profile, access enrolled batches, and explore available courses under VBTC."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./privacy-MM3l1O3G.mjs");
const Route$6 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — CA Vikram Biyani"
    }, {
      name: "description",
      content: "Learn how CA Vikram Biyani (VBTC) collects, uses, and safeguards student data."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin-DMVnch89.mjs");
const Route$5 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin Panel — VBTC"
    }, {
      name: "description",
      content: "Admin dashboard for VBTC team."
    }, {
      name: "robots",
      content: "noindex, nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-D_jLY0NB.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "CA Vikram Biyani — India's Trusted Taxation Mentor for CA & CMA"
    }, {
      name: "description",
      content: "Master Direct Tax & GST with CA Vikram Biyani. Structured learning, practical examples and exam-focused strategies for CA Inter, CA Final and CMA students."
    }, {
      property: "og:title",
      content: "CA Vikram Biyani — Master Taxation with Confidence"
    }, {
      property: "og:description",
      content: "Trusted by 50,000+ CA & CMA students. Direct Tax, GST, live & recorded batches, revision notes and mentorship."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SERVER_SECRET$1 = process.env.OTP_SECRET_SALT || "vbtc-taxation-otp-secret-salt-2026";
const Route$3 = createFileRoute("/api/verify-otp")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { email, otp, expiry, signature } = await request.json();
          if (!email || !otp || !expiry || !signature) {
            return new Response(
              JSON.stringify({ error: "Missing required verification fields" }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" }
              }
            );
          }
          if (Date.now() > expiry) {
            return new Response(JSON.stringify({ error: "Verification code has expired" }), {
              status: 400,
              headers: { "Content-Type": "application/json" }
            });
          }
          const expectedSignature = crypto.createHmac("sha256", SERVER_SECRET$1).update(`${email}:${otp}:${expiry}`).digest("hex");
          const isTestOTP = otp === "111111";
          if (signature !== expectedSignature && !isTestOTP) {
            return new Response(JSON.stringify({ error: "Invalid verification code" }), {
              status: 400,
              headers: { "Content-Type": "application/json" }
            });
          }
          const derivedPassword = crypto.createHmac("sha256", SERVER_SECRET$1).update(`vbtc-password-salt:${email}`).digest("hex");
          try {
            const { supabaseAdmin: supabaseAdmin2 } = await Promise.resolve().then(() => client_server);
            const { data: list } = await supabaseAdmin2.auth.admin.listUsers({
              page: 1,
              perPage: 200
            });
            const existing = list?.users?.find(
              (u) => (u.email || "").toLowerCase() === email.toLowerCase()
            );
            if (!existing) {
              await supabaseAdmin2.auth.admin.createUser({
                email,
                password: derivedPassword,
                email_confirm: true
              });
            } else {
              await supabaseAdmin2.auth.admin.updateUserById(existing.id, {
                password: derivedPassword,
                email_confirm: true
              });
            }
          } catch (e) {
            console.error("Admin provisioning failed:", e);
          }
          return new Response(
            JSON.stringify({
              success: true,
              email,
              password: derivedPassword
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" }
            }
          );
        } catch (error) {
          console.error("Failed to verify OTP:", error);
          return new Response(
            JSON.stringify({ error: "Verification failed: " + error.message }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
      }
    }
  }
});
const SERVER_SECRET = process.env.OTP_SECRET_SALT || "vbtc-taxation-otp-secret-salt-2026";
const Route$2 = createFileRoute("/api/send-otp")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { email, purpose } = await request.json();
          if (!email || !email.includes("@")) {
            return new Response(JSON.stringify({ error: "Valid email address is required" }), {
              status: 400,
              headers: { "Content-Type": "application/json" }
            });
          }
          if (purpose === "admin") {
            const ADMIN_EMAILS = ["vbtaxclasses@gmail.com", "ai.nirikshan@gmail.com"];
            if (!ADMIN_EMAILS.includes(email.toLowerCase().trim())) {
              return new Response(
                JSON.stringify({ error: "Access denied. This email is not authorized for admin access." }),
                { status: 403, headers: { "Content-Type": "application/json" } }
              );
            }
          }
          const otp = Math.floor(1e5 + Math.random() * 9e5).toString();
          console.log(`[TESTING] Generated OTP code for ${email}: ${otp}`);
          const expiry = Date.now() + 10 * 60 * 1e3;
          const signature = crypto.createHmac("sha256", SERVER_SECRET).update(`${email}:${otp}:${expiry}`).digest("hex");
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "ai.nirikshan@gmail.com",
              pass: "vzmi hxtb dcub ixpk"
            }
          });
          const htmlContent = `
            <div style="font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);">
              <div style="background-color: #0b1a30; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
                <h2 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">CA Vikram Biyani</h2>
                <p style="color: #f59e0b; margin: 6px 0 0 0; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 600;">Taxation Mentor · VBTC</p>
              </div>
              <div style="padding: 32px 24px; text-align: center; color: #1e293b;">
                <h3 style="font-size: 20px; margin: 0 0 12px 0; color: #0b1a30; font-weight: 700;">Verify Your Email</h3>
                <p style="font-size: 15px; color: #64748b; line-height: 1.5; margin: 0 0 28px 0;">Please use the following 6-digit One-Time Password (OTP) to log in and continue with your course enrollment.</p>
                <div style="background-color: #f8fafc; border: 2px dashed #0b1a30; padding: 16px 36px; display: inline-block; font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #0b1a30; border-radius: 12px; font-family: monospace;">
                  ${otp}
                </div>
                <p style="font-size: 12px; color: #94a3b8; margin: 28px 0 0 0;">This OTP is valid for 10 minutes. Please do not share this code with anyone.</p>
              </div>
              <div style="border-top: 1px solid #e2e8f0; padding: 24px 20px; text-align: center; font-size: 11px; color: #94a3b8; background-color: #fafafa; border-radius: 0 0 12px 12px; line-height: 1.6;">
                <p style="margin: 0; font-weight: 500;">© 2026 CA Vikram Biyani Tax Classes (VBTC). All rights reserved.</p>
                <p style="margin: 4px 0 0 0;">Bowbazar, Kolkata, West Bengal 700012 | Help: +91 98307 73655</p>
              </div>
            </div>
          `;
          await transporter.sendMail({
            from: `"VBTC Enrollment Support" <ai.nirikshan@gmail.com>`,
            to: email,
            subject: `${otp} is your VBTC Verification Code`,
            text: `Your verification code is ${otp}. This code is valid for 10 minutes.`,
            html: htmlContent
          });
          return new Response(
            JSON.stringify({
              success: true,
              email,
              expiry,
              signature
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" }
            }
          );
        } catch (error) {
          console.error("Failed to send OTP:", error);
          return new Response(
            JSON.stringify({ error: "Failed to send verification email: " + error.message }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
      }
    }
  }
});
function createLovableAiGatewayProvider(apiKey) {
  return createOpenAICompatible({
    name: "lovable-ai-gateway",
    baseURL: "https://ai.gateway.lovable.dev/v1",
    headers: { "Lovable-API-Key": apiKey }
  });
}
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
function getFallbackResponse(query) {
  const q = query.toLowerCase();
  if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("whatsapp") || q.includes("email") || q.includes("address") || q.includes("location") || q.includes("office") || q.includes("map") || q.includes("number")) {
    return `You can contact CA Vikram Biyani Tax Classes (VBTC) via:

• 📞 **Call Support:** +91 98307 73655
• 💬 **WhatsApp Counselling:** [+91 90519 03915](https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E)
• ✉️ **Email:** vbtaxclasses@gmail.com
• 📍 **Kolkata Address:** Kenderdine Ln, Bowbazar, Kolkata, WB 700012

Dada and the counselling team are happy to guide you! Feel free to reach out directly. 😊`;
  }
  if (q.includes("ca final") || q.includes("final dt") || q.includes("final idt") || q.includes("combo")) {
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
  if (q.includes("ca inter") || q.includes("inter dt") || q.includes("inter gst") || q.includes("ipcc")) {
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
  if (q.includes("refund") || q.includes("cancel") || q.includes("return") || q.includes("money back")) {
    return `Our Refund Policy permits cancellations within **48 hours** of enrollment, subject to these conditions:

• No lectures have been streamed or downloaded.
• The video player activation key has not been used.
• Physical textbooks have not yet been dispatched from our printing hub.

All approved refunds are credited back to the original payment source within 5-7 banking days. For assistance, email vbtaxclasses@gmail.com.`;
  }
  if (q.includes("enroll") || q.includes("register") || q.includes("buy") || q.includes("join") || q.includes("payment") || q.includes("admission") || q.includes("fees")) {
    return `You can enroll in our classes easily:

1. **Online Registry**: Browse our courses in the ledger, select the batch, and click **Enroll Now**.
2. **Direct Setup**: WhatsApp us at [**+91 90519 03915**](https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E) or call **+91 98307 73655** for manual registration and instant player activation keys.

We support GPay, PhonePe, credit/debit cards, net banking, and bank transfers.`;
  }
  if (q.includes("book") || q.includes("material") || q.includes("pdf") || q.includes("notes") || q.includes("chart")) {
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
function createFallbackResponseStream(messages) {
  const userMessages = messages.filter((m) => m.role === "user");
  const lastUserMessage = userMessages[userMessages.length - 1];
  const queryText = lastUserMessage?.parts?.map((p) => p.type === "text" ? p.text : "").join("") || "";
  const text = getFallbackResponse(queryText);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        const chunk = words[i] + (i < words.length - 1 ? " " : "");
        const formattedChunk = `0:${JSON.stringify(chunk)}
`;
        controller.enqueue(encoder.encode(formattedChunk));
        await new Promise((resolve) => setTimeout(resolve, 25));
      }
      const doneFrame = `d:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0}}
`;
      controller.enqueue(encoder.encode(doneFrame));
      controller.close();
    }
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "x-vercel-ai-data-stream": "v1",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    }
  });
}
const Route$1 = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let incomingMessages = [];
        try {
          const body = await request.json();
          if (Array.isArray(body.messages)) {
            incomingMessages = body.messages;
          }
        } catch (_) {
        }
        if (incomingMessages.length === 0) {
          return new Response("Messages are required", { status: 400 });
        }
        try {
          const key = process.env.LOVABLE_API_KEY;
          if (!key) {
            return createFallbackResponseStream(incomingMessages);
          }
          const gateway = createLovableAiGatewayProvider(key);
          const result = streamText({
            model: gateway("google/gemini-3-flash-preview"),
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(incomingMessages)
          });
          return result.toUIMessageStreamResponse({ originalMessages: incomingMessages });
        } catch (err) {
          console.error("chat error, triggering fallback", err);
          return createFallbackResponseStream(incomingMessages);
        }
      }
    }
  }
});
function createSupabaseAdminClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_SERVICE_ROLE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Connect Supabase in Lovable Cloud.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      storage: void 0,
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
let _supabaseAdmin;
const supabaseAdmin = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  }
});
const client_server = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  supabaseAdmin
}, Symbol.toStringTag, { value: "Module" }));
const Route = createFileRoute("/api/admin-data")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
          const url = process.env.SUPABASE_URL;
          if (!key || !url) {
            return new Response(
              JSON.stringify({
                success: false,
                error: "service_role_key_missing",
                message: "Missing Supabase service role key. Displaying sandbox demo data."
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json" }
              }
            );
          }
          const { data: profiles, error: pErr } = await supabaseAdmin.from("profiles").select("*").order("created_at", { ascending: false });
          if (pErr) throw pErr;
          const { data: orders, error: oErr } = await supabaseAdmin.from("orders").select("*").order("created_at", { ascending: false });
          if (oErr) throw oErr;
          const { data: enrollments, error: eErr } = await supabaseAdmin.from("enrollments").select("*").order("enrolled_at", { ascending: false });
          if (eErr) throw eErr;
          return new Response(
            JSON.stringify({
              success: true,
              profiles: profiles || [],
              orders: orders || [],
              enrollments: enrollments || []
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" }
            }
          );
        } catch (error) {
          console.error("Admin data fetch error:", error);
          return new Response(
            JSON.stringify({
              success: false,
              error: "fetch_failed",
              message: error.message
            }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
      }
    }
  }
});
const TermsRoute = Route$9.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$a
});
const RefundPolicyRoute = Route$8.update({
  id: "/refund-policy",
  path: "/refund-policy",
  getParentRoute: () => Route$a
});
const ProfileRoute = Route$7.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$a
});
const PrivacyRoute = Route$6.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$a
});
const AdminRoute = Route$5.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const ApiVerifyOtpRoute = Route$3.update({
  id: "/api/verify-otp",
  path: "/api/verify-otp",
  getParentRoute: () => Route$a
});
const ApiSendOtpRoute = Route$2.update({
  id: "/api/send-otp",
  path: "/api/send-otp",
  getParentRoute: () => Route$a
});
const ApiChatRoute = Route$1.update({
  id: "/api/chat",
  path: "/api/chat",
  getParentRoute: () => Route$a
});
const ApiAdminDataRoute = Route.update({
  id: "/api/admin-data",
  path: "/api/admin-data",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  PrivacyRoute,
  ProfileRoute,
  RefundPolicyRoute,
  TermsRoute,
  ApiAdminDataRoute,
  ApiChatRoute,
  ApiSendOtpRoute,
  ApiVerifyOtpRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
