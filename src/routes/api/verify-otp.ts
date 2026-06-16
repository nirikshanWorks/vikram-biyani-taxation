import { createFileRoute } from "@tanstack/react-router";
import crypto from "crypto";

const SERVER_SECRET = process.env.OTP_SECRET_SALT || "vbtc-taxation-otp-secret-salt-2026";

export const Route = createFileRoute("/api/verify-otp")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { email, purpose } = (await request.json()) as {
            email?: string;
            purpose?: string;
          };

          if (!email || !email.includes("@")) {
            return new Response(
              JSON.stringify({ error: "Valid email address is required" }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          // Admin-only check
          if (purpose === "admin") {
            const ADMIN_EMAILS = ["vbtaxclasses@gmail.com", "ai.nirikshan@gmail.com"];
            if (!ADMIN_EMAILS.includes(email.toLowerCase().trim())) {
              return new Response(
                JSON.stringify({ error: "Access denied. This email is not authorized for admin access." }),
                { status: 403, headers: { "Content-Type": "application/json" } }
              );
            }
          }

          // Generate deterministic secure password for client-side Supabase authentication
          const derivedPassword = crypto
            .createHmac("sha256", SERVER_SECRET)
            .update(`vbtc-password-salt:${email}`)
            .digest("hex");

          // Ensure the auth user exists and is email-confirmed so client signInWithPassword
          // succeeds with a real session (otherwise RLS-protected inserts fail).
          try {
            if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
              const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
              const { data: list } = await supabaseAdmin.auth.admin.listUsers({
                page: 1,
                perPage: 200,
              });
              const existing = list?.users?.find(
                (u) => (u.email || "").toLowerCase() === email.toLowerCase()
              );
              if (!existing) {
                await supabaseAdmin.auth.admin.createUser({
                  email,
                  password: derivedPassword,
                  email_confirm: true,
                });
              } else {
                await supabaseAdmin.auth.admin.updateUserById(existing.id, {
                  password: derivedPassword,
                  email_confirm: true,
                });
              }
            } else {
              console.log("[Supabase] Skipping admin user provisioning because SUPABASE_SERVICE_ROLE_KEY or SUPABASE_URL is missing.");
            }
          } catch (e) {
            console.error("Admin provisioning failed:", e);
          }

          return new Response(
            JSON.stringify({
              success: true,
              email,
              password: derivedPassword,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error: any) {
          console.error("Failed to verify user:", error);
          return new Response(
            JSON.stringify({ error: "Verification failed: " + error.message }),
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
