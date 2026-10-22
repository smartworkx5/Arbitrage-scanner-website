"use client";

import { useMemo, useState } from "react";

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

export default function Calculator() {
  const [buyEx, setBuyEx] = useState(0);
  const [sellEx, setSellEx] = useState(1);
  const [buyFee, setBuyFee] = useState("0.10");
  const [sellFee, setSellFee] = useState("0.10");
  const [buyPrice, setBuyPrice] = useState("97000");
  const [sellPrice, setSellPrice] = useState("97970");
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
          <label className={labelCls}>Buy on</label>
          <select
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
          <label className={labelCls}>Sell on</label>
          <select
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
          <label className={labelCls}>Buy price (USDT)</label>
          <input className={inputCls} inputMode="decimal" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Sell price (USDT)</label>
          <input className={inputCls} inputMode="decimal" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Trade amount (USD)</label>
          <input className={inputCls} inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Withdrawal / transfer fee (USD, estimate)</label>
          <input className={inputCls} inputMode="decimal" value={withdrawFee} onChange={(e) => setWithdrawFee(e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Buy-side taker fee (%)</label>
          <input className={inputCls} inputMode="decimal" value={buyFee} onChange={(e) => setBuyFee(e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Sell-side taker fee (%)</label>
          <input className={inputCls} inputMode="decimal" value={sellFee} onChange={(e) => setSellFee(e.target.value)} />
        </div>
      </div>

      {r && (
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-slate-400">Gross price difference</dt><dd className="font-medium text-slate-200">${r.grossProfit.toFixed(2)} ({r.grossPct.toFixed(2)}%)</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Trading fees (both sides)</dt><dd className="font-medium text-slate-200">−${(r.buyFeeUsd + r.sellFeeUsd).toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Withdrawal / transfer fee</dt><dd className="font-medium text-slate-200">−${num(withdrawFee).toFixed(2)}</dd></div>
            <div className="flex justify-between border-t border-slate-800 pt-2">
              <dt className="font-semibold text-white">Estimated net profit</dt>
              <dd className={`text-base font-extrabold ${r.netProfit >= 0 ? "text-green-400" : "text-red-400"}`}>
                ${r.netProfit.toFixed(2)} ({r.netPct.toFixed(2)}%)
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-slate-500">
            Estimate only — real results depend on live prices, your actual fee tier, slippage and transfer
            times. Fees above are typical spot taker fees; edit them to match your accounts.
          </p>
        </div>
      )}
    </div>
  );
}
