import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const getSupabaseAdmin = () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: {
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
    const { userId, courseTitle, courseBatch, courseTag, price, paymentUtr, screenshotUrl } = req.body;
    
    if (!userId || !courseTitle || !paymentUtr) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const supabaseAdmin = getSupabaseAdmin();
    if (!supabaseAdmin) {
      return res.status(500).json({ success: false, error: "Supabase admin client not initialized" });
    }

    // 1. Insert Order record as pending
    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .insert({
        user_id: userId,
        course_title: courseTitle,
        course_batch: courseBatch,
        course_tag: courseTag,
        amount_inr: price,
        status: "pending",
        phonepe_merchant_txn_id: paymentUtr,
        payment_response: { utr: paymentUtr, screenshot_url: screenshotUrl } as any,
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // 2. Insert Enrollment record as pending
    const { error: enrollmentError } = await supabaseAdmin
      .from("enrollments")
      .insert({
        user_id: userId,
        order_id: order.id,
        course_title: courseTitle,
        course_batch: courseBatch,
        course_tag: courseTag,
        access_status: "pending",
      });

    if (enrollmentError) throw enrollmentError;

    return res.status(200).json({ success: true, orderId: order.id });
  } catch (error: any) {
    console.error("Order creation error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to create order",
    });
  }
}
