import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, EXCHANGE_COUNT } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Cryptoscopia",
  description:
    `Who runs Cryptoscopia: Tasleem Sanjrani, founder and creator of the Crypto Arbitrage Scanner — a real-time arbitrage scanner across ${EXCHANGE_COUNT} exchanges.`,
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about/`,
    title: "About Cryptoscopia",
    description:
      `Who runs Cryptoscopia: Tasleem Sanjrani, founder and creator of the Crypto Arbitrage Scanner — a real-time arbitrage scanner across ${EXCHANGE_COUNT} exchanges.`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          About Cryptoscopia
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          The people and the product behind the scanner
        </p>

        <div className="mt-8 space-y-8 leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Who runs Cryptoscopia</h2>
            <p>
              Cryptoscopia is built and run by <strong className="text-white">Tasleem Sanjrani</strong>,
              the founder of Cryptoscopia and the creator of the Crypto Arbitrage Scanner.
              Every guide and article on this site is published under his name, with the
              published and updated dates shown on the page.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">What the scanner does</h2>
            <p>
              The Crypto Arbitrage Scanner watches prices across {EXCHANGE_COUNT} exchanges in real
              time and ranks the gaps it finds: cross-exchange spreads, CEX vs DEX gaps,
              triangular loops and funding-rate opportunities. A paper trading bot lets
              you practice every strategy risk-free before any real money is involved.
              You can try the full scanner free for 3 days; Pro costs $24.99 per month.
            </p>
            <p className="mt-3">
              Pro payments are made via Binance Pay and are reviewed manually before
              access is granted — the exact steps are explained on the payment page
              before you send anything.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">How our content is made</h2>
            <p>
              Our guides explain how each arbitrage strategy actually works — the fee
              math, the transfer timing and the ways a trade can go wrong — using the
              same cost model the scanner itself applies (trading fees on both sides
              plus the cheapest available withdrawal route). Articles may be drafted
              with AI assistance and are reviewed before publishing; when exchange fees
              or features change, the affected pages are updated and the date on the
              page changes with them.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">An honest note on risk</h2>
            <p>
              No scanner can guarantee profits. Spreads close, transfers stall, fees eat
              thin gaps, and exchanges can halt withdrawals. Cryptoscopia is a tool for
              finding and checking opportunities — what you trade, and whether you trade
              at all, is always your own decision. Nothing on this site is financial
              advice, and you should never trade with money you cannot afford to lose.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Contact</h2>
            <p>
              Email: <span className="text-slate-100">smartworkx5@gmail.com</span>
              <br />
              X (Twitter):{" "}
              <a
                href="https://x.com/cryptoarbscan"
                className="text-emerald-400 hover:underline"
              >
                @cryptoarbscan
              </a>
              <br />
              For account and data questions, see our{" "}
              <Link href="/privacy" className="text-emerald-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
