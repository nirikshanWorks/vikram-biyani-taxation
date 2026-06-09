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
                success: false,
                error: "service_role_key_missing",
                message: "Missing Supabase service role key. Displaying sandbox demo data.",
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
