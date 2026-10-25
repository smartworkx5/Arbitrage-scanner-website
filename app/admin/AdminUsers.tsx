"use client";

import { useMemo, useState } from "react";

interface AdminUser {
  email: string;
  name: string | null;
  image: string | null;
  plan: string;
  trial_started_at: string | null;
  trial_ends_at: string | null;
  paid_at: string | null;
  created_at: string;
}

type Tab = "all" | "free" | "pro";

function isPro(u: AdminUser): boolean {
  return u.plan === "paid";
}

function fmt(d: string | null): string {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleDateString();
  } catch {
    return "—";
  }
}

export default function AdminUsers({ initial }: { initial: AdminUser[] }) {
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () => ({
      all: initial.length,
      free: initial.filter((u) => !isPro(u)).length,
      pro: initial.filter(isPro).length,
    }),
    [initial]
  );

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initial.filter((u) => {
      if (tab === "free" && isPro(u)) return false;
      if (tab === "pro" && !isPro(u)) return false;
      if (q && !`${u.email} ${u.name ?? ""}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [initial, tab, query]);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "all", label: "All users", count: counts.all },
    { key: "free", label: "Free", count: counts.free },
    { key: "pro", label: "Upgraded / Pro", count: counts.pro },
  ];

  return (
    <section className="card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Registered users</h2>
        <p className="text-sm text-slate-400">
          {counts.pro} Pro · {counts.free} Free · {counts.all} total
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              tab === t.key
                ? "bg-emerald-500 text-slate-950"
                : "border border-slate-700 text-slate-300 hover:border-slate-500"
            }`}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      <input
        className="input mt-4"
        type="search"
        placeholder="Search by email or name…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {shown.length === 0 ? (
        <p className="mt-4 text-sm text-slate-400">No users in this list yet.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="py-2 pr-3">User</th>
                <th className="py-2 pr-3">Plan</th>
                <th className="py-2 pr-3">Trial ends</th>
                <th className="py-2 pr-3">Pro since</th>
                <th className="py-2">Joined</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((u) => (
                <tr key={u.email} className="border-t border-slate-800">
                  <td className="py-2 pr-3">
                    <p className="font-medium text-slate-100">{u.name ?? "—"}</p>
                    <p className="break-all text-xs text-slate-400">{u.email}</p>
                  </td>
                  <td className="py-2 pr-3">
                    {isPro(u) ? (
                      <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-300">
                        PRO
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-500/15 px-2.5 py-1 text-xs font-bold text-slate-300">
                        FREE
                      </span>
                    )}
                  </td>
                  <td className="py-2 pr-3 text-slate-300">{fmt(u.trial_ends_at)}</td>
                  <td className="py-2 pr-3 text-slate-300">{fmt(u.paid_at)}</td>
                  <td className="py-2 text-slate-300">{fmt(u.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-4 text-xs text-slate-500">
        Free = trial plan (including expired trials). Pro = plan &lsquo;paid&rsquo; in the
        database. The lifetime admin account also appears here under its own plan.
      </p>
    </section>
  );
}
