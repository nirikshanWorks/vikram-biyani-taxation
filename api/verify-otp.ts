import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";
import { supabaseAdmin } from "../src/integrations/supabase/client.server";

const SERVER_SECRET = process.env.OTP_SECRET_SALT || "vbtc-taxation-otp-secret-salt-2026";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email, purpose } = req.body || {};

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email address is required" });
    }

    // Admin-only check
    if (purpose === "admin") {
      const ADMIN_EMAILS = ["vbtaxclasses@gmail.com", "ai.nirikshan@gmail.com"];
      if (!ADMIN_EMAILS.includes(email.toLowerCase().trim())) {
        return res.status(403).json({ error: "Access denied. This email is not authorized for admin access." });
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
        const { data: list } = await supabaseAdmin.auth.admin.listUsers({
          page: 1,
          perPage: 200,
        });
        const existing = list?.users?.find(
          (u: any) => (u.email || "").toLowerCase() === email.toLowerCase()
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

    return res.status(200).json({
      success: true,
      email,
      password: derivedPassword,
    });
  } catch (error: any) {
    console.error("Failed to verify user:", error);
    return res.status(500).json({ error: "Verification failed: " + error.message });
  }
}
