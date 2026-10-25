"use client";

import { useState } from "react";

export default function AutoVerify({ binanceId }: { binanceId: string }) {
  const [paymentId, setPaymentId] = useState<number | null>(null);
  const [code, setCode] = useState("");
  const [txnId, setTxnId] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [kind, setKind] = useState<"idle" | "ok" | "error" | "info">("idle");

  async function getCode() {
    setBusy(true);
    setMessage("");
    try {
      const res = await fetch("/api/payments/intent", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not create a payment code.");
      setPaymentId(data.paymentId);
      setCode(data.verificationCode);
      setKind("info");
      setMessage("Your unique code is ready. Put this exact code in the Binance Pay note/message when you send the payment.");
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
        body: JSON.stringify({ paymentId, txnId: txnId.trim() || undefined }),
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

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the code is still shown above for manual copy.
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
    <div className="space-y-4">
      <p className="text-sm text-slate-400">
        Fastest way: get your unique code, send exactly <strong className="text-slate-100">24.99 USDT</strong> to{" "}
        <code className="text-green-300">{binanceId}</code> on Binance Pay, and paste the code in the
        payment&apos;s note/message field. Then tap Check — the site reads the site account&apos;s own
        Binance Pay history and activates Pro automatically when it finds your exact transfer.
        No screenshot, no waiting for manual approval.
      </p>

      {!code ? (
        <button onClick={getCode} disabled={busy} className="btn-primary w-full disabled:opacity-60">
          {busy ? "Creating…" : "Get my payment code"}
        </button>
      ) : (
        <>
          <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3">
            <div>
              <p className="text-xs text-slate-500">Your Binance Pay note code</p>
              <code className="font-mono text-xl font-bold text-amber-300">{code}</code>
            </div>
            <button onClick={() => copy(code)} className="btn-secondary shrink-0">
              {copied ? "Copied ✓" : "Copy code"}
            </button>
          </div>
          <p className="text-xs text-slate-400">
            Already paid without a code? Paste your Binance transaction/order ID below instead — the
            same automatic check will look that ID up.
          </p>
          <input
            className="input"
            value={txnId}
            onChange={(e) => setTxnId(e.target.value)}
            placeholder="Binance transaction / order ID (optional if you used the code)"
          />
          <button onClick={check} disabled={busy} className="btn-primary w-full disabled:opacity-60">
            {busy ? "Checking Binance…" : "I have sent — check payment automatically"}
          </button>
          <p className="text-xs text-slate-500">
            If the transfer was just sent, wait a few minutes and tap Check again — Binance Pay
            history can lag slightly. Amount must be exactly 24.99 USDT; a different amount will not
            match, by design.
          </p>
        </>
      )}

      {message && (
        <p
          className={`rounded-xl border p-3 text-sm ${
            kind === "error"
              ? "border-red-500/40 bg-red-500/10 text-red-300"
              : "border-slate-700 bg-slate-900 text-slate-300"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
