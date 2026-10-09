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
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

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
