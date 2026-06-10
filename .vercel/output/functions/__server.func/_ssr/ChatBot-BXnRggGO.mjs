import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useChat } from "../_libs/ai-sdk__react.mjs";
import { D as DefaultChatTransport } from "../_libs/ai.mjs";
import { X, y as MessageCircle, l as Sparkles, x as Send } from "../_libs/lucide-react.mjs";
import { M as Markdown } from "../_libs/react-markdown.mjs";
const heroImg = "/assets/viram%20biyani%20profile-LbCwSKju.jpg";
const SUGGESTIONS = [
  "What's the fee for CA Inter Taxation?",
  "Difference between Hard Books and PDF?",
  "Which batch is best for May 2027?",
  "How do I enrol?"
];
const GREETING = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Namaste 🙏 I'm **Vikram Sir Bot** — here to help you choose the right CA / CMA Taxation course. Ask me anything about batches, fees, books or admissions!"
    }
  ]
};
function ChatBot() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const scrollRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const { messages, sendMessage, status } = useChat({
    id: "vbtc-bot",
    messages: [GREETING],
    transport: new DefaultChatTransport({ api: "/api/chat" })
  });
  const busy = status === "submitted" || status === "streaming";
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);
  reactExports.useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);
  const submit = (text) => {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((o) => !o),
        "aria-label": "Open chat",
        className: "fixed bottom-5 right-5 z-50 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-brand/40 blur-xl animate-pulse-slow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand via-brand-600 to-brand-800 text-white shadow-brand-lg hover:scale-110 transition-transform", children: [
            open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
            !open && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" })
          ] }),
          !open && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-medium px-3 py-1.5 shadow-elevated opacity-0 group-hover:opacity-100 transition-opacity", children: "Ask Vikram Sir Bot" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-24 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-w-md animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-3xl bg-background border border-border shadow-elevated overflow-hidden flex flex-col",
        style: { height: "min(70vh, 600px)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-4 py-3 bg-gradient-to-br from-brand via-brand-600 to-brand-800 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-dots opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: heroImg,
                    alt: "VB",
                    className: "h-11 w-11 rounded-full object-cover object-top border-2 border-white/80 shadow-soft"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-bold flex items-center gap-1.5", children: [
                  "Vikram Sir Bot ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] opacity-90", children: "Usually replies instantly · CA & CMA counselling" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  "aria-label": "Close",
                  className: "p-1.5 rounded-lg hover:bg-white/10 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: scrollRef,
              className: "flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-brand-50/40 to-background",
              children: [
                messages.map((m) => {
                  const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
                  if (!text) return null;
                  const mine = m.role === "user";
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${mine ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-soft ${mine ? "bg-gradient-to-br from-brand to-brand-600 text-white rounded-br-md" : "bg-card border border-border text-foreground rounded-bl-md"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-strong:text-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: text }) })
                    }
                  ) }, m.id);
                }),
                status === "submitted" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "h-2 w-2 rounded-full bg-brand/60 animate-bounce",
                    style: { animationDelay: `${i * 120}ms` }
                  },
                  i
                )) }) }) })
              ]
            }
          ),
          messages.length <= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-2 flex flex-wrap gap-1.5 border-t border-border pt-3 bg-background", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => submit(s),
              disabled: busy,
              className: "text-[11px] px-2.5 py-1.5 rounded-full border border-brand/30 text-brand-700 bg-brand-50 hover:bg-brand hover:text-white transition-colors disabled:opacity-50",
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                submit(input);
              },
              className: "flex items-center gap-2 px-3 py-3 border-t border-border bg-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: inputRef,
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    placeholder: "Ask about courses, fees, batches…",
                    disabled: busy,
                    className: "flex-1 h-11 px-4 rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:opacity-60"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: busy || !input.trim(),
                    className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-brand disabled:opacity-40 hover:scale-105 transition-transform",
                    "aria-label": "Send",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                  }
                )
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  ChatBot as C,
  heroImg as h
};
