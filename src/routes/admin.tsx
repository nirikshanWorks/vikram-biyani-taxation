import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  ShieldCheck, 
  Loader2, 
  LogOut, 
  Users, 
  ShoppingBag, 
  BookOpen, 
  Lock, 
  Activity, 
  TrendingUp, 
  Search, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Filter, 
  RefreshCw, 
  Smartphone,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ChartTooltip, 
  BarChart, 
  Bar 
} from "recharts";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — VBTC" },
      { name: "description", content: "Admin dashboard for VBTC team." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPanel,
});

type Stage = "email" | "dashboard";

interface TableData {
  profiles: any[];
  orders: any[];
  enrollments: any[];
}

// Helpers for classifying activity state
const isOnline = (profile: any) => {
  if (!profile.updated_at) return false;
  const diff = Date.now() - new Date(profile.updated_at).getTime();
  return diff <= 5 * 60 * 1000; // 5 minutes
};

const isIdle = (profile: any) => {
  if (isOnline(profile)) return false;
  const activeTime = Math.max(
    profile.updated_at ? new Date(profile.updated_at).getTime() : 0,
    profile.last_sign_in_at ? new Date(profile.last_sign_in_at).getTime() : 0
  );
  if (!activeTime) return false;
  const diff = Date.now() - activeTime;
  return diff <= 24 * 60 * 60 * 1000; // 24 hours
};

const CustomTooltip = ({ active, payload, label, prefix = "" }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover border border-border p-3 rounded-xl shadow-soft text-xs">
        <p className="font-semibold text-muted-foreground mb-1">{label}</p>
        <p className="font-bold text-foreground">
          {prefix}{payload[0].value.toLocaleString("en-IN")}
        </p>
      </div>
    );
  }
  return null;
};

function AdminPanel() {
  const [stage, setStage] = useState<Stage>("email");
  const [loginStep, setLoginStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [expiry, setExpiry] = useState<number | null>(null);
  const [signature, setSignature] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState<TableData | null>(null);
  const [isSandbox, setIsSandbox] = useState(false);

  // Student list search & filters
  const [studentSearch, setStudentSearch] = useState("");
  const [studentLevelFilter, setStudentLevelFilter] = useState("all");
  const [studentStatusFilter, setStudentStatusFilter] = useState("all");

  // Order list search & filters
  const [orderSearch, setOrderSearch] = useState("");
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");

  // Enrollment list search
  const [enrollmentSearch, setEnrollmentSearch] = useState("");

  // Step 1: Send OTP to Admin Email
  async function handleSendAdminOtp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), purpose: "admin" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send verification code");

      setSignature(json.signature);
      setExpiry(json.expiry);
      setLoginStep("otp");
      toast.success("Verification code sent to your email!");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Step 2: Verify OTP and log in
  async function handleVerifyAdminOtp(e: React.FormEvent) {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim().toLowerCase(), 
          otp,
          signature,
          expiry,
          purpose: "admin" 
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Verification failed");

      await loadAdminData();
      setStage("dashboard");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function loadAdminData() {
    setLoadingData(true);
    try {
      const dataRes = await fetch("/api/admin-data");
      const dataJson = await dataRes.json();
      if (!dataJson.success) throw new Error(dataJson.message || "Failed to load data");

      setData({
        profiles: dataJson.profiles || [],
        orders: dataJson.orders || [],
        enrollments: dataJson.enrollments || [],
      });
      setIsSandbox(!!dataJson.isSandbox);
    } catch (err: any) {
      toast.error(err.message || "Failed to load dashboard data");
    } finally {
      setLoadingData(false);
    }
  }

  function logout() {
    setStage("email");
    setLoginStep("email");
    setEmail("");
    setOtp("");
    setSignature("");
    setExpiry(null);
    setData(null);
    setIsSandbox(false);
  }

  // Aggregate signups for the last 15 days
  const getSignupChartData = (profiles: any[]) => {
    const dailyCounts: Record<string, number> = {};
    for (let i = 14; i >= 0; i--) {
      const dateStr = new Date(Date.now() - i * 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      dailyCounts[dateStr] = 0;
    }
    
    profiles.forEach((p) => {
      const dateStr = new Date(p.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      if (dateStr in dailyCounts) {
        dailyCounts[dateStr]++;
      }
    });

    return Object.entries(dailyCounts).map(([date, count]) => ({ date, count }));
  };

  // Aggregate revenue for the last 15 days
  const getRevenueChartData = (orders: any[]) => {
    const dailyRevenue: Record<string, number> = {};
    for (let i = 14; i >= 0; i--) {
      const dateStr = new Date(Date.now() - i * 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      dailyRevenue[dateStr] = 0;
    }

    orders.filter(o => o.status === "paid").forEach((o) => {
      const dateStr = new Date(o.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      if (dateStr in dailyRevenue) {
        dailyRevenue[dateStr] += o.amount_inr;
      }
    });

    return Object.entries(dailyRevenue).map(([date, amount]) => ({ date, amount }));
  };

  // Computations
  const totalStudents = data?.profiles.length || 0;
  const onlineStudents = data?.profiles.filter(isOnline).length || 0;
  const activeToday = data?.profiles.filter(p => {
    const activeTime = Math.max(
      p.updated_at ? new Date(p.updated_at).getTime() : 0,
      p.last_sign_in_at ? new Date(p.last_sign_in_at).getTime() : 0
    );
    return (Date.now() - activeTime) <= 24 * 60 * 60 * 1000;
  }).length || 0;
  
  const totalRevenue = data?.orders
    .filter((o: any) => o.status === "paid")
    .reduce((sum: number, o: any) => sum + o.amount_inr, 0) || 0;

  // Handle Order Status Update
  const handleUpdateOrderStatus = async (orderId: string, status: "paid" | "failed" | "cancelled") => {
    if (isSandbox) {
      toast.error("Sandbox Mode: Updates disabled");
      return;
    }
    setLoadingData(true);
    try {
      const res = await fetch("/api/update-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || json.message || "Failed to update order");
      }
      toast.success(`Order marked as ${status}`);
      await loadAdminData();
    } catch (err: any) {
      toast.error(err.message || "Failed to update order");
    } finally {
      setLoadingData(false);
    }
  };

  // Filtered Student List
  const filteredProfiles = data ? data.profiles.filter((p) => {
    const matchesSearch = 
      p.full_name?.toLowerCase().includes(studentSearch.toLowerCase()) ||
      p.email?.toLowerCase().includes(studentSearch.toLowerCase()) ||
      p.phone?.toLowerCase().includes(studentSearch.toLowerCase()) ||
      p.city?.toLowerCase().includes(studentSearch.toLowerCase());
      
    const matchesLevel = studentLevelFilter === "all" || p.course_level === studentLevelFilter;
    
    let matchesStatus = true;
    if (studentStatusFilter === "online") {
      matchesStatus = isOnline(p);
    } else if (studentStatusFilter === "idle") {
      matchesStatus = isIdle(p);
    } else if (studentStatusFilter === "offline") {
      matchesStatus = !isOnline(p) && !isIdle(p);
    }
    
    return matchesSearch && matchesLevel && matchesStatus;
  }) : [];

  // Filtered Orders List
  const filteredOrders = data ? data.orders.filter((o) => {
    const matchesSearch = 
      o.course_title?.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.phonepe_merchant_txn_id?.toLowerCase().includes(orderSearch.toLowerCase());
      
    const matchesStatus = orderStatusFilter === "all" || o.status === orderStatusFilter;
    
    return matchesSearch && matchesStatus;
  }) : [];

  // Filtered Enrollments List
  const filteredEnrollments = data ? data.enrollments.filter((e) => {
    return e.course_title?.toLowerCase().includes(enrollmentSearch.toLowerCase()) ||
      e.course_batch?.toLowerCase().includes(enrollmentSearch.toLowerCase());
  }) : [];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 py-12 bg-secondary/10">
        {stage !== "dashboard" ? (
          /* LOGIN PANEL VIEW */
          <div className="max-w-md mx-auto mt-8 px-4 animate-fade-up">
            <Card className="rounded-3xl border border-border bg-card/95 backdrop-blur-xl shadow-elevated p-6">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-amber-500/10 grid place-items-center mb-3">
                  <ShieldCheck className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="font-display text-2xl font-bold">Admin Console</CardTitle>
                <CardDescription>
                  Access restricted to authorized VBTC administrators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loginStep === "email" ? (
                  <form onSubmit={handleSendAdminOtp} className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Admin Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@vbtc.com"
                        className="h-11 rounded-xl bg-card border border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full h-11 bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold cursor-pointer transition-all" disabled={loading}>
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Send Verification Code</>}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyAdminOtp} className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Verification Code (OTP)</Label>
                      <Input
                        id="otp"
                        type="text"
                        required
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        placeholder="••••••"
                        className="h-11 rounded-xl bg-card border border-border text-center text-lg tracking-[0.5em] font-mono"
                      />
                      <p className="text-[10px] text-muted-foreground text-center">
                        Code sent to <span className="font-semibold text-foreground">{email}</span>. Valid for 10 minutes.
                      </p>
                    </div>
                    <Button type="submit" className="w-full h-11 bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-brand hover:shadow-brand-lg rounded-xl font-bold cursor-pointer transition-all" disabled={loading}>
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Lock className="w-4 h-4 mr-2" />Verify & Login</>}
                    </Button>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      onClick={() => setLoginStep("email")}
                      className="w-full text-xs text-muted-foreground hover:text-foreground cursor-pointer h-9 rounded-xl"
                    >
                      ← Back to Email
                    </Button>
                  </form>
                )}
              </CardContent>
              <CardFooter className="justify-center border-t border-border pt-4 text-xs text-muted-foreground">
                Authorized access only. All actions are logged.
              </CardFooter>
            </Card>
          </div>
        ) : (
          /* DASHBOARD VIEW */
          <div className="container-page space-y-8 animate-fade-up">
            {/* Top Stats Banner */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <h1 className="text-3xl font-display font-extrabold flex items-center gap-2.5 text-foreground">
                  <ShieldCheck className="w-8 h-8 text-amber-500" />
                  Admin Panel
                </h1>
                <p className="text-muted-foreground text-sm mt-1 font-medium flex items-center gap-2">
                  Signed in as <span className="text-foreground font-semibold">{email}</span>
                  {isSandbox && (
                    <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 font-bold uppercase tracking-wider text-[9px] px-2 py-0.5 rounded-full">
                      Sandbox Demo Mode
                    </Badge>
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={loadAdminData} className="h-9 px-3.5 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5" disabled={loadingData}>
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" onClick={logout} className="h-9 px-3.5 border-red-200/50 hover:bg-red-50 text-red-600 hover:text-red-700 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5">
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </Button>
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard 
                icon={<Users className="w-5 h-5" />} 
                label="Registered Students" 
                value={totalStudents} 
                subtext="Total registry entries" 
                color="from-blue-500 to-indigo-600"
              />
              <StatCard 
                icon={<Activity className="w-5 h-5 animate-pulse" />} 
                label="Online Now" 
                value={onlineStudents} 
                subtext="Active in last 5 mins" 
                color="from-emerald-500 to-teal-600"
                highlight={onlineStudents > 0}
              />
              <StatCard 
                icon={<TrendingUp className="w-5 h-5" />} 
                label="Active Today" 
                value={activeToday} 
                subtext="Active in last 24 hours" 
                color="from-orange-500 to-amber-600"
              />
              <StatCard 
                icon={<DollarSign className="w-5 h-5" />} 
                label="Total Revenue" 
                value={`₹${totalRevenue.toLocaleString("en-IN")}`} 
                subtext="Paid collections summary" 
                color="from-brand to-brand-700"
              />
            </div>

            {/* Main Tabs System */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-secondary/40 p-1 rounded-2xl border border-border inline-flex w-full sm:w-auto">
                <TabsTrigger value="overview" className="rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer">Overview</TabsTrigger>
                <TabsTrigger value="profiles" className="rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer flex items-center gap-1.5">
                  Students
                  <Badge variant="secondary" className="px-1.5 py-0 rounded-full text-[10px] bg-foreground/10 text-foreground font-bold">
                    {totalStudents}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="orders" className="rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer">Orders</TabsTrigger>
                <TabsTrigger value="enrollments" className="rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer">Enrollments</TabsTrigger>
              </TabsList>

              {/* OVERVIEW TAB CONTENT */}
              <TabsContent value="overview" className="space-y-6 animate-fade-up">
                {/* Recharts Analytics Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Registration Trend Chart */}
                  <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                    <CardHeader className="pb-2 border-b border-border/50">
                      <CardTitle className="text-lg font-bold font-display flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand" /> Student Signups Trend
                      </CardTitle>
                      <CardDescription className="text-xs">Daily registrations count over the last 15 days</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="h-[260px] w-full">
                        {data && data.profiles.length > 0 ? (
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={getSignupChartData(data.profiles)}>
                              <defs>
                                <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="oklch(0.58 0.16 195)" stopOpacity={0.4}/>
                                  <stop offset="95%" stopColor="oklch(0.58 0.16 195)" stopOpacity={0.0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)"/>
                              <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={10} tickLine={false}/>
                              <YAxis stroke="var(--muted-foreground)" fontSize={10} tickLine={false} allowDecimals={false}/>
                              <ChartTooltip content={<CustomTooltip />} />
                              <Area type="monotone" dataKey="count" stroke="oklch(0.58 0.16 195)" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSignups)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        ) : (
                          <div className="h-full flex items-center justify-center text-muted-foreground text-sm">No signup data to display</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Revenue Growth Chart */}
                  <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                    <CardHeader className="pb-2 border-b border-border/50">
                      <CardTitle className="text-lg font-bold font-display flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-amber-500" /> Revenue Timeline
                      </CardTitle>
                      <CardDescription className="text-xs">Daily sales volume (INR) over the last 15 days</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="h-[260px] w-full">
                        {data && data.orders.length > 0 ? (
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={getRevenueChartData(data.orders)}>
                              <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="oklch(0.78 0.12 80)" stopOpacity={0.4}/>
                                  <stop offset="95%" stopColor="oklch(0.78 0.12 80)" stopOpacity={0.0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)"/>
                              <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={10} tickLine={false}/>
                              <YAxis stroke="var(--muted-foreground)" fontSize={10} tickLine={false} tickFormatter={(v) => `₹${v >= 1000 ? v/1000 + 'k' : v}`}/>
                              <ChartTooltip content={<CustomTooltip prefix="₹" />} />
                              <Area type="monotone" dataKey="amount" stroke="oklch(0.78 0.12 80)" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        ) : (
                          <div className="h-full flex items-center justify-center text-muted-foreground text-sm">No transaction data to display</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Feed Activity Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent registrations */}
                  <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                    <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-bold font-display flex items-center gap-2">
                          <Users className="w-4 h-4 text-brand" /> Recent Registrations
                        </CardTitle>
                        <CardDescription className="text-xs">Latest students joining the platform</CardDescription>
                      </div>
                      <Badge className="bg-brand/10 text-brand border-none">Latest 5</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-border/60">
                        {data && data.profiles.slice(0, 5).map((p) => {
                          const isOnlineNow = isOnline(p);
                          return (
                            <div key={p.id} className="p-4 flex items-center justify-between hover:bg-secondary/20 transition-colors">
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-brand-700 text-white flex items-center justify-center font-bold text-sm">
                                  {p.full_name ? p.full_name.charAt(0).toUpperCase() : p.email.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm leading-none flex items-center gap-1.5">
                                    {p.full_name || "—"}
                                    {isOnlineNow && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-1">{p.email}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] bg-secondary px-2 py-0.5 rounded-full font-semibold text-foreground/80 block">
                                  {p.course_level || "Not Chosen"}
                                </span>
                                <span className="text-[10px] text-muted-foreground mt-1 block">
                                  {new Date(p.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                        {(!data || data.profiles.length === 0) && (
                          <div className="p-8 text-center text-muted-foreground text-sm">No recent signups</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Paid Transactions */}
                  <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                    <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-bold font-display flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-emerald-500" /> Recent Sales
                        </CardTitle>
                        <CardDescription className="text-xs">Latest successful checkout collections</CardDescription>
                      </div>
                      <Badge className="bg-emerald-500/10 text-emerald-600 border-none">Latest 5</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-border/60">
                        {data && data.orders.filter(o => o.status === "paid").slice(0, 5).map((o) => (
                          <div key={o.id} className="p-4 flex items-center justify-between hover:bg-secondary/20 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <ShoppingBag className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm leading-none line-clamp-1">{o.course_title}</h4>
                                <p className="text-xs text-muted-foreground mt-1">ID: <span className="font-mono">{o.phonepe_merchant_txn_id}</span></p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-sm text-foreground block">
                                ₹{o.amount_inr.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] text-muted-foreground mt-1 block">
                                {new Date(o.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}
                              </span>
                            </div>
                          </div>
                        ))}
                        {(!data || data.orders.filter(o => o.status === "paid").length === 0) && (
                          <div className="p-8 text-center text-muted-foreground text-sm">No recent sales transactions</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* STUDENTS TAB CONTENT */}
              <TabsContent value="profiles" className="space-y-4 animate-fade-up">
                {/* Search & Filter bar */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" />
                    <Input 
                      placeholder="Search students by name, email, phone, city..."
                      value={studentSearch}
                      onChange={(e) => setStudentSearch(e.target.value)}
                      className="pl-10 h-11 bg-card rounded-xl border border-border"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select 
                      value={studentLevelFilter}
                      onChange={(e) => setStudentLevelFilter(e.target.value)}
                      className="h-11 rounded-xl bg-card border border-border px-3 text-xs font-semibold text-foreground/80 outline-none focus:ring-1 focus:ring-brand shrink-0"
                    >
                      <option value="all">All Levels</option>
                      <option value="CA Inter">CA Inter</option>
                      <option value="CA Final">CA Final</option>
                      <option value="CMA Final">CMA Final</option>
                      <option value="Other">Other</option>
                    </select>

                    <select 
                      value={studentStatusFilter}
                      onChange={(e) => setStudentStatusFilter(e.target.value)}
                      className="h-11 rounded-xl bg-card border border-border px-3 text-xs font-semibold text-foreground/80 outline-none focus:ring-1 focus:ring-brand shrink-0"
                    >
                      <option value="all">All Activity States</option>
                      <option value="online">🟢 Online Now</option>
                      <option value="idle">🟡 Idle (Last 24h)</option>
                      <option value="offline">⚪ Offline</option>
                    </select>
                  </div>
                </div>

                <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                  <CardContent className="p-0 overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-secondary/40">
                        <TableRow>
                          <TableHead className="font-bold text-xs uppercase tracking-wider py-4 pl-6">Student</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Contact</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Location</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Exam Level</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Activity Status</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Joined Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredProfiles.map((p) => {
                          const online = isOnline(p);
                          const idle = isIdle(p);
                          
                          return (
                            <TableRow key={p.id} className="hover:bg-secondary/20 transition-colors">
                              {/* Student name & avatar */}
                              <TableCell className="font-semibold py-4 pl-6">
                                <div className="flex items-center gap-3">
                                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-brand-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                    {p.full_name ? p.full_name.charAt(0).toUpperCase() : p.email.charAt(0).toUpperCase()}
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-foreground">{p.full_name || "VBTC Student"}</div>
                                    <div className="text-xs text-muted-foreground mt-0.5">{p.email}</div>
                                  </div>
                                </div>
                              </TableCell>
                              {/* Contact */}
                              <TableCell>
                                <div className="text-xs text-foreground/80 font-semibold">{p.phone || "—"}</div>
                              </TableCell>
                              {/* Location */}
                              <TableCell>
                                <div className="flex items-center gap-1.5 text-xs text-foreground/75">
                                  <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                                  <span>{p.city || "—"}</span>
                                </div>
                              </TableCell>
                              {/* Exam Level */}
                              <TableCell>
                                <Badge className="bg-brand/10 text-brand border-none font-bold text-[10px] px-2 py-0.5 rounded-full">
                                  {p.course_level || "Not Chosen"}
                                </Badge>
                              </TableCell>
                              {/* Activity Status */}
                              <TableCell>
                                <div className="space-y-1.5">
                                  <div className="inline-flex items-center gap-1.5">
                                    {online ? (
                                      <Badge className="bg-emerald-500/10 text-emerald-600 border-none font-bold text-[10px] px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                                      </Badge>
                                    ) : idle ? (
                                      <Badge className="bg-amber-500/10 text-amber-600 border-none font-bold text-[10px] px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Idle
                                      </Badge>
                                    ) : (
                                      <Badge className="bg-muted text-muted-foreground border-none font-bold text-[10px] px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" /> Offline
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-[10px] text-muted-foreground block font-medium">
                                    Active: {p.updated_at ? new Date(p.updated_at).toLocaleString() : "Never"}
                                  </div>
                                  <div className="text-[9px] text-muted-foreground/80 block font-medium">
                                    Login: {p.last_sign_in_at ? new Date(p.last_sign_in_at).toLocaleString() : "Never"}
                                  </div>
                                </div>
                              </TableCell>
                              {/* Joined Date */}
                              <TableCell className="text-xs text-muted-foreground font-semibold">
                                {new Date(p.created_at).toLocaleDateString("en-IN", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric"
                                })}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                        {filteredProfiles.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center text-muted-foreground py-12">
                              <Users className="w-8 h-8 mx-auto text-muted-foreground/40 mb-2" />
                              No matching students found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ORDERS TAB CONTENT */}
              <TabsContent value="orders" className="space-y-4 animate-fade-up">
                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" />
                    <Input 
                      placeholder="Search orders by course name or transaction ID..."
                      value={orderSearch}
                      onChange={(e) => setOrderSearch(e.target.value)}
                      className="pl-10 h-11 bg-card rounded-xl border border-border"
                    />
                  </div>
                  <select 
                    value={orderStatusFilter}
                    onChange={(e) => setOrderStatusFilter(e.target.value)}
                    className="h-11 rounded-xl bg-card border border-border px-3 text-xs font-semibold text-foreground/80 outline-none focus:ring-1 focus:ring-brand shrink-0"
                  >
                    <option value="all">All Payment Statuses</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                  <CardContent className="p-0 overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-secondary/40">
                        <TableRow>
                          <TableHead className="font-bold text-xs uppercase tracking-wider py-4 pl-6">Course Enrolled</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Batch Target</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Fee Paid</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Status</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Payment Info</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Transaction Date</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider text-right pr-6">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredOrders.map((o) => (
                          <TableRow key={o.id} className="hover:bg-secondary/20 transition-colors">
                            <TableCell className="font-semibold py-4 pl-6">
                              <div className="text-sm font-bold text-foreground">{o.course_title}</div>
                            </TableCell>
                            <TableCell>
                              <div className="text-xs font-semibold text-foreground/85">{o.course_batch}</div>
                            </TableCell>
                            <TableCell>
                              <div className="text-sm font-bold text-foreground">₹{o.amount_inr.toLocaleString("en-IN")}</div>
                            </TableCell>
                            <TableCell>
                              <span className="inline-flex items-center gap-1">
                                {o.status === "paid" ? (
                                  <Badge className="bg-emerald-500/10 text-emerald-600 border-none font-bold text-[10px] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> Paid
                                  </Badge>
                                ) : o.status === "failed" ? (
                                  <Badge className="bg-red-500/10 text-red-600 border-none font-bold text-[10px] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                                    <XCircle className="w-3 h-3" /> Failed
                                  </Badge>
                                ) : (
                                  <Badge className="bg-amber-500/10 text-amber-600 border-none font-bold text-[10px] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {o.status}
                                  </Badge>
                                )}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-mono font-semibold text-muted-foreground break-all max-w-[150px]">
                                  {o.phonepe_merchant_txn_id}
                                </span>
                                {o.payment_response && (o.payment_response as any).screenshot_url && (
                                  <a 
                                    href={(o.payment_response as any).screenshot_url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="text-[10px] text-brand font-bold hover:underline"
                                  >
                                    View Receipt
                                  </a>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground font-semibold">
                              {new Date(o.created_at).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              })}
                            </TableCell>
                            <TableCell className="text-right pr-6">
                              {o.status === "pending" && (
                                <div className="flex justify-end gap-2">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleUpdateOrderStatus(o.id, "paid")}
                                    className="h-7 text-[10px] border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                                  >
                                    Approve
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleUpdateOrderStatus(o.id, "failed")}
                                    className="h-7 text-[10px] border-red-200 text-red-600 hover:bg-red-50"
                                  >
                                    Reject
                                  </Button>
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredOrders.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center text-muted-foreground py-12">
                              <ShoppingBag className="w-8 h-8 mx-auto text-muted-foreground/40 mb-2" />
                              No matching orders found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ENROLLMENTS TAB CONTENT */}
              <TabsContent value="enrollments" className="space-y-4 animate-fade-up">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" />
                  <Input 
                    placeholder="Search enrollments by course title or batch details..."
                    value={enrollmentSearch}
                    onChange={(e) => setEnrollmentSearch(e.target.value)}
                    className="pl-10 h-11 bg-card rounded-xl border border-border"
                  />
                </div>

                <Card className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                  <CardContent className="p-0 overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-secondary/40">
                        <TableRow>
                          <TableHead className="font-bold text-xs uppercase tracking-wider py-4 pl-6">Course Material</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Batch</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Status Access</TableHead>
                          <TableHead className="font-bold text-xs uppercase tracking-wider">Enrollment date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredEnrollments.map((e) => (
                          <TableRow key={e.id} className="hover:bg-secondary/20 transition-colors">
                            <TableCell className="font-semibold py-4 pl-6">
                              <div className="text-sm font-bold text-foreground">{e.course_title}</div>
                            </TableCell>
                            <TableCell>
                              <div className="text-xs font-semibold text-foreground/85">{e.course_batch}</div>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-emerald-500/10 text-emerald-600 border-none font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                {e.access_status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground font-semibold">
                              {new Date(e.enrolled_at).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              })}
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredEnrollments.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center text-muted-foreground py-12">
                              <BookOpen className="w-8 h-8 mx-auto text-muted-foreground/40 mb-2" />
                              No matching enrollments found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

// Subcomponents
function StatCard({ 
  icon, 
  label, 
  value, 
  subtext, 
  color,
  highlight = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string | number; 
  subtext: string; 
  color: string;
  highlight?: boolean;
}) {
  return (
    <Card className={`rounded-3xl border border-border bg-card/95 hover:shadow-soft-lg hover:-translate-y-1 transition-all overflow-hidden ${highlight ? 'ring-2 ring-emerald-500/35 border-emerald-400' : ''}`}>
      <CardContent className="p-6 relative flex items-center gap-4">
        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-soft`}>
          {icon}
        </div>
        <div>
          <div className="text-2xl font-extrabold font-display text-foreground tracking-tight">{value}</div>
          <div className="text-xs font-bold text-foreground/80 mt-0.5">{label}</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 font-medium">{subtext}</div>
        </div>
      </CardContent>
    </Card>
  );
}
