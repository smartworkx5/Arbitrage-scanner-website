-- Crypto Arbitrage Scanner — database schema
-- Run this once in your Vercel Postgres database (Vercel Dashboard → Storage → Postgres → Query tab),
-- or with: psql "$POSTGRES_URL" -f lib/schema.sql

CREATE TABLE IF NOT EXISTS users (
  email           TEXT PRIMARY KEY,
  name            TEXT,
  image           TEXT,
  plan            TEXT NOT NULL DEFAULT 'trial',   -- 'trial' | 'paid'
  trial_started_at TIMESTAMPTZ,
  trial_ends_at    TIMESTAMPTZ,
  paid_at          TIMESTAMPTZ,
  paid_until       TIMESTAMPTZ,   -- Pro expiry: 30 days after payment
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Pro expiry (also auto-applied by the app via ensureProColumns)
ALTER TABLE users ADD COLUMN IF NOT EXISTS paid_until TIMESTAMPTZ;

CREATE TABLE IF NOT EXISTS payments (
  id            SERIAL PRIMARY KEY,
  user_email    TEXT NOT NULL REFERENCES users(email) ON DELETE CASCADE,
  screenshot_url TEXT,
  txn_ref       TEXT,
  status        TEXT NOT NULL DEFAULT 'pending',    -- 'pending' | 'approved' | 'rejected'
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_user_email ON payments(user_email);

-- Automatic Binance Pay verification (also added idempotently at runtime
-- by ensurePaymentVerificationColumns in lib/db.ts):
ALTER TABLE payments ADD COLUMN IF NOT EXISTS verification_code TEXT;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS binance_txn_id TEXT;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS verified_via TEXT;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS verified_at TIMESTAMPTZ;
CREATE UNIQUE INDEX IF NOT EXISTS idx_payments_verification_code ON payments(verification_code) WHERE verification_code IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS idx_payments_binance_txn_id ON payments(binance_txn_id) WHERE binance_txn_id IS NOT NULL;

-- One device = one account (also auto-applied at runtime by
-- ensureDeviceBindingsTable in lib/db.ts): the first email ever seen on
-- a device wins; a second email on the same device is blocked.
CREATE TABLE IF NOT EXISTS device_bindings (
  device_id   TEXT PRIMARY KEY,
  email       TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  user_agent  TEXT
);

CREATE INDEX IF NOT EXISTS idx_device_bindings_email ON device_bindings(email);

-- Referrals (also auto-applied by the app via ensureReferralColumns)
ALTER TABLE users ADD COLUMN IF NOT EXISTS referral_code TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS referred_by TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_referral_code ON users(referral_code) WHERE referral_code IS NOT NULL;
