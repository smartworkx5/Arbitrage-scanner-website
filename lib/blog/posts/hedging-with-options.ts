import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "hedging-with-options",
  title: "Hedging Spot With Crypto Options",
  description: "Options let spot holders buy downside protection without selling. Learn protective puts, collars, and covered calls, plus costs, sizing, and common mistakes.",
  keywords: [
      "hedging with crypto options",
      "crypto options",
      "crypto options hedge",
      "protective put crypto",
      "options collar crypto",
      "hedge spot crypto",
      "crypto options strategies"
  ],
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Selling your spot is not the only way to manage downside. Options let you buy protection, cap losses, and stay exposed to upside, if you understand what the hedge really costs.",
  image: "/images/blog/hedging-with-options.svg",
  blocks: [
      { type: "p", text: "Crypto options give spot holders something that stop-losses cannot: protection that stays in place even when the market gaps. A stop-loss can fail when price jumps past it overnight. An option, once bought, pays out according to its terms no matter how fast the market moves. That is why hedging with crypto options has become a core skill for long-term holders, funds, and miners who cannot simply sell their position every time sentiment turns. On Oct 18, 2026, the case for hedging was easy to see. Bitcoin traded near $81,300 to $81,850, roughly flat over 24 hours, but October 2026 was down 2.48% so far, putting Bitcoin on track for its first back-to-back losing Octobers in more than 10 years, while US September CPI came in hot at 3.7% year over year. A holder who wanted to stay invested through that uncertainty had a real choice: sell, hold unprotected, or hedge." },
      { type: "h2", text: "Why Hedge Instead of Selling" },
      { type: "p", text: "Selling spot is simple, but it has costs that traders underestimate. Selling triggers taxes in many jurisdictions, gives up upside if the market rebounds, and forces a decision about when to buy back, which most traders get wrong. Hedging keeps the position and buys protection separately. The holder still owns the asset, still benefits if it rises, and has a defined cushion if it falls. The price of that comfort is the option premium, the amount paid to buy the option, which is lost if the protection is never needed. Think of it as insurance: you pay a premium, you hope you never need it, and you are glad it exists when you do." },
      { type: "p", text: "Hedging also changes the psychology of holding through volatility. An unhedged holder watches every dip as a threat and is tempted to sell at the bottom. A hedged holder knows the worst case is bounded and can ride out the move without panic. That psychological benefit is real, but it only works if the hedge is sized correctly and understood in advance. A hedge that is too small gives false comfort. A hedge that is too expensive eats the returns it was meant to protect. The rest of this guide walks through the three structures every spot holder should understand, and the costs that decide whether each one makes sense." },
      { type: "h2", text: "Protective Puts: The Simplest Hedge" },
      { type: "p", text: "A protective put is the simplest hedge: buy a put option that gives you the right to sell your asset at a chosen strike price before expiry. If the market falls below the strike, the put gains value and offsets the loss on your spot. If the market rises, the put expires worthless and you keep the upside minus the premium paid. The strike sets the protection level. A put struck close to the current price protects sooner but costs more. A put struck further below the current price costs less but leaves you exposed to the first part of the fall. Expiry sets the time horizon. A one-month put covers one month of risk. A three-month put costs more but covers longer." },
      { type: "p", text: "Choosing a protective put is a trade-off between cost and coverage, and there is no universally right answer. A holder who expects a short, sharp event might buy a near-term put struck near the current price. A holder who wants long-term disaster protection might buy a cheaper, further out-of-the-money put with a longer expiry. The common mistake is buying puts only after the market has already fallen, when premiums have become expensive because everyone wants protection at the same time. Protection is cheapest when it feels least necessary, which is exactly when most traders skip it." },
      { type: "h2", text: "Collars and Covered Calls" },
      { type: "p", text: "A collar combines a protective put with a covered call. The holder buys a put for downside protection and sells a call to earn premium that offsets the put cost. The result is a position with a floor and a ceiling: losses are capped below the put strike, and gains are capped above the call strike, while the net premium cost can be close to zero. Collars suit holders who are happy to give up some upside in exchange for cheap protection. The trade-off is real: if the market rallies hard, the sold call caps the gains, and the holder watches the market run past the ceiling. That frustration is the price of the hedge, and it should be accepted in advance, not discovered after the fact." },
      { type: "p", text: "A covered call on its own is a different tool. The holder sells a call against spot they already own, collecting premium as income. If the market stays flat or falls slightly, the premium cushions the loss. If the market rises above the strike, the holder sells at the strike and misses further upside. Covered calls work best in flat or gently rising markets and worst in strong rallies, where the capped upside hurts. Many holders combine covered calls with periodic protective puts, adjusting the structure as market conditions change. The key discipline is to decide the purpose of each structure before trading it: income, protection, or both, and in what proportion." },
      {
        type: "table",
        headers: ["Structure", "What it does", "What you give up"],
        rows: [
          ["Protective put", "Caps downside below the strike", "Premium paid; expires worthless if unused"],
          ["Collar", "Floor plus ceiling, low net cost", "Upside capped at the call strike"],
          ["Covered call", "Earns premium income", "Upside capped; limited downside help"],
          ["No hedge", "Full upside and downside", "Full exposure to gaps and crashes"]
        ],
      },
      { type: "h2", text: "Sizing, Costs, and Common Mistakes" },
      { type: "p", text: "A hedge only works if it is sized to the position it protects. Hedging half a position with a put that covers the full position leaves half the risk unhedged. Hedging with options that expire next week when the risk lasts three months leaves most of the period unprotected. Traders should match the notional value of the options to the spot position, match the expiry to the risk horizon, and account for the total premium cost as a percentage of the position. A hedge that costs several percent of the position every month will quietly destroy returns even if it never pays out. Compare that cost honestly against simply reducing position size, which is free and often the better hedge." },
      {
        type: "list",
        items: [
        "Match option notional value to the spot position you want to protect.",
        "Match expiry to the risk horizon, not to the cheapest contract.",
        "Count total premium as a percentage of the position, per month.",
        "Buy protection before stress arrives, when premiums are cheaper.",
        "Never hedge a position you do not understand with options you do not understand."
        ],
      },
      {
        type: "callout",
        title: "Options can lose all their value",
        text: "A bought option that expires out of the money is worth zero. Only spend premium you can afford to lose, and never fund a hedge with leverage that creates a bigger risk than the one you are hedging.",
        tone: "warning",
      },
      { type: "p", text: "Risk disclosure: options are leveraged instruments, and hedges can fail if the strike, expiry, or counterparty does not match the risk. Crypto options markets can be less liquid than spot, and pricing can be wide during stress. Before trading options, study the [glossary](/glossary) for terms like strike, expiry, premium, and implied volatility, and review the [funding rate arbitrage](/guides/funding-rate-arbitrage) and [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) guides for how derivatives and spot interact. Hedging is a skill, not a guarantee, and the best hedge is often the simplest one: a position size you can hold through a bad month." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you learn options hedging step by step. Ask it to explain protective puts, collars, and covered calls in simple words, compare the cost of each structure, or draft a checklist for sizing a hedge to your spot position." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a protective put?",
            a: "A put option bought alongside spot that gives you the right to sell at a chosen strike price. If the market falls below the strike, the put gains value and offsets the spot loss.",
          },
          {
            q: "What is an options collar?",
            a: "A protective put plus a sold covered call. The put sets a floor, the call sets a ceiling, and the call premium offsets the put cost.",
          },
          {
            q: "Are options hedges expensive?",
            a: "They can be. Premiums rise with volatility and time to expiry, and protection bought during stress costs the most. Always compare the premium cost against simply reducing position size.",
          },
          {
            q: "Can a hedge fail?",
            a: "Yes. Wrong strike, wrong expiry, illiquid markets, or counterparty problems can all leave you unprotected. A hedge reduces risk; it does not eliminate it.",
          }
        ],
      },
  ],
};
