"use client";

import { useEffect, useState } from "react";

interface Stats {
  code: string;
  signups: number;
  activePro: number;
  estimatedMonthlyUsd: number;
}

/** Dashboard card: the user's affiliate link + referral stats (40% recurring). */
export default function ReferralCard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [copied, setCopied] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // Claim a stored referral code first (set by RefCapture from ?ref= links).
        const match = document.cookie.match(/(?:^|; )cr_ref=([A-Za-z0-9]+)/);
        if (match) {
          await fetch("/api/referral", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: match[1] }),
          }).catch(() => null);
          document.cookie = "cr_ref=; path=/; max-age=0; SameSite=Lax";
        }
        const res = await fetch("/api/referral");
        if (!res.ok) {
          setHidden(true);
          return;
        }
        setStats((await res.json()) as Stats);
      } catch {
        setHidden(true);
      }
    })();
  }, []);

  if (hidden || !stats) return null;

  const link = `https://cryptoscopia.com/?ref=${stats.code}`;

  return (
    <div className="card mt-6">
      <h2 className="text-xl font-bold">Earn 40% — refer traders</h2>
      <p className="mt-2 text-sm text-slate-400">
        Share your link. When someone subscribes to Pro through it, you earn{" "}
        <span className="text-slate-200">40% of every monthly payment</span> they make,
        for as long as they stay subscribed. Paid monthly in USDT via Binance (from $25).
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <code className="flex-1 overflow-x-auto whitespace-nowrap rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-emerald-300">
          {link}
        </code>
        <button
          type="button"
          className="btn-secondary !px-4 !py-2 text-sm"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(link);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch {
              /* clipboard unavailable */
            }
          }}
        >
          {copied ? "Copied ✓" : "Copy link"}
        </button>
      </div>
      <dl className="mt-5 grid grid-cols-3 gap-4 text-center">
        <div>
          <dd className="text-2xl font-extrabold text-white">{stats.signups}</dd>
          <dt className="mt-1 text-xs text-slate-500">Referral sign-ups</dt>
        </div>
        <div>
          <dd className="text-2xl font-extrabold text-white">{stats.activePro}</dd>
          <dt className="mt-1 text-xs text-slate-500">Active Pro referrals</dt>
        </div>
        <div>
          <dd className="text-2xl font-extrabold text-green-400">
            ${stats.estimatedMonthlyUsd.toFixed(2)}
          </dd>
          <dt className="mt-1 text-xs text-slate-500">Est. earnings / month</dt>
        </div>
      </dl>
    </div>
  );
}
