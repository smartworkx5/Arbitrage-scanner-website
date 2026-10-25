"use client";

import { useState } from "react";

interface Props {
  binanceId: string;
  amount: string;
  initialPaymentId: number | null;
  initialCode: string | null;
}

/**
 * Simple top-up card, modelled on the example the user supplied:
 * order / total / Pay ID / note code, then exactly four buttons —
 * Copy Pay ID, Copy Amount, Copy Note, Check Payment Status.
 * The example's own values (a different site's Pay ID and fractional
 * amount) are deliberately NOT used: this site's real values are
 * passed in as props (Pay ID 346894283, 24.99 USDT).
 */
export default function AutoVerify({ binanceId, amount, initialPaymentId, initialCode }: Props) {
  const [paymentId, setPaymentId] = useState<number | null>(initialPaymentId);
  const [code, setCode] = useState<string>(initialCode ?? "");
  const [copied, setCopied] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [kind, setKind] = useState<"idle" | "ok" | "error">("idle");

  async function copy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      // Clipboard unavailable — values are still shown above for manual copy.
    }
  }

  async function getCode() {
    setBusy(true);
    setMessage("");
    try {
      const res = await fetch("/api/payments/intent", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not create a payment code.");
      setPaymentId(data.paymentId);
      setCode(data.verificationCode);
    } catch (err) {
      setKind("error");
      setMessage(err instanceof Error ? err.message : "Could not create a payment code.");
    } finally {
      setBusy(false);
    }
  }

  async function check() {
    if (!paymentId) return;
    setBusy(true);
    setMessage("");
    try {
      const res = await fetch("/api/payments/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Verification failed.");
      setKind("ok");
      setMessage(data.message ?? "Pro is now active.");
    } catch (err) {
      setKind("error");
      setMessage(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setBusy(false);
    }
  }

  if (kind === "ok") {
    return (
      <div className="rounded-xl border border-green-500/40 bg-green-500/10 p-6 text-center">
        <p className="text-4xl" aria-hidden>✅</p>
        <h2 className="mt-3 text-xl font-bold">Pro activated!</h2>
        <p className="mt-2 text-sm text-slate-300">{message}</p>
        <a href="/dashboard" className="btn-primary mt-5 inline-block">
          Go to dashboard
        </a>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold">🔶 TOP-UP VIA BINANCE PAY</h2>
      <div className="my-4 border-t border-slate-700" aria-hidden />

      <dl className="space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-slate-400">📦 Order:</dt>
          <dd className="text-right font-medium text-slate-100">Cryptoscopia Pro (1 month)</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-400">💰 Total to Pay:</dt>
          <dd className="text-right font-bold text-green-300">{amount} USDT</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-400">🆔 Binance Pay ID:</dt>
          <dd className="text-right font-mono font-bold text-slate-100">{binanceId}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-400">Binance Pay note code:</dt>
          <dd className="text-right font-mono font-bold text-amber-300">{code || "—"}</dd>
        </div>
      </dl>

      <div className="my-4 border-t border-slate-700" aria-hidden />

      {!code ? (
        <button onClick={getCode} disabled={busy} className="btn-primary w-full disabled:opacity-60">
          {busy ? "Creating…" : "Get my note code"}
        </button>
      ) : (
        <>
          <p className="text-sm text-slate-300">
            Open Binance → Pay and send the exact Total to Pay to that Pay ID. Do not round the
            amount. Put the note code above in the Binance Pay note/message field, then check the
            status after paying.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button onClick={() => copy(binanceId, "payid")} className="btn-secondary">
              {copied === "payid" ? "Copied ✓" : "Copy Binance Pay ID"}
            </button>
            <button onClick={() => copy(amount, "amount")} className="btn-secondary">
              {copied === "amount" ? "Copied ✓" : "Copy amount"}
            </button>
            <button onClick={() => copy(code, "note")} className="btn-secondary">
              {copied === "note" ? "Copied ✓" : "Copy note"}
            </button>
            <button onClick={check} disabled={busy} className="btn-primary disabled:opacity-60">
              {busy ? "Checking…" : "Check payment status"}
            </button>
          </div>
        </>
      )}

      {message && kind === "error" && (
        <p className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {message}
        </p>
      )}
    </div>
  );
}
