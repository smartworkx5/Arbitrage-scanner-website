import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "bitcoin-hashrate-geopolitics-2026",
  title: "Hashrate Geopolitics: Bans, Migration and Concentration Risk",
  description: "Hashrate geopolitics shapes bitcoin security: mining bans trigger migration, and concentration in a few regions creates risks worth tracking closely in 2026.",
  keywords: [
      "Hashrate Geopolitics",
      "bitcoin mining bans",
      "mining migration",
      "hashrate concentration",
      "bitcoin mining countries",
      "mining regulation"
  ],
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Hashrate Geopolitics explains why mining moves across borders, and why where it lands matters for the whole network.",
  image: "/images/blog/bitcoin-hashrate-geopolitics-2026.svg",
  blocks: [
      { type: "p", text: "On Tuesday 3 November 2026, BTC traded around $76,800, down about 2% in 24 hours, while total crypto market capitalisation sat around $2.67 trillion. Behind the price, Hashrate Geopolitics quietly shapes how secure the network is and who controls it. Hashrate is the total computing power securing bitcoin, and it lives in physical places: warehouses, containers, and dams subject to local laws, power grids, and politics. When a country bans mining or a region loses cheap power, hashrate does not vanish; it moves, and the map it redraws carries risks of its own." },
      { type: "h2", text: "The great migration after the China ban" },
      { type: "p", text: "The defining migration began in 2021, when China, then home to most of the world's bitcoin hashrate, cracked down on mining. Within months, hashrate fell sharply as machines went dark, then recovered as operators shipped hardware to the United States, Kazakhstan, Russia, Canada, and other destinations. The episode proved two things at once. Bitcoin survived the loss of its largest mining base, which is a genuine resilience story. But the new map was not evenly spread either: the United States absorbed the largest share, and Kazakhstan's grid buckled under the sudden load, leading to its own restrictions soon after." },
      { type: "p", text: "Migration is expensive and slow in practice. Machines must be shipped, plugged into new power contracts, and staffed by crews who understand the hardware. Operators who planned for political risk, with machines spread across several countries, recovered fastest. Those concentrated in one jurisdiction lost months of revenue. The lesson for the whole network is that geographic diversity is a security feature, not a decoration, because a miner base spread across many legal systems is harder to switch off at once." },
      { type: "h2", text: "Why concentration is a risk" },
      { type: "p", text: "Concentration risk comes in several forms. If a large share of hashrate sits in one country, that government could pressure miners, seize machines, or demand transaction filtering. If it sits in one power grid, a regional blackout or price shock can knock out a meaningful slice of security at once. Concentration also appears inside mining pools: a handful of pools coordinate most blocks, even though the individual miners behind them are spread out. Pool concentration matters because a pool operator could, in theory, influence which transactions get included, though miners can switch pools quickly if one misbehaves." },
      { type: "p", text: "None of this means bitcoin is currently controlled by one actor; the network has survived every concentration scare so far precisely because miners and pools are numerous and mobile. But the risk is real enough to track. Useful indicators include the country shares published by mining researchers, the number of pools needed to reach half of all blocks, and the share of hashrate in the top two or three jurisdictions. A trend toward wider spread is reassuring; a trend toward one dominant region deserves attention. For background on how miners and pools fit together, see our [glossary](/glossary)." },
      { type: "h2", text: "Bans, taxes, and the policy patchwork" },
      { type: "p", text: "National policy toward mining now ranges from welcome to hostile. Some countries court miners with surplus hydro or gas power and clear licensing rules, seeing jobs and grid revenue. Others ban mining outright, tax it punitively, or restrict it during energy shortages. A third group tolerates mining without clear rules, which is often worse than either extreme, because operators cannot plan long-term investments under legal uncertainty. Policy can also change with elections or energy crises, so a friendly jurisdiction today may turn hostile after a cold winter or a grid emergency." },
      { type: "p", text: "Miners respond by diversifying sites, signing shorter power deals in uncertain regions, and keeping some capacity mobile in containers. Investors and observers should read mining policy as part of the security picture: a country that welcomes miners with stable rules attracts durable capacity, while one that flips between bans and amnesties attracts only short-term opportunists. For traders, the practical link is volatility, since sudden bans or crackdowns have historically moved prices and fees, a dynamic also visible in [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) spreads during stress." },
      { type: "h2", text: "What to watch next" },
      { type: "p", text: "Watch whether the United States share keeps growing or levels off as power prices and state-level rules diverge. Watch whether new mining regions in Africa, Latin America, and the Middle East convert announcements into real, grid-connected capacity. Watch pool shares, because a single pool approaching a quarter of blocks is worth noting even if it is not an emergency. And watch energy politics: droughts, gas prices, and grid upgrades all feed back into where mining is viable. The hashrate map will keep changing, and the direction of that change, toward spread or toward concentration, is one of the best slow indicators of network resilience." },
      {
        type: "list",
        items: [
        "2021 China crackdown: hashrate fell sharply, then recovered abroad",
        "Main destinations: United States, Kazakhstan, Russia, Canada",
        "Concentration risks: single-country pressure, grid shocks, pool dominance",
        "Policy range: welcome, banned, taxed, or legally unclear",
        "Watch: country shares, pool shares, and new-region capacity"
        ],
      },
      {
        type: "callout",
        title: "Risk note",
        text: "Mining policy can change suddenly, and bans or grid shocks have historically caused sharp price and fee volatility. Country-level hashrate estimates vary by source and should be treated as approximate, not precise. This article is educational, not investment advice.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain a topic like hashrate geopolitics in simple words, or summarise a news story about a mining ban into its key points. It can also compare two ideas side by side, such as geographic spread versus pool concentration as different kinds of risk. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What happened to bitcoin mining after the China ban?",
            a: "Hashrate fell sharply in 2021 as Chinese miners went offline, then recovered over months as machines moved to the United States, Kazakhstan, Russia, Canada, and elsewhere. The network kept producing blocks throughout, with difficulty adjusting downward in the interim.",
          },
          {
            q: "Why does hashrate concentration matter?",
            a: "If most hashrate sits in one country or on one grid, a government crackdown, blackout, or price shock could remove a large share of security at once. Pool concentration adds a separate risk, since a few pool operators coordinate most blocks.",
          },
          {
            q: "Can miners move quickly if a country bans mining?",
            a: "Physically moving machines takes weeks to months, including shipping, new power contracts, and staffing. Operators spread across several countries recover fastest, which is why geographic diversity is a security feature.",
          },
          {
            q: "Which countries host the most bitcoin mining today?",
            a: "The United States holds the largest estimated share, followed by several other countries including China-based pools, Russia, and Canada, but estimates vary by research source and change as policy and power prices shift.",
          }
        ],
      },
  ],
};
