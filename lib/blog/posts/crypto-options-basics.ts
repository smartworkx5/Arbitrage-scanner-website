import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-options-basics",
  title: "Crypto Options Basics for Arbitrageurs",
  description: "Crypto options basics for arbitrageurs: calls, puts, strike, expiry, and the Greeks explained in plain language, plus how options create arbitrage openings.",
  keywords: [
      "crypto options basics",
      "crypto options arbitrage",
      "calls puts crypto",
      "options Greeks explained",
      "crypto derivatives basics",
      "bitcoin options guide",
      "options trading crypto"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 10,
  category: "Basics",
  excerpt: "Options give traders the right, not the obligation, to buy or sell crypto at a set price — and that asymmetry is what makes them useful for arbitrage.",
  image: "/images/blog/crypto-options-basics.svg",
  blocks: [
      { type: "h2", text: "What a Crypto Option Actually Is" },
      { type: "p", text: "Crypto options basics start with a simple idea: an option is a contract that gives its holder the right, but not the obligation, to buy or sell a crypto asset at a set price before a set date. A call option gives the right to buy, and a put option gives the right to sell. The set price is called the strike, and the set date is called the expiry. The buyer of the option pays a premium to the seller, and that premium is the price of the option itself. If the market moves in the buyer's favor, the option gains value. If it does not, the option can expire worthless, and the most the buyer loses is the premium paid." },
      { type: "p", text: "That asymmetry is the whole point. Owning a call lets you participate in upside while capping your downside at the premium, and owning a put lets you profit from downside or protect a holding while capping your loss the same way. The seller takes the other side: the seller collects the premium up front and accepts the obligation if the buyer exercises. For arbitrageurs, options matter because they create a second, parallel market for the same underlying asset. When the options market and the spot market disagree about the value of an asset, a spread appears, and spreads are what arbitrageurs trade. On October 17, 2026, bitcoin traded near $81,300 to $81,600, and every strike and expiry on the options board was effectively a separate opinion about where that price might go." },
      { type: "h2", text: "Calls, Puts, and How They Pay Off" },
      { type: "p", text: "A call option pays off when the underlying price rises above the strike plus the premium paid. Suppose you buy a bitcoin call with a strike of $82,000 and pay $1,000 in premium. If bitcoin settles at $85,000, the option is worth $3,000 at expiry, and your net profit is $2,000 after the premium. If bitcoin settles below $82,000, the option expires worthless and you lose the $1,000 premium. A put works in mirror image: a put with a strike of $80,000 gains value as bitcoin falls below $80,000, and loses the premium if bitcoin stays above the strike. In both cases, the buyer knows the maximum loss in advance, which is why options are popular for defined-risk strategies." },
      { type: "p", text: "Options can be exercised or sold before expiry, and most crypto options traders sell rather than exercise. Selling an option back to the market captures its remaining time value without the hassle of taking delivery of the underlying asset. Expiry mechanics vary by venue: some options are cash-settled in stablecoins, others settle in crypto, and settlement prices are usually based on an index or average rather than a single exchange's price. Arbitrageurs must know the settlement method of every venue they use, because a cash-settled option and a physically-settled option on the same strike are not identical instruments, and treating them as identical is a classic source of surprise losses." },
      {
        type: "list",
        items: [
        "Call: right to buy at the strike. Profits when the price rises.",
        "Put: right to sell at the strike. Profits when the price falls.",
        "Premium: the price of the option, and the buyer's maximum loss.",
        "Strike: the price at which the option can be exercised.",
        "Expiry: the date the option stops trading and settles."
        ],
      },
      { type: "h2", text: "The Greeks, Simplified" },
      { type: "p", text: "The Greeks are measures of how an option's price responds to changes in the market, and you do not need a mathematics degree to use them. Delta measures how much the option's price moves when the underlying moves by one dollar. A call with a delta of 0.5 gains about 50 cents when bitcoin rises one dollar. Gamma measures how fast delta itself changes, which matters most near expiry and near the strike. Theta measures time decay: how much value the option loses each day as expiry approaches. Vega measures sensitivity to volatility: when implied volatility rises, option prices generally rise, and when it falls, they fall." },
      { type: "p", text: "For arbitrageurs, the Greeks are tools for keeping a position neutral. A delta-neutral arbitrage holds options and spot in proportions that cancel out directional exposure, so the trade profits from mispricing rather than from guessing the market's direction. Theta tells you how much time decay you are paying or collecting each day. Vega tells you how exposed you are to a volatility shock, which matters because crypto volatility can collapse or explode with little warning. The October 16, 2026 session, which saw more than $830 million in liquidations across the market, is a reminder that volatility regimes change fast, and an options position that looked calm in the morning can become violent by evening." },
      {
        type: "table",
        headers: ["Greek", "Measures", "Why an arbitrageur cares"],
        rows: [
          ["Delta", "Price sensitivity to the underlying", "Needed to hedge directional exposure"],
          ["Gamma", "How fast delta changes", "Risk spikes near expiry and near the strike"],
          ["Theta", "Daily time decay", "Cost of holding, or income from selling"],
          ["Vega", "Sensitivity to volatility", "Exposure to implied volatility swings"],
          ["Rho", "Sensitivity to interest rates", "Usually small in crypto, but not always zero"]
        ],
      },
      { type: "h2", text: "Implied Volatility and Why Options Prices Move" },
      { type: "p", text: "An option's price has two components: intrinsic value, which is the value if exercised right now, and time value, which is everything else. Time value depends on how much time is left, how far the strike is from the current price, and implied volatility, the market's expectation of future price movement. When traders expect big moves, implied volatility rises and options become more expensive, even if the underlying price has not moved. When markets go quiet, implied volatility falls and options get cheaper. Arbitrageurs watch implied volatility closely because it is the most common source of options mispricing: the same asset can have different implied volatilities at different strikes or expiries, and those differences create tradeable structure." },
      { type: "p", text: "This is also where options arbitrage begins. If a call and a put with the same strike and expiry imply different volatilities, something is off, and the put-call parity relationship described in our guide to [put-call parity arbitrage](/guides/cross-exchange-arbitrage) gives a framework for checking it. If options on one venue imply much higher volatility than the same options on another venue, there may be a cross-venue spread. None of these are risk-free. Execution costs, margin requirements, and the speed at which prices adjust all eat into the edge. The point of learning options basics is not to find free money, it is to understand the instruments well enough to recognize when a genuine mispricing exists and when you are just looking at noise." },
      {
        type: "callout",
        title: "Options are leveraged",
        text: "A small premium controls a large notional position. That leverage cuts both ways: it magnifies gains, but it also means an option can lose its full value quickly. Never risk more premium than you can afford to lose.",
        tone: "warning",
      },
      { type: "h2", text: "How Arbitrageurs Actually Use Options" },
      { type: "p", text: "Arbitrageurs use options in a few recurring ways. The simplest is put-call parity arbitrage, buying or selling combinations of calls, puts, and spot to exploit violations of the parity relationship. Another is volatility arbitrage, trading options against spot or futures to profit when implied volatility is out of line with realized volatility. A third is cross-venue arbitrage, exploiting price differences for the same option contract on different platforms. A fourth is using options as a hedge: buying puts to protect a spot arbitrage position against a sudden drop, or buying calls to cover a short. In every case, the option is a tool for isolating one specific risk or mispricing, not a lottery ticket on direction." },
      { type: "p", text: "For traders new to derivatives, the sensible path is to learn on paper first. Track a few options, compute their Greeks, and compare their prices across venues without trading. When you do start, use small sizes, cash-settled contracts on a venue you trust, and positions with defined maximum loss. Keep a log of every trade, including the implied volatility at entry and exit, so you learn whether your edge is real or imagined. For the venue side of this, see our [arbitrage hub](/arbitrage) and the [best scanners guide](/best-crypto-arbitrage-scanners). Options reward the prepared and punish the impatient, which is exactly why they are worth studying before you trade them." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can make options concepts click faster. Ask it to explain delta, gamma, theta, and vega with a simple worked example using a bitcoin call, or to turn this article into a one-page study checklist you can review before your first options trade." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the difference between a call and a put?",
            a: "A call gives the right to buy at the strike and profits when the price rises. A put gives the right to sell at the strike and profits when the price falls. The buyer's maximum loss in both cases is the premium paid.",
          },
          {
            q: "What is the premium in options trading?",
            a: "The premium is the price the buyer pays for the option. It is the buyer's maximum loss if the option expires worthless, and the seller's income for taking on the obligation.",
          },
          {
            q: "What does delta-neutral mean?",
            a: "A position is delta-neutral when its options and spot holdings cancel out directional exposure, so small price moves do not change its value. Arbitrageurs use delta neutrality to isolate mispricing rather than bet on direction.",
          },
          {
            q: "Why do options lose value over time?",
            a: "Because of theta, or time decay. As expiry approaches, the option has less time for the market to move in its favor, so its time value declines, fastest in the final days before expiry.",
          }
        ],
      },
  ],
};
