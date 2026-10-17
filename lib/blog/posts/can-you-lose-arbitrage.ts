import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "can-you-lose-arbitrage",
  title: "Can You Lose Money in Arbitrage?",
  description: "Yes, you can lose money in arbitrage. Learn how fees, slippage, delays, depegs, and frozen withdrawals turn a winning spread into a real, painful loss.",
  keywords: [
      "lose money in arbitrage",
      "arbitrage losses",
      "arbitrage risks",
      "why arbitrage fails",
      "crypto arbitrage loss",
      "arbitrage mistakes"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "Yes, arbitrage loses money, and it does so in specific, predictable ways. Here are the loss mechanisms and how traders defend against each one.",
  image: "/images/blog/can-you-lose-arbitrage.svg",
  blocks: [
      { type: "p", text: "Can you lose money in arbitrage? Yes, and it happens more often than the marketing suggests. Arbitrage is often sold as a mechanical way to collect free money from price gaps. In reality, every arbitrage trade is a chain of steps, and a failure at any link can turn a winning spread into a loss. On Oct 16, 2026, more than $830 million in liquidations hit the market in 24 hours, including $664 million in longs, while Bitcoin open interest fell more than 14% from its level near $87,000. Those numbers describe a market where prices moved fast, leverage unwound violently, and anyone caught mid-trade paid for it. Arbitrageurs are not immune to that environment. They face it with both legs exposed." },
      { type: "h2", text: "Loss Mechanism 1: Fees and Slippage Eat the Spread" },
      { type: "p", text: "The most common way to lose money in arbitrage is the quietest: fees and slippage exceed the spread. A screen shows a 0.4% gap. You buy, paying a 0.1% taker fee. You sell, paying another 0.1%. Your own orders move the book, costing 0.15% in slippage. A withdrawal or network fee takes another 0.1%. You are now at a net loss before the market has even moved. This happens constantly to beginners who trade the gross spread instead of the net spread. The defense is simple but non-negotiable: compute all-in costs before every trade, including both taker fees, withdrawal and network fees, funding costs if any, and a realistic slippage estimate based on order book depth. If the net edge is not clearly positive, skip the trade. Skipping is a profit in this business." },
      { type: "p", text: "Slippage deserves special attention because it grows with size. A $500 order in a deep book barely moves the price. A $50,000 order in a thin book can move it several tenths of a percent against you on each leg. Traders who scale up without re-checking depth are often shocked to find that the strategy that worked at small size loses money at large size. Always check the book, use limit orders where possible, and size trades so that your own impact stays small relative to visible liquidity." },
      { type: "h2", text: "Loss Mechanism 2: The Price Moves While You Transfer" },
      { type: "p", text: "Transfer delay is the classic arbitrage killer. You buy Bitcoin at $81,300 on Exchange A, intending to sell at $81,500 on Exchange B. The network congests, the exchange queues your withdrawal, and 40 minutes pass. By the time your coins arrive, Bitcoin trades at $81,100 on Exchange B. Your spread is gone, and you are holding a loss. This is not bad luck. It is the central risk of any transfer-based strategy, and it strikes hardest exactly when spreads look widest, because wide spreads usually appear during volatility, and volatility is when networks congest and exchanges slow down. The defense is to pre-position balances on both venues so both legs can execute simultaneously, or to use fast, cheap transfer routes and accept that some spreads are simply not tradable." },
      {
        type: "table",
        headers: ["Loss mechanism", "How it happens", "Defense"],
        rows: [
          ["Fees and slippage", "All-in costs exceed the gross spread", "Net-edge math, limit orders, small size"],
          ["Transfer delay", "Price moves while coins are in transit", "Pre-positioned balances, fast routes"],
          ["One-leg fill", "One side fills, the other does not", "Simultaneous execution, inventory on both sides"],
          ["Depeg", "Settlement stablecoin loses its peg", "Diversify stablecoins, watch redemptions"],
          ["Frozen funds", "Exchange pauses withdrawals", "Split capital, reputable venues, self-custody"],
          ["Bot failure", "Bug, API outage, bad config", "Testing, limits, kill switches, supervision"]
        ],
      },
      { type: "h2", text: "Loss Mechanism 3: One Leg Fills, the Other Does Not" },
      { type: "p", text: "Partial fills and one-leg fills turn a market-neutral trade into an accidental directional bet. You buy on one exchange, and before your sell executes, the price drops, the venue halts trading, or your API connection fails. You now own an asset you never intended to hold, at a price that is already moving against you. The longer you hold it, the more directional risk you carry. The defense is to treat simultaneous execution as a requirement, not a preference: hold inventory on both sides where possible, use orders that cancel if both legs cannot complete, and set a hard rule for unwinding a stranded leg quickly rather than hoping it recovers. Hope is not a risk control." },
      { type: "h2", text: "Loss Mechanism 4: Depegs and Frozen Funds" },
      { type: "p", text: "Depegs and frozen funds are the catastrophic loss mechanisms. If the stablecoin you use to settle loses its peg mid-trade, your profit can vanish even if both legs filled perfectly. If an exchange pauses withdrawals while your capital sits inside it, your funds are trapped and the local price can detach from the market, turning a paper spread into a real loss. Both risks are invisible until they strike, which is why diversification matters more than any single-trade tactic. Split stablecoin holdings across reputable coins, split exchange balances across reputable venues, keep long-term capital in self-custody, and never treat a wide spread on a stressed venue as free money. The [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and [CEX vs DEX arbitrage](/guides/cex-vs-dex-arbitrage) guides explain how these risks arise in each venue type, and the [arbitrage](/arbitrage) hub compares venues." },
      {
        type: "callout",
        title: "The losing trade checklist",
        text: "Before every arbitrage trade, confirm: net edge after all fees is positive, both legs can execute together, transfer time is acceptable or unnecessary, settlement stablecoin is on peg, and no single venue holds more capital than you can afford to have frozen. If any check fails, skip the trade.",
        tone: "warning",
      },
      {
        type: "list",
        items: [
        "Net edge after all fees is positive, not just gross spread.",
        "Both legs can execute together, or transfer time is short and safe.",
        "Settlement stablecoin is on peg and redemptions are working.",
        "No single venue holds more than you can afford to have frozen.",
        "Bot limits and kill switches are set before the trade starts."
        ],
      },
      { type: "h2", text: "Loss Mechanism 5: Bots, Bugs, and Human Error" },
      { type: "p", text: "Automation adds a final loss channel: the bot itself. A misconfigured bot can repeat a losing trade hundreds of times, trade the wrong pair, or ignore a halted market. An API outage can leave a position unhedged. A fat-fingered manual order can buy ten times the intended size. The defense is boring but effective: test with tiny amounts, set hard daily loss limits, use kill switches, restrict API permissions so a bot cannot withdraw funds, and supervise automation rather than trusting it. Every arbitrageur who has operated for years has a story about a bug that cost money. The ones who survived had limits that kept the bug from costing everything." },
      { type: "p", text: "The bottom line is that arbitrage loses money through ordinary, predictable mechanisms, and all of them are manageable with discipline. Compute net edge, execute both legs together, respect transfer risk, diversify venues and stablecoins, and cap your exposure to any single failure. Traders who do those five things do not eliminate losses, but they keep losses small and survivable. Traders who skip them eventually meet the loss mechanism they ignored. For a broader risk map, see the [glossary](/glossary) and [Binance vs Kraken](/arbitrage/binance-vs-kraken)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you learn from arbitrage losses before they happen to you. Ask it to explain slippage, depegs, or one-leg fills in simple words, or to draft a pre-trade checklist covering fees, execution, and venue risk." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Can you lose money in arbitrage?",
            a: "Yes. Fees, slippage, transfer delays, one-leg fills, depegs, frozen funds, and bot failures can all turn a winning spread into a loss.",
          },
          {
            q: "What is the most common arbitrage loss?",
            a: "Fees and slippage exceeding the gross spread. Beginners trade the screen spread instead of the net spread after all costs.",
          },
          {
            q: "How do I avoid transfer losses?",
            a: "Pre-position balances on both venues so both legs execute together, or use fast transfer routes and skip spreads that require slow transfers.",
          },
          {
            q: "Can a bot lose money in arbitrage?",
            a: "Yes. Bugs, bad configuration, and API outages can repeat losses quickly. Use tiny test amounts, hard loss limits, and kill switches.",
          }
        ],
      },
  ],
};
