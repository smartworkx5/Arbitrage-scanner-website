import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "perp-auto-deleveraging-adl-explained-2026",
  title: "Auto-Deleveraging (ADL) Explained: When Profitable Traders Pay for Liquidations",
  description: "Auto-Deleveraging (ADL) explained: how exchanges close positions to cover bankrupt liquidations, who is selected first, and how traders reduce ADL risk.",
  keywords: [
      "Auto-Deleveraging",
      "ADL crypto futures",
      "auto deleveraging risk",
      "perpetual liquidation cascade",
      "insurance fund futures",
      "leveraged trading risk"
  ],
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Auto-deleveraging sounds unfair, and in a sense it is: profitable traders can have positions closed to cover someone else's failed liquidation. This guide explains when and why it happens.",
  image: "/images/blog/perp-auto-deleveraging-adl-explained-2026.svg",
  blocks: [
      { type: "p", text: "Auto-Deleveraging is the process by which an exchange forcibly reduces profitable positions to cover a liquidation that could not be closed without a loss, and it is one of the most surprising risks in perpetual futures. On 1 November 2026, Bitcoin traded near 77,586 dollars, Ethereum near 2,255 dollars, and the Fear and Greed Index read 34, a fearful market where sharp moves and thin liquidity make failed liquidations more likely. Normally, when a trader is liquidated, the exchange closes the position in the market and any shortfall is covered by the insurance fund. If the insurance fund is insufficient, or if the position is too large to close without moving the market further, the exchange may turn to auto-deleveraging. In that case, traders on the profitable side of the market have part or all of their positions closed at a set price, even though they did nothing wrong. This article explains the chain of events, who is selected, and how traders can reduce exposure. For terms, see the [glossary](/glossary), and for venue differences, see the [arbitrage guide](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "The liquidation chain before ADL" },
      { type: "p", text: "Auto-deleveraging is usually the last step in a chain, not the first. When a leveraged position falls below maintenance margin, the exchange liquidates it, ideally by selling into the market at a price that covers the debt. If the market has moved so fast, or liquidity is so thin, that the position cannot be closed at a price covering its margin, the account becomes bankrupt in the sense that its losses exceed its collateral. The exchange insurance fund then steps in to cover the shortfall, using fees and contributions accumulated from liquidations and trading. In most cases, that fund is enough, and other traders never notice. ADL occurs only when the shortfall exceeds what the insurance fund can cover, or when the position is so large that closing it in the market would cause further damage. At that point, the exchange must find counterparties to take the other side of the bankrupt position, and the only available counterparties are traders holding profitable positions in the opposite direction. Their positions are therefore reduced to absorb the bankrupt position." },
      { type: "h2", text: "Who gets deleveraged first" },
      { type: "p", text: "Exchanges do not select ADL victims at random. Most use a ranking based on profit and leverage, often called an ADL queue or indicator. Traders with the highest combination of unrealised profit and leverage are typically deleveraged first, because they have the most profit to give up and because reducing their positions most efficiently offsets the bankrupt position. Some exchanges show an ADL indicator, such as a set of bars, that estimates a trader position in the queue. A trader with low leverage and modest profit is usually lower in the queue, while a trader with high leverage and large profit is higher. Position size also matters, because a large profitable position can absorb more of the bankrupt position. The exact ranking formula varies by exchange, and traders should read the specific ADL documentation for their venue. What is consistent is the principle: ADL targets the most profitable, most leveraged traders first, which means success and high leverage together increase ADL exposure, a counterintuitive but important fact." },
      { type: "h2", text: "What happens to a deleveraged position" },
      { type: "p", text: "When auto-deleveraging occurs, the affected position is partially or fully closed at a price set by the exchange, often the bankruptcy price of the liquidated position or a price close to mark price at the time. The trader keeps the profit earned up to that closing price, but loses the opportunity for further profit if the market continues in their favour, and may face tax or accounting consequences from a forced close. The trader does not pay an extra penalty beyond losing the position, but the opportunity cost can be large in a trending market. After ADL, the trader may reopen a position, but must do so at the new market price and with fresh margin, and may face the same ADL risk again if conditions remain stressed. Some exchanges notify traders when ADL occurs and show the closed quantity and price in position history, while others provide less detail. Keeping records of ADL events, including price, quantity, and market conditions, helps traders judge whether their leverage and position size need adjustment for that venue and market." },
      { type: "h2", text: "Why ADL is more likely in stressed markets" },
      { type: "p", text: "ADL risk rises when volatility is high, liquidity is thin, leverage is widespread, and the insurance fund is small relative to open interest. A sharp move can liquidate many positions at once, overwhelming both market liquidity and the insurance fund. The Binance security incident reported around 29 October 2026, with Binance stating on 1 November that it had replenished 90 percent of stolen assets and that withdrawals were on track to resume on Sunday 1 November, illustrates how an exchange-level shock can coincide with market stress, even though ADL itself is a market mechanism rather than a security event. Macro stress adds to the picture: on 30 October, United States equities fell sharply, with the S and P 500 down 1.82 percent and the Nasdaq-100 down 3.46 percent, and on 1 November gold traded near 3,872 to 3,897 dollars per ounce after a daily fall of about 108 dollars. In such conditions, traders should assume that liquidation cascades, funding spikes, and ADL are more plausible than in calm markets, and should size positions accordingly rather than assuming the insurance fund will always absorb losses." },
      { type: "h2", text: "How traders reduce ADL exposure" },
      { type: "p", text: "No trader can eliminate ADL risk on a venue that uses it, but several habits reduce it. First, use lower leverage, because ADL queues prioritise high-leverage profitable positions. A moderately leveraged position with solid profit is less likely to be selected than a maximally leveraged one. Second, consider taking partial profits during strong trends, rather than holding a very large profitable position through extreme volatility, since a smaller position is a smaller ADL target. Third, diversify across venues with different insurance fund sizes, ADL policies, and liquidity profiles, while understanding that diversification does not remove market risk. Fourth, monitor the ADL indicator if the exchange provides one, and reduce size when the indicator shows high exposure. Fifth, keep a margin buffer and avoid positions so large that they dominate open interest in a thin contract. Finally, read the exchange ADL and insurance fund disclosures before trading, and prefer venues that publish fund balances and ADL history. ADL is a reminder that in leveraged markets, even winning traders share systemic risk." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Auto-deleveraging can forcibly close a profitable position through no fault of the trader, especially during volatile, illiquid markets. High leverage and large unrealised profits increase ADL queue priority. This risk is inherent to leveraged perpetual trading.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain complex trading risks in simple words. For this article, it can explain auto-deleveraging with a step-by-step example and help you draft a checklist for checking an exchange ADL indicator and insurance fund." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Did I do something wrong if I am auto-deleveraged?",
            a: "No. ADL closes profitable positions to cover a bankrupt liquidation when the insurance fund is insufficient. It reflects systemic risk, not a mistake by the deleveraged trader.",
          },
          {
            q: "Who is most likely to be deleveraged?",
            a: "Traders with high leverage and large unrealised profits are usually first in the ADL queue, because their positions can most efficiently absorb the bankrupt position.",
          },
          {
            q: "Do I lose money in ADL?",
            a: "You keep profit up to the ADL closing price, but you lose further upside if the market continues in your favour, and you must reopen at the new price if you want to continue.",
          },
          {
            q: "Can I avoid ADL completely?",
            a: "Not on a venue that uses ADL. Lower leverage, smaller profitable positions, partial profit-taking, and choosing venues with larger insurance funds can reduce, but not eliminate, exposure.",
          }
        ],
      },
  ],
};
