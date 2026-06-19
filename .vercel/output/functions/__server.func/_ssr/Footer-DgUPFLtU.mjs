import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { s as supabase } from "./client-CbFIo5u-.mjs";
import { R as Root$1, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { e as Phone, K as ChevronDown, h as BookOpen, G as GraduationCap, v as Award, d as LogOut, X, _ as Menu, $ as Linkedin, a0 as Twitter, a1 as Facebook, f as MapPin, M as Mail, L as LoaderCircle, A as ArrowRight, l as Sparkles, a2 as CircleCheck, a3 as Sun, a4 as Moon } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logo = "/assets/VB-logo-BGlHIX8n.jpg";
function useTheme() {
  const [theme, setTheme] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => t === "light" ? "dark" : "light");
  return { theme, toggleTheme, setTheme };
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/80 hover:text-brand hover:border-brand/40 hover:scale-105 active:scale-95 transition-all shadow-soft overflow-hidden",
      "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-5 w-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Sun,
          {
            className: `absolute inset-0 h-5 w-5 text-amber-500 transition-all duration-500 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Moon,
          {
            className: `absolute inset-0 h-5 w-5 text-brand transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`
          }
        )
      ] })
    }
  );
}
const Dialog = Root$1;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
function EnrollmentDialog({
  open,
  onOpenChange,
  preselectedCourse
}) {
  const [step, setStep] = reactExports.useState("auth-email");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [currentUser, setCurrentUser] = reactExports.useState(null);
  const [fullName, setFullName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [courseLevel, setCourseLevel] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (open) {
      const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setCurrentUser(session.user);
          setEmail(session.user.email || "");
          await fetchProfile(session.user.id);
          setStep("enroll-details");
        } else {
          setStep("auth-email");
        }
      };
      checkUser();
    }
  }, [open]);
  const fetchProfile = async (userId) => {
    try {
      const { data, error: error2 } = await supabase.from("profiles").select("*").eq("id", userId).single();
      if (data) {
        setFullName(data.full_name || "");
        setPhone(data.phone || "");
        setCity(data.city || "");
        setCourseLevel(data.course_level || preselectedCourse?.tag || "CA Inter");
      } else {
        setCourseLevel(preselectedCourse?.tag || "CA Inter");
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      setCourseLevel(preselectedCourse?.tag || "CA Inter");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
      const derivedPassword = data.password;
      const authResult = await supabase.auth.signInWithPassword({
        email,
        password: derivedPassword
      });
      if (authResult.error) {
        throw authResult.error;
      }
      if (authResult.data.user) {
        setCurrentUser(authResult.data.user);
        await fetchProfile(authResult.data.user.id);
        setStep("enroll-details");
        toast.success("Successfully authenticated!");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      toast.error(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };
  const handleCompleteEnrollment = async (e) => {
    e.preventDefault();
    if (!fullName || !phone || !city || !courseLevel) {
      setError("Please fill out all fields");
      return;
    }
    if (!currentUser) {
      setError("Authentication expired. Please log in again.");
      setStep("auth-email");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: currentUser.id,
        full_name: fullName,
        phone,
        city,
        course_level: courseLevel,
        email,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      if (profileError) throw profileError;
      if (preselectedCourse) {
        const txnId = `TXN-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
        const { data: order, error: orderError } = await supabase.from("orders").insert({
          user_id: currentUser.id,
          course_title: preselectedCourse.title,
          course_batch: preselectedCourse.batch,
          course_tag: preselectedCourse.tag,
          amount_inr: preselectedCourse.price,
          status: "paid",
          phonepe_merchant_txn_id: txnId
        }).select().single();
        if (orderError) throw orderError;
        const { error: enrollmentError } = await supabase.from("enrollments").insert({
          user_id: currentUser.id,
          order_id: order.id,
          course_title: preselectedCourse.title,
          course_batch: preselectedCourse.batch,
          course_tag: preselectedCourse.tag,
          access_status: "active"
        });
        if (enrollmentError) throw enrollmentError;
      }
      setStep("success");
      toast.success("Successfully enrolled!");
    } catch (err) {
      setError(err.message || "Failed to submit enrollment");
      toast.error(err.message || "Enrollment failed");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[460px] overflow-hidden rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-elevated p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-navy to-brand-900 text-white p-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-32 w-32 rounded-full bg-brand/10 blur-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl font-bold tracking-tight text-white font-display", children: step === "auth-email" ? "Sign In to VBTC" : "Enrollment Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-white/70 text-xs mt-0.5", children: preselectedCourse ? `Course: ${preselectedCourse.title}` : "CA & CMA Taxation Batches" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8", children: [
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 p-3 rounded-xl border border-red-200/40 animate-fade-in", children: error }),
      step === "auth-email" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-xs font-bold text-foreground/80 uppercase tracking-wider", children: "Email ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3.5 top-3 h-4.5 w-4.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                placeholder: "Enter your email address",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "pl-11 h-11 rounded-xl border-border bg-card/50 text-foreground font-medium",
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            disabled: isLoading,
            className: "w-full h-11 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold mt-2",
            children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
              " Signing In..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Continue ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center mt-3", children: "By signing in, you agree to our Terms of Service & Privacy Policy." })
      ] }),
      step === "enroll-details" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCompleteEnrollment, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-xs font-bold text-foreground/80 uppercase tracking-wider", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                type: "text",
                placeholder: "Enter your legal name",
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                className: "h-10 rounded-xl border-border bg-card/50 font-medium",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", className: "text-xs font-bold text-foreground/80 uppercase tracking-wider", children: "Mobile Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    type: "tel",
                    placeholder: "Mobile",
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    className: "pl-10 h-10 rounded-xl border-border bg-card/50 font-medium",
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", className: "text-xs font-bold text-foreground/80 uppercase tracking-wider", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "city",
                    type: "text",
                    placeholder: "City",
                    value: city,
                    onChange: (e) => setCity(e.target.value),
                    className: "pl-10 h-10 rounded-xl border-border bg-card/50 font-medium",
                    required: true
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "courseLevel", className: "text-xs font-bold text-foreground/80 uppercase tracking-wider", children: "Target Course Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "courseLevel",
                value: courseLevel,
                onChange: (e) => setCourseLevel(e.target.value),
                className: "w-full h-10 rounded-xl border border-border bg-card/50 px-3 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand text-foreground",
                required: true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CA Inter", children: "CA Inter" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CA Final", children: "CA Final" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CMA Final", children: "CMA Final" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" })
                ]
              }
            )
          ] })
        ] }),
        preselectedCourse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-2xl border border-brand-100 bg-brand-50/20 p-4 space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-brand-700 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold fill-gold" }),
              " Enrollment Summary"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground", children: [
              preselectedCourse.batch,
              " Batch"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-bold text-foreground", children: preselectedCourse.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-t border-brand-100/30 pt-2.5 mt-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "Inclusions: ",
              preselectedCourse.books
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base font-extrabold text-brand", children: [
              "₹",
              preselectedCourse.price.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            disabled: isLoading,
            className: "w-full h-11 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold mt-2",
            children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
              " Finalizing..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Confirm Enrollment ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "ml-1.5 h-4.5 w-4.5" })
            ] })
          }
        )
      ] }),
      step === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 space-y-5 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border-2 border-emerald-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-9 w-9" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground", children: "Enrollment Successful!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mx-auto", children: "Congratulations! You have been successfully registered for the batch. An activation receipt and instructions have been queued for your email." })
        ] }),
        preselectedCourse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 text-left max-w-sm mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-semibold", children: "Active Enrollment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: preselectedCourse.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs pt-1 text-muted-foreground border-t border-border mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Batch: ",
              preselectedCourse.batch
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold uppercase tracking-wider", children: "Status: Active" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border space-y-2.5 max-w-sm mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Our coordinator will reach out to you within 24 hours on WhatsApp for visual activation key setup." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => {
                  onOpenChange(false);
                  setTimeout(() => setStep("auth-email"), 300);
                },
                className: "flex-1 rounded-xl h-10 border-border bg-secondary hover:bg-secondary/80 text-foreground font-semibold",
                variant: "outline",
                children: "Close Window"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/919051903915?text=Hello%21%20I%20just%20enrolled%20online%20for%20the%20taxation%20class%2E%20Please%20guide%20me%20with%20activation%2E",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:shadow-lg text-white font-bold text-xs inline-flex items-center justify-center rounded-xl h-10 transition-all",
                children: "WhatsApp support"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const courseGroups = [
  {
    icon: BookOpen,
    title: "CA Inter",
    subtitle: "Taxation (DT + GST)",
    color: "from-sky-500 to-blue-600",
    items: [
      { label: "Sep 2026 · Hard Books", price: "₹7,500" },
      { label: "Sep 2026 · PDF", price: "₹6,000" }
    ]
  },
  {
    icon: GraduationCap,
    title: "CA Final",
    subtitle: "DT · IDT · Combo",
    color: "from-brand to-brand-700",
    items: [
      { label: "Direct Tax — Nov 26 / May 27", price: "₹8,600+" },
      { label: "Indirect Tax — Nov 26 / May 27", price: "₹7,500+" },
      { label: "DT + IDT Combo", price: "₹13,200+" }
    ]
  },
  {
    icon: Award,
    title: "CMA Final",
    subtitle: "DT & IDT — Dec 26 / 27",
    color: "from-amber-500 to-orange-600",
    items: [
      { label: "Direct Tax — Hard Books", price: "₹8,600+" },
      { label: "Indirect Tax — Hard Books", price: "₹8,600+" }
    ]
  }
];
const links = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [coursesOpen, setCoursesOpen] = reactExports.useState(false);
  const [enrollDialogOpen, setEnrollDialogOpen] = reactExports.useState(false);
  const [user, setUser] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);
  const [preselectedCourse, setPreselectedCourse] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const handleTriggerEnroll = (e) => {
      setPreselectedCourse(e.detail || null);
      setEnrollDialogOpen(true);
    };
    window.addEventListener("trigger-enroll", handleTriggerEnroll);
    return () => window.removeEventListener("trigger-enroll", handleTriggerEnroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `sticky top-0 z-40 transition-all ${scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft" : "bg-background/40 backdrop-blur"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-gradient-to-r from-navy via-brand-800 to-navy text-white/90 text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-between h-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-gold" }),
              " +91 98307 73655"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "vbtaxclasses@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "★ 5.0 / 5.0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50,000+ students trained" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logo,
                alt: "VB",
                className: "h-10 w-10 rounded-xl object-contain bg-white p-0.5 shadow-soft"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold text-foreground", children: "CA Vikram Biyani" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-brand font-semibold", children: "Taxation Mentor · VBTC" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setCoursesOpen(true),
                onMouseLeave: () => setCoursesOpen(false),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setCoursesOpen((o) => !o),
                      className: "flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-brand transition-colors py-2",
                      "aria-expanded": coursesOpen,
                      children: [
                        "Courses",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: `h-3.5 w-3.5 transition-transform ${coursesOpen ? "rotate-180" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  coursesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px] animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-elevated p-3 grid grid-cols-3 gap-2", children: [
                    courseGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "#courses",
                        onClick: () => setCoursesOpen(false),
                        className: "group relative rounded-2xl p-4 hover:bg-brand-50 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-soft`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-5 w-5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-base font-bold text-foreground", children: g.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-brand-700 font-medium", children: g.subtitle }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "li",
                            {
                              className: "text-[12px] text-foreground/75 flex items-start justify-between gap-2 leading-tight",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-semibold whitespace-nowrap", children: it.price })
                              ]
                            },
                            it.label
                          )) })
                        ]
                      },
                      g.title
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "#courses",
                        onClick: () => setCoursesOpen(false),
                        className: "col-span-3 mt-1 rounded-2xl bg-gradient-to-r from-brand to-brand-700 text-white px-4 py-3 flex items-center justify-between text-sm font-semibold hover:shadow-brand transition-shadow",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "See all 13 batches with full details" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
                        ]
                      }
                    )
                  ] }) })
                ]
              }
            ),
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: l.href,
                className: "text-sm font-medium text-foreground/80 hover:text-brand transition-colors relative group",
                children: [
                  l.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all group-hover:w-full" })
                ]
              },
              l.href
            )),
            user && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/profile",
                className: "text-sm font-bold text-brand hover:text-brand-700 transition-colors relative group",
                children: [
                  "Dashboard",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all group-hover:w-full" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-sm font-medium text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }),
                  " WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            user && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                onClick: () => supabase.auth.signOut(),
                className: "border-red-200/50 hover:bg-red-50 text-red-600 hover:text-red-700 flex items-center gap-1.5 rounded-xl cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                  " Sign Out"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => setEnrollDialogOpen(true),
                className: "bg-gradient-to-r from-brand to-brand-700 text-white hover:shadow-brand cursor-pointer",
                children: "Enroll Now"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              className: "lg:hidden p-2",
              onClick: () => setOpen((o) => !o),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-4 flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-brand font-bold pt-2 pb-1", children: "Courses" }),
          courseGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#courses",
              onClick: () => setOpen(false),
              className: "flex items-center gap-3 py-2.5 rounded-xl hover:bg-brand-50 px-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${g.color} text-white`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: g.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: g.subtitle })
                ] })
              ]
            },
            g.title
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border my-2" }),
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "py-2 text-sm font-medium",
              children: l.label
            },
            l.href
          )),
          user && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/profile",
              onClick: () => setOpen(false),
              className: "py-2 text-sm font-bold text-brand",
              children: "Dashboard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => {
                setOpen(false);
                setEnrollDialogOpen(true);
              },
              className: "bg-gradient-to-r from-brand to-brand-700 text-white mt-2 cursor-pointer",
              children: "Enroll Now"
            }
          ),
          user && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => {
                setOpen(false);
                supabase.auth.signOut();
              },
              className: "border-red-200/50 text-red-600 hover:bg-red-50 mt-1 flex items-center justify-center gap-1.5 cursor-pointer w-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                " Sign Out"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground/80", children: "Toggle Theme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EnrollmentDialog,
          {
            open: enrollDialogOpen,
            onOpenChange: setEnrollDialogOpen,
            preselectedCourse
          }
        )
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy text-navy-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-gold text-gold-foreground font-display text-lg font-bold", children: "V" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-semibold", children: "CA Vikram Biyani" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-gold", children: "Taxation Mentor" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-navy-foreground/70 leading-relaxed", children: "India's trusted taxation faculty for CA & CMA students. Master Direct Tax and GST with structured, exam-focused learning." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [
          { Icon: Linkedin, href: "https://www.linkedin.com/in/vikram-biyani-44810817b/" },
          { Icon: Twitter, href: "https://x.com/CAVikramBiyani" },
          { Icon: Facebook, href: "https://www.facebook.com/CaVikramBiyani/" }
        ].map(({ Icon, href }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "grid h-10 w-10 place-items-center rounded-lg bg-white/5 border border-white/10 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gold uppercase tracking-wider", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm text-navy-foreground/80", children: [
          { label: "Courses", href: "/#courses" },
          { label: "About", href: "/#about" },
          { label: "Student Reviews", href: "/#testimonials" },
          { label: "Resources", href: "/#resources" },
          { label: "Results", href: "/#results" },
          { label: "FAQ", href: "/#faq" },
          { label: "Contact", href: "/#contact" }
        ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, className: "hover:text-gold transition-colors", children: link.label }) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gold uppercase tracking-wider", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
            " Kenderdine Ln, Bowbazar, Kolkata, WB 700012"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold shrink-0" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919830773655", className: "hover:text-gold", children: "+91 98307 73655" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold shrink-0" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/919051903915?text=Hello%21%20I%27m%20interested%20in%20CA%2FCMA%20Taxation%20classes%20with%20CA%20Vikram%20Biyani%2E%20Please%20guide%20me%20with%20enrollment%20and%20batch%20details%2E",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-gold",
                children: "+91 90519 03915 (WhatsApp)"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-gold shrink-0" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:vbtaxclasses@gmail.com", className: "hover:text-gold", children: "vbtaxclasses@gmail.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-navy-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CA Vikram Biyani. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-gold", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/refund-policy", className: "hover:text-gold", children: "Refund Policy" })
      ] })
    ] }) })
  ] });
}
export {
  Button as B,
  EnrollmentDialog as E,
  Footer as F,
  Input as I,
  Label as L,
  Navbar as N,
  cn as c
};
