"use client";

import { useMemo, useState } from "react";
import { formatPrice, formatPct } from "@/lib/format";

/**
 * Fee presets: typical published spot taker fees (%) for popular
 * exchanges, offered as a helper for manual calculations. This list is
 * NOT the set of exchanges the Cryptoscopia scanner tracks — the page
 * copy says so, and the fees stay editable so users can enter their own
 * account rates.
 */
const EXCHANGES: [string, number][] = [
  ["Binance", 0.1],
  ["Bybit", 0.1],
  ["OKX", 0.1],
  ["KuCoin", 0.1],
  ["Bitget", 0.1],
  ["Gate.io", 0.2],
  ["MEXC", 0.2],
  ["HTX", 0.2],
  ["CoinEx", 0.2],
  ["BitMart", 0.25],
  ["LBank", 0.2],
  ["XT.com", 0.2],
  ["Bitrue", 0.2],
  ["CEX.io", 0.25],
  ["Coinstore", 0.2],
];

function num(v: string, fallback = 0) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : fallback;
}

/** Signed USD amount: -$2.35 / $6.99 — sign first, then the $ figure. */
function money(v: number): string {
  return `${v < 0 ? "-" : ""}${formatPrice(Math.abs(v), { usd: true })}`;
}

export default function Calculator() {
  const [buyEx, setBuyEx] = useState(0);
  const [sellEx, setSellEx] = useState(1);
  const [buyFee, setBuyFee] = useState("0.10");
  const [sellFee, setSellFee] = useState("0.10");
  // Default example, verified with the fee presets above (Binance → Bybit,
  // 0.10% taker each side, $1 withdrawal, $1,000 trade): a 96,500 → 97,470
  // gap is +$10.05 gross, $2.01 trading fees, $1 withdrawal → +$7.04 net.
  const [buyPrice, setBuyPrice] = useState("96500");
  const [sellPrice, setSellPrice] = useState("97470");
  const [amount, setAmount] = useState("1000");
  const [withdrawFee, setWithdrawFee] = useState("1");

  const r = useMemo(() => {
    const bp = num(buyPrice);
    const sp = num(sellPrice);
    const amt = num(amount);
    const bf = num(buyFee) / 100;
    const sf = num(sellFee) / 100;
    const wf = num(withdrawFee);
    if (bp <= 0 || sp <= 0 || amt <= 0) return null;
    const tokens = amt / bp;
    const buyFeeUsd = amt * bf;
    const sellGross = tokens * sp;
    const sellFeeUsd = sellGross * sf;
    const grossProfit = sellGross - amt;
    const netProfit = sellGross - sellFeeUsd - buyFeeUsd - wf - amt;
    return {
      tokens,
      buyFeeUsd,
      sellGross,
      sellFeeUsd,
      grossProfit,
      netProfit,
      grossPct: (grossProfit / amt) * 100,
      netPct: (netProfit / amt) * 100,
    };
  }, [buyPrice, sellPrice, amount, buyFee, sellFee, withdrawFee]);

  const inputCls =
    "w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-emerald-500";
  const labelCls = "mb-1 block text-xs font-medium text-slate-400";

  return (
    <div className="card">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="calc-buy-exchange">Buy on</label>
          <select
            id="calc-buy-exchange"
            className={inputCls}
            value={buyEx}
            onChange={(e) => {
              const i = Number(e.target.value);
              setBuyEx(i);
              setBuyFee(EXCHANGES[i][1].toFixed(2));
            }}
          >
            {EXCHANGES.map(([name], i) => (
              <option key={name} value={i}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="calc-sell-exchange">Sell on</label>
          <select
            id="calc-sell-exchange"
            className={inputCls}
            value={sellEx}
            onChange={(e) => {
              const i = Number(e.target.value);
              setSellEx(i);
              setSellFee(EXCHANGES[i][1].toFixed(2));
            }}
          >
            {EXCHANGES.map(([name], i) => (
              <option key={name} value={i}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="calc-buy-price">Buy price (USDT)</label>
          <input id="calc-buy-price" className={inputCls} inputMode="decimal" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />
        </div>
        <div>
          <label className={labelCls} htmlFor="calc-sell-price">Sell price (USDT)</label>
          <input id="calc-sell-price" className={inputCls} inputMode="decimal" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
        </div>
        <div>
          <label className={labelCls} htmlFor="calc-amount">Trade amount (USD)</label>
          <input id="calc-amount" className={inputCls} inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <label className={labelCls} htmlFor="calc-withdraw-fee">Withdrawal / transfer fee (USD, estimate)</label>
          <input id="calc-withdraw-fee" className={inputCls} inputMode="decimal" value={withdrawFee} onChange={(e) => setWithdrawFee(e.target.value)} />
        </div>
        <div>
          <label className={labelCls} htmlFor="calc-buy-fee">Buy-side taker fee (%)</label>
          <input id="calc-buy-fee" className={inputCls} inputMode="decimal" value={buyFee} onChange={(e) => setBuyFee(e.target.value)} />
        </div>
        <div>
          <label className={labelCls} htmlFor="calc-sell-fee">Sell-side taker fee (%)</label>
          <input id="calc-sell-fee" className={inputCls} inputMode="decimal" value={sellFee} onChange={(e) => setSellFee(e.target.value)} />
        </div>
      </div>

      {r && (
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-slate-400">Gross price difference</dt><dd className="data font-medium text-slate-200">{money(r.grossProfit)} ({formatPct(r.grossPct)})</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Trading fees (both sides)</dt><dd className="data font-medium text-slate-200">−{formatPrice(r.buyFeeUsd + r.sellFeeUsd, { usd: true })}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Withdrawal / transfer fee</dt><dd className="data font-medium text-slate-200">−{formatPrice(num(withdrawFee), { usd: true })}</dd></div>
            <div className="flex justify-between border-t border-slate-800 pt-2">
              <dt className="font-semibold text-white">Estimated net profit</dt>
              <dd className={`data text-base font-extrabold ${r.netProfit >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                {money(r.netProfit)} ({formatPct(r.netPct)})
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-slate-500">
            Estimate only — real results depend on live prices, your actual fee tier, slippage and transfer
            times. Fees above are typical spot taker fees; edit them to match your accounts.
          </p>
        </div>
      )}
      <p className="mt-4 text-xs text-slate-500">
        The exchange list above is a fee-preset helper for manual calculations — it is not the
        set of exchanges the Cryptoscopia scanner tracks.
      </p>
    </div>
  );
}
