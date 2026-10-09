import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getUser, isDbConfigured } from "@/lib/db";
import TrialCountdown from "./TrialCountdown";
import ClientSignOut from "./SignOutButton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

const APP_URL = "/app";

const unlockedFeatures = [
  "Top gainers & losers scanner",
  "16-exchange arbitrage detection",
  "Cross-exchange, CEX vs DEX, triangular & funding-rate arbitrage",
  "Paper trading bot",
  "Real-time price alerts",
  "Mobile friendly",
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/signin");
  }

  let trialEndsAt: string | null = null;
  let plan = "trial";
  let dbOk = isDbConfigured();

  if (dbOk) {
    try {
      const dbUser = await getUser(session.user.email);
      if (dbUser) {
        plan = dbUser.plan;
        trialEndsAt = dbUser.trial_ends_at;
      } else {
        dbOk = true; // DB reachable, user row missing — keep trial fallback
      }
    } catch {
      dbOk = false;
    }
  }

  const trialActive = trialEndsAt ? new Date(trialEndsAt).getTime() > Date.now() : true;
  const isPaid = plan === "paid";
  const hasAccess = isPaid || trialActive;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">Crypto Arbitrage</span> Scanner
        </Link>
        <ClientSignOut />
      </header>

      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-slate-400">
        Signed in as <span className="font-medium text-slate-200">{session.user.email}</span>
      </p>

      {!dbOk && (
        <div className="card mt-6 !border-amber-500/40">
          <p className="text-sm text-amber-200">
            ⚠️ Database not configured — trial info can&apos;t be loaded. Connect Vercel Postgres
            and run <code>lib/schema.sql</code> to enable trials and payments.
          </p>
        </div>
      )}

      {/* ---------- Trial state ---------- */}
      {hasAccess && !isPaid && (
        <div className="card mt-6">
          <span className="inline-block rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold text-green-300">
            FREE TRIAL ACTIVE
          </span>
          {trialEndsAt && (
            <div className="mt-4">
              <TrialCountdown trialEndsAt={trialEndsAt} />
            </div>
          )}
          <ul className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {unlockedFeatures.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-green-400">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={APP_URL} className="btn-primary flex-1">
              Launch App ↗
            </a>
            <Link href="/payment" className="btn-secondary flex-1">
              Upgrade to Pro — $24.99
            </Link>
          </div>
        </div>
      )}

      {/* ---------- Paid state ---------- */}
      {isPaid && (
        <div className="card mt-6 !border-green-500/40">
          <span className="inline-block rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold text-green-300">
            PRO ACTIVE
          </span>
          <h2 className="mt-4 text-2xl font-bold">Welcome to Pro 🚀</h2>
          <p className="mt-2 text-sm text-slate-400">
            Your lifetime access is active. Enjoy unlimited scanning.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {unlockedFeatures.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-green-400">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a href={APP_URL} className="btn-primary mt-8 w-full">
            Launch App ↗
          </a>
        </div>
      )}

      {/* ---------- Locked / expired state ---------- */}
      {!hasAccess && (
        <div className="card mt-6 text-center !border-red-500/30">
          <p className="text-4xl" aria-hidden>🔒</p>
          <h2 className="mt-4 text-2xl font-bold">Your free trial has ended</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            You&apos;ve used your 3 free days. Upgrade to Pro for a one-time payment of $24.99 and
            keep unlimited access forever.
          </p>
          <Link href="/payment" className="btn-primary mx-auto mt-8 w-full sm:w-auto">
            Upgrade to Pro — $24.99
          </Link>
        </div>
      )}
    </main>
  );
}
