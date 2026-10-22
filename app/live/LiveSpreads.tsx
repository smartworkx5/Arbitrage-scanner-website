"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SpreadRow {
  pair: string;
  buyExchange: string;
  sellExchange: string;
  buyPrice: number;
  sellPrice: number;
  spreadPct: number;
  netPct: number;
  volume24h: number;
}

interface SpreadsPayload {
  updatedAt: string;
  spreads: SpreadRow[];
}

function fmtPrice(p: number): string {
  const digits = p >= 100 ? 2 : p >= 1 ? 4 : p >= 0.01 ? 6 : 8;
  return p.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function fmtPct(v: number): string {
  return `${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
}

function fmtVolume(v: number): string {
  return `$${new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(v)}`;
}

export default function LiveSpreads() {
  const [data, setData] = useState<SpreadsPayload | null>(null);
  const [error, setError] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/spreads/", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as SpreadsPayload;
      setData(json);
      setError(false);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    load();
    timer.current = setInterval(load, 60_000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [load]);

  if (!data && !error) {
    return (
      <div className="card text-center">
        <p className="animate-pulse text-sm text-slate-400">
          Loading live spreads from the exchanges…
        </p>
      </div>
    );
  }

  if (!data && error) {
    return (
      <div className="card text-center">
        <p className="text-sm font-semibold text-red-300">
          Couldn&apos;t load live spreads right now.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          The exchange feeds may be briefly unreachable. This page retries
          automatically every minute — or check back in a moment.
        </p>
      </div>
    );
  }

  const spreads = data?.spreads ?? [];
  const updated = data ? new Date(data.updatedAt) : null;

  return (
    <div>
      <div className="card !p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3 font-medium">Pair</th>
                <th className="px-5 py-3 font-medium">Buy on</th>
                <th className="px-5 py-3 font-medium">Sell on</th>
                <th className="px-5 py-3 text-right font-medium">Buy price</th>
                <th className="px-5 py-3 text-right font-medium">Sell price</th>
                <th className="px-5 py-3 text-right font-medium">Spread</th>
                <th className="px-5 py-3 text-right font-medium">
                  Est. net after fees
                </th>
                <th className="px-5 py-3 text-right font-medium">24h volume</th>
              </tr>
            </thead>
            <tbody>
              {spreads.map((s) => (
                <tr
                  key={s.pair}
                  className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/30"
                >
                  <td className="px-5 py-3 font-semibold text-white">{s.pair}</td>
                  <td className="px-5 py-3 text-slate-300">{s.buyExchange}</td>
                  <td className="px-5 py-3 text-slate-300">{s.sellExchange}</td>
                  <td className="px-5 py-3 text-right font-mono text-slate-200">
                    {fmtPrice(s.buyPrice)}
                  </td>
                  <td className="px-5 py-3 text-right font-mono text-slate-200">
                    {fmtPrice(s.sellPrice)}
                  </td>
                  <td className="px-5 py-3 text-right font-mono font-semibold text-green-400">
                    {fmtPct(s.spreadPct)}
                  </td>
                  <td
                    className={`px-5 py-3 text-right font-mono font-semibold ${
                      s.netPct >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {fmtPct(s.netPct)}
                  </td>
                  <td className="px-5 py-3 text-right font-mono text-slate-400">
                    {fmtVolume(s.volume24h)}
                  </td>
                </tr>
              ))}
              {spreads.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-400">
                    No spreads above 0.05% on the highest-volume pairs right
                    now — markets are tight. The table refreshes automatically
                    every minute.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        {updated
          ? `Last updated ${updated.toLocaleTimeString()} · `
          : ""}
        Auto-refreshes every 60 seconds. Net estimate subtracts typical taker
        fees on both exchanges; withdrawal fees and transfer times are not
        included, so always check both order books before trading.
        {error ? " (Last refresh failed — showing the previous data.)" : ""}
      </p>
    </div>
  );
}
