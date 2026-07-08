import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

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
    const { orderId, status } = req.body;
    
    if (!orderId || !status) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const supabaseAdmin = getSupabaseAdmin();
    if (!supabaseAdmin) {
      return res.status(500).json({ success: false, error: "Supabase admin client not initialized" });
    }

    // 1. Update Order Status
    const { error: orderError } = await supabaseAdmin
      .from("orders")
      .update({ status })
      .eq("id", orderId);

    if (orderError) throw orderError;

    // 2. Update Enrollment Status
    let accessStatus = "pending";
    if (status === "paid") accessStatus = "active";
    if (status === "failed" || status === "cancelled") accessStatus = "revoked";

    const { error: enrollmentError } = await supabaseAdmin
      .from("enrollments")
      .update({ access_status: accessStatus })
      .eq("order_id", orderId);

    if (enrollmentError) {
      console.warn("Failed to update enrollment status", enrollmentError);
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Order update error:", error);
    return res.status(500).json({
      success: false,
      error: "update_failed",
      message: error.message,
    });
  }
}
