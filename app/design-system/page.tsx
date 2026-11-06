import type { Metadata } from "next";
import { formatPrice, formatVolume, formatPct, formatDate } from "@/lib/format";
import { EXCHANGE_COUNT } from "@/lib/site";
import RiskDisclosure from "../components/RiskDisclosure";

/**
 * Internal design-system reference (Redesign Phase 3).
 * Renders the live tokens — Tailwind config colours, the type scale,
 * the shared component classes and the lib/format.ts formatters — so
 * reviewers can see exactly what the system produces. Not indexed,
 * not linked from navigation, not in the sitemap.
 */
export const metadata: Metadata = {
  title: "Design System (internal)",
  robots: { index: false, follow: false },
};

const SWATCHES: { name: string; hex: string; className: string; note: string }[] = [
  { name: "base-950", hex: "#060910", className: "bg-base-950", note: "Deepest background" },
  { name: "base-900", hex: "#0a0e17", className: "bg-base-900", note: "Page background" },
  { name: "base-850", hex: "#0d1220", className: "bg-base-850", note: "Inset surface" },
  { name: "base-800", hex: "#111827", className: "bg-base-800", note: "Card surface" },
  { name: "base-700", hex: "#1b2436", className: "bg-base-700", note: "Raised / hover surface" },
  { name: "accent", hex: "#10b981", className: "bg-accent", note: "Primary action — solid only" },
  { name: "accent-strong", hex: "#059669", className: "bg-accent-strong", note: "Accent hover / active" },
  { name: "accent-soft", hex: "#34d399", className: "bg-accent-soft", note: "Accent text on dark" },
  { name: "gain", hex: "#34d399", className: "bg-gain", note: "Positive — always with + sign and label" },
  { name: "loss", hex: "#f87171", className: "bg-loss", note: "Negative — always with − sign and label" },
  { name: "warn", hex: "#fbbf24", className: "bg-warn", note: "Caution / stale data" },
];

// Formatting examples only — sample values chosen to exercise the
// formatters, NOT live market data.
const SAMPLE_ROWS = [
  { pair: "BTC/USDT", buy: 97420.5, sell: 97518.9, vol: 38400000 },
  { pair: "ETH/USDT", buy: 3412.75, sell: 3409.1, vol: 46000000 },
  { pair: "SOL/USDT", buy: 214.7, sell: 215.32, vol: 1250000000 },
  { pair: "PEPE/USDT", buy: 0.00001234, sell: 0.00001261, vol: 920000 },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="border-b border-slate-800 pb-3 text-xl font-bold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
        Internal — noindex
      </p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
        Cryptoscopia Design System
      </h1>
      <p className="mt-4 max-w-2xl text-slate-400">
        Phase 3 foundation: tokens, type, shared classes and formatters.
        Everything on this page is rendered by the production code — the
        same Tailwind tokens, the same <code className="data text-slate-200">.btn-primary</code>,
        the same <code className="data text-slate-200">lib/format.ts</code> helpers.
      </p>

      <Section title="Colour tokens">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SWATCHES.map((s) => (
            <div key={s.name} className="card !p-4">
              <div className={`h-14 rounded-lg border border-white/10 ${s.className}`} />
              <p className="mt-3 flex items-baseline justify-between">
                <span className="font-semibold text-slate-100">{s.name}</span>
                <span className="data text-sm text-slate-400">{s.hex}</span>
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div className="space-y-4">
          <p className="text-5xl font-extrabold tracking-tight">Display / 5xl — Inter Variable</p>
          <p className="text-4xl font-extrabold tracking-tight">Heading / 4xl</p>
          <p className="text-3xl font-bold">Heading / 3xl</p>
          <p className="text-2xl font-bold">Heading / 2xl</p>
          <p className="text-xl font-semibold">Heading / xl</p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            Body / base — Inter Variable carries all prose. It is self-hosted
            (no third-party font requests) with the system stack as fallback.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            Small / sm — secondary text, captions, table metadata.
          </p>
          <p className="data text-base text-slate-200">
            Data / mono — IBM Plex Mono with tabular numerals: 0 1 2 3 4 5 6 7 8 9 . , + − %
          </p>
        </div>
      </Section>

      <Section title="Buttons & links">
        <div className="flex flex-wrap items-center gap-4">
          <button type="button" className="btn-primary">Primary action</button>
          <button type="button" className="btn-secondary">Secondary action</button>
          <button type="button" className="btn-primary" disabled>Primary disabled</button>
          <a href="#buttons" className="font-medium text-emerald-400 underline hover:text-emerald-300">
            Inline link
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Primary is a solid emerald — no gradient, no glow (redesign rule).
        </p>
      </Section>

      <Section title="Form controls">
        <form className="grid max-w-xl gap-5" onSubmit={undefined}>
          <div>
            <label className="label" htmlFor="ds-amount">Amount (USD)</label>
            <input id="ds-amount" className="input data" type="text" inputMode="decimal" placeholder="1,000.00" />
          </div>
          <div>
            <label className="label" htmlFor="ds-exchange">Exchange</label>
            <select id="ds-exchange" className="input" defaultValue="Binance">
              <option>Binance</option>
              <option>Bybit</option>
              <option>OKX</option>
            </select>
          </div>
        </form>
      </Section>

      <Section title="Data formatting — lib/format.ts">
        <p className="mb-4 text-sm text-slate-400">
          Sample rows below exist only to exercise the formatters — they are
          not live market data. Net is computed from the sample prices.
          Dates render via formatDate: {formatDate("2026-10-17")} ·{" "}
          {formatDate("2026-11-06")}.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-base-850 text-slate-400">
                <th className="px-4 py-3 font-medium">Pair</th>
                <th className="px-4 py-3 text-right font-medium">Buy price</th>
                <th className="px-4 py-3 text-right font-medium">Sell price</th>
                <th className="px-4 py-3 text-right font-medium">Spread</th>
                <th className="px-4 py-3 text-right font-medium">24h volume</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_ROWS.map((r) => {
                const pct = ((r.sell - r.buy) / r.buy) * 100;
                return (
                  <tr key={r.pair} className="border-b border-slate-800/60 last:border-0">
                    <td className="px-4 py-3 font-semibold text-slate-100">{r.pair}</td>
                    <td className="data px-4 py-3 text-right text-slate-200">{formatPrice(r.buy, { usd: true })}</td>
                    <td className="data px-4 py-3 text-right text-slate-200">{formatPrice(r.sell, { usd: true })}</td>
                    <td className={`data px-4 py-3 text-right font-medium ${pct >= 0 ? "text-gain" : "text-loss"}`}>
                      {formatPct(pct)} {pct >= 0 ? "(gain)" : "(loss)"}
                    </td>
                    <td className="data px-4 py-3 text-right text-slate-200">{formatVolume(r.vol)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Gain/loss is never carried by colour alone — sign and label travel
          with the number.
        </p>
      </Section>

      <Section title="Constants & disclosure">
        <p className="text-slate-300">
          EXCHANGE_COUNT (lib/site.ts) ={" "}
          <span className="data text-slate-100">{EXCHANGE_COUNT}</span> — the
          single source every surface must read.
        </p>
        <div className="card mt-6">
          <h3 className="font-semibold text-slate-100">RiskDisclosure component</h3>
          <RiskDisclosure className="mt-3" />
        </div>
      </Section>
    </div>
  );
}
