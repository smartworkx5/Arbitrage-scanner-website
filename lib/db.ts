import { createPool } from "@vercel/postgres";

// ---------------------------------------------------------------------------
// Lazy Postgres client.
// The pool is only created when POSTGRES_URL exists, so `next build` and the
// demo site work fine without a database configured. Every helper throws a
// clear error when the DB is missing, and callers catch it and degrade
// gracefully.
// ---------------------------------------------------------------------------

type Pool = ReturnType<typeof createPool>;

let pool: Pool | null = null;
let warned = false;

function getPool(): Pool | null {
  if (pool) return pool;
  const url = process.env.POSTGRES_URL;
  if (!url) {
    if (!warned) {
      console.warn("[db] POSTGRES_URL is not set — database features are disabled.");
      warned = true;
    }
    return null;
  }
  pool = createPool({ connectionString: url });
  return pool;
}

export function isDbConfigured(): boolean {
  return Boolean(process.env.POSTGRES_URL);
}

async function rows<T>(text: string, params: unknown[] = []): Promise<T[]> {
  const p = getPool();
  if (!p) throw new Error("Database not configured (POSTGRES_URL is missing).");
  const result = await p.query(text, params as never[]);
  return result.rows as T[];
}

export interface DbUser {
  email: string;
  name: string | null;
  image: string | null;
  plan: string;
  trial_started_at: string | null;
  trial_ends_at: string | null;
  paid_at: string | null;
  paid_until: string | null;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Pro expiry — Pro is sold as $24.99 per month, so a payment buys 30 days.
// Previously setPaid stored only paid_at and every gate treated "paid" as
// forever, so no "Pro until" date could ever be shown. Pro now expires
// 30 days after payment: paid_until when set, otherwise paid_at + 30 days
// (legacy rows written before paid_until existed). Lifetime admin never
// expires and is handled by isLifetimeAdmin, not by these helpers.
// ---------------------------------------------------------------------------
export const PRO_DURATION_DAYS = 30;

export function proExpiresAt(user: Pick<DbUser, "paid_at" | "paid_until">): string | null {
  if (user.paid_until) return user.paid_until;
  if (!user.paid_at) return null;
  const d = new Date(user.paid_at);
  d.setDate(d.getDate() + PRO_DURATION_DAYS);
  return d.toISOString();
}

export function isProActive(
  user: Pick<DbUser, "plan" | "paid_at" | "paid_until">,
  now = Date.now()
): boolean {
  if (user.plan !== "paid") return false;
  const until = proExpiresAt(user);
  return until ? new Date(until).getTime() > now : true;
}

let proColumnsReady = false;

export async function ensureProColumns(): Promise<void> {
  if (proColumnsReady) return;
  await rows(`ALTER TABLE users ADD COLUMN IF NOT EXISTS paid_until TIMESTAMPTZ`);
  proColumnsReady = true;
}

export interface DbPayment {
  id: number;
  user_email: string;
  screenshot_url: string | null;
  txn_ref: string | null;
  verification_code: string | null;
  binance_txn_id: string | null;
  verified_via: string | null;
  verified_at: string | null;
  status: string;
  created_at: string;
}

export async function getUser(email: string): Promise<DbUser | null> {
  const result = await rows<DbUser>("SELECT * FROM users WHERE email = $1 LIMIT 1", [email]);
  return result[0] ?? null;
}

export async function createUser(
  email: string,
  name: string | null,
  image: string | null
): Promise<DbUser | null> {
  const result = await rows<DbUser>(
    `INSERT INTO users (email, name, image, plan, trial_started_at, trial_ends_at)
     VALUES ($1, $2, $3, 'trial', NOW(), NOW() + INTERVAL '3 days')
     ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, image = EXCLUDED.image
     RETURNING *`,
    [email, name, image]
  );
  return result[0] ?? null;
}

export async function setPaid(email: string): Promise<void> {
  await ensureProColumns();
  await rows(
    "UPDATE users SET plan = 'paid', paid_at = NOW(), paid_until = NOW() + INTERVAL '30 days' WHERE email = $1",
    [email]
  );
}

export async function createPayment(
  userEmail: string,
  screenshotUrl: string | null,
  txnRef: string | null
): Promise<DbPayment | null> {
  const result = await rows<DbPayment>(
    `INSERT INTO payments (user_email, screenshot_url, txn_ref, status)
     VALUES ($1, $2, $3, 'pending') RETURNING *`,
    [userEmail, screenshotUrl, txnRef]
  );
  return result[0] ?? null;
}

export async function listPendingPayments(): Promise<DbPayment[]> {
  return rows<DbPayment>("SELECT * FROM payments WHERE status = 'pending' ORDER BY created_at DESC");
}

export async function listAllUsers(): Promise<DbUser[]> {
  return rows<DbUser>(
    "SELECT * FROM users ORDER BY created_at DESC NULLS LAST, email ASC"
  );
}

// ---------------------------------------------------------------------------
// Automatic Binance Pay verification (see lib/binance.ts).
// New columns are added idempotently, so an existing payments table keeps
// working and no manual migration is required on first deploy.
// ---------------------------------------------------------------------------

let paymentVerificationColumnsReady = false;

export async function ensurePaymentVerificationColumns(): Promise<void> {
  if (paymentVerificationColumnsReady) return;
  await rows(`ALTER TABLE payments ADD COLUMN IF NOT EXISTS verification_code TEXT`);
  await rows(`ALTER TABLE payments ADD COLUMN IF NOT EXISTS binance_txn_id TEXT`);
  await rows(`ALTER TABLE payments ADD COLUMN IF NOT EXISTS verified_via TEXT`);
  await rows(`ALTER TABLE payments ADD COLUMN IF NOT EXISTS verified_at TIMESTAMPTZ`);
  await rows(
    `CREATE UNIQUE INDEX IF NOT EXISTS idx_payments_verification_code ON payments(verification_code) WHERE verification_code IS NOT NULL`
  );
  await rows(
    `CREATE UNIQUE INDEX IF NOT EXISTS idx_payments_binance_txn_id ON payments(binance_txn_id) WHERE binance_txn_id IS NOT NULL`
  );
  paymentVerificationColumnsReady = true;
}

function generateVerificationCode(): string {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `CS-${code}`;
}

export async function createPaymentIntent(email: string): Promise<DbPayment | null> {
  await ensurePaymentVerificationColumns();
  // Reuse a still-pending intent for this user instead of minting a new code
  // on every click — the code the user already copied must stay valid.
  const existing = await rows<DbPayment>(
    `SELECT * FROM payments WHERE user_email = $1 AND status = 'pending' AND verification_code IS NOT NULL ORDER BY created_at DESC LIMIT 1`,
    [email]
  );
  if (existing[0]) return existing[0];
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const result = await rows<DbPayment>(
        `INSERT INTO payments (user_email, status, verification_code) VALUES ($1, 'pending', $2) RETURNING *`,
        [email, generateVerificationCode()]
      );
      if (result[0]) return result[0];
    } catch {
      // verification-code collision — retry with a fresh code
    }
  }
  throw new Error("Could not create a payment code.");
}

export async function getPaymentById(paymentId: number): Promise<DbPayment | null> {
  await ensurePaymentVerificationColumns();
  const result = await rows<DbPayment>("SELECT * FROM payments WHERE id = $1 LIMIT 1", [paymentId]);
  return result[0] ?? null;
}

export async function isBinanceTxnUsed(
  binanceTxnId: string,
  excludePaymentId?: number
): Promise<boolean> {
  await ensurePaymentVerificationColumns();
  const result = await rows<{ id: number }>(
    `SELECT id FROM payments WHERE binance_txn_id = $1 AND status = 'approved' AND id <> $2 LIMIT 1`,
    [binanceTxnId, excludePaymentId ?? -1]
  );
  return result.length > 0;
}

export async function markPaymentVerified(
  paymentId: number,
  binanceTxnId: string,
  verifiedVia: string
): Promise<string | null> {
  await ensurePaymentVerificationColumns();
  const updated = await rows<DbPayment>(
    `UPDATE payments SET status = 'approved', binance_txn_id = $1, verified_via = $2, verified_at = NOW() WHERE id = $3 RETURNING user_email`,
    [binanceTxnId, verifiedVia, paymentId]
  );
  const userEmail = updated[0]?.user_email ?? null;
  if (userEmail) await setPaid(userEmail);
  return userEmail;
}

export async function setPaymentStatus(paymentId: number, status: "approved" | "rejected"): Promise<void> {
  const updated = await rows<DbPayment>(
    "UPDATE payments SET status = $1 WHERE id = $2 RETURNING user_email",
    [status, paymentId]
  );
  if (status === "approved" && updated[0]?.user_email) {
    await setPaid(updated[0].user_email);
  }
}

// ---------------------------------------------------------------------------
// Referrals / affiliates
// ---------------------------------------------------------------------------

let referralColumnsReady = false;

export async function ensureReferralColumns(): Promise<void> {
  if (referralColumnsReady) return;
  await rows(`ALTER TABLE users ADD COLUMN IF NOT EXISTS referral_code TEXT`);
  await rows(`ALTER TABLE users ADD COLUMN IF NOT EXISTS referred_by TEXT`);
  await rows(
    `CREATE UNIQUE INDEX IF NOT EXISTS idx_users_referral_code ON users(referral_code) WHERE referral_code IS NOT NULL`
  );
  referralColumnsReady = true;
}

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function generateCode(): string {
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return code;
}

export async function getOrCreateReferralCode(email: string): Promise<string> {
  await ensureReferralColumns();
  const existing = await rows<{ referral_code: string | null }>(
    `SELECT referral_code FROM users WHERE email = $1`,
    [email]
  );
  if (existing[0]?.referral_code) return existing[0].referral_code;
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = generateCode();
    try {
      const updated = await rows<{ referral_code: string }>(
        `UPDATE users SET referral_code = $1 WHERE email = $2 AND referral_code IS NULL RETURNING referral_code`,
        [code, email]
      );
      if (updated[0]?.referral_code) return updated[0].referral_code;
    } catch {
      // unique-index collision — retry with a fresh code
    }
  }
  throw new Error("Could not allocate a referral code.");
}

export async function claimReferral(
  email: string,
  code: string
): Promise<"claimed" | "already" | "invalid" | "self"> {
  await ensureReferralColumns();
  const clean = code.trim().toUpperCase();
  if (!/^[A-Z0-9]{6,10}$/.test(clean)) return "invalid";
  const owners = await rows<{ email: string }>(
    `SELECT email FROM users WHERE referral_code = $1`,
    [clean]
  );
  if (!owners[0]) return "invalid";
  if (owners[0].email === email) return "self";
  const updated = await rows<{ email: string }>(
    `UPDATE users SET referred_by = $1 WHERE email = $2 AND referred_by IS NULL RETURNING email`,
    [clean, email]
  );
  return updated[0] ? "claimed" : "already";
}

export interface ReferralStats {
  code: string;
  signups: number;
  activePro: number;
  estimatedMonthlyUsd: number;
}

export interface DeviceBinding {
  device_id: string;
  email: string;
  created_at: string;
  last_seen_at: string | null;
  user_agent: string | null;
}

let deviceBindingsTableReady = false;

export async function ensureDeviceBindingsTable(): Promise<void> {
  if (deviceBindingsTableReady) return;
  await rows(`CREATE TABLE IF NOT EXISTS device_bindings (
    device_id TEXT PRIMARY KEY,
    email TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    user_agent TEXT
  )`);
  await rows(
    `CREATE INDEX IF NOT EXISTS idx_device_bindings_email ON device_bindings(email)`
  );
  deviceBindingsTableReady = true;
}

export async function getDeviceBinding(
  deviceId: string
): Promise<DeviceBinding | null> {
  await ensureDeviceBindingsTable();
  const result = await rows<DeviceBinding>(
    "SELECT * FROM device_bindings WHERE device_id = $1 LIMIT 1",
    [deviceId]
  );
  return result[0] ?? null;
}

export async function bindDevice(
  deviceId: string,
  email: string,
  userAgent: string | null
): Promise<DeviceBinding | null> {
  await ensureDeviceBindingsTable();
  // Never overwrite an existing binding: first registration wins.
  await rows(
    `INSERT INTO device_bindings (device_id, email, user_agent)
     VALUES ($1, $2, $3) ON CONFLICT (device_id) DO NOTHING`,
    [deviceId, email, userAgent]
  );
  return getDeviceBinding(deviceId);
}

export async function touchDeviceBinding(deviceId: string): Promise<void> {
  await ensureDeviceBindingsTable();
  await rows(
    "UPDATE device_bindings SET last_seen_at = NOW() WHERE device_id = $1",
    [deviceId]
  );
}

export async function listDeviceBindings(): Promise<DeviceBinding[]> {
  await ensureDeviceBindingsTable();
  return rows<DeviceBinding>(
    "SELECT * FROM device_bindings ORDER BY last_seen_at DESC NULLS LAST, created_at DESC"
  );
}

export async function deleteDeviceBinding(deviceId: string): Promise<void> {
  await ensureDeviceBindingsTable();
  await rows("DELETE FROM device_bindings WHERE device_id = $1", [deviceId]);
}

export async function getReferralStats(email: string): Promise<ReferralStats> {
  const code = await getOrCreateReferralCode(email);
  const counts = await rows<{ signups: string; active_pro: string }>(
    `SELECT COUNT(*)::text AS signups,
            COUNT(*) FILTER (WHERE plan = 'paid')::text AS active_pro
       FROM users WHERE referred_by = $1`,
    [code]
  );
  const signups = parseInt(counts[0]?.signups ?? "0", 10);
  const activePro = parseInt(counts[0]?.active_pro ?? "0", 10);
  return {
    code,
    signups,
    activePro,
    estimatedMonthlyUsd: Math.round(activePro * 24.99 * 0.4 * 100) / 100,
  };
}
