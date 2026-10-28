import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { authOptions } from "@/lib/auth";
import { DEVICE_COOKIE, resolveDeviceAccess } from "@/lib/device";
import { createUser, getUser, isDbConfigured, isProActive, proExpiresAt } from "@/lib/db";
import { isLifetimeAdmin } from "@/lib/admin";
import TrialCountdown from "./TrialCountdown";
import ClientSignOut from "./SignOutButton";
import ReferralCard from "./ReferralCard";

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

  // One device = one account: a second email on this device is blocked
  // here, before any user row is created for it. The device id was set
  // on /signin before Google sign-in, so a normal login carries it.
  const deviceAccess = await resolveDeviceAccess(
    (await cookies()).get(DEVICE_COOKIE)?.value ?? null,
    session.user.email,
    (await headers()).get("user-agent")
  );
  if (!deviceAccess.allowed) {
    redirect(
      `/device-blocked?registered=${encodeURIComponent(
        deviceAccess.registeredEmailMasked
      )}`
    );
  }

  let trialEndsAt: string | null = null;
  let plan = "trial";
  let proUntil: string | null = null;
  let dbOk = isDbConfigured();

  if (dbOk) {
    try {
      // User rows are created here (after the device check passes),
      // not in the NextAuth sign-in callback — see lib/auth.ts.
      let dbUser = await getUser(session.user.email);
      if (!dbUser) {
        dbUser = await createUser(
          session.user.email,
          session.user.name ?? null,
          session.user.image ?? null
        );
      }
      if (dbUser) {
        plan = dbUser.plan;
        trialEndsAt = dbUser.trial_ends_at;
        proUntil = proExpiresAt(dbUser);
      } else {
        dbOk = true; // DB reachable, user row missing — keep trial fallback
      }
    } catch {
      dbOk = false;
    }
  }

  const trialActive = trialEndsAt ? new Date(trialEndsAt).getTime() > Date.now() : true;
  // Lifetime admin: never shows trial/expired/upgrade states — always Pro.
  const isLifetime = isLifetimeAdmin(session.user.email);
  if (isLifetime) {
    plan = "lifetime";
    trialEndsAt = null;
    proUntil = null;
  }
  // Pro is a 30-day purchase: "paid" alone no longer means forever.
  const proActive = plan === "paid" && (proUntil ? new Date(proUntil).getTime() > Date.now() : true);
  const proExpired = plan === "paid" && !proActive;
  const isPaid = proActive || plan === "lifetime";
  const hasAccess = isPaid || trialActive;

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const packageLabel = isLifetime
    ? "Lifetime Pro"
    : proActive
      ? "Pro"
      : proExpired
        ? "Pro (expired)"
        : "Free Trial";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <img src="/images/logo-mark.svg" alt="Cryptoscopia logo" width={30} height={30} />
          <span className="gradient-text">Cryptoscopia</span>
        </Link>
        <ClientSignOut />
      </header>

      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-slate-400">
        You stay signed in until you sign out manually.
      </p>

      {/* ---------- Package details ---------- */}
      <div className="card mt-6">
        <h2 className="text-lg font-bold">Package details</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-slate-400">Signed in as</dt>
            <dd className="font-medium text-slate-100">{session.user.email}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-slate-400">Package</dt>
            <dd className="font-medium text-slate-100">{packageLabel}</dd>
          </div>
          {isLifetime && (
            <div className="flex flex-wrap justify-between gap-2">
              <dt className="text-slate-400">Pro valid until</dt>
              <dd className="font-medium text-slate-100">Never expires</dd>
            </div>
          )}
          {proActive && proUntil && (
            <div className="flex flex-wrap justify-between gap-2">
              <dt className="text-slate-400">Pro valid until</dt>
              <dd className="font-medium text-green-300">{fmtDate(proUntil)}</dd>
            </div>
          )}
          {proExpired && proUntil && (
            <div className="flex flex-wrap justify-between gap-2">
              <dt className="text-slate-400">Pro expired on</dt>
              <dd className="font-medium text-red-300">{fmtDate(proUntil)}</dd>
            </div>
          )}
          {!isPaid && !proExpired && trialEndsAt && (
            <div className="flex flex-wrap justify-between gap-2">
              <dt className="text-slate-400">Trial ends on</dt>
              <dd className="font-medium text-slate-100">{fmtDate(trialEndsAt)}</dd>
            </div>
          )}
        </dl>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {(hasAccess || proExpired) && (
            <a href={APP_URL} className="btn-primary flex-1">
              Start App ↗
            </a>
          )}
          {proExpired && (
            <Link href="/payment" className="btn-secondary flex-1">
              Upgrade to Pro again — $24.99
            </Link>
          )}
          {!isPaid && !proExpired && (
            <Link href="/payment" className="btn-secondary flex-1">
              Upgrade to Pro — $24.99
            </Link>
          )}
          <div className="flex flex-1 items-center justify-center sm:justify-end">
            <ClientSignOut />
          </div>
        </div>
      </div>

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
            {plan === "lifetime" ? "LIFETIME PRO" : "PRO ACTIVE"}
          </span>
          <h2 className="mt-4 text-2xl font-bold">Welcome to Pro 🚀</h2>
          <p className="mt-2 text-sm text-slate-400">
            Your Pro access is active. Enjoy unlimited scanning.
          </p>
          {proUntil && (
            <p className="mt-2 text-sm text-slate-300">
              Pro valid until <span className="font-medium text-green-300">{fmtDate(proUntil)}</span>
              {plan === "paid" && " — after that, renew from this dashboard to keep access."}
            </p>
          )}
          {plan === "lifetime" && (
            <p className="mt-2 text-sm text-slate-300">Pro valid until <span className="font-medium text-green-300">never — lifetime access</span>.</p>
          )}
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

      <ReferralCard />

      {/* ---------- Locked / expired state ---------- */}
      {!hasAccess && (
        <div className="card mt-6 text-center !border-red-500/30">
          <p className="text-4xl" aria-hidden>🔒</p>
          {proExpired ? (
            <>
              <h2 className="mt-4 text-2xl font-bold">Your Pro has expired</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
                {proUntil && <>Pro ended on {fmtDate(proUntil)}. </>}
                Renew Pro for $24.99 for another 30 days to start the app again.
              </p>
              <Link href="/payment" className="btn-primary mx-auto mt-8 w-full sm:w-auto">
                Upgrade to Pro again — $24.99
              </Link>
            </>
          ) : (
            <>
              <h2 className="mt-4 text-2xl font-bold">Your free trial has ended</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
                You&apos;ve used your 3 free days. Upgrade to Pro for $24.99/month to keep
                unlimited access.
              </p>
              <Link href="/payment" className="btn-primary mx-auto mt-8 w-full sm:w-auto">
                Upgrade to Pro — $24.99
              </Link>
            </>
          )}
        </div>
      )}
    </main>
  );
}
