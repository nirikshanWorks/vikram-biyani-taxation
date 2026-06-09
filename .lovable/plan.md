## Plan: Enrollment, Auth & PhonePe Billing

### 1. Enable Lovable Cloud
Powers user auth, profile storage, enrollment records, and order tracking. Required before anything else.

### 2. Authentication
- **Methods:** Email + Password, Google Sign-In (via Lovable broker)
- **Pages:**
  - `/auth` — combined Sign In / Sign Up with tabs; Google button on both
  - `/auth/callback` — handles OAuth return
- Auto-redirect signed-in users away from `/auth`
- Navbar shows **Sign In** when logged out, **avatar + dropdown** (Dashboard / Logout) when logged in
- Session listener wired in `__root.tsx`

### 3. Student Profile (collected at signup)
Table `profiles` (auto-created via trigger on `auth.users` insert):
- `id` (uuid, FK to auth.users)
- `full_name`, `email`, `phone`, `course_level` (CA Inter / CA Final / CMA Final / Other), `city`
- RLS: users read/update only their own row

Signup form captures all fields. Google sign-in users get a one-time "complete your profile" prompt on first dashboard visit.

### 4. Enrollment & Orders Tables
- `orders`: id, user_id, course_title, course_batch, amount, status (`pending` / `paid` / `failed`), phonepe_merchant_txn_id, phonepe_txn_id, created_at
- `enrollments`: id, user_id, course_title, course_batch, order_id, enrolled_at, access_status
- RLS: users see only their own; service role writes from webhook

### 5. PhonePe Billing Flow
PhonePe needs a merchant account. I'll request these secrets via the secrets tool:
- `PHONEPE_MERCHANT_ID`
- `PHONEPE_SALT_KEY`
- `PHONEPE_SALT_INDEX`
- `PHONEPE_ENV` (`SANDBOX` or `PROD`)

**Flow:**
1. Logged-in user clicks **Enroll** on a course → server fn `createPhonePeOrder` creates `orders` row (status=pending), builds signed PhonePe payload, returns redirect URL
2. User completes payment on PhonePe hosted page
3. PhonePe POSTs to public webhook `/api/public/phonepe-webhook` — verify X-VERIFY checksum, mark order `paid`, insert `enrollments` row
4. User returns to `/payment/return?txnId=...` which polls order status server-side and redirects to dashboard
5. Unauthenticated users clicking Enroll → redirected to `/auth?redirect=/courses`

### 6. Student Dashboard
Route `/dashboard` (under `_authenticated/`):
- **My Courses** — enrolled courses with batch, access link, enrolled date
- **Order History** — invoices with status, amount, date, download receipt
- **Profile** — edit name/phone/city/course level
- Sidebar nav with these three sections

### 7. UI Touchpoints
- Wire every existing **Enroll** / **Buy Now** button to the new flow
- Navbar avatar dropdown
- Toast notifications on payment success/failure
- Loading states during PhonePe redirect

### Technical Notes
- Cloud (Supabase) is the DB; PhonePe is the gateway
- Webhook signature: SHA256(base64Body + "/pg/v1/status/{merchantId}/{txnId}" + saltKey) + "###" + saltIndex
- Server fns: `createPhonePeOrder`, `getMyEnrollments`, `getMyOrders`, `updateProfile`
- Public route: `/api/public/phonepe-webhook` (signature-verified)
- Sandbox-first: I'll set `PHONEPE_ENV=SANDBOX` so you can test end-to-end before going live
- Three deliverables in order: (1) Cloud + auth + profile, (2) tables + dashboard, (3) PhonePe integration

### Things to Confirm Before I Build PhonePe
Do you already have a PhonePe Business merchant account with API access? If not, I'll build the full flow with sandbox credentials so you can test; you can swap to production keys later via the secrets panel.
