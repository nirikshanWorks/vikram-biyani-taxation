import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

const SERVER_SECRET = process.env.OTP_SECRET_SALT || "vbtc-taxation-otp-secret-salt-2026";

// Initialize Supabase Admin client directly to avoid relative path bundler issues on Vercel
const getSupabaseAdmin = () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: {
      storage: undefined,
      persistSession: false,
      autoRefreshToken: false,
    }
  });
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email, otp, expiry, signature, purpose } = req.body || {};

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email address is required" });
    }

    // Enforce OTP verification for all users (including admins)
    if (!otp || !expiry || !signature) {
      return res.status(400).json({ error: "Verification code, expiry, and signature are required" });
    }

    // 1. Verify if OTP has expired
    if (Date.now() > Number(expiry)) {
      return res.status(400).json({ error: "Verification code has expired. Please request a new code." });
    }

    // 2. Re-create HMAC to verify OTP validity
    const expectedSignature = crypto
      .createHmac("sha256", SERVER_SECRET)
      .update(`${email}:${otp}:${expiry}`)
      .digest("hex");

    if (expectedSignature !== signature) {
      return res.status(400).json({ error: "Invalid verification code. Please try again." });
    }

    // 3. If it is an admin login, double-check that the email is allowed
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
      const supabaseAdmin = getSupabaseAdmin();
      if (supabaseAdmin) {
        // 1. Try to find the user in the public.profiles table by email
        const { data: profile, error: profileError } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("email", email.toLowerCase().trim())
          .maybeSingle();

        if (profileError) {
          console.warn("Profile query failed, falling back to listUsers:", profileError);
        }

        if (profile?.id) {
          // User exists, update their password
          const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(profile.id, {
            password: derivedPassword,
            email_confirm: true,
          });
          if (updateError) throw updateError;
        } else {
          // Try to create the user
          const { data: createData, error: createError } = await supabaseAdmin.auth.admin.createUser({
            email,
            password: derivedPassword,
            email_confirm: true,
          });

          if (createError) {
            // If creation failed because user already exists in auth but not in profiles,
            // fall back to listing users to find their ID.
            const { data: list, error: listError } = await supabaseAdmin.auth.admin.listUsers({
              page: 1,
              perPage: 200,
            });
            if (listError) throw listError;

            const existing = list?.users?.find(
              (u: any) => (u.email || "").toLowerCase() === email.toLowerCase()
            );

            if (existing) {
              const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(existing.id, {
                password: derivedPassword,
                email_confirm: true,
              });
              if (updateError) throw updateError;
            } else {
              throw createError;
            }
          }
        }
      } else {
        console.log("[Supabase] Skipping admin user provisioning because SUPABASE_SERVICE_ROLE_KEY or SUPABASE_URL is missing.");
      }
    } catch (e: any) {
      console.error("Admin provisioning failed:", e);
      return res.status(500).json({ error: "Auth synchronization failed: " + e.message });
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
