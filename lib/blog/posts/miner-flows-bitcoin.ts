import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "miner-flows-bitcoin",
  title: "Bitcoin Miner Flows Explained",
  description: "Bitcoin miner flows reveal when miners are selling. Learn how miner outflows, reserves, and hashprice signal selling pressure before it reaches the market.",
  keywords: [
      "bitcoin miner flows",
      "miner selling pressure",
      "bitcoin miners selling",
      "miner outflows",
      "bitcoin miner reserves",
      "on-chain miner data",
      "hashprice"
  ],
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Miners must sell Bitcoin to pay their bills, and those sales show up on-chain. Here is how to read miner flows as an early signal of selling pressure.",
  image: "/images/blog/miner-flows-bitcoin.svg",
  blocks: [
      { type: "p", text: "Bitcoin miner flows are one of the most direct windows into real selling pressure in the Bitcoin market. Miners are the only participants who receive newly minted Bitcoin as income, and they must regularly sell part of that income to pay for electricity, hardware, facilities, and debt. When miner outflows to exchanges rise, it means more newly mined coins are heading toward the market, and that extra supply can weigh on price even when nothing else has changed. On Oct 18, 2026, Bitcoin traded near $81,300 to $81,850, holding above $80,000 all week, a calm surface that makes flow data more valuable, not less. Price alone does not tell you who is selling. Miner flow data does, and learning to read it is a skill every serious market watcher should build." },
      { type: "h2", text: "What Miner Flows Actually Measure" },
      { type: "p", text: "Miner flow data tracks the movement of coins out of wallets identified as belonging to mining pools and mining companies. The most watched metric is miner-to-exchange flow: the volume of Bitcoin moving from miner wallets to exchange deposit addresses, usually measured over 24 hours, seven days, and thirty days. A second key metric is miner reserves, the total balance held in miner wallets. When reserves fall while outflows rise, miners are distributing coins. When reserves rise, miners are holding, which usually means they can cover costs from cash on hand or believe better prices are coming. A third input is hashprice, the expected daily revenue per unit of hashpower, which tells you how much pressure miners are under to sell." },
      { type: "p", text: "The data is not perfect. Wallet labels are maintained by on-chain analytics firms and are never complete, so a portion of miner activity always escapes measurement. Some miners sell over the counter rather than on exchanges, which means their selling never appears in exchange inflow data. And large one-off transfers, such as a pool rebalancing its wallets or moving coins to a custodian, can look like selling when nothing was actually sold. Treat miner flow data as a directional signal with a margin of error, not as a precise measurement. The signal gets stronger when several flow metrics move together in the same direction over several days." },
      { type: "h2", text: "Why Miners Sell, and When They Sell More" },
      { type: "p", text: "Mining is a capital-heavy business with thin margins. Electricity is usually the largest ongoing cost, and it must be paid in fiat currency, which means miners are structurally forced sellers. The question is never whether miners sell, but how much and how fast. When Bitcoin price is comfortably above miners' costs, they can sell steadily and even build reserves. When price falls toward their break-even level, they face a hard choice: sell more coins to cover the same bills, shut down machines, or borrow. Selling more into a falling market is the worst option, but it is often the only one available, and that dynamic is one reason Bitcoin drawdowns can accelerate." },
      { type: "p", text: "Miner capitulation is the extreme version of this cycle. It describes a phase where less efficient miners give up, shut down hardware, and sell remaining holdings to cover obligations. Hashrate falls, difficulty eventually adjusts downward, and the surviving miners regain margin. Capitulation phases have historically coincided with market bottoms, not because miner selling causes the bottom, but because both reflect the same exhaustion of weak hands. Watching hashprice and difficulty together gives a better read on miner stress than price alone, because a miner earning little per unit of hashpower is a miner under real pressure to sell." },
      { type: "h2", text: "Reading Selling Pressure Signals" },
      { type: "p", text: "A practical miner flow dashboard uses four signals together. First, sustained miner-to-exchange outflows above their recent average, especially when they persist for a week or more. Second, a steady decline in miner reserves, which confirms that outflows are distribution rather than wallet housekeeping. Third, hashprice trending lower, which shows miners earning less per unit of work and facing more pressure to sell. Fourth, the broader context: if exchange inflows from all sources are also rising and funding rates are falling, the selling pressure is broad, not just miners. No single signal is enough on its own, and a one-day spike in outflows is usually noise." },
      {
        type: "list",
        items: [
        "Rising miner-to-exchange outflows: more mined coins heading toward sale.",
        "Falling miner reserves: distribution confirmed, not just wallet shuffling.",
        "Falling hashprice: miners earning less per unit of hashpower, under more pressure.",
        "Falling hashrate or difficulty: weaker miners shutting down, possible capitulation.",
        "One-day spikes: usually noise; look for sustained multi-day trends."
        ],
      },
      {
        type: "table",
        headers: ["Signal", "What it usually means", "How to confirm"],
        rows: [
          ["Miner outflows rising", "More selling pressure building", "Check reserves are also falling"],
          ["Miner reserves falling", "Miners distributing coins", "Check outflows are sustained, not one-off"],
          ["Hashprice falling", "Miner margins under pressure", "Check difficulty and price trend"],
          ["Outflows spiking one day", "Often wallet rebalancing", "Wait for multi-day confirmation"]
        ],
      },
      { type: "h2", text: "Miner Flows in Today's Market" },
      { type: "p", text: "The market of Oct 18, 2026 offers a useful case study in reading flows in context. Bitcoin held above $80,000 all week with a 24-hour range of $80,820 to $81,960, and liquidations cooled to about $315 million on Oct 17 after a roughly $1 billion flush on Oct 16. The Fear & Greed index sat near 54 to 55, right on the neutral-to-greed boundary. At the same time, a record 20,338 wallets held between 10 and 10,000 BTC, according to Santiment data reported Oct 17, while Google search interest in Bitcoin sat at a multi-year low. That combination, quiet retail, steady whales, and cooling liquidations, describes a market where steady miner selling is being absorbed without drama, rather than a market being overwhelmed by it." },
      { type: "p", text: "There is also competing selling pressure to account for. United States spot Bitcoin and Ethereum ETF outflows passed $1 billion in October 2026, with $610.7 million in net redemptions in the Oct 12 to 16 week alone. Institutional fund flows of that size matter at least as much as miner flows on any given day. The lesson is to never read miner flows in isolation. Miner selling is one stream feeding the market. ETF flows, whale behavior, and derivatives positioning are other streams, and price is the sum of all of them. For traders, miner flow data is best used as a background gauge of supply pressure, not as a timing trigger. The [glossary](/glossary) explains terms like hashprice and capitulation, and [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) shows how supply pressure can widen spreads between venues." },
      {
        type: "callout",
        title: "Flows are a gauge, not a trade signal",
        text: "Miner flow data is lagged, partly estimated, and only one of several supply streams. Never open or close a position on a single miner flow reading. Use it to understand background selling pressure, and confirm with price action and other on-chain data.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you learn on-chain analysis without the jargon. Ask it to explain miner flows, hashprice, or capitulation in simple words, or to draft a checklist of on-chain signals to review each week." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What are Bitcoin miner flows?",
            a: "They are on-chain measurements of Bitcoin moving out of wallets belonging to miners, especially flows from miner wallets to exchanges, plus changes in total miner reserves.",
          },
          {
            q: "Why do miners sell Bitcoin?",
            a: "Mining costs, mainly electricity, hardware, and facilities, must be paid in fiat currency. Miners sell part of their newly minted Bitcoin to cover those bills.",
          },
          {
            q: "Do rising miner outflows mean price will fall?",
            a: "Not always. Rising outflows mean more supply is heading to market, which is a headwind, but price also depends on demand from buyers, ETF flows, whales, and derivatives. Use flows as a background gauge, not a prediction.",
          },
          {
            q: "What is miner capitulation?",
            a: "A phase where less efficient miners shut down machines and sell holdings because mining is no longer profitable for them. It has historically coincided with market bottoms, but it is a sign of stress, not a buy signal by itself.",
          }
        ],
      },
  ],
};
