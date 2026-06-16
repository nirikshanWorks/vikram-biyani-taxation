import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const Route = createFileRoute("/api/admin-data")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
          const url = process.env.SUPABASE_URL;

          if (!key || !url) {
            return new Response(
              JSON.stringify({
                success: true,
                isSandbox: true,
                message: "Missing Supabase service role key. Displaying sandbox demo data.",
                profiles: [
                  {
                    id: "demo-user-1",
                    full_name: "Demo Student 1",
                    email: "vbtaxclasses@gmail.com",
                    phone: "+91 98765 43210",
                    course_level: "CA Final",
                    city: "Mumbai",
                    created_at: new Date().toISOString(),
                  },
                  {
                    id: "demo-user-2",
                    full_name: "Demo Student 2",
                    email: "student2@example.com",
                    phone: "+91 87654 32109",
                    course_level: "CA Inter",
                    city: "Delhi",
                    created_at: new Date(Date.now() - 86400000).toISOString(),
                  }
                ],
                orders: [
                  {
                    id: "demo-order-1",
                    course_title: "CA Final Direct Tax (Regular)",
                    course_batch: "May 2026",
                    amount_inr: 12500,
                    status: "paid",
                    phonepe_merchant_txn_id: "TXN123456789",
                    created_at: new Date().toISOString(),
                  }
                ],
                enrollments: [
                  {
                    id: "demo-enrollment-1",
                    course_title: "CA Final Direct Tax (Regular)",
                    course_batch: "May 2026",
                    access_status: "active",
                    enrolled_at: new Date().toISOString(),
                  }
                ]
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          // Fetch all profiles, orders, and enrollments using the admin client (RLS bypass)
          const { data: profiles, error: pErr } = await supabaseAdmin
            .from("profiles")
            .select("*")
            .order("created_at", { ascending: false });

          if (pErr) throw pErr;

          const { data: orders, error: oErr } = await supabaseAdmin
            .from("orders")
            .select("*")
            .order("created_at", { ascending: false });

          if (oErr) throw oErr;

          const { data: enrollments, error: eErr } = await supabaseAdmin
            .from("enrollments")
            .select("*")
            .order("enrolled_at", { ascending: false });

          if (eErr) throw eErr;

          return new Response(
            JSON.stringify({
              success: true,
              profiles: profiles || [],
              orders: orders || [],
              enrollments: enrollments || [],
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error: any) {
          console.error("Admin data fetch error:", error);
          return new Response(
            JSON.stringify({
              success: false,
              error: "fetch_failed",
              message: error.message,
            }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
