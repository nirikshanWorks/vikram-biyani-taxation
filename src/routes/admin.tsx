import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ShieldCheck, Loader2, LogOut, Users, ShoppingBag, BookOpen, Lock } from "lucide-react";

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

function AdminPanel() {
  const [stage, setStage] = useState<Stage>("email");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TableData | null>(null);

  async function loginAdmin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), purpose: "admin" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Login failed");

      // Load admin data
      const dataRes = await fetch("/api/admin-data");
      const dataJson = await dataRes.json();
      if (!dataJson.success) throw new Error(dataJson.message || "Failed to load data");

      setData({
        profiles: dataJson.profiles,
        orders: dataJson.orders,
        enrollments: dataJson.enrollments,
      });
      setStage("dashboard");
      if (dataJson.isSandbox) {
        toast.info(dataJson.message || "Running in sandbox mode with demo data.");
      } else {
        toast.success("Welcome, admin");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setStage("email");
    setEmail("");
    setData(null);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        {stage !== "dashboard" ? (
          <div className="max-w-md mx-auto mt-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 grid place-items-center mb-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Admin Access</CardTitle>
                <CardDescription>
                  Restricted to authorized administrators only.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={loginAdmin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Admin Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@vbtc.com"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Lock className="w-4 h-4 mr-2" />Login</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground text-sm mt-1">Signed in as {email}</p>
              </div>
              <Button variant="outline" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />Logout
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard icon={<Users className="w-5 h-5" />} label="Students" value={data!.profiles.length} />
              <StatCard icon={<ShoppingBag className="w-5 h-5" />} label="Orders" value={data!.orders.length} />
              <StatCard icon={<BookOpen className="w-5 h-5" />} label="Enrollments" value={data!.enrollments.length} />
            </div>

            <Tabs defaultValue="profiles">
              <TabsList>
                <TabsTrigger value="profiles">Students</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
              </TabsList>

              <TabsContent value="profiles">
                <Card>
                  <CardContent className="p-0 overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Level</TableHead>
                          <TableHead>City</TableHead>
                          <TableHead>Joined</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data!.profiles.map((p) => (
                          <TableRow key={p.id}>
                            <TableCell className="font-medium">{p.full_name || "—"}</TableCell>
                            <TableCell>{p.email}</TableCell>
                            <TableCell>{p.phone || "—"}</TableCell>
                            <TableCell>{p.course_level || "—"}</TableCell>
                            <TableCell>{p.city || "—"}</TableCell>
                            <TableCell className="text-xs">{new Date(p.created_at).toLocaleDateString()}</TableCell>
                          </TableRow>
                        ))}
                        {data!.profiles.length === 0 && (
                          <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No students yet</TableCell></TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders">
                <Card>
                  <CardContent className="p-0 overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead>Batch</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Txn ID</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data!.orders.map((o) => (
                          <TableRow key={o.id}>
                            <TableCell className="font-medium">{o.course_title}</TableCell>
                            <TableCell>{o.course_batch}</TableCell>
                            <TableCell>₹{o.amount_inr?.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge variant={o.status === "paid" ? "default" : o.status === "failed" ? "destructive" : "secondary"}>
                                {o.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-xs font-mono">{o.phonepe_merchant_txn_id}</TableCell>
                            <TableCell className="text-xs">{new Date(o.created_at).toLocaleDateString()}</TableCell>
                          </TableRow>
                        ))}
                        {data!.orders.length === 0 && (
                          <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No orders yet</TableCell></TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="enrollments">
                <Card>
                  <CardContent className="p-0 overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead>Batch</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Enrolled</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data!.enrollments.map((e) => (
                          <TableRow key={e.id}>
                            <TableCell className="font-medium">{e.course_title}</TableCell>
                            <TableCell>{e.course_batch}</TableCell>
                            <TableCell><Badge>{e.access_status}</Badge></TableCell>
                            <TableCell className="text-xs">{new Date(e.enrolled_at).toLocaleDateString()}</TableCell>
                          </TableRow>
                        ))}
                        {data!.enrollments.length === 0 && (
                          <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No enrollments yet</TableCell></TableRow>
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

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <Card>
      <CardContent className="p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center text-primary">{icon}</div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
