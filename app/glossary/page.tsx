import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { Breadcrumbs } from "@/app/components/Seo";

export const metadata: Metadata = {
  title: "Crypto Arbitrage Glossary — Every Term Explained",
  description:
    "The complete crypto arbitrage glossary: spreads, funding rates, slippage, AMMs, MEV, cash-and-carry and 20+ more terms explained in plain English.",
  keywords: [
    "crypto arbitrage glossary",
    "arbitrage trading terms",
    "crypto trading definitions",
    "what is funding rate",
    "what is slippage crypto",
  ],
  alternates: { canonical: `${SITE_URL}/glossary` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/glossary`,
    title: "Crypto Arbitrage Glossary",
    description:
      "Every crypto arbitrage term explained in plain English — from spreads to MEV.",
  },
};

interface Term {
  term: string;
  def: string;
}

const terms: Term[] = [
  {
    term: "Arbitrage",
    def: "Buying an asset where it is cheap and selling it where it is expensive, at the same time, to lock in a near risk-free profit. In crypto this usually means exploiting price differences between exchanges or trading pairs. Learn the main types in our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage).",
  },
  {
    term: "Spread",
    def: "The price difference between two venues or quotes. A '0.5% spread' on BTC between two exchanges means one prices it 0.5% higher than the other. Gross spread minus all costs equals your real edge.",
  },
  {
    term: "Order book",
    def: "The live list of buy orders (bids) and sell orders (asks) on an exchange. Arbitrage scanners read order books to find moments where the best bid on one exchange exceeds the best ask on another.",
  },
  {
    term: "Bid / Ask",
    def: "The bid is the highest price a buyer will pay; the ask is the lowest price a seller will accept. You buy at the ask and sell at the bid — the gap between them is the bid-ask spread, a cost on every trade.",
  },
  {
    term: "Slippage",
    def: "The difference between the price you expect and the price you actually get. Large orders on thin books slip badly — a spread that looks profitable on screen can vanish in slippage.",
  },
  {
    term: "Liquidity",
    def: "How easily an asset can be bought or sold without moving its price. Deep, liquid markets have tight spreads; thin markets show tempting spreads that evaporate when you trade size.",
  },
  {
    term: "Maker / taker fees",
    def: "Exchanges charge makers (who add limit orders to the book) less than takers (who remove liquidity with market orders). Arbitrage usually pays taker fees on both legs — budget around 0.1% per side on major exchanges.",
  },
  {
    term: "Funding rate",
    def: "Periodic payments between long and short holders of perpetual futures that keep the contract price near spot. Positive funding means longs pay shorts. See our [funding rate arbitrage guide](/guides/funding-rate-arbitrage).",
  },
  {
    term: "Perpetual futures (perps)",
    def: "Futures contracts with no expiry date, the most traded derivatives in crypto. Their funding mechanism is what makes funding-rate arbitrage possible.",
  },
  {
    term: "Cash and carry",
    def: "Buy the spot asset and short the equivalent futures/perp simultaneously, collecting funding or futures premium while hedged. The classic delta-neutral arbitrage trade.",
  },
  {
    term: "Delta-neutral",
    def: "A position whose value barely moves when the underlying price moves — e.g., long 1 BTC spot plus short 1 BTC perp. Used to isolate funding yield from price risk.",
  },
  {
    term: "Triangular arbitrage",
    def: "A three-trade loop on a single exchange (e.g., USDT → BTC → ETH → USDT) that profits from inconsistent cross-rates between pairs. No transfers needed. Full walkthrough in our [triangular arbitrage guide](/guides/triangular-arbitrage).",
  },
  {
    term: "CEX",
    def: "Centralized exchange — a company-run trading venue (Binance, Kraken, Coinbase) with order books, custody of your funds, and KYC requirements.",
  },
  {
    term: "DEX",
    def: "Decentralized exchange — on-chain trading via smart contracts (Uniswap, PancakeSwap) with no custodian and no account needed, just a wallet. See [CEX vs DEX arbitrage](/guides/cex-vs-dex-arbitrage).",
  },
  {
    term: "AMM (Automated Market Maker)",
    def: "The pricing engine behind most DEXs: liquidity pools priced by a formula (usually x·y=k) instead of an order book. Pools reprice only when someone trades, which is why DEX prices lag CEX prices.",
  },
  {
    term: "Liquidity pool",
    def: "A smart-contract pool of two tokens that enables DEX swaps. Liquidity providers earn swap fees; arbitrageurs trade against the pool when its price drifts from the market.",
  },
  {
    term: "Impermanent loss",
    def: "The loss liquidity providers suffer when pooled token prices diverge — relevant background for anyone trading against DEX pools.",
  },
  {
    term: "Gas fees",
    def: "Transaction fees paid to blockchain validators (e.g., ETH on Ethereum). On-chain arbitrage legs must clear gas costs — a $20 gas bill kills small spreads on mainnet.",
  },
  {
    term: "MEV (Maximal Extractable Value)",
    def: "Profit extracted by reordering or sandwiching pending blockchain transactions. Your DEX swap is visible in the mempool before it confirms — bots can trade around it.",
  },
  {
    term: "Stablecoin",
    def: "A crypto token pegged to fiat, usually USD (USDT, USDC, DAI). The settlement currency of most arbitrage — and a risk vector when it depegs.",
  },
  {
    term: "Depeg",
    def: "When a stablecoin trades away from its $1.00 peg. Even a 0.3% depeg distorts every spread quoted against it — always check your quote currency.",
  },
  {
    term: "Leg risk",
    def: "The risk that one side of your arbitrage fills while the other does not (or fills worse), leaving you with unwanted directional exposure.",
  },
  {
    term: "Withdrawal freeze",
    def: "When an exchange pauses withdrawals — often during volatility, exactly when spreads are widest. A classic way transfer-based arbitrage dies mid-trade.",
  },
  {
    term: "KYC",
    def: "Know Your Customer identity verification. Unverified accounts face low withdrawal limits that cap arbitrage size — verify before you need the limit raised.",
  },
  {
    term: "Paper trading",
    def: "Practicing strategies with virtual money. Every arbitrage strategy should be rehearsed in simulation first — it is how you learn execution without paying tuition to the market.",
  },
  {
    term: "Basis",
    def: "The difference between a futures/perp price and the spot price. Positive basis (contango) is what cash-and-carry traders harvest.",
  },
];

function anchor(term: string) {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderDef(def: string) {
  const parts = def.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return (
        <Link
          key={i}
          href={m[2]}
          className="text-emerald-300 underline decoration-emerald-500/40 underline-offset-2 hover:text-emerald-200"
        >
          {m[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Crypto Arbitrage Glossary",
    url: `${SITE_URL}/glossary`,
  };

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Breadcrumbs items={[{ label: "Glossary" }]} />
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Crypto Arbitrage Glossary
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Every term you will meet in crypto arbitrage, explained in plain
          English. Bookmark it — and if you are new, start with{" "}
          <Link href="/blog/what-is-crypto-arbitrage" className="text-emerald-300 underline">
            What Is Crypto Arbitrage?
          </Link>
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {terms.map((t) => (
            <a
              key={t.term}
              href={`#${anchor(t.term)}`}
              className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:border-emerald-500/50 hover:text-white"
            >
              {t.term}
            </a>
          ))}
        </div>

        <dl className="mt-8 space-y-4">
          {terms.map((t) => (
            <div
              key={t.term}
              id={anchor(t.term)}
              className="scroll-mt-24 rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <dt className="text-lg font-bold text-white">{t.term}</dt>
              <dd className="mt-1 leading-relaxed text-slate-300">
                {renderDef(t.def)}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
          <h2 className="text-xl font-bold text-white">
            Know the terms. Now see the opportunities.
          </h2>
          <p className="mt-2 text-slate-300">
            Crypto Arbitrage Scanner finds live spreads across 16 exchanges —
            try it free for 3 days.
          </p>
          <Link href="/signin" className="btn-primary mt-4 inline-block">
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}
