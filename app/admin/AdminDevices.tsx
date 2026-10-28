"use client";

import { useState } from "react";

interface AdminDevice {
  device_id: string;
  email: string;
  created_at: string;
  last_seen_at: string | null;
}

function fmt(d: string | null): string {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleDateString();
  } catch {
    return "—";
  }
}

/**
 * One device = one account — admin reset.
 * Unbinding a device frees it for a new email (sold phone, phone
 * change). Without this, a device registration could never be undone.
 */
export default function AdminDevices({ initial }: { initial: AdminDevice[] }) {
  const [devices, setDevices] = useState(initial);
  const [busy, setBusy] = useState<string | null>(null);

  async function unbind(deviceId: string) {
    if (!window.confirm(`Unbind this device?\n${deviceId}\nIt can then register a new email.`)) {
      return;
    }
    setBusy(deviceId);
    try {
      const res = await fetch(
        `/api/admin/device-bindings?device_id=${encodeURIComponent(deviceId)}`,
        { method: "DELETE" }
      );
      if (res.ok) {
        setDevices((prev) => prev.filter((d) => d.device_id !== deviceId));
      }
    } finally {
      setBusy(null);
    }
  }

  if (devices.length === 0) {
    return (
      <section className="card">
        <h2 className="text-lg font-semibold">Device registrations</h2>
        <p className="mt-2 text-sm text-slate-400">
          No devices registered yet. The first email on each device is
          recorded here automatically on sign-in.
        </p>
      </section>
    );
  }

  return (
    <section className="card">
      <h2 className="text-lg font-semibold">Device registrations</h2>
      <p className="mt-1 text-sm text-slate-400">
        One device = one account. Unbind a device to let it register a new
        email (sold phone / phone change).
      </p>
      <div className="mt-4 space-y-3">
        {devices.map((d) => (
          <div
            key={d.device_id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-700 px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-slate-100">{d.email}</p>
              <p className="truncate text-xs text-slate-500" title={d.device_id}>
                {d.device_id.slice(0, 16)}… · first seen {fmt(d.created_at)} · last seen{" "}
                {fmt(d.last_seen_at)}
              </p>
            </div>
            <button
              type="button"
              disabled={busy === d.device_id}
              onClick={() => unbind(d.device_id)}
              className="rounded-full border border-red-500/50 px-4 py-1.5 text-sm font-semibold text-red-300 hover:bg-red-500/10 disabled:opacity-50"
            >
              {busy === d.device_id ? "Unbinding…" : "Unbind"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
