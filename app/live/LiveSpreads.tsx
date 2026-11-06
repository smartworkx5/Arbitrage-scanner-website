"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { formatPrice, formatPct, formatVolume } from "@/lib/format";

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

/**
 * Live spreads table (Redesign Phase 4).
 *
 * Data path is unchanged — the browser polls /api/spreads every 60s.
 * Presentation changes only:
 * - rows are ranked by estimated NET after fees, best first;
 * - every number goes through lib/format.ts;
 * - on small screens each row becomes a stacked block (pair, route,
 *   spread and net visible with NO sideways scrolling); the full
 *   8-column table is kept on md+ screens;
 * - gain/loss is always sign + colour + label, never colour alone.
 */
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
        <p className="text-sm font-medium text-slate-200">
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

  // Rank by estimated net after fees, best first (copy — never mutate state).
  const spreads = [...(data?.spreads ?? [])].sort((a, b) => b.netPct - a.netPct);
  const updated = data ? new Date(data.updatedAt) : null;
  const emptyMessage =
    "No spreads above 0.05% on the highest-volume pairs right now — markets are tight. The table refreshes automatically every minute.";

  return (
    <div>
      <div className="card !p-0 overflow-hidden">
        {/* Mobile: stacked rows — the decision numbers (spread, net)
            are visible without any sideways scrolling. */}
        <ul className="divide-y divide-slate-800/60 md:hidden">
          {spreads.map((s) => (
            <li key={s.pair} className="px-5 py-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-white">{s.pair}</span>
                <span className="text-right">
                  <span className="block text-[11px] uppercase tracking-wide text-slate-500">
                    Est. net after fees
                  </span>
                  <span
                    className={`data text-base font-semibold ${
                      s.netPct >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {formatPct(s.netPct)}
                  </span>
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Buy on <span className="text-white">{s.buyExchange}</span>
                <span className="data text-slate-400"> @ {formatPrice(s.buyPrice)}</span>
                <span aria-hidden className="mx-1.5 text-slate-500">→</span>
                Sell on <span className="text-white">{s.sellExchange}</span>
                <span className="data text-slate-400"> @ {formatPrice(s.sellPrice)}</span>
              </p>
              <p className="data mt-1.5 text-xs text-slate-400">
                Spread {formatPct(s.spreadPct)} · 24h volume {formatVolume(s.volume24h)}
              </p>
            </li>
          ))}
          {spreads.length === 0 && (
            <li className="px-5 py-8 text-center text-sm text-slate-400">{emptyMessage}</li>
          )}
        </ul>

        {/* Desktop: the full table, unchanged columns. */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs uppercase tracking-wide text-slate-400">
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
                  <td className="data px-5 py-3 text-right text-slate-200">
                    {formatPrice(s.buyPrice)}
                  </td>
                  <td className="data px-5 py-3 text-right text-slate-200">
                    {formatPrice(s.sellPrice)}
                  </td>
                  <td className="data px-5 py-3 text-right font-semibold text-emerald-400">
                    {formatPct(s.spreadPct)}
                  </td>
                  <td
                    className={`data px-5 py-3 text-right font-semibold ${
                      s.netPct >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {formatPct(s.netPct)}
                  </td>
                  <td className="data px-5 py-3 text-right text-slate-400">
                    {formatVolume(s.volume24h)}
                  </td>
                </tr>
              ))}
              {spreads.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-400">
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-400">
        {updated ? `Last updated ${updated.toLocaleTimeString()}. ` : ""}
        Auto-refreshes every 60 seconds. Net estimate subtracts typical taker
        fees on both exchanges; withdrawal fees and transfer times are not
        included, so always check both order books before trading.
        {error ? " (Last refresh failed — showing the previous data.)" : ""}
      </p>
    </div>
  );
}
