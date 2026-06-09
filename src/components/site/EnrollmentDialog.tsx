import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPSlot, InputOTPGroup } from "@/components/ui/input-otp";
import { toast } from "sonner";
import {
  GraduationCap,
  Mail,
  KeyRound,
  Loader2,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  Lock,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface Course {
  title: string;
  batch: string;
  tag: string;
  price: number;
  books: string;
  hours: string;
}

interface EnrollmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedCourse?: Course | null;
}

type Step = "auth-email" | "auth-otp" | "enroll-details" | "success";

export function EnrollmentDialog({
  open,
  onOpenChange,
  preselectedCourse,
}: EnrollmentDialogProps) {
  // Step & Loader states
  const [step, setStep] = useState<Step>("auth-email");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Auth states
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [expiry, setExpiry] = useState<number>(0);
  const [signature, setSignature] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Profile details states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [courseLevel, setCourseLevel] = useState<string>("");

  // Check initial login state when modal opens
  useEffect(() => {
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

  // Countdown timer for OTP resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Fetch student profile details from Supabase
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      
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

  // Step 1: Send OTP to User's Email via SMTP Backend
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send verification code");
      }

      setExpiry(data.expiry);
      setSignature(data.signature);
      setCountdown(60); // 60 seconds cooldown for resending
      setStep("auth-otp");
      toast.success("Verification code sent to your email!");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      toast.error(err.message || "Failed to send code");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP & Login User using Supabase with Derived Password
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError("Please enter the 6-digit verification code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // 1. Verify code on backend
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, expiry, signature }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Verification failed");
      }

      const derivedPassword = data.password;

      // 2. Try to log in with derived password
      let authResult = await supabase.auth.signInWithPassword({
        email,
        password: derivedPassword,
      });

      // 3. If user doesn't exist, sign up
      if (authResult.error && authResult.error.message.includes("Invalid login credentials")) {
        authResult = await supabase.auth.signUp({
          email,
          password: derivedPassword,
        });
      }

      if (authResult.error) {
        throw authResult.error;
      }

      if (authResult.data.user) {
        setCurrentUser(authResult.data.user);
        await fetchProfile(authResult.data.user.id);
        setStep("enroll-details");
        toast.success("Successfully authenticated!");
      }
    } catch (err: any) {
      setError(err.message || "OTP verification failed. Please try again.");
      toast.error(err.message || "Verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Complete Enrollment & Save in Database
  const handleCompleteEnrollment = async (e: React.FormEvent) => {
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
      // 1. Update Student Profile in Supabase
      const { error: profileError } = await supabase
        .from("profiles")
        .upsert({
          id: currentUser.id,
          full_name: fullName,
          phone,
          city,
          course_level: courseLevel as any,
          email,
          updated_at: new Date().toISOString(),
        });

      if (profileError) throw profileError;

      // If a course is preselected, log the purchase order and activate enrollment
      if (preselectedCourse) {
        const txnId = `TXN-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        // 2. Insert Order record (marked as paid for instant activation)
        const { data: order, error: orderError } = await supabase
          .from("orders")
          .insert({
            user_id: currentUser.id,
            course_title: preselectedCourse.title,
            course_batch: preselectedCourse.batch,
            course_tag: preselectedCourse.tag,
            amount_inr: preselectedCourse.price,
            status: "paid",
            phonepe_merchant_txn_id: txnId,
          })
          .select()
          .single();

        if (orderError) throw orderError;

        // 3. Insert Enrollment record
        const { error: enrollmentError } = await supabase
          .from("enrollments")
          .insert({
            user_id: currentUser.id,
            order_id: order.id,
            course_title: preselectedCourse.title,
            course_batch: preselectedCourse.batch,
            course_tag: preselectedCourse.tag,
            access_status: "active",
          });

        if (enrollmentError) throw enrollmentError;
      }

      setStep("success");
      toast.success("Successfully enrolled!");
    } catch (err: any) {
      setError(err.message || "Failed to submit enrollment");
      toast.error(err.message || "Enrollment failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[460px] overflow-hidden rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-elevated p-0">
        
        {/* Dynamic header design */}
        <div className="bg-gradient-to-r from-navy to-brand-900 text-white p-6 relative">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand/10 blur-xl" />
          <div className="relative flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <GraduationCap className="h-5 w-5 text-gold" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold tracking-tight text-white font-display">
                {step === "auth-email" || step === "auth-otp" ? "Sign In to VBTC" : "Enrollment Details"}
              </DialogTitle>
              <DialogDescription className="text-white/70 text-xs mt-0.5">
                {preselectedCourse ? `Course: ${preselectedCourse.title}` : "CA & CMA Taxation Batches"}
              </DialogDescription>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {error && (
            <div className="mb-4 text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 p-3 rounded-xl border border-red-200/40 animate-fade-in">
              {error}
            </div>
          )}

          {/* STEP 1: Email Input */}
          {step === "auth-email" && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                  Email ID
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4.5 w-4.5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-11 rounded-xl border-border bg-card/50 text-foreground font-medium"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Code...
                  </>
                ) : (
                  <>
                    Send OTP <ArrowRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center mt-3">
                By signing in, you agree to our Terms of Service & Privacy Policy.
              </p>
            </form>
          )}

          {/* STEP 2: OTP Entry */}
          {step === "auth-otp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-5 text-center">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-foreground/80 uppercase tracking-wider block text-left">
                  Verification Code
                </Label>
                <p className="text-xs text-muted-foreground text-left">
                  We've sent a 6-digit verification code to <strong className="text-foreground">{email}</strong>.
                </p>
                <div className="flex justify-center pt-2">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup className="gap-2">
                      <InputOTPSlot index={0} className="w-11 h-12 text-lg font-bold rounded-xl border-border bg-card/50 text-foreground" />
                      <InputOTPSlot index={1} className="w-11 h-12 text-lg font-bold rounded-xl border-border bg-card/50 text-foreground" />
                      <InputOTPSlot index={2} className="w-11 h-12 text-lg font-bold rounded-xl border-border bg-card/50 text-foreground" />
                      <InputOTPSlot index={3} className="w-11 h-12 text-lg font-bold rounded-xl border-border bg-card/50 text-foreground" />
                      <InputOTPSlot index={4} className="w-11 h-12 text-lg font-bold rounded-xl border-border bg-card/50 text-foreground" />
                      <InputOTPSlot index={5} className="w-11 h-12 text-lg font-bold rounded-xl border-border bg-card/50 text-foreground" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
                    </>
                  ) : (
                    "Verify & Login"
                  )}
                </Button>

                <div className="flex items-center justify-between text-xs mt-1 px-1">
                  <button
                    type="button"
                    onClick={() => setStep("auth-email")}
                    className="text-muted-foreground hover:text-brand font-semibold"
                  >
                    Change Email
                  </button>
                  {countdown > 0 ? (
                    <span className="text-muted-foreground">Resend OTP in {countdown}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-brand hover:text-brand-700 font-bold"
                    >
                      Resend Code
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}

          {/* STEP 3: Student Details & Confirmation */}
          {step === "enroll-details" && (
            <form onSubmit={handleCompleteEnrollment} className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your legal name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-10 rounded-xl border-border bg-card/50 font-medium"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                      Mobile Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10 h-10 rounded-xl border-border bg-card/50 font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="city" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                      City
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="city"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="pl-10 h-10 rounded-xl border-border bg-card/50 font-medium"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="courseLevel" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                    Target Course Level
                  </Label>
                  <select
                    id="courseLevel"
                    value={courseLevel}
                    onChange={(e) => setCourseLevel(e.target.value)}
                    className="w-full h-10 rounded-xl border border-border bg-card/50 px-3 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand text-foreground"
                    required
                  >
                    <option value="CA Inter">CA Inter</option>
                    <option value="CA Final">CA Final</option>
                    <option value="CMA Final">CMA Final</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {preselectedCourse && (
                <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/20 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-700 flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-gold fill-gold" /> Enrollment Summary
                    </span>
                    <span className="font-bold text-foreground">{preselectedCourse.batch} Batch</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground">{preselectedCourse.title}</h4>
                  <div className="flex justify-between items-center border-t border-brand-100/30 pt-2.5 mt-2.5">
                    <span className="text-xs text-muted-foreground">Inclusions: {preselectedCourse.books}</span>
                    <span className="font-display text-base font-extrabold text-brand">
                      ₹{preselectedCourse.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Finalizing...
                  </>
                ) : (
                  <>
                    Confirm Enrollment <CheckCircle2 className="ml-1.5 h-4.5 w-4.5" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* STEP 4: Success confirmation view */}
          {step === "success" && (
            <div className="text-center py-6 space-y-5 animate-fade-up">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border-2 border-emerald-500/20">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-foreground">Enrollment Successful!</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Congratulations! You have been successfully registered for the batch. An activation receipt and instructions have been queued for your email.
                </p>
              </div>

              {preselectedCourse && (
                <div className="rounded-2xl border border-border bg-card p-4 text-left max-w-sm mx-auto space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Active Enrollment</div>
                  <div className="font-display font-bold text-foreground">{preselectedCourse.title}</div>
                  <div className="flex justify-between text-xs pt-1 text-muted-foreground border-t border-border mt-2">
                    <span>Batch: {preselectedCourse.batch}</span>
                    <span className="text-emerald-600 font-bold uppercase tracking-wider">Status: Active</span>
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-border space-y-2.5 max-w-sm mx-auto">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our coordinator will reach out to you within 24 hours on WhatsApp for visual activation key setup.
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      onOpenChange(false);
                      // Slight delay to reset the modal step smoothly
                      setTimeout(() => setStep("auth-email"), 300);
                    }}
                    className="flex-1 rounded-xl h-10 border-border bg-secondary hover:bg-secondary/80 text-foreground font-semibold"
                    variant="outline"
                  >
                    Close Window
                  </Button>
                  <a
                    href="https://wa.me/919051903915?text=Hello%21%20I%20just%20enrolled%20online%20for%20the%20taxation%20class%2E%20Please%20guide%20me%20with%20activation%2E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:shadow-lg text-white font-bold text-xs inline-flex items-center justify-center rounded-xl h-10 transition-all"
                  >
                    WhatsApp support
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
