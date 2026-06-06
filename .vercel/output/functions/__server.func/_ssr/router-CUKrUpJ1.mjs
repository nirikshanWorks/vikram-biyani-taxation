import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as streamText, c as convertToModelMessages } from "../_libs/ai.mjs";
import { c as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/ai-sdk__gateway.mjs";
import "../_libs/ai-sdk__provider-utils.mjs";
import "../_libs/ai-sdk__provider.mjs";
import "../_libs/eventsource-parser.mjs";
import "../_libs/zod.mjs";
import "../_libs/@vercel/oidc.mjs";
import "path";
import "fs";
import "os";
import "../_libs/opentelemetry__api.mjs";
const appCss = "/assets/styles-Cefv8BPu.css";
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
const Route$5 = createRootRouteWithContext()({
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
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$3 = () => import("./terms-DGqilXXP.mjs");
const Route$4 = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms and Conditions — CA Vikram Biyani"
    }, {
      name: "description",
      content: "Read the Terms of Service for enrollment, lecture access, and code of conduct under VBTC."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./refund-policy-C8LSO1Fm.mjs");
const Route$3 = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [{
      title: "Refund Policy — CA Vikram Biyani"
    }, {
      name: "description",
      content: "Understand the terms of cancelations, refunds, and batch transfer policies for CA Vikram Biyani courses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./privacy-C6PDaKbq.mjs");
const Route$2 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — CA Vikram Biyani"
    }, {
      name: "description",
      content: "Learn how CA Vikram Biyani (VBTC) collects, uses, and safeguards student data."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CfZTM3ow.mjs");
const Route$1 = createFileRoute("/")({
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
const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = await request.json();
          if (!Array.isArray(messages)) {
            return new Response("Messages are required", { status: 400 });
          }
          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
          const gateway = createLovableAiGatewayProvider(key);
          const result = streamText({
            model: gateway("google/gemini-3-flash-preview"),
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages)
          });
          return result.toUIMessageStreamResponse({ originalMessages: messages });
        } catch (err) {
          console.error("chat error", err);
          return new Response("Chat error", { status: 500 });
        }
      }
    }
  }
});
const TermsRoute = Route$4.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$5
});
const RefundPolicyRoute = Route$3.update({
  id: "/refund-policy",
  path: "/refund-policy",
  getParentRoute: () => Route$5
});
const PrivacyRoute = Route$2.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const ApiChatRoute = Route.update({
  id: "/api/chat",
  path: "/api/chat",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  PrivacyRoute,
  RefundPolicyRoute,
  TermsRoute,
  ApiChatRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
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
