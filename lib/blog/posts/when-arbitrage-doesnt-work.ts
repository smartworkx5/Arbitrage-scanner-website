import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "when-arbitrage-doesnt-work",
  title: "When Arbitrage Doesn't Work",
  description: "Arbitrage fails in trending, illiquid, and high-fee markets. Learn the regimes where spreads mislead, transfers trap capital, and sitting out beats trading.",
  keywords: [
      "when arbitrage does not work",
      "arbitrage risks",
      "arbitrage failing conditions",
      "crypto arbitrage losses",
      "arbitrage market regimes",
      "arbitrage traps"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Arbitrage is not risk-free. In trending, illiquid, or high-fee regimes, the textbook spread can turn into a real loss — here is how to spot those conditions early.",
  image: "/images/blog/when-arbitrage-doesnt-work.svg",
  blocks: [
      { type: "p", text: "When Arbitrage Doesn't Work is a question every trader should answer before placing a trade, because the textbook version of arbitrage assumes instant transfers, zero fees, and stable prices. Real markets break all three assumptions regularly. A spread on screen is only an opportunity if you can actually buy, move, and sell fast enough and cheaply enough to keep it. On Oct 17, 2026, BTC traded in a $80,707 to $82,836 range over the past day, a reminder that even a sideways market moves enough to erase a thin spread while your coins are in transit. Knowing the regimes where arbitrage fails is what separates disciplined traders from traders who donate capital to fees and slippage." },
      { type: "h2", text: "Strong Trending Markets" },
      { type: "p", text: "Fast trending markets are the classic arbitrage killer. When prices move sharply in one direction, the leg you bought may fall before the leg you sell settles, or the spread may invert while your transfer is still confirming. This is sometimes called leg risk: you are exposed to the market during the gap between the two sides of the trade. On Oct 16, 2026, more than $830 million in positions were liquidated in 24 hours, including about $664 million in longs, which shows how violent a trending or reversing market can get. In those conditions, spreads often look wider than usual, but that width is compensation for risk, not free money." },
      { type: "p", text: "The practical response is to widen your required spread during trends and to shorten your exposure window. If you normally trade a 0.5 percent spread in calm markets, you might demand 1.5 percent or more during a strong trend, and prefer routes where capital is already positioned on both exchanges so no transfer is needed. Another option is to sit out entirely. Missing a trade costs nothing; chasing a spread through a trend can cost a large share of the position. Professional traders are comfortable doing nothing when conditions are bad, and that patience is a genuine edge." },
      { type: "h2", text: "Illiquid Pairs and Thin Order Books" },
      { type: "p", text: "Illiquidity is the second regime where arbitrage fails. A spread on a thin pair may exist only for a tiny quantity at the top of the book. If you try to trade a meaningful size, your own order eats through the book and the average fill price is far worse than the quoted spread. Low-liquidity tokens also suffer from wider bid-ask spreads, faster price impact, and a higher chance of exchange delisting or wallet maintenance. The top gainers on Oct 16, 2026 included smaller tokens like Akedo, Injective, and Starknet, and fast-moving small-cap names are exactly where quoted spreads are least reliable." },
      {
        type: "list",
        items: [
        "Check order-book depth, not just the best bid and ask.",
        "Estimate your average fill price for your full size before trading.",
        "Avoid pairs where your order would exceed a few percent of visible depth.",
        "Watch for wallet maintenance and deposit suspensions on thin tokens.",
        "Treat any spread on a token you cannot quickly sell as suspect."
        ],
      },
      { type: "h2", text: "High Fees and Slow Transfers" },
      { type: "p", text: "High fees and slow transfers quietly kill more arbitrage trades than dramatic price moves. A spread of 0.8 percent is a loss if taker fees total 0.4 percent, withdrawal fees add 0.3 percent, and slippage takes another 0.3 percent. Network congestion makes it worse: a transfer that normally takes ten minutes can take an hour during busy periods, and during that hour the market can move against you. Stablecoin and fiat rails add their own delays, including bank cut-off times and exchange processing queues. Always compute the all-in cost for the specific route, the specific size, and the specific time of day, because all three change the answer." },
      {
        type: "table",
        headers: ["Hidden cost", "How it hurts", "What to check"],
        rows: [
          ["Taker fees on both legs", "Eats the spread twice", "Your exact fee tier on each exchange"],
          ["Withdrawal and network fees", "Fixed cost, worse on small trades", "Current withdrawal fee and network congestion"],
          ["Slippage and price impact", "Average fill worse than quote", "Order-book depth at your size"],
          ["Transfer time", "Market moves while coins are in transit", "Confirmation count and recent transfer times"],
          ["Fiat conversion", "Adds spread and delays", "Conversion rate and settlement time"]
        ],
      },
      { type: "h2", text: "Exchange Outages, Halts, and Counterparty Risk" },
      { type: "p", text: "Arbitrage also fails when one side of the trade cannot be completed. Exchanges halt deposits or withdrawals for maintenance, freeze specific wallets, or go offline during volatility spikes. If your coins are stuck on the sending exchange, you cannot complete the second leg, and you hold an unhedged position you never intended to own. Counterparty risk is real as well: an exchange can face regulatory action, insolvency, or a security incident. That is why experienced arbitrageurs cap balances per exchange, prefer well-established venues, and never treat an exchange balance as equivalent to cash in a bank. If a route depends on a venue you do not fully trust, the spread is not worth it. Compare venue pairs carefully in [Binance vs Kraken](/arbitrage/binance-vs-kraken)." },
      { type: "h2", text: "A Practical No-Trade Checklist" },
      { type: "p", text: "The simplest way to avoid bad-regime trades is a short checklist you run before every order. If any item fails, you do not trade. Check that the spread exceeds all-in costs by a clear margin, that order-book depth supports your size, that both exchanges show deposits and withdrawals as operational, that transfer times are normal, and that you are not trading into a major news event or a liquidation cascade. Keep a log of skipped trades too, because reviewing them teaches you which filters save money. Over time, your checklist becomes the most valuable part of your strategy, since it protects capital on the days when the market is most dangerous. For strategy-level guidance, browse [Cross-Exchange Arbitrage](/guides/cross-exchange-arbitrage)." },
      {
        type: "callout",
        title: "Sitting out is a valid trade",
        text: "In bad regimes, the best arbitrage decision is often no trade at all. Preserved capital can be deployed when conditions improve; lost capital cannot.",
        tone: "info",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you reason through bad-regime conditions before you trade. Ask it to explain leg risk in simple words, or to help you draft a no-trade checklist tailored to the exchanges and pairs you use." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why does arbitrage fail in trending markets?",
            a: "Because prices move during the gap between buying one leg and selling the other. That leg risk can erase the spread or turn it into a loss, especially during fast moves.",
          },
          {
            q: "Why do thin order books make arbitrage unreliable?",
            a: "A quoted spread may exist only for a tiny quantity. Larger orders eat through the book, so the average fill price is much worse than the displayed spread.",
          },
          {
            q: "What costs do beginners forget in arbitrage?",
            a: "Taker fees on both legs, withdrawal and network fees, slippage, transfer-time risk, and fiat conversion costs. All of them must be subtracted before a spread counts as profit.",
          },
          {
            q: "When should I skip an arbitrage trade entirely?",
            a: "Skip it when the spread does not clear all-in costs by a clear margin, when deposits or withdrawals are suspended, when depth is thin, or when volatility makes transfer risk too high.",
          }
        ],
      },
  ],
};
