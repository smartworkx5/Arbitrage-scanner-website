import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "perp-index-price-construction-2026",
  title: "How Perpetual Index Prices Are Built: Exchanges, Weights, and Outliers",
  description: "How perpetual index prices are built from spot data, why weights and outlier filters matter, and what happens when an index diverges from market price.",
  keywords: [
      "Perpetual Index Prices",
      "index price",
      "spot exchanges",
      "price weighting",
      "outlier filtering",
      "perpetual futures"
  ],
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Perpetual futures do not settle against a single exchange price. They track an index built from several spot markets, and understanding that construction explains many surprising liquidations.",
  image: "/images/blog/perp-index-price-construction-2026.svg",
  blocks: [
      { type: "p", text: "Perpetual Index Prices are the reference rate that decides funding, mark prices, and in many cases liquidations, and they deserve more attention than most traders give them. On 1 November 2026, Bitcoin traded near 77,586 dollars and Ether near 2,255.13 dollars, but those headline figures are themselves summaries of trading across many venues. A perpetual contract does not simply copy the price from one exchange. It builds an index from spot prices on several exchanges, weights them, filters outliers, and updates continuously, so that no single venue can easily move the contract on its own." },
      { type: "p", text: "That design exists for a good reason. If a perpetual tracked only its own exchange, a large order, a thin book, or a technical glitch on that venue could trigger liquidations that have nothing to do with the wider market. An index spreads that risk. It also creates a new set of questions: which exchanges are included, how much weight does each one carry, how are stale or extreme prices handled, and what happens when an exchange goes offline. Traders who never check those answers may be surprised when their mark price moves differently from the price they see on their favourite spot exchange. Useful background terms are defined in the [glossary](/glossary), and cross-venue price behaviour is covered in the guide to [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Why Perpetuals Need an Index" },
      { type: "p", text: "A perpetual futures contract has no expiry date, so it needs an anchor to keep its price close to spot. That anchor is the index price, which is a composite of spot market prices. The contract price itself can trade above or below the index, and the funding rate pushes it back toward the index over time. When the contract trades above the index, longs generally pay shorts, and when it trades below, shorts generally pay longs. Without a credible index, funding would be arbitrary and the contract could drift far from the asset it claims to track." },
      { type: "p", text: "The index also protects the liquidation system. Liquidations are usually based on the mark price, which is itself derived from the index price, sometimes with adjustments for the contract price. Using the index for the mark price means a brief spike on one exchange should not liquidate a large number of positions. That protection is only as strong as the index construction. If the index includes a low-liquidity venue with a large weight, or if it reacts slowly to real market moves, the protection weakens and traders may face liquidations that feel disconnected from the prices they were watching." },
      { type: "h2", text: "Which Exchanges Get Included" },
      { type: "p", text: "Exchanges are usually selected for liquidity, reliability, and resistance to manipulation. A venue with deep order books, consistent uptime, and genuine trading volume is a better index component than a venue with thin books and sporadic trades. Some index providers publish their component list, while others disclose only general criteria. A trader should prefer contracts whose index components are transparent, because transparency allows independent checking. If a major spot venue is missing from an index, the index may lag during fast moves that start on that venue." },
      { type: "p", text: "Inclusion is not permanent. Providers review components, add venues as they grow, and remove venues that suffer outages, wash trading concerns, or declining liquidity. Those changes can alter the index behaviour even when the underlying asset has not changed. A removal during volatile conditions is especially sensitive, because the remaining weights must be recalculated. Traders should check for index methodology updates in the same way they check for fee changes, since both affect the real cost and risk of holding a position." },
      { type: "h2", text: "Weights, Averaging, and Outlier Filters" },
      { type: "p", text: "Weights decide how much influence each component exchange has. A common approach weights by trading volume or by liquidity, so larger and deeper markets matter more. A simple average would give a small, thin venue the same influence as a large venue, which would make manipulation cheaper. Volume weighting is better, but volume itself can be gamed, so some providers combine volume with order book depth or use median-based calculations. The exact formula matters less than the principle: no single small venue should be able to drag the index far from the consensus price." },
      { type: "p", text: "Outlier filtering is the next layer. If one component prints a price far from the others, the index may exclude it, cap its influence, or use a median that naturally resists extremes. Filters also handle stale prices, where an exchange stops updating during an outage. A stale price that is kept in the index would drag the composite away from the live market. A well-designed index therefore checks freshness as well as distance from the median. Traders should remember that filtering improves stability but can also cause a short lag when the whole market moves quickly and some components update faster than others." },
      { type: "h2", text: "Index Price Versus Mark Price Versus Last Price" },
      { type: "p", text: "Three prices often confuse new perpetual traders. The last price is simply the most recent trade on that contract on that exchange. The index price is the composite spot reference described above. The mark price is the exchange's fair-value estimate, usually based on the index price plus a funding basis adjustment, and it is the price used for unrealised profit and loss and for liquidations. When the contract price spikes on one exchange, the mark price should move much less, because it is anchored to the index rather than to the local last price." },
      { type: "p", text: "Divergences between these prices carry information. A large gap between the contract price and the index price suggests strong directional demand for leverage, and funding will tend to be high in that direction. A gap between the mark price and the index price can reflect the funding basis component. A gap between the index price and a single spot exchange may mean that exchange is experiencing local stress, thin liquidity, or a technical issue. Checking all three prices, rather than only the chart price, gives a clearer picture of whether a move is broad-based or venue-specific." },
      { type: "h2", text: "What Happens When an Index Breaks" },
      { type: "p", text: "Index failures are rare but consequential. If several component exchanges go offline at once, if a data feed breaks, or if a component prints an extreme price that passes the filters, the index can jump or freeze. Exchanges often have fallback rules, such as using the last good index, widening filters, or pausing liquidations, but those rules vary and may not be perfect. During the period around 1 November 2026, with gold near 3,872 to 3,897 dollars per ounce after falling about 108 dollars on the day, and with crypto markets nervous after the reported Binance incident, traders had a reminder that stress can arrive from multiple markets at once and that data feeds must be robust under stress." },
      { type: "p", text: "Traders cannot fix an index, but they can reduce exposure to index risk. Choosing contracts with transparent, diversified indices, avoiding maximum leverage, and keeping positions small enough to survive a brief index dislocation are practical steps. It also helps to watch more than one spot price source during volatile periods, so that a strange mark price can be recognised quickly. If an index price looks wrong compared with several independent spot sources, reducing risk before seeking an explanation is usually wiser than assuming the index will correct itself before a liquidation check. The [best scanners overview](/best-crypto-arbitrage-scanners) can help compare venues, while the [glossary](/glossary) explains the core terms used here." },
      {
        type: "callout",
        title: "Risk Warning",
        text: "Index and mark price rules differ by exchange and can change. A liquidation can occur even when the last traded price on your chart never touched your liquidation level, because liquidations use the mark price. Read the exchange methodology before trading with leverage.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain index prices, mark prices, and last prices in plain language and help you draft questions to check before choosing a perpetual contract. Muse AI is not a trading tool and does not give financial advice." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      {
        type: "faq",
        items: [
          {
            q: "What is a perpetual index price?",
            a: "It is a composite reference price built from spot prices on several exchanges, weighted and filtered to resist manipulation and single-venue glitches.",
          },
          {
            q: "Why is the mark price different from the last price?",
            a: "The mark price is anchored to the index price and is used for profit, loss, and liquidations, while the last price is only the most recent trade on that contract.",
          },
          {
            q: "Can one exchange manipulate an index?",
            a: "Good index design makes that difficult through weighting, medians, and outlier filters, but a thin or poorly designed index is more vulnerable.",
          },
          {
            q: "What should I check before trading a perpetual?",
            a: "Check which exchanges are index components, how weights are set, how outliers are handled, and whether liquidations use the mark price.",
          }
        ],
      },
  ],
};
