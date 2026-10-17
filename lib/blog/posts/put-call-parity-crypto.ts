import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "put-call-parity-crypto",
  title: "Put-Call Parity Arbitrage in Crypto",
  description: "Put-call parity arbitrage in crypto explained: the parity formula, how to spot violations, and the execution risks that keep the edge small for most traders.",
  keywords: [
      "put-call parity crypto",
      "put call parity arbitrage",
      "crypto options parity",
      "options mispricing crypto",
      "parity arbitrage strategy",
      "bitcoin options arbitrage",
      "crypto derivatives arbitrage"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Put-call parity links the prices of calls, puts, and spot in a fixed relationship — and when that relationship breaks, arbitrageurs take notice.",
  image: "/images/blog/put-call-parity-crypto.svg",
  blocks: [
      { type: "h2", text: "The Parity Relationship, in Plain Language" },
      { type: "p", text: "Put-call parity arbitrage in crypto starts with one of the cleanest ideas in derivatives: a call and a put with the same strike and the same expiry, combined with the underlying asset, must be priced consistently, or an arbitrage exists. In plain language, buying a call and selling a put with the same strike and expiry creates a position that behaves like owning the underlying asset. Because the two packages are economically equivalent, they should cost the same. When they do not, a trader can buy the cheaper package and sell the more expensive one, locking in the difference, at least in theory." },
      { type: "p", text: "The formal version is simple enough to state. For European-style options, where exercise happens only at expiry, the call price minus the put price should equal the spot price minus the discounted strike. In symbols: C minus P equals S minus the present value of K. You do not need to memorize the formula to use the idea. The practical version is a checklist: pick a strike and expiry, read the call price, the put price, and the spot price at the same instant, and ask whether the two sides match after accounting for interest and fees. If they do not match by more than your costs, you may have found a parity violation. On October 17, 2026, with bitcoin near $81,300 to $81,600, every strike on the options board offered a separate parity check, and most of them matched closely, because market makers watch this relationship constantly." },
      { type: "h2", text: "How Parity Violations Appear" },
      { type: "p", text: "Parity violations appear for ordinary, unglamorous reasons. The most common is timing: options and spot trade in separate order books, and a fast move in spot can leave option quotes stale for seconds or minutes. Another is liquidity: a thinly traded strike may show a wide bid-ask spread, and the mid-price can look mispriced even though no one can trade at it. A third is venue segmentation: options on one platform may be priced off a different index or settlement method than options on another. A fourth is one-sided demand, for example a rush to buy protective puts during a sell-off, which can push put prices above parity until market makers rebalance. All four produce apparent violations, but only some are tradeable." },
      { type: "p", text: "The distinction between an apparent violation and a tradeable one is execution. A parity check done on mid-prices ignores the bid-ask spread, and the spread on crypto options can be wide, especially for far out-of-the-money strikes and short-dated contracts. A trader who can only buy at the ask and sell at the bid may find that the violation disappears the moment real prices are used. This is why serious parity traders work with executable quotes, not screen mids, and why they measure the violation net of every fee: option trading fees on both legs, spot fees, funding or borrowing costs for the hedge, and the cost of holding margin. The edge in parity arbitrage is usually small, and sloppy cost accounting turns small edges into losses." },
      {
        type: "list",
        items: [
        "Use executable bid and ask prices, never mid-prices, for parity checks.",
        "Read the call, put, and spot prices at the same instant.",
        "Include every fee: option legs, spot hedge, borrowing, and margin.",
        "Check that the strike is liquid enough to trade in your size.",
        "Confirm the settlement method matches across the legs you compare."
        ],
      },
      { type: "h2", text: "The Conversion and Reversal Trades" },
      { type: "p", text: "Parity arbitrage is executed through two named structures: the conversion and the reversal. A conversion is used when the synthetic position, the call minus the put, is cheaper than the underlying. The trader buys the call, sells the put, and sells the underlying, creating a package that is equivalent to owning the synthetic at a discount. A reversal is the mirror image, used when the synthetic is more expensive than the underlying: the trader sells the call, buys the put, and buys the underlying. Both structures are designed to be market-neutral at expiry, because the option legs and the spot leg offset each other. In practice, keeping them neutral requires active management, since the option deltas change as the price moves." },
      { type: "p", text: "Delta hedging is the maintenance work of parity arbitrage. As the underlying price moves, the call and put deltas change, and the hedge must be adjusted to stay neutral. Each adjustment costs fees and can introduce slippage, which is why parity trades are often held by market makers with low fees and fast execution rather than by retail traders. For a smaller trader, the realistic use of parity is often diagnostic: if a strike shows a large, persistent violation, it usually signals something about liquidity, settlement, or demand, and that signal can inform other trades. Chasing the violation itself, without the infrastructure to hedge it, is usually a losing proposition." },
      {
        type: "table",
        headers: ["Structure", "When it applies", "Position"],
        rows: [
          ["Conversion", "Synthetic cheaper than spot", "Buy call, sell put, sell spot"],
          ["Reversal", "Synthetic dearer than spot", "Sell call, buy put, buy spot"],
          ["Both", "Parity holds", "No trade; the edge is zero"]
        ],
      },
      { type: "h2", text: "Why Crypto Parity Is Messier Than Textbook Parity" },
      { type: "p", text: "Crypto parity is messier than the textbook version for several reasons. First, many crypto options are American-style or have non-standard exercise rules, which complicates the parity formula. Second, settlement varies: some contracts settle in crypto, some in stablecoins, and settlement indices differ by venue. Third, funding and borrowing costs in crypto can be large and volatile, and the parity relationship depends on the cost of carrying the hedge. Fourth, crypto trades around the clock with no market close, so the idea of a clean expiry moment is blurrier than in traditional markets. Fifth, volatility can explode with little warning, as it did on October 16, 2026, when more than $830 million in positions were liquidated in 24 hours, and fast moves leave stale quotes everywhere." },
      { type: "p", text: "These complications do not make parity useless. They make it a framework for asking the right questions. When you see a parity violation, ask: is this a real, executable gap, or a stale quote? Is the strike liquid? Do the settlement methods match? What does the hedge cost? What happens to my position if volatility doubles overnight? Traders who answer those questions honestly will find that most violations are mirages, and the few real ones are small. That is not a failure of the strategy. It is the market working as it should, with market makers competing the easy edges away. The remaining edge belongs to those with the best data, the fastest execution, and the most disciplined cost accounting." },
      {
        type: "callout",
        title: "Small edges, real risks",
        text: "Parity arbitrage edges are usually measured in fractions of a percent. Position sizing, margin, and pin risk near expiry can turn a small edge into a real loss if the trade is not managed.",
        tone: "warning",
      },
      { type: "h2", text: "A Practical Parity Workflow" },
      { type: "p", text: "A practical parity workflow starts with a screener, not a trade. Monitor a small set of liquid strikes, near the money, at the nearest few expiries, and log the parity gap using executable quotes at fixed intervals. Define a threshold in advance: a minimum net gap after all fees, a maximum position size, and a rule for unwinding if the gap moves against you. Rehearse the full structure on paper, including the delta hedge, before committing capital. When you do trade, use small sizes, keep the hedge tight, and unwind cleanly before expiry rather than letting the position settle by accident. For the broader derivatives toolkit, see our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) and the [arbitrage hub](/arbitrage). Parity is a discipline more than a signal, and the discipline is what pays." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you practice put-call parity without risking capital. Ask it to walk through a worked conversion example with real numbers, or to draft a parity-check checklist covering executable quotes, fees, settlement, and hedge costs." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is put-call parity?",
            a: "It is the relationship that links a call, a put with the same strike and expiry, and the underlying asset. Buying a call and selling a put should cost the same as owning the underlying, after adjusting for the strike and interest.",
          },
          {
            q: "What is a conversion trade?",
            a: "A conversion buys the call, sells the put, and sells the underlying when the synthetic position is cheaper than spot. It profits if the prices converge to parity by expiry.",
          },
          {
            q: "What is a reversal trade?",
            a: "A reversal sells the call, buys the put, and buys the underlying when the synthetic position is more expensive than spot. It is the mirror image of a conversion.",
          },
          {
            q: "Why do parity violations usually disappear when you try to trade them?",
            a: "Because mid-price quotes ignore the bid-ask spread, fees, and hedging costs. Once executable prices and all costs are included, most apparent violations shrink to zero.",
          }
        ],
      },
  ],
};
