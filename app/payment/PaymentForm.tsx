"use client";

import { useState } from "react";

export default function PaymentForm({ binanceId }: { binanceId: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [txnRef, setTxnRef] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const configured = binanceId && binanceId !== "YOUR_BINANCE_ID";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      setStatus("error");
      setMessage("Please attach a screenshot of your Binance transfer.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setStatus("error");
      setMessage("Screenshot must be 5 MB or smaller.");
      return;
    }
    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setStatus("error");
      setMessage("Screenshot must be a PNG or JPG image.");
      return;
    }

    setStatus("sending");
    setMessage("");
    const form = new FormData();
    form.append("screenshot", file);
    form.append("txn_ref", txnRef);

    try {
      const res = await fetch("/api/payments", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setStatus("done");
      setMessage(
        data.message ?? "Payment submitted successfully. It is now under review — your Pro access will be activated once approved."
      );
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Submission failed. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-green-500/40 bg-green-500/10 p-6 text-center">
        <p className="text-4xl" aria-hidden>✅</p>
        <h2 className="mt-3 text-xl font-bold">Payment submitted!</h2>
        <p className="mt-2 text-sm text-slate-300">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="label" htmlFor="txn_ref">
          Binance transaction ID / sender note
        </label>
        <input
          id="txn_ref"
          className="input"
          type="text"
          value={txnRef}
          onChange={(e) => setTxnRef(e.target.value)}
          placeholder="e.g. 123456789 or your Binance nickname"
          required
        />
      </div>

      <div>
        <label className="label" htmlFor="screenshot">
          Screenshot of the transfer (PNG or JPG, max 5 MB)
        </label>
        <input
          id="screenshot"
          className="input !p-2"
          type="file"
          accept="image/png,image/jpeg"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          required
        />
        {file && (
          <p className="mt-2 text-xs text-slate-400">
            Selected: {file.name} ({(file.size / 1024).toFixed(0)} KB)
          </p>
        )}
      </div>

      {!configured && (
        <p className="text-xs text-amber-300">
          ⚠️ The site owner hasn&apos;t set their Binance ID yet (NEXT_PUBLIC_BINANCE_ID). You can
          still submit, but confirm the recipient before paying.
        </p>
      )}

      {status === "error" && message && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {message}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Submitting…" : "Submit Payment for Review"}
      </button>
    </form>
  );
}
