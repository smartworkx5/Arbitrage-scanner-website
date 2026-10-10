import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "futures-basis-explained",
  title: "Crypto Futures Basis Explained",
  description: "Crypto futures basis explained: what contango and backwardation mean, the forces that drive them, and how to read the basis as a market signal in 2026.",
  keywords: [
      "crypto futures basis",
      "contango crypto",
      "backwardation crypto",
      "basis explained futures",
      "futures premium crypto 2026"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "The basis — the gap between futures and spot prices — is the single most important number in crypto derivatives. Here is what drives it and how to read it.",
  image: "/images/blog/futures-basis-explained.svg",
  blocks: [
      { type: "p", text: "Every futures contract has two prices worth knowing: the spot price of the underlying asset and the price of the future itself. The difference between them — futures price minus spot price — is called the **basis**, and it is arguably the single most informative number in crypto derivatives. When the basis is positive, futures trade above spot; when negative, below. Traders name these two regimes **contango** and **backwardation**, and the basis regime tells you an enormous amount about market positioning, leverage demand, and sentiment — if you know how to read it." },
      { type: "p", text: "The **crypto futures basis** is not random noise. It reflects real forces: the cost of carrying a position, the market's demand for leveraged long exposure, expectations about future volatility, and the supply and demand for hedging. In traditional markets, the basis on something like an equity index future is usually small and stable, anchored by interest rates. In crypto, it is wilder and more expressive — swinging from deep contango to sharp backwardation as sentiment whipsaws. Understanding why is the foundation of every basis-related strategy, from cash-and-carry to funding-rate trades." },
      { type: "h2", text: "What the Basis Actually Measures" },
      { type: "p", text: "At its simplest, the basis measures what the market charges (or pays) to hold a leveraged position through time. A positive basis of $2,000 on a $90,000 bitcoin means buyers of the future are willing to pay $2,000 over spot for the privilege of that exposure without putting up the full cash today. That premium bundles together several things: the time value of money (capital locked in margin could earn yield elsewhere), the convenience of leverage (controlling a large position with a fraction of the cash), and the market's directional bias (bullish markets bid futures up harder). If any of this vocabulary is new, our [crypto arbitrage glossary](/glossary) defines every term used here." },
      { type: "h2", text: "Contango: Why Futures Trade Above Spot" },
      { type: "p", text: "Contango — futures above spot — is crypto's default state, and it exists mainly because of relentless demand for leveraged longs. Most retail derivatives traders are buyers, not sellers; they want upside exposure with limited capital, and futures give it to them. That structural bid pushes futures above spot. Add in the cost-of-carry logic (tying up capital has a price) and bullish sentiment (optimists pay up for future delivery), and you get the persistent premium that makes cash-and-carry trades possible. In calm bull markets, bitcoin quarterly futures routinely sit several percent annualized above spot. The same long-side demand powers the [funding-rate carry trade](/guides/funding-rate-arbitrage) on perpetual contracts." },
      { type: "h2", text: "Backwardation: Why Futures Trade Below Spot" },
      { type: "p", text: "Backwardation — futures below spot — is rarer and more dramatic. It typically appears during panics and forced-selling episodes, when everyone wants out of leveraged longs at once and nobody wants to buy the dip with leverage. Spot holds up relatively better (it is just people selling coins), while futures crater under the weight of liquidations and margin calls. The result: the future trades at a discount to spot, sometimes a steep one. Backwardation is the market screaming that leverage demand has collapsed." },
      { type: "p", text: "Backwardation also creates the mirror-image trade: buy the discounted future and short spot, capturing the discount as the contract converges upward at expiry. In practice this is harder for most traders because shorting spot requires borrowing the asset, which can be expensive or unavailable during exactly the panics that create backwardation. Still, recognizing backwardation matters even if you never trade it — it is one of the clearest sentiment signals in crypto, and it often marks moments of maximum fear." },
      { type: "h2", text: "The Forces That Move the Basis" },
      {
        type: "table",
        headers: ["Force", "Pushes basis...", "Example"],
        rows: [
          ["Leverage demand from longs", "Up (contango)", "Retail buying futures in a rally"],
          ["Panic liquidations", "Down (backwardation)", "Cascading long liquidations in a crash"],
          ["Hedging by holders", "Down", "Miners selling futures to lock in prices"],
          ["Interest rates / cost of capital", "Up", "Higher rates raise the carry premium"],
          ["Time to expiry", "Toward zero", "Basis decays as settlement approaches"],
          ["Spot supply shocks", "Down", "Exchange outflows tightening spot supply"]
        ],
      },
      {
        type: "callout",
        title: "Basis is a sentiment gauge, not a crystal ball",
        text: "A wide contango basis means the market is crowded long — which has historically preceded sharp corrections as often as it has marked healthy uptrends. Use the basis as context for risk management, not as a timing signal on its own.",
        tone: "info",
      },
      { type: "h2", text: "Reading the Basis Like a Market Signal" },
      { type: "p", text: "Professional traders read the basis the way sailors read the sky. Extremely wide contango — say, annualized basis above 20-25% on majors — signals euphoria and crowded longs; it is often when basis traders harvest their best yields, and also when the market is most fragile. Compressed or negative basis signals fear, forced selling, or both; it is when carry traders step back and when contrarians start paying attention. The basis rarely predicts direction, but it almost always describes positioning — and positioning is what drives liquidations." },
      { type: "p", text: "For the arbitrage-minded, the practical takeaway is simpler: the basis is your inventory. High basis means the cash-and-carry trade pays well; low or negative basis means it does not, and your capital is better deployed elsewhere. Check the annualized basis across quarterly contracts before committing capital, compare it honestly against your costs and your next-best yield, and remember that the fattest basis often appears exactly when market risk is highest. That tension — best yields at the scariest moments — is the central paradox of basis trading, and managing it is the whole job." },
      {
        type: "faq",
        items: [
          {
            q: "What is a normal crypto futures basis?",
            a: "There is no fixed normal — it moves with market conditions. In calm bull markets, bitcoin quarterly futures often carry a single-digit to low-teens annualized premium. In euphoric phases it can exceed 20%+, and in panics it can flip negative. Compare current readings to recent history rather than to any absolute benchmark.",
          },
          {
            q: "Why is the basis different on different exchanges?",
            a: "Each exchange has its own user base, margin rules, and leverage demand, so the futures premium varies by venue. These cross-exchange basis differences are themselves tradable — the same contract can trade at meaningfully different premiums on two platforms.",
          },
          {
            q: "Does the basis always go to zero at expiry?",
            a: "For physically delivered and properly cash-settled contracts, yes — the futures price must equal the spot price at the settlement moment, by construction. That guaranteed convergence is what makes cash-and-carry a true arbitrage rather than a speculation.",
          },
          {
            q: "How is basis different from the funding rate?",
            a: "The basis is the price gap on dated futures that converges at expiry; the funding rate is a periodic payment on perpetual contracts that never expire. Both reflect long-side leverage demand, and both can be harvested with hedged trades — see our comparison of funding trades versus basis trades.",
          }
        ],
      },
  ],
};
