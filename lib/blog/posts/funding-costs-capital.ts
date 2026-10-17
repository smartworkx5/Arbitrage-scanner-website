import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "funding-costs-capital",
  title: "Funding Costs as Capital Drag",
  description: "Funding costs quietly eat arbitrage profits through borrow fees, exchange charges and margin interest. Learn to measure carry drag and protect returns.",
  keywords: [
      "funding costs",
      "capital drag",
      "carry costs",
      "arbitrage funding",
      "margin interest",
      "borrow fees",
      "crypto arbitrage costs",
      "funding rate"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Funding costs are the quiet tax on every arbitrage position. Learn to measure carry drag and keep it from silently eating your returns.",
  image: "/images/blog/funding-costs-capital.svg",
  blocks: [
      { type: "p", text: "Funding costs are the quiet tax on every arbitrage position. A spread can look profitable on a scanner, yet turn into a loss once borrow fees, margin interest, exchange charges, and settlement delays take their share. On Oct 17, 2026, with Bitcoin trading near $81,400 and more than $830M in liquidations recorded the previous day, funding conditions were a live reminder that holding a position is never free. Volatility pushes funding rates around, margin gets more expensive, and traders who ignore carry end up paying for the lesson. Understanding funding costs as capital drag means treating every hour a position stays open as a cost line, not just a waiting period." },
      { type: "h2", text: "What Funding Costs Actually Are" },
      { type: "p", text: "Funding costs are everything you pay to keep capital deployed. The most visible form is the perpetual futures funding rate, the periodic payment between longs and shorts that keeps contract prices near spot. When funding is positive, longs pay shorts, and a long position bleeds a little every few hours. Beyond that, there is margin interest on borrowed funds, borrow fees on shorted assets, withdrawal and network fees when moving coins between venues, and the opportunity cost of capital sitting idle during settlement. Each cost alone looks small. Together they form a drag rate that compounds against you for as long as the trade is open." },
      { type: "p", text: "The reason funding costs matter so much in arbitrage is that arbitrage edges are thin. A cross-exchange spread of 0.4% sounds attractive until you subtract a 0.1% taker fee on each leg, a withdrawal fee, and eight hours of funding at an elevated rate. The trade that looked like a 0.4% gain can settle at break-even or worse. Professional arbitrage traders therefore quote spreads net of funding, not gross. They ask a simple question before entering: after every fee and every funding payment, is there still an edge? If the answer is no, the correct trade is no trade at all." },
      { type: "h2", text: "The Hidden Layers of Carry" },
      { type: "p", text: "Carry costs hide in places most beginners never check. Stablecoin borrowing rates on lending platforms move with demand, and during volatile weeks they can climb sharply. Collateral haircuts mean you must lock up more capital than the position size suggests, so your effective return on deployed capital drops. Exchange-specific quirks add more: some venues charge for inactivity, some impose higher fees on certain pairs, and some delay withdrawals, which extends the time your capital is trapped. Even the spread between deposit and withdrawal processing times is a cost, because capital in transit earns nothing while still being exposed to price moves." },
      {
        type: "list",
        items: [
        "Perpetual funding payments, charged every few hours on open futures positions",
        "Margin interest on borrowed spot or futures collateral",
        "Borrow fees when shorting an asset that is in high demand",
        "Withdrawal, network, and deposit fees for moving capital between venues",
        "Settlement delays that keep capital locked and earning nothing",
        "Collateral haircuts that force you to overfund every position"
        ],
      },
      { type: "h2", text: "Measuring Your True Carry Drag" },
      { type: "p", text: "You cannot manage what you do not measure, so build a simple carry ledger for every strategy you run. Record the entry time, the funding paid or received, the interest accrued, all fees, and the exit time. Divide total carry by the capital deployed and by the holding period to get a daily drag rate. A strategy that earns 0.3% per trade but carries a 0.12% daily drag is far less attractive than it first appears, especially if the average hold stretches past a day. Many traders discover that their best-looking strategy is actually their worst once carry is included, because long holds quietly consume the edge." },
      {
        type: "table",
        headers: ["Cost type", "Typical size", "How it hits you"],
        rows: [
          ["Perpetual funding", "0.01% to 0.10% per 8 hours", "Recurring bleed on open futures legs"],
          ["Margin interest", "Varies by asset and venue", "Daily interest on borrowed capital"],
          ["Borrow fees", "Spikes when an asset is heavily shorted", "Rising cost to hold a short leg"],
          ["Withdrawal and network fees", "Fixed per transfer", "Eats small transfers disproportionately"],
          ["Settlement delay", "Hours to days", "Capital trapped, earning nothing"]
        ],
      },
      { type: "h2", text: "Funding Costs in Today's Market" },
      { type: "p", text: "Market conditions on Oct 17, 2026 show why carry discipline matters. Bitcoin held above $80,000 near $81,400, Ether traded around $2,430, and the previous session saw more than $830M in liquidations. Liquidation waves tend to push funding rates around as leveraged positions are flushed out, and the traders who survive them are usually the ones whose positions were cheap to hold. With the US Federal Reserve meeting scheduled for Oct 28 to 29, 2026 as the next major macro catalyst, funding conditions could shift quickly around the event. Positions held across that meeting will pay whatever funding the market demands, so sizing and holding periods deserve extra care in the days leading up to it." },
      { type: "p", text: "Gold adds useful context here. Spot gold traded near $4,160 per ounce on Oct 17, 2026, struggling below $4,200 after a strong run earlier in the year. When traditional safe havens wobble and crypto volatility rises at the same time, funding markets in crypto often get choppy too. The practical lesson is to check funding before every entry, not once a week. A funding rate that was harmless on Monday can be punishing by Thursday, and the scanner spread alone will not warn you. Make funding checks part of the entry routine, alongside price, liquidity, and withdrawal status." },
      { type: "h2", text: "Cutting Carry Without Cutting Corners" },
      { type: "p", text: "The most effective way to cut funding drag is to shorten holding time. Prefer strategies that settle in hours rather than days, and pre-position capital on the venues you use most so transfers do not add dead time. When a futures leg is needed, compare funding across venues before choosing where to open it, since the same pair can carry very different rates on different exchanges. Consider holding the leg that earns funding rather than pays it, when the strategy allows. Finally, set a carry budget per trade: if projected funding exceeds a fixed share of the expected edge, skip the trade. Discipline here is what separates traders who keep their edge from traders who donate it to the funding market. For a refresher on the mechanics, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and [funding rate arbitrage](/guides/funding-rate-arbitrage)." },
      {
        type: "callout",
        title: "Carry Budget Rule",
        text: "Before entering any arbitrage trade, estimate total funding and fees over the expected holding period. If carry eats more than half of the gross edge, the trade is not worth taking. Walk away and wait for a cleaner setup.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you build a simple carry ledger template that tracks funding, interest, and fees for every arbitrage trade you run." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What are funding costs in crypto arbitrage?",
            a: "Funding costs are all the charges for keeping capital deployed: perpetual funding payments, margin interest, borrow fees, transfer fees, and the cost of capital sitting idle during settlement.",
          },
          {
            q: "How do funding costs reduce arbitrage profits?",
            a: "Arbitrage edges are thin, often under 1%. Funding and fees subtract from the gross spread on every hour the position stays open, so long holds can erase the edge entirely.",
          },
          {
            q: "How can I reduce funding drag?",
            a: "Shorten holding periods, pre-position capital to avoid transfer delays, compare funding rates across venues, and set a carry budget that rejects trades where funding eats more than half the edge.",
          },
          {
            q: "Does funding ever pay the trader?",
            a: "Yes. When funding rates are negative, shorts pay longs, so a long position can collect funding. Strategies can be designed around earning funding, but rates change quickly and should never be assumed stable.",
          }
        ],
      },
  ],
};
