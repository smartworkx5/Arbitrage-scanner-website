import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "perp-partial-liquidation-mechanics-2026",
  title: "Partial Liquidations in Perpetuals: How Exchanges Close Just Enough",
  description: "Partial Liquidations in futures explained: how exchanges reduce, not wipe out, a position to restore margin — and when partial becomes full liquidation.",
  keywords: [
      "Partial Liquidations",
      "perpetual partial liquidation",
      "margin call crypto futures",
      "liquidation mechanics",
      "reduce only liquidation",
      "crypto futures risk"
  ],
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Partial liquidation is designed to save a position, not end it. Exchanges close just enough to restore margin, giving traders a chance to recover if the market stabilises.",
  image: "/images/blog/perp-partial-liquidation-mechanics-2026.svg",
  blocks: [
      { type: "p", text: "Partial Liquidations are a risk-management step that many perpetual traders misunderstand, because they assume liquidation always means losing the whole position at once. On 1 November 2026, Bitcoin traded near 77,586 dollars, Ethereum near 2,255 dollars, and the Fear and Greed Index read 34, a fearful backdrop where margin buffers matter more than usual. In a partial liquidation, the exchange closes only enough of a position to bring its margin back above the maintenance level, leaving the remainder open. The goal is to reduce risk gradually, avoid unnecessary market impact from closing a large position in one trade, and give the trader a chance to add margin or for the market to recover. Full liquidation still happens if the market keeps moving against the remaining position, but partial liquidation changes the dynamics in important ways. This article explains the mechanics, the triggers, and the trader responses that matter. See the [glossary](/glossary) for definitions and the [arbitrage guide](/guides/cross-exchange-arbitrage) for venue price context." },
      { type: "h2", text: "When partial liquidation triggers" },
      { type: "p", text: "Partial liquidation triggers when a position margin falls to or below a threshold set by the exchange, often when equity approaches maintenance margin but before the account is fully bankrupt. The exchange risk engine continuously calculates margin based on mark price, position size, and maintenance margin rate, which itself depends on position tier. When that calculation shows the position no longer meets maintenance margin, the engine intervenes. Instead of closing everything, it calculates how much needs to be closed to restore margin to a safer level, taking into account the current price, fees, and the margin that will be freed by reducing size. The trigger is therefore not a single price in isolation, but a margin ratio. Two traders with the same entry and liquidation price on paper may trigger at different times if one has cross margin with other positions or collateral, while the other uses isolated margin for that position alone. Understanding margin mode is therefore essential to predicting when partial liquidation will start." },
      { type: "h2", text: "How just enough is calculated" },
      { type: "p", text: "The calculation aims to close the minimum quantity that restores margin, while accounting for market impact and fees. In simplified terms, the engine estimates the loss that would be realised by closing part of the position, the margin freed by that reduction, and the new maintenance margin for the smaller remaining position, which may fall into a lower tier with a lower margin rate. It then closes enough to bring the margin ratio back above maintenance margin, often with a buffer to avoid immediate re-triggering from a small further move. The closed portion is usually executed as a market order or through a liquidation mechanism that may incur fees, and the realised loss reduces account equity. Because the remaining position is smaller, its liquidation price moves further from the current price, giving more room, although that room depends on how much was closed and on subsequent price moves. Some exchanges close in fixed steps, such as a percentage of the position per event, while others calculate a precise quantity each time. Traders should check their venue documentation, because step size affects how quickly a position shrinks during a fast move." },
      { type: "h2", text: "Partial versus full liquidation" },
      { type: "p", text: "The difference between partial and full liquidation is not just size, but intent and outcome. Partial liquidation is a corrective action: it reduces exposure to restore margin while preserving a position that may still recover. Full liquidation is a terminal action: it closes the entire position, usually because margin has fallen so far that partial reduction cannot restore it, or because the market moved too fast for stepwise reduction to keep up. In a fast crash, several partial liquidations may occur in quick succession, effectively becoming a full liquidation over a short period, but each step still gives the trader a window to add margin between steps if they are monitoring the account. That window is the key practical benefit. A trader who receives a margin warning or sees a partial liquidation should treat it as an urgent signal to decide: add margin, reduce size voluntarily at a better price, or accept further reductions. Ignoring partial liquidation and hoping for a reversal is a common path to full liquidation, because each partial step realises losses and shrinks the position that could benefit from a recovery." },
      { type: "h2", text: "Cross margin, isolated margin, and tier effects" },
      { type: "p", text: "Margin mode and position tiers shape partial liquidation significantly. In isolated margin, only the margin allocated to that position is at risk, and partial liquidation reduces that position alone. In cross margin, the whole account balance supports all positions, so a losing position may draw on collateral from profitable positions, delaying liquidation but also putting more of the account at risk if the move continues. Traders should choose margin mode deliberately, not by default, based on whether they want to contain risk to one position or share collateral across positions. Position tiers also interact: as a partial liquidation shrinks a position, it may drop into a lower tier with a lower maintenance margin rate, which improves the margin ratio more than the size reduction alone would suggest. Conversely, a position that grew into a higher tier before the move will face a higher maintenance margin and may trigger partial liquidation sooner. On 1 November 2026, spot gold traded near 3,872 to 3,897 dollars per ounce after falling about 108 dollars, and silver traded near 49.10 dollars, showing how quickly a stressed market can test margin buffers across asset classes." },
      { type: "h2", text: "What traders should do after a partial liquidation" },
      { type: "p", text: "After a partial liquidation, the first step is to assess the remaining position honestly. Check the new size, new liquidation price, remaining margin, and whether the original thesis still holds at the smaller size and after realised losses. Adding margin can restore the buffer, but it should be a deliberate decision based on risk tolerance and total portfolio exposure, not an automatic reaction to avoid admitting a loss. Reducing size voluntarily may be better than waiting for another forced reduction, because voluntary orders can use limit prices and avoid liquidation fees. Traders should also review leverage, position tier, and stop-loss placement, since a position that required partial liquidation was, by definition, too large or too leveraged for the move that occurred. Keeping a trading journal that records partial liquidations, market conditions, and decisions helps identify patterns, such as consistently sizing too large in volatile conditions. The goal is not to avoid partial liquidation at all costs, but to use it as feedback that sizing, leverage, or margin management needs adjustment before the next trade." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Partial liquidation realises losses and shrinks your position, and repeated partial liquidations can still end in full liquidation. Treat the first partial event as an urgent risk signal, not as a reason to hope for a reversal.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain trading mechanics in simple words. For this article, it can explain partial liquidation with a simple size example and help you draft a response plan for what to do after a first partial liquidation." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Does partial liquidation mean I keep my whole position?",
            a: "No. Part of the position is closed and its loss is realised. The remainder stays open, but it is smaller and has a different liquidation price.",
          },
          {
            q: "Can partial liquidation happen more than once?",
            a: "Yes. If the market keeps moving against the remaining position, further partial liquidations can occur, and they can eventually lead to full liquidation.",
          },
          {
            q: "Is partial liquidation better than full liquidation?",
            a: "Usually, because it reduces exposure gradually, limits market impact, and gives traders a window to add margin or reduce voluntarily. It does not guarantee recovery.",
          },
          {
            q: "Does margin mode affect partial liquidation?",
            a: "Yes. Isolated margin limits risk to that position, while cross margin uses the whole account balance, which can delay liquidation but puts more capital at risk.",
          }
        ],
      },
  ],
};
