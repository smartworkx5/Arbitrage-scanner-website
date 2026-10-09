"use client";

import { useEffect, useState } from "react";

type Opp = {
  pair: string;
  from: string;
  to: string;
  strategy: string;
  spread: number;
};

const BASE: Opp[] = [
  { pair: "BTC/USDT", from: "Binance", to: "Kraken", strategy: "Cross-exchange", spread: 0.42 },
  { pair: "ETH/USDT", from: "Coinbase", to: "Binance", strategy: "CEX vs DEX", spread: 0.31 },
  { pair: "SOL/USDT", from: "Bybit", to: "OKX", strategy: "Triangular", spread: 0.58 },
  { pair: "ARB/USDT", from: "Uniswap", to: "Binance", strategy: "CEX vs DEX", spread: 0.74 },
  { pair: "DOGE/USDT", from: "OKX", to: "Coinbase", strategy: "Funding-rate", spread: 0.27 },
];

function jitter(v: number) {
  return Math.max(0.05, v + (Math.random() - 0.5) * 0.08);
}

export default function LiveTicker() {
  const [opps, setOpps] = useState<Opp[]>(BASE);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setOpps((prev) => {
        const next = prev.map((o) => ({ ...o, spread: jitter(o.spread) }));
        // rotate: move best to a new spot for a "live" feel
        const [first, ...rest] = next;
        return [...rest, first];
      });
      setTick((t) => t + 1);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const sorted = [...opps].sort((a, b) => b.spread - a.spread);

  return (
    <div className="card !p-0 overflow-hidden text-left" aria-label="Sample arbitrage opportunities">
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-slate-200">
            LIVE <span className="text-slate-500">· sample opportunities</span>
          </span>
        </div>
        <span className="text-xs text-slate-500">16 exchanges</span>
      </div>
      <ul key={tick} className="divide-y divide-slate-800/70">
        {sorted.slice(0, 4).map((o) => (
          <li key={o.pair} className="flex items-center justify-between gap-3 px-5 py-3.5">
            <div>
              <p className="font-mono text-sm font-bold text-white">{o.pair}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                {o.from} → {o.to} · {o.strategy}
              </p>
            </div>
            <span className="rounded-lg bg-green-500/15 px-2.5 py-1 font-mono text-sm font-bold text-green-300">
              +{o.spread.toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
      <p className="border-t border-slate-800 px-5 py-2.5 text-[11px] text-slate-600">
        Demo preview — sign in to scan live markets.
      </p>
    </div>
  );
}
