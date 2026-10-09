"use client";

import { useState } from "react";

interface Payment {
  id: number;
  user_email: string;
  screenshot_url: string | null;
  txn_ref: string | null;
  status: string;
  created_at: string;
}

export default function AdminPayments({ initial }: { initial: Payment[] }) {
  const [payments, setPayments] = useState<Payment[]>(initial);
  const [busy, setBusy] = useState<number | null>(null);
  const [error, setError] = useState("");

  async function act(paymentId: number, action: "approve" | "reject") {
    const verb = action === "approve" ? "Approve" : "Reject";
    if (!window.confirm(`${verb} payment #${paymentId}?`)) return;
    setBusy(paymentId);
    setError("");
    try {
      const res = await fetch("/api/admin/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId, action }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Action failed");
      setPayments((prev) => prev.filter((p) => p.id !== paymentId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Action failed");
    } finally {
      setBusy(null);
    }
  }

  if (payments.length === 0) {
    return <p className="text-slate-400">🎉 No pending payments. All caught up!</p>;
  }

  return (
    <div className="space-y-6">
      {error && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </p>
      )}
      {payments.map((p) => (
        <article key={p.id} className="card">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Payment #{p.id}</p>
              <p className="font-semibold text-slate-100">{p.user_email}</p>
              <p className="mt-1 text-xs text-slate-500">
                Submitted {new Date(p.created_at).toLocaleString()}
              </p>
              {p.txn_ref && (
                <p className="mt-2 text-sm">
                  <span className="text-slate-500">Txn ref:</span>{" "}
                  <code className="text-slate-200">{p.txn_ref}</code>
                </p>
              )}
            </div>
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300">
              PENDING
            </span>
          </div>

          {p.screenshot_url ? (
            <a href={p.screenshot_url} target="_blank" rel="noopener noreferrer" className="mt-4 block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.screenshot_url}
                alt={`Payment screenshot from ${p.user_email}`}
                className="max-h-80 rounded-xl border border-slate-700 object-contain"
              />
            </a>
          ) : (
            <p className="mt-4 text-sm text-slate-500">No screenshot uploaded.</p>
          )}

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => act(p.id, "approve")}
              disabled={busy === p.id}
              className="btn-primary flex-1 disabled:opacity-60"
            >
              {busy === p.id ? "Working…" : "✓ Approve & grant Pro"}
            </button>
            <button
              onClick={() => act(p.id, "reject")}
              disabled={busy === p.id}
              className="btn-secondary flex-1 !border-red-500/40 !text-red-300 hover:!border-red-400 disabled:opacity-60"
            >
              ✕ Reject
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
