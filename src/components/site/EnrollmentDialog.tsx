import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "@tanstack/react-router";
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
  QrCode,
  Wallet,
  Landmark,
  Upload,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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

type Step = "auth-email" | "verify-otp" | "enroll-details" | "payment-method" | "success";

export function EnrollmentDialog({
  open,
  onOpenChange,
  preselectedCourse,
}: EnrollmentDialogProps) {
  const navigate = useNavigate();
  // Step & Loader states
  const [step, setStep] = useState<Step>("auth-email");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Auth states
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [signature, setSignature] = useState("");
  const [expiry, setExpiry] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Profile details states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [courseLevel, setCourseLevel] = useState<string>("");

  // Payment states
  const [paymentUtr, setPaymentUtr] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);

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

  // Send verification code (OTP) via backend
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send verification code");
      }

      setSignature(data.signature);
      setExpiry(data.expiry);
      setOtp("");
      setStep("verify-otp");
      toast.success("Verification code sent to your email!");
    } catch (err: any) {
      setError(err.message || "Failed to send verification code. Please try again.");
      toast.error(err.message || "Failed to send verification code");
    } finally {
      setIsLoading(false);
    }
  };

  // Verify OTP and complete Supabase sign in
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // 1. Verify OTP on backend and get the derived password
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          otp,
          expiry,
          signature,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Verification failed");
      }

      const derivedPassword = data.password;

      // 2. Sign in with derived password
      let authResult: any = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password: derivedPassword,
      });

      if (authResult.error) {
        // If user doesn't exist yet, signIn returns "Invalid login credentials".
        // In that case, we fall back to creating the user dynamically.
        if (authResult.error.message.includes("Invalid login credentials")) {
          authResult = await supabase.auth.signUp({
            email: email.trim().toLowerCase(),
            password: derivedPassword,
          });
          if (authResult.error) throw authResult.error;
        } else {
          throw authResult.error;
        }
      }

      if (authResult.data.user) {
        setCurrentUser(authResult.data.user);
        await fetchProfile(authResult.data.user.id);
        setStep("enroll-details");
        toast.success("Email verified successfully!");
      }
    } catch (err: any) {
      setError(err.message || "Verification failed. Please try again.");
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

      // If a course is preselected, go to payment method
      if (preselectedCourse) {
        setStep("payment-method");
      } else {
        toast.success("Profile updated!");
        onOpenChange(false);
        navigate({ to: "/profile" });
        setTimeout(() => setStep("auth-email"), 300);
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit profile details");
      toast.error(err.message || "Submission failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 4: Submit Payment Details
  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentUtr) {
      setError("Please enter the UTR / Transaction ID");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      let screenshotUrl = null;

      // Upload screenshot to Supabase Storage if provided
      if (paymentScreenshot) {
        const fileExt = paymentScreenshot.name.split('.').pop();
        const fileName = `${currentUser.id}-${Date.now()}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("payment_receipts")
          .upload(fileName, paymentScreenshot);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          throw new Error("Failed to upload screenshot. Please ensure the 'payment_receipts' bucket exists and is public.");
        }

        const { data: publicUrlData } = supabase.storage
          .from("payment_receipts")
          .getPublicUrl(fileName);
        
        screenshotUrl = publicUrlData.publicUrl;
      }

      if (preselectedCourse) {
        // Use secure backend API to create pending order and enrollment
        const response = await fetch("/api/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: currentUser.id,
            courseTitle: preselectedCourse.title,
            courseBatch: preselectedCourse.batch,
            courseTag: preselectedCourse.tag,
            price: preselectedCourse.price,
            paymentUtr,
            screenshotUrl,
          }),
        });

        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.error || "Failed to process enrollment");
        }
      }

      setStep("success");
    } catch (err: any) {
      setError(err.message || "Failed to submit payment details");
      toast.error(err.message || "Payment submission failed");
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
                {step === "auth-email" ? "Sign In to VBTC" : step === "verify-otp" ? "Verify OTP" : step === "payment-method" ? "Complete Payment" : "Enrollment Details"}
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
                    Continue <ArrowRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center mt-3">
                By signing in, you agree to our Terms of Service & Privacy Policy.
              </p>
            </form>
          )}

          {/* STEP 2: OTP Verification */}
          {step === "verify-otp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                  Enter 6-digit Verification Code
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-muted-foreground" />
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="pl-11 h-11 rounded-xl border-border bg-card/50 text-foreground font-medium text-center tracking-[0.4em] text-lg font-bold"
                    maxLength={6}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => {
                    setStep("auth-email");
                    setError("");
                  }}
                  variant="outline"
                  className="flex-1 h-11 rounded-xl border-border font-bold text-xs"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-[2] h-11 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold text-xs"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
                    </>
                  ) : (
                    <>
                      Verify & Continue <ArrowRight className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-[11px] text-muted-foreground text-center mt-3">
                Didn't receive code?{" "}
                <button
                  type="button"
                  onClick={() => handleSendOtp()}
                  disabled={isLoading}
                  className="text-brand font-bold hover:underline"
                >
                  Resend OTP
                </button>
              </p>
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
                    Continue to Payment <ArrowRight className="ml-1.5 h-4.5 w-4.5" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* STEP 4: Payment Method */}
          {step === "payment-method" && preselectedCourse && (
            <div className="space-y-5">
              <div className="flex items-center justify-between p-3 bg-brand-50 rounded-xl border border-brand-100">
                <div>
                  <div className="text-xs text-muted-foreground font-semibold">Total Amount Due</div>
                  <div className="font-display font-bold text-xl text-foreground">₹{preselectedCourse.price.toLocaleString("en-IN")}</div>
                </div>
              </div>

              <Tabs defaultValue="qr" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-10 bg-secondary">
                  <TabsTrigger value="qr" className="text-xs font-bold"><QrCode className="w-3.5 h-3.5 mr-1.5" /> QR</TabsTrigger>
                  <TabsTrigger value="upi" className="text-xs font-bold"><Wallet className="w-3.5 h-3.5 mr-1.5" /> UPI</TabsTrigger>
                  <TabsTrigger value="bank" className="text-xs font-bold"><Landmark className="w-3.5 h-3.5 mr-1.5" /> Bank</TabsTrigger>
                </TabsList>
                <TabsContent value="qr" className="mt-3 text-center space-y-3">
                  <div className="bg-white p-3 rounded-2xl border shadow-sm inline-block mx-auto">
                    <img src="/payment-qr.png" alt="Payment QR Code" className="w-48 h-48 object-contain mx-auto" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200?text=QR+Code+Missing")} />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">Scan with any UPI app to pay</p>
                </TabsContent>
                <TabsContent value="upi" className="mt-3 text-center space-y-4 py-4">
                  <div className="text-sm font-semibold mb-2">UPI ID: <span className="font-bold text-foreground">9830773655@ybl</span></div>
                  <a
                    href={`upi://pay?pa=9830773655@ybl&pn=VIKRAM%20BIYANI&am=${preselectedCourse.price}&cu=INR&tn=CoursePayment`}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-6 font-bold text-white transition-colors hover:bg-indigo-700 shadow-lg w-full"
                  >
                    Pay via UPI App <Wallet className="ml-2 w-4 h-4" />
                  </a>
                </TabsContent>
                <TabsContent value="bank" className="mt-3">
                  <div className="rounded-xl border bg-secondary/30 p-4 space-y-2 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">A/C No:</span>
                      <span className="font-bold">909010035115895</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">IFSC:</span>
                      <span className="font-bold">UTIB0000411</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Holder:</span>
                      <span className="font-bold">VIKRAM BIYANI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground shrink-0 mr-4">Address:</span>
                      <span className="font-bold text-right text-xs pt-0.5">SARAT BOSE ROAD, KOLKATA [WB], 700020</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <form onSubmit={handleSubmitPayment} className="pt-3 border-t space-y-4">
                <div className="space-y-3">
                  <Label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                    Have you made the payment?
                  </Label>
                  <div className="space-y-3">
                    <Input
                      type="text"
                      placeholder="Enter UTR / Transaction ID *"
                      value={paymentUtr}
                      onChange={(e) => setPaymentUtr(e.target.value)}
                      className="h-10 rounded-xl bg-card/50"
                      required
                    />
                    <div className="relative">
                      <Input
                        type="file"
                        id="screenshot"
                        accept="image/*"
                        onChange={(e) => setPaymentScreenshot(e.target.files?.[0] || null)}
                        className="h-10 rounded-xl bg-card/50 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 cursor-pointer text-xs"
                      />
                    </div>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg rounded-xl font-bold"
                >
                  {isLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...</>
                  ) : (
                    <><CheckCircle2 className="mr-2 h-4.5 w-4.5" /> Submit Payment Details</>
                  )}
                </Button>
              </form>
            </div>
          )}

          {/* STEP 5: Success confirmation view */}
          {step === "success" && (
            <div className="text-center py-6 space-y-5 animate-fade-up">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border-2 border-emerald-500/20">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-foreground">Enrollment Successful!</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you for your purchase! Your payment is currently under review. Once verified, your course materials will be provided soon.
                </p>
              </div>

              {preselectedCourse && (
                <div className="rounded-2xl border border-border bg-card p-4 text-left max-w-sm mx-auto space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Enrollment Request</div>
                  <div className="font-display font-bold text-foreground">{preselectedCourse.title}</div>
                  <div className="flex justify-between text-xs pt-1 text-muted-foreground border-t border-border mt-2">
                    <span>Batch: {preselectedCourse.batch}</span>
                    <span className="text-amber-600 font-bold uppercase tracking-wider">Status: Pending Verification</span>
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
