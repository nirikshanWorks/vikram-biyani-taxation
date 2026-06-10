import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatBot } from "@/components/site/ChatBot";
import { EnrollmentDialog } from "@/components/site/EnrollmentDialog";
import { supabase } from "@/integrations/supabase/client";
import { courses } from "@/components/site/Courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  User,
  BookOpen,
  ShoppingBag,
  LogOut,
  MapPin,
  Phone,
  Mail,
  UserCheck,
  Compass,
  CheckCircle,
  Loader2,
  Lock,
  Edit2,
  BookMarked,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — CA Vikram Biyani" },
      {
        name: "description",
        content: "View your profile, access enrolled batches, and explore available courses under VBTC.",
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"profile" | "batches" | "shop">("profile");
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Profile Edit states
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [courseLevel, setCourseLevel] = useState<string>("CA Inter");
  const [isSaving, setIsSaving] = useState(false);

  // Shop states
  const [purchasingCourse, setPurchasingCourse] = useState<any>(null);
  const [isPurchasing, setIsPurchasing] = useState(false);

  // Monitor auth state changes
  useEffect(() => {
    const checkUser = async () => {
      setIsPageLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        await loadUserData(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
        setEnrollments([]);
        setIsPageLoading(false);
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser(session.user);
        await loadUserData(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
        setEnrollments([]);
        setIsPageLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch profile and enrollment lists from Supabase
  const loadUserData = async (userId: string) => {
    try {
      // 1. Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      
      if (profileData) {
        setProfile(profileData);
        setFullName(profileData.full_name || "");
        setPhone(profileData.phone || "");
        setCity(profileData.city || "");
        setCourseLevel(profileData.course_level || "CA Inter");
      }

      // 2. Fetch active enrollments
      const { data: enrollmentsData } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", userId)
        .order("enrolled_at", { ascending: false });

      if (enrollmentsData) {
        setEnrollments(enrollmentsData);
      }
    } catch (err) {
      console.error("Error loading user data:", err);
    } finally {
      setIsPageLoading(false);
    }
  };

  // Edit Profile Form Submit handler
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsSaving(true);

    try {
      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          full_name: fullName,
          phone,
          city,
          course_level: courseLevel as any,
          email: user.email,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast.success("Profile updated successfully!");
      setIsEditing(false);
      await loadUserData(user.id);
    } catch (err: any) {
      toast.error(err.message || "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  // Mock Purchase Course handler
  const handleBuyCourse = async (courseToBuy: any) => {
    if (!user) {
      setAuthDialogOpen(true);
      return;
    }
    setPurchasingCourse(courseToBuy);
  };

  const confirmPurchase = async () => {
    if (!user || !purchasingCourse) return;
    setIsPurchasing(true);

    try {
      const txnId = `TXN-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      // 1. Create paid Order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          course_title: purchasingCourse.title,
          course_batch: purchasingCourse.batch,
          course_tag: purchasingCourse.tag,
          amount_inr: purchasingCourse.price,
          status: "paid",
          phonepe_merchant_txn_id: txnId,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Create active Enrollment
      const { error: enrollmentError } = await supabase
        .from("enrollments")
        .insert({
          user_id: user.id,
          order_id: order.id,
          course_title: purchasingCourse.title,
          course_batch: purchasingCourse.batch,
          course_tag: purchasingCourse.tag,
          access_status: "active",
        });

      if (enrollmentError) throw enrollmentError;

      toast.success(`Enrolled in ${purchasingCourse.title}!`);
      setPurchasingCourse(null);
      await loadUserData(user.id);
      setActiveTab("batches");
    } catch (err: any) {
      toast.error(err.message || "Enrollment failed");
    } finally {
      setIsPurchasing(false);
    }
  };

  // Filter out courses the user is already enrolled in
  const availableCourses = courses.filter((c) => {
    return !enrollments.some(
      (e) => e.course_title === c.title && e.course_batch === c.batch
    );
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 bg-secondary/20 relative">
        <div className="absolute top-0 left-0 w-full h-[320px] bg-gradient-to-br from-navy via-brand-900 to-navy -z-10" />
        <div className="container-page">
          
          {isPageLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <Loader2 className="h-10 w-10 text-white animate-spin" />
              <p className="mt-4 text-white/80 font-medium text-sm">Loading dashboard...</p>
            </div>
          ) : !user ? (
            /* ACCESS DENIED VIEW */
            <div className="max-w-md mx-auto py-12 animate-fade-up">
              <Card className="rounded-3xl border border-border bg-card/95 backdrop-blur-xl shadow-elevated overflow-hidden text-center p-6">
                <CardHeader className="pb-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-display text-2xl font-bold">Access Denied</CardTitle>
                  <CardDescription>
                    Please log in to access your student profile, view active batches, and enroll in new courses.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button
                    onClick={() => setAuthDialogOpen(true)}
                    className="w-full h-11 bg-gradient-to-r from-brand to-brand-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold cursor-pointer"
                  >
                    Log In with Email
                  </Button>
                </CardContent>
                <CardFooter className="justify-center border-t border-border pt-4 mt-4 text-xs text-muted-foreground">
                  Need assistance? Contact us at +91 98307 73655
                </CardFooter>
              </Card>
            </div>
          ) : (
            /* DASHBOARD VIEW */
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-fade-up">
              
              {/* Left sidebar info card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-3xl border border-white/20 bg-card/95 backdrop-blur-xl shadow-elevated p-6 text-center text-foreground relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand/5 blur-xl -z-10" />
                  
                  {/* Avatar & Info */}
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-brand to-brand-700 text-white flex items-center justify-center text-3xl font-bold font-display shadow-soft">
                    {fullName ? fullName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold truncate">
                    {fullName || "VBTC Student"}
                  </h3>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center justify-center gap-1.5 font-medium">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> Verified Account
                  </div>

                  {/* Sidebar Navigation */}
                  <div className="mt-8 flex flex-col gap-2 text-left">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${
                        activeTab === "profile"
                          ? "bg-brand/10 text-brand"
                          : "text-foreground/80 hover:bg-secondary/40"
                      }`}
                    >
                      <User className="h-4.5 w-4.5" /> Student Profile
                    </button>
                    <button
                      onClick={() => setActiveTab("batches")}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors justify-between cursor-pointer ${
                        activeTab === "batches"
                          ? "bg-brand/10 text-brand"
                          : "text-foreground/80 hover:bg-secondary/40"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <BookMarked className="h-4.5 w-4.5" /> Enrolled Batches
                      </span>
                      {enrollments.length > 0 && (
                        <span className="bg-brand text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                          {enrollments.length}
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("shop")}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${
                        activeTab === "shop"
                          ? "bg-brand/10 text-brand"
                          : "text-foreground/80 hover:bg-secondary/40"
                      }`}
                    >
                      <ShoppingBag className="h-4.5 w-4.5" /> Available Courses
                    </button>
                    
                    <div className="h-px bg-border my-2" />
                    
                    <button
                      onClick={() => supabase.auth.signOut()}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                    >
                      <LogOut className="h-4.5 w-4.5" /> Sign Out
                    </button>
                  </div>
                </div>
              </div>

              {/* Main content tabs */}
              <div className="lg:col-span-8">
                
                {/* TAB 1: STUDENT PROFILE */}
                {activeTab === "profile" && (
                  <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                    <CardHeader className="border-b border-border pb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="font-display text-xl font-bold">Student Profile</CardTitle>
                          <CardDescription>View and manage your enrollment registry details.</CardDescription>
                        </div>
                        {!isEditing && (
                          <Button
                            onClick={() => setIsEditing(true)}
                            variant="outline"
                            className="rounded-xl border-border text-foreground hover:bg-secondary/60 h-9 px-3 cursor-pointer"
                          >
                            <Edit2 className="h-3.5 w-3.5 mr-1.5" /> Edit Profile
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {isEditing ? (
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="edit-name" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                              Full Name
                            </Label>
                            <Input
                              id="edit-name"
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="h-11 rounded-xl bg-card"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <Label htmlFor="edit-phone" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                                Phone Number
                              </Label>
                              <Input
                                id="edit-phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="h-11 rounded-xl bg-card"
                                required
                              />
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor="edit-city" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                                City
                              </Label>
                              <Input
                                id="edit-city"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="h-11 rounded-xl bg-card"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="edit-level" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                              Target Course Level
                            </Label>
                            <select
                              id="edit-level"
                              value={courseLevel}
                              onChange={(e) => setCourseLevel(e.target.value)}
                              className="w-full h-11 rounded-xl border border-border bg-card px-3 text-sm font-medium focus:ring-1 focus:ring-brand text-foreground"
                              required
                            >
                              <option value="CA Inter">CA Inter</option>
                              <option value="CA Final">CA Final</option>
                              <option value="CMA Final">CMA Final</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <div className="flex gap-2 pt-4 justify-end">
                            <Button
                              type="button"
                              onClick={() => {
                                setIsEditing(false);
                                setFullName(profile?.full_name || "");
                                setPhone(profile?.phone || "");
                                setCity(profile?.city || "");
                                setCourseLevel(profile?.course_level || "CA Inter");
                              }}
                              variant="ghost"
                              className="rounded-xl h-11 px-6 cursor-pointer"
                            >
                              Cancel
                            </Button>
                            <Button
                              type="submit"
                              disabled={isSaving}
                              className="bg-gradient-to-r from-brand to-brand-700 text-white rounded-xl h-11 px-6 cursor-pointer font-bold"
                            >
                              {isSaving ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                                </>
                              ) : (
                                "Save Profile"
                              )}
                            </Button>
                          </div>
                        </form>
                      ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-foreground/80">
                              <span className="h-9 w-9 rounded-xl bg-secondary/80 flex items-center justify-center text-brand shrink-0">
                                <User className="h-4.5 w-4.5" />
                              </span>
                              <div>
                                <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Full Name</div>
                                <div className="font-semibold">{fullName || "Not set"}</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-foreground/80">
                              <span className="h-9 w-9 rounded-xl bg-secondary/80 flex items-center justify-center text-brand shrink-0">
                                <Mail className="h-4.5 w-4.5" />
                              </span>
                              <div>
                                <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Email ID</div>
                                <div className="font-semibold">{user.email}</div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-foreground/80">
                              <span className="h-9 w-9 rounded-xl bg-secondary/80 flex items-center justify-center text-brand shrink-0">
                                <Phone className="h-4.5 w-4.5" />
                              </span>
                              <div>
                                <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Phone Number</div>
                                <div className="font-semibold">{phone || "Not set"}</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-foreground/80">
                              <span className="h-9 w-9 rounded-xl bg-secondary/80 flex items-center justify-center text-brand shrink-0">
                                <MapPin className="h-4.5 w-4.5" />
                              </span>
                              <div>
                                <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">City</div>
                                <div className="font-semibold">{city || "Not set"}</div>
                              </div>
                            </div>
                          </div>

                          <div className="md:col-span-2 flex items-center gap-3 text-foreground/80 border-t border-border pt-4 mt-2">
                            <span className="h-9 w-9 rounded-xl bg-secondary/80 flex items-center justify-center text-brand shrink-0">
                              <UserCheck className="h-4.5 w-4.5" />
                            </span>
                            <div>
                              <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Target Exam Target</div>
                              <div className="font-bold text-brand">{courseLevel} Level</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* TAB 2: MY BATCHES */}
                {activeTab === "batches" && (
                  <div className="space-y-4">
                    {enrollments.length === 0 ? (
                      <Card className="rounded-3xl border border-border bg-card p-8 text-center text-foreground">
                        <CardHeader className="pb-3">
                          <div className="mx-auto h-12 w-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-1">
                            <BookOpen className="h-6 w-6" />
                          </div>
                          <CardTitle className="font-display text-xl font-bold">No Active Batches</CardTitle>
                          <CardDescription>
                            You have not enrolled in any taxation batches yet. Explore our CA Inter, CA Final, or CMA Final courses below.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="justify-center pt-2">
                          <Button
                            onClick={() => setActiveTab("shop")}
                            className="bg-brand hover:bg-brand-700 text-white rounded-xl px-6 h-10 font-semibold cursor-pointer"
                          >
                            Explore Courses
                          </Button>
                        </CardFooter>
                      </Card>
                    ) : (
                      enrollments.map((e) => (
                        <Card key={e.id} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden hover:-translate-y-0.5 transition-all">
                          <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                              <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                                <BookOpen className="h-6 w-6" />
                              </div>
                              <div>
                                <span className="text-[9px] uppercase font-bold tracking-wider text-brand bg-brand-50 px-2.5 py-0.5 rounded-full inline-block">
                                  {e.course_tag}
                                </span>
                                <h4 className="font-display text-lg font-bold text-foreground mt-1.5 leading-snug">
                                  {e.course_title}
                                </h4>
                                <div className="text-xs text-muted-foreground mt-1 flex flex-wrap gap-x-3 gap-y-0.5 justify-center sm:justify-start">
                                  <span>Batch: <strong className="text-foreground/80">{e.course_batch}</strong></span>
                                  <span>Enrolled: <strong className="text-foreground/80">{new Date(e.enrolled_at).toLocaleDateString()}</strong></span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-center sm:text-right shrink-0">
                              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                <CheckCircle className="h-3.5 w-3.5" /> {e.access_status === "active" ? "Active Access" : e.access_status}
                              </span>
                              <div className="text-[10px] text-muted-foreground mt-1.5">Views remaining: Unlimited</div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                )}

                {/* TAB 3: SHOP / COURSES AVAILABLE TO BUY */}
                {activeTab === "shop" && (
                  <div className="space-y-4">
                    {availableCourses.length === 0 ? (
                      <Card className="rounded-3xl border border-border bg-card p-8 text-center text-foreground">
                        <CardHeader>
                          <div className="mx-auto h-12 w-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-1">
                            <Compass className="h-6 w-6" />
                          </div>
                          <CardTitle className="font-display text-xl font-bold">You are Fully Enrolled!</CardTitle>
                          <CardDescription>
                            Wow! You have enrolled in all of our currently active courses and combos. 
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-4">
                        {availableCourses.map((c) => (
                          <Card key={`${c.title}-${c.batch}`} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
                            <div>
                              {/* Thumbnail mock image */}
                              <div className="relative aspect-[16/9] bg-secondary flex items-center justify-center overflow-hidden">
                                <img
                                  src={c.img}
                                  alt={c.title}
                                  className="h-full w-full object-cover"
                                />
                                <div className="absolute top-3 left-3 flex gap-1.5">
                                  <span className="rounded-full bg-white/95 dark:bg-navy/95 text-brand text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 shadow-soft">
                                    {c.tag}
                                  </span>
                                  {c.live && (
                                    <span className="rounded-full bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 inline-flex items-center gap-1 shadow-soft">
                                      <span className="h-1 w-1 rounded-full bg-white animate-pulse" /> Live
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="p-4">
                                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{c.batch} Batch</span>
                                <h4 className="font-display font-bold text-foreground mt-0.5 line-clamp-2 h-[2.5rem] leading-snug">
                                  {c.title}
                                </h4>
                                <div className="mt-3 text-xs text-muted-foreground flex justify-between border-t border-border/60 pt-2.5">
                                  <span>Duration: <strong>{c.hours}</strong></span>
                                  <span>Material: <strong>{c.books}</strong></span>
                                </div>
                              </div>
                            </div>

                            <div className="p-4 border-t border-border/60 bg-secondary/10 flex items-center justify-between gap-2">
                              <div>
                                <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium block">Price</span>
                                <span className="font-display font-bold text-foreground text-lg">
                                  ₹{c.price.toLocaleString("en-IN")}
                                </span>
                              </div>
                              <Button
                                onClick={() => handleBuyCourse(c)}
                                className="bg-brand hover:bg-brand-700 text-white text-xs font-bold rounded-xl h-9 px-4 cursor-pointer"
                              >
                                Enroll Now
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </main>

      {/* Mock Purchase Confirmation Dialog */}
      {purchasingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm animate-fade-in">
          <Card className="max-w-md w-full rounded-3xl border border-border bg-card shadow-elevated p-6 animate-fade-up">
            <CardHeader className="p-0 pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="font-display text-lg font-bold">Confirm Mock Checkout</CardTitle>
                  <CardDescription className="text-xs">Secure course activation sandbox</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 py-5 space-y-4">
              <div className="rounded-2xl border border-brand-100 bg-brand-50/20 p-4 space-y-2">
                <div className="text-[10px] uppercase font-bold tracking-wider text-brand-700">Selected Course</div>
                <h4 className="font-display text-sm font-bold text-foreground leading-snug">{purchasingCourse.title}</h4>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-brand-100/30 text-muted-foreground">
                  <span>Batch: {purchasingCourse.batch}</span>
                  <span>Material: {purchasingCourse.books}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm border-b border-border pb-3">
                <span className="text-muted-foreground">Total Fee (Incl. GST)</span>
                <span className="font-display font-extrabold text-foreground text-lg">
                  ₹{purchasingCourse.price.toLocaleString("en-IN")}
                </span>
              </div>
              
              <div className="text-xs text-muted-foreground flex gap-2 bg-secondary/30 p-3 rounded-xl border border-border/40">
                <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <p>
                  This is a mock transaction for review purposes. No real money will be charged. Clicking confirm will immediately activate the course.
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-0 pt-2 flex gap-2 justify-end">
              <Button
                variant="ghost"
                onClick={() => setPurchasingCourse(null)}
                className="rounded-xl h-11 px-5 cursor-pointer font-semibold"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmPurchase}
                disabled={isPurchasing}
                className="bg-gradient-to-r from-brand to-brand-700 text-white rounded-xl h-11 px-6 font-bold cursor-pointer shadow-brand hover:shadow-brand-lg"
              >
                {isPurchasing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enrolling...
                  </>
                ) : (
                  "Confirm & Activate"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      <Footer />
      <ChatBot />

      <EnrollmentDialog
        open={authDialogOpen}
        onOpenChange={setAuthDialogOpen}
      />
    </div>
  );
}
