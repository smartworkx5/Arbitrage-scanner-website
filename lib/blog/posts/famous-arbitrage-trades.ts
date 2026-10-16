import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "famous-arbitrage-trades",
  title: "Famous Arbitrage Trades in History",
  description: "From LTCM's bond arbitrage to the gold fix and modern crypto spreads, famous arbitrage trades show what works, what breaks, and what still applies in 2026.",
  keywords: [
      "famous arbitrage trades",
      "arbitrage history",
      "LTCM arbitrage",
      "classic arbitrage trades",
      "arbitrage examples",
      "historical arbitrage"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Arbitrage is older than crypto by centuries. The famous trades of history — from bond convergence to gold — teach lessons that still apply to crypto spreads in 2026.",
  image: "/images/blog/famous-arbitrage-trades.svg",
  blocks: [
      { type: "h2", text: "Famous Arbitrage Trades: Lessons From Before Crypto" },
      { type: "p", text: "Famous arbitrage trades in history are worth studying because arbitrage is older than crypto by centuries, and the same patterns repeat in every market. Arbitrage — buying an asset in one place and selling the same or an equivalent asset elsewhere for a profit — is one of the oldest strategies in finance. The famous trades below span bonds, currencies, gold, and equities, and each one teaches a lesson that applies directly to crypto spreads in 2026. As of Oct 16, 2026, BTC trades near $82,200, ETH near $2,440, and gold near $4,155 per ounce — and the spreads that crypto traders chase today are the same species as the spreads that made and broke fortunes in traditional finance. The technology changed. The mechanics did not." },
      { type: "h2", text: "LTCM: The Greatest Arbitrage Machine That Blew Up" },
      { type: "p", text: "Long-Term Capital Management (LTCM) is the most famous arbitrage story in finance, and the most cautionary. Founded in 1994 by star traders and Nobel laureates, LTCM ran convergence trades: it bought cheap bonds and sold expensive near-identical bonds, betting the prices would converge. For years it worked spectacularly, returning over 40% in some years. The trades were, in isolation, low-risk — the bonds were nearly identical, so the spread should have closed. But LTCM ran them with enormous leverage, sometimes 25-to-1 or more, and with huge positions relative to the markets it traded. When Russia defaulted in 1998, markets panicked, spreads widened instead of converging, and LTCM's leveraged positions produced catastrophic losses. The fund lost billions in weeks and had to be rescued by a consortium of banks organized by the Federal Reserve. The lesson is the single most important one in arbitrage: a trade can be right in direction and still kill you if you are over-leveraged, because spreads can widen before they converge, and a leveraged trader who cannot survive the widening never collects the convergence." },
      { type: "h2", text: "The Gold Fix, Currency Triangulation, and Index Arbitrage" },
      { type: "p", text: "Other famous trades illustrate different edges. The London gold fix, for decades, was a daily ritual where major banks agreed a gold price — and traders who could trade gold in London against gold in Zurich or New York captured small, persistent differences driven by local supply, transport, and timing. Currency triangulation — the classic three-currency loop where EUR/USD, USD/JPY, and EUR/JPY briefly misalign — was the original triangular arbitrage, and it worked because different banks quoted slightly different rates before electronic trading linked them. Index arbitrage — buying the stocks in an index and selling the index future when the future traded at a premium — became a dominant force in the 1980s and was blamed, fairly or not, for amplifying the 1987 crash. Each of these edges shared a lifecycle: discovery, exploitation, crowding, compression, and finally near-disappearance as technology and competition closed the gap. Gold, trading near $4,155 per ounce as of Oct 16, 2026 and heading for a weekly decline, is a reminder that even the oldest arbitrage market still moves with macro forces." },
      {
        type: "table",
        headers: ["Famous trade", "Edge", "What ended it / lesson"],
        rows: [
          ["LTCM convergence", "Bond spreads that should converge", "Leverage — spreads widened before converging"],
          ["Gold fix arbitrage", "Local gold price differences", "Electronic trading compressed the gaps"],
          ["Currency triangulation", "Cross-rate misalignments", "Bank systems linked; gaps closed in milliseconds"],
          ["Index arbitrage", "Futures vs. cash index premium", "Crowding; now a high-frequency game"],
          ["Crypto cross-exchange", "Same coin, different venue prices", "Market makers and fast capital compressed spreads"]
        ],
      },
      { type: "h2", text: "What TradFi Classics Teach Crypto Traders" },
      {
        type: "list",
        items: [
        "Convergence is not guaranteed on your timetable — spreads can widen before they close, so size for the widening, not just the convergence.",
        "Leverage turns a small edge into a fatal one — LTCM's trades were sound; its leverage was not.",
        "Every edge has a lifecycle — discovery, crowding, compression. Trade the edge while it lasts and leave before it dies.",
        "Execution and costs decide the outcome — the gross spread is a mirage; net spread after fees, slippage, and funding is the truth.",
        "Crowding is a risk signal — when everyone runs the same arbitrage, the exit gets dangerous."
        ],
      },
      { type: "p", text: "The direct application to crypto is straightforward. Cross-exchange arbitrage is the modern version of the gold-fix trade: the same asset, different venues, small gaps that close fast. Triangular arbitrage is the modern version of currency triangulation: three pairs, one loop, gaps that exist for seconds. Funding-rate arbitrage is the modern version of a convergence trade: a futures price that should converge to spot, with the funding rate as the carry. And the LTCM lesson applies to all of them: leverage and size are what turn a sound arbitrage into a blow-up. In 2026, with US CPI at 3.7% year over year and the FOMC decision due Oct 28, volatility can widen spreads violently — and the traders who survive are the ones who sized for the widening. For the modern versions of these strategies, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), [triangular arbitrage](/guides/triangular-arbitrage), and [funding-rate arbitrage](/guides/funding-rate-arbitrage)." },
      { type: "h2", text: "Why Studying History Pays in 2026" },
      { type: "p", text: "Studying famous arbitrage trades pays because history is the cheapest form of tuition. Every blow-up in the table above was preceded by warnings, by a trade that worked until it did not, and by traders who believed that this time the edge was permanent. The 2026 crypto market is no different: today's edges — regional premiums, new-listing dislocations, cross-chain spreads, tokenized-asset gaps — will follow the same lifecycle of discovery, crowding, and compression. The traders who last are the ones who treat each edge as temporary, manage leverage ruthlessly, track true net edge, and never mistake a working strategy for a law of nature. Arbitrage rewards humility more than brilliance. The famous trades prove it: the smartest people in finance built the greatest arbitrage machine in history, and leverage destroyed it. The lesson is not to avoid arbitrage — it is to respect it." },
      {
        type: "callout",
        title: "Key takeaway",
        text: "Every famous arbitrage edge eventually compressed or blew up. The durable skill is not finding one edge — it is managing leverage, costs, and exits across many edges over time.",
        tone: "info",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help you learn from famous arbitrage trades by summarizing a classic trade's mechanics in simple words and comparing it with a modern crypto strategy." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What was LTCM's arbitrage strategy?",
            a: "LTCM bought cheap bonds and sold expensive near-identical bonds, betting the price gap would converge. The trades worked for years, but extreme leverage meant that when spreads widened in 1998, losses were catastrophic.",
          },
          {
            q: "What killed most famous arbitrage trades?",
            a: "Usually leverage, crowding, or both. An edge that works at small size with low leverage can fail at large size with high leverage, and a crowded edge compresses until it is unprofitable.",
          },
          {
            q: "Does triangular arbitrage still work?",
            a: "In traditional FX, gaps close in milliseconds due to electronic systems. In crypto, triangular gaps still appear but are captured quickly by bots — the edge is thin and demands automation.",
          },
          {
            q: "What is the main lesson of arbitrage history for crypto traders?",
            a: "Size for the widening, not just the convergence. Use modest leverage, track true net edge after all costs, and treat every edge as temporary.",
          }
        ],
      },
  ],
};
