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
  created_at: string;
}

export interface DbPayment {
  id: number;
  user_email: string;
  screenshot_url: string | null;
  txn_ref: string | null;
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
  await rows("UPDATE users SET plan = 'paid', paid_at = NOW() WHERE email = $1", [email]);
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

export async function setPaymentStatus(paymentId: number, status: "approved" | "rejected"): Promise<void> {
  const updated = await rows<DbPayment>(
    "UPDATE payments SET status = $1 WHERE id = $2 RETURNING user_email",
    [status, paymentId]
  );
  if (status === "approved" && updated[0]?.user_email) {
    await setPaid(updated[0].user_email);
  }
}
