import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "zero-fee-arbitrage-myth",
  title: "The Zero-Fee Arbitrage Myth",
  description: "Zero-fee arbitrage still costs you: spreads, withdrawals, network fees, and slippage survive every promo. Learn the true all-in cost math before trading.",
  keywords: [
      "zero fee arbitrage",
      "crypto arbitrage fees",
      "arbitrage hidden costs",
      "trading fee myth",
      "arbitrage profitability"
  ],
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Exchanges advertising 0% fees make every spread look like profit. The reality: trading fees are only one of six cost layers, and the other five decide whether you actually make money.",
  image: "/images/blog/zero-fee-arbitrage-myth.svg",
  blocks: [
      { type: "p", text: "Zero fee arbitrage is one of the most persuasive pitches in crypto trading: exchanges advertising 0% maker fees, or limited-time promos promising fee-free spot trading, make it sound like every price gap you spot is pure profit. The truth is less exciting. Trading fees are only one of five or six cost layers in a typical arbitrage loop, and removing that one layer leaves the rest — spreads, withdrawal fees, network fees, slippage, and funding — fully intact. On October 12, 2026, with BTC trading around $83,650 after a sharp October selloff, plenty of traders are hunting wide spreads again. Before you act on a spread you found on a 'zero fee' venue, you need the all-in math." },
      { type: "h2", text: "\"Zero Fee\" Is a Marketing Label, Not a Cost Fact" },
      { type: "p", text: "Most zero-fee offers apply only to maker orders on spot markets, or to a specific trading pair for a limited period. Takers still pay. Futures still pay funding. Withdrawals still pay. And critically, the fee you pay the exchange is distinct from the **spread** — the gap between the bid and ask that you cross when you need an instant fill. An arbitrage trade that requires speed almost always crosses the spread, and on volatile days (BTC fell to $80,420 on October 9 before recovering to roughly $83,650–83,854 by October 12) spreads on altcoins can run 0.5%–2% wide — many times larger than the trading fee you just eliminated. For a full map of these layers, see our breakdown of [hidden costs in arbitrage](/blog/hidden-costs-arbitrage)." },
      { type: "p", text: "There is also the question of how a zero-fee venue makes money, because the answer tells you where the costs went. These exchanges typically monetize through wider internal spreads on simplified buy/sell interfaces, withdrawal fees, listing fees, or lending customer balances. None of that is necessarily dishonest, but it means the \"zero\" describes exactly one line of the invoice — the rest of the bill still arrives." },
      { type: "h2", text: "The Five Costs That Survive Every Zero-Fee Promo" },
      {
        type: "list",
        items: [
        "**Bid-ask spread:** the gap you cross on market orders — widest exactly when arbitrage spreads look most attractive",
        "**Withdrawal fees:** flat per-coin charges to move funds off the exchange, often $5–$25 per move",
        "**Blockchain network fees:** paid to miners or validators, completely independent of any exchange promo",
        "**Slippage and price impact:** your own order moving the book on thin pairs",
        "**Funding rates and borrow costs:** on perpetuals, funding can exceed the trading fee within hours"
        ],
      },
      { type: "p", text: "Take a typical cross-exchange loop: buy 0.1 BTC on Exchange A, transfer to Exchange B, sell. Even with 0% trading fees, you pay the spread twice (buying at the ask, selling at the bid), a withdrawal fee of roughly $5–$15, a network fee, and whatever slippage the sell leg costs. On an $8,365 position (0.1 BTC at about $83,650 on October 12, 2026), costs of $25–$60 are ordinary — that is 0.3%–0.7% of the position, and every dollar comes out of the spread before you make a cent." },
      { type: "h2", text: "A Worked Zero-Fee Example: The October 2026 BTC Spread" },
      { type: "p", text: "Suppose Exchange A shows BTC at $83,650 and Exchange B shows $84,150 — a $500 gap, about 0.6%. On a zero-fee venue that looks like $500 of profit per coin. Run the real ledger:" },
      {
        type: "table",
        headers: ["Cost layer", "Estimate on 1 BTC", "Notes"],
        rows: [
          ["Trading fees (zero-fee venue)", "$0", "Maker orders only — a taker order still costs 0.05–0.10%"],
          ["Bid-ask spread (both legs)", "~$40–$80", "Roughly 0.05–0.1% per leg at this size"],
          ["BTC withdrawal fee", "~$5–$15", "Exchange-set, flat per withdrawal"],
          ["On-chain network fee", "~$1–$3", "Varies with mempool congestion"],
          ["Slippage on the sell leg", "~$20–$60", "Wider on fast moves — Oct 9's drop to $80,420 showed how fast books thin"],
          ["Total all-in", "~$66–$158", "0.08–0.19% of the position"]
        ],
      },
      { type: "p", text: "The $500 headline spread becomes $342–$434 after honest costs — still positive, but 13–32% smaller than the zero-fee pitch implied. And if the spread had been 0.3% instead of 0.6%, the trade would be a loser even though no trading fee was ever charged. That is the entire myth in one table: **the fee you eliminated was never the binding constraint.**" },
      { type: "h2", text: "How to Compute Your True All-In Cost" },
      { type: "p", text: "Build a personal cost sheet before you trade, not after. For each venue, record the maker fee, taker fee, withdrawal fee per coin, deposit minimums and confirmation times, and whether funding applies. Then for each strategy add the non-exchange costs: spread width at your actual position size (check the real order book, not the ticker), the network fee at current congestion, and expected slippage from your own market impact. Understanding [how fee tiers work](/blog/fee-tiers-explained) helps here, since your tier changes the first line of the sheet." },
      { type: "p", text: "A practical rule: if the spread you are chasing is less than roughly 2–3x your measured all-in cost, the trade is not a trade — it is a coin flip with fees attached. For most retail cross-exchange loops, that floor sits around 0.5%–1.0%. Triangular and stablecoin loops run tighter on fees but add execution risk, which is its own kind of cost." },
      { type: "h2", text: "When Zero-Fee Offers Actually Help (and When They Don't)" },
      { type: "p", text: "Zero-fee promos are genuinely useful in exactly one situation: high-frequency, same-venue strategies where the exchange fee was the dominant cost — for example, market-making or triangular arbitrage inside a single exchange's order books, where you never withdraw and never touch a blockchain. There, dropping the maker fee from 0.1% to 0% can turn a marginal strategy viable. Our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) covers where venue choice matters most." },
      { type: "p", text: "They are nearly useless for cross-exchange spot arbitrage, where the withdrawal fee and the two spreads dominate. A 0.1% fee waiver on a trade whose real costs are 0.7% is a rounding error wearing a marketing costume. Worse, zero-fee promos attract crowds of bots to the same venue, compressing the very spreads you were chasing while leaving you holding the withdrawal bill." },
      {
        type: "callout",
        title: "Risk disclosure",
        text: "Fee math is the easy part. Arbitrage also carries execution risk (prices move between legs), counterparty risk (an exchange can freeze withdrawals mid-loop), and tax consequences on every leg. Never size a trade on fee savings alone — size it on the all-in spread after every cost layer.",
        tone: "warning",
      },
      {
        type: "faq",
        items: [
          {
            q: "Do zero-fee exchanges really charge nothing?",
            a: "They charge no trading fee on the promoted order types, but spreads, withdrawal fees, and network fees still apply. \"Zero fee\" describes one line of your cost sheet, not the total.",
          },
          {
            q: "Is zero-fee triangular arbitrage profitable?",
            a: "It can be, because it avoids withdrawals and network fees entirely. But it still crosses spreads, and competition from bots is fiercest exactly on zero-fee venues. Backtest against real order-book depth, not the ticker price.",
          },
          {
            q: "What is the biggest hidden cost in arbitrage?",
            a: "Usually the bid-ask spread crossed on both legs, followed by withdrawal fees. On a typical retail loop these dwarf the exchange trading fee — which is why zero-fee promos rarely change the verdict.",
          },
          {
            q: "How do I verify an exchange's real fee schedule?",
            a: "Read the fee page's fine print: maker vs taker, 30-day volume tiers, withdrawal fees per coin, and funding intervals for futures. Then add your own measured spread and slippage on top.",
          }
        ],
      },
  ],
};
