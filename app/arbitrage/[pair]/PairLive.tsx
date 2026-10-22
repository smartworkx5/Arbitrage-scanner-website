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

export default function PairLive({ a, b }: { a: string; b: string }) {
  const [data, setData] = useState<SpreadsPayload | null>(null);
  const [error, setError] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(async () => {
    try {
      const ex = encodeURIComponent(`${a},${b}`);
      const res = await fetch(`/api/spreads/?ex=${ex}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as SpreadsPayload;
      setData(json);
      setError(false);
    } catch {
      setError(true);
    }
  }, [a, b]);

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
          Loading live {a} vs {b} prices…
        </p>
      </div>
    );
  }

  if (!data && error) {
    return (
      <div className="card text-center">
        <p className="text-sm font-semibold text-red-300">
          Couldn&apos;t load live prices right now.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          The exchange feeds may be briefly unreachable. This table retries
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
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3 font-medium">Pair</th>
                <th className="px-5 py-3 text-right font-medium">Buy price</th>
                <th className="px-5 py-3 text-right font-medium">Sell price</th>
                <th className="px-5 py-3 text-right font-medium">Spread</th>
                <th className="px-5 py-3 text-right font-medium">
                  Est. net after fees
                </th>
              </tr>
            </thead>
            <tbody>
              {spreads.map((s) => (
                <tr
                  key={s.pair}
                  className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/30"
                >
                  <td className="px-5 py-3 font-semibold text-white">
                    {s.pair}
                    <span className="mt-0.5 block text-xs font-normal text-slate-500">
                      Buy {s.buyExchange} → sell {s.sellExchange}
                    </span>
                  </td>
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
                </tr>
              ))}
              {spreads.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-400">
                    No spread above 0.05% between {a} and {b} on the
                    highest-volume pairs right now — or live data for this
                    pair is not covered by our public feeds. The table
                    refreshes automatically every minute.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        {updated ? `Last updated ${updated.toLocaleTimeString()} · ` : ""}
        Live prices from public exchange feeds — refreshed every minute. Net
        estimate subtracts typical taker fees on both exchanges; withdrawal
        fees and transfer times are not included, so always check both order
        books before trading.
        {error ? " (Last refresh failed — showing the previous data.)" : ""}
      </p>
    </div>
  );
}
