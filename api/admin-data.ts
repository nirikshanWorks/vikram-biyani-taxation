import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

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
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const url = process.env.SUPABASE_URL;
    const supabaseAdmin = getSupabaseAdmin();

    if (!key || !url || !supabaseAdmin) {
      return res.status(200).json({
        success: true,
        isSandbox: true,
        message: "Missing Supabase service role key. Displaying sandbox demo data.",
        profiles: [
          {
            id: "demo-user-1",
            full_name: "CA Student Vikram",
            email: "vbtaxclasses@gmail.com",
            phone: "+91 98307 73655",
            course_level: "CA Final",
            city: "Kolkata",
            created_at: new Date(Date.now() - 30 * 86400000).toISOString(),
            updated_at: new Date(Date.now() - 2 * 60000).toISOString(), // 2 mins ago -> Online
            last_sign_in_at: new Date(Date.now() - 5 * 60000).toISOString(),
          },
          {
            id: "demo-user-2",
            full_name: "Rahul Sharma",
            email: "rahul.sharma@gmail.com",
            phone: "+91 98765 43210",
            course_level: "CA Inter",
            city: "Delhi",
            created_at: new Date(Date.now() - 15 * 86400000).toISOString(),
            updated_at: new Date(Date.now() - 3 * 3600000).toISOString(), // 3 hours ago -> Idle
            last_sign_in_at: new Date(Date.now() - 4 * 3600000).toISOString(),
          },
          {
            id: "demo-user-3",
            full_name: "Priya Patel",
            email: "priya.patel@yahoo.com",
            phone: "+91 87654 32109",
            course_level: "CMA Final",
            city: "Mumbai",
            created_at: new Date(Date.now() - 10 * 86400000).toISOString(),
            updated_at: new Date(Date.now() - 1 * 60000).toISOString(), // 1 min ago -> Online
            last_sign_in_at: new Date(Date.now() - 2 * 60000).toISOString(),
          },
          {
            id: "demo-user-4",
            full_name: "Ananya Iyer",
            email: "ananya.iyer@outlook.com",
            phone: "+91 76543 21098",
            course_level: "CA Final",
            city: "Chennai",
            created_at: new Date(Date.now() - 5 * 86400000).toISOString(),
            updated_at: new Date(Date.now() - 3 * 86400000).toISOString(), // 3 days ago -> Offline
            last_sign_in_at: new Date(Date.now() - 3 * 86400000).toISOString(),
          },
          {
            id: "demo-user-5",
            full_name: "Amit Verma",
            email: "amit.verma@gmail.com",
            phone: "+91 65432 10987",
            course_level: "CA Inter",
            city: "Pune",
            created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
            updated_at: new Date(Date.now() - 20 * 3600000).toISOString(), // 20 hours ago -> Idle
            last_sign_in_at: new Date(Date.now() - 20 * 3600000).toISOString(),
          }
        ],
        orders: [
          {
            id: "demo-order-1",
            course_title: "CA Final Direct Tax (Regular)",
            course_batch: "May 2026",
            amount_inr: 8600,
            status: "paid",
            phonepe_merchant_txn_id: "TXN-1718874591",
            created_at: new Date(Date.now() - 20 * 86400000).toISOString(),
          },
          {
            id: "demo-order-2",
            course_title: "CA Inter Taxation (DT + GST)",
            course_batch: "Sep 2026",
            amount_inr: 7500,
            status: "paid",
            phonepe_merchant_txn_id: "TXN-1718960991",
            created_at: new Date(Date.now() - 12 * 86400000).toISOString(),
          },
          {
            id: "demo-order-3",
            course_title: "DT + IDT Combo",
            course_batch: "Nov 2026",
            amount_inr: 13200,
            status: "pending",
            phonepe_merchant_txn_id: "TXN-1719047391",
            created_at: new Date(Date.now() - 5 * 86400000).toISOString(),
          },
          {
            id: "demo-order-4",
            course_title: "CMA Final Direct Tax",
            course_batch: "Dec 2026",
            amount_inr: 8600,
            status: "paid",
            phonepe_merchant_txn_id: "TXN-1719133791",
            created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
          },
          {
            id: "demo-order-5",
            course_title: "CA Final Indirect Tax",
            course_batch: "May 2027",
            amount_inr: 7500,
            status: "failed",
            phonepe_merchant_txn_id: "TXN-1719220191",
            created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
          }
        ],
        enrollments: [
          {
            id: "demo-enrollment-1",
            course_title: "CA Final Direct Tax (Regular)",
            course_batch: "May 2026",
            access_status: "active",
            enrolled_at: new Date(Date.now() - 20 * 86400000).toISOString(),
          },
          {
            id: "demo-enrollment-2",
            course_title: "CA Inter Taxation (DT + GST)",
            course_batch: "Sep 2026",
            access_status: "active",
            enrolled_at: new Date(Date.now() - 12 * 86400000).toISOString(),
          },
          {
            id: "demo-enrollment-3",
            course_title: "CMA Final Direct Tax",
            course_batch: "Dec 2026",
            access_status: "active",
            enrolled_at: new Date(Date.now() - 2 * 86400000).toISOString(),
          }
        ]
      });
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

    // Fetch auth users to get last_sign_in_at
    let authUsersMap: Record<string, any> = {};
    try {
      const { data: list, error: uErr } = await supabaseAdmin.auth.admin.listUsers({
        page: 1,
        perPage: 1000
      });
      if (!uErr && list?.users) {
        list.users.forEach((u: any) => {
          authUsersMap[u.id] = {
            last_sign_in_at: u.last_sign_in_at || null
          };
        });
      }
    } catch (e) {
      console.warn("Failed to fetch auth users list:", e);
    }

    const profilesWithAuth = (profiles || []).map((p: any) => ({
      ...p,
      last_sign_in_at: authUsersMap[p.id]?.last_sign_in_at || p.created_at,
    }));

    return res.status(200).json({
      success: true,
      profiles: profilesWithAuth,
      orders: orders || [],
      enrollments: enrollments || [],
    });
  } catch (error: any) {
    console.error("Admin data fetch error:", error);
    return res.status(500).json({
      success: false,
      error: "fetch_failed",
      message: error.message,
    });
  }
}
