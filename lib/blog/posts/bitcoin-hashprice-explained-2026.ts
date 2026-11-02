import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "bitcoin-hashprice-explained-2026",
  title: "Bitcoin Hashprice Explained: Revenue per Unit of Compute",
  description: "Bitcoin hashprice measures miner revenue per unit of compute. Learn how price, difficulty and fees combine to set what miners earn and what it signals today.",
  keywords: [
      "Bitcoin Hashprice",
      "hashprice explained",
      "bitcoin mining revenue",
      "mining difficulty",
      "miner economics",
      "hashrate"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Hashprice turns the whole Bitcoin mining economy into one number: what miners earn per unit of computing power, per day.",
  image: "/images/blog/bitcoin-hashprice-explained-2026.svg",
  blocks: [
      { type: "p", text: "Bitcoin Hashprice answers a simple question: for each unit of computing power a miner runs, how much revenue does it earn in a day? The standard measure is dollars per petahash per second per day, and it combines the Bitcoin price, the block subsidy, transaction fees, and network difficulty into a single figure. as of 2 Nov 2026, Bitcoin traded near $78,400, up about 1% in 24 hours, while Ether traded near $2,280, also up about 1%, gold spot traded near $3,900 an ounce after rebounding from a one-year low near $3,876 on 31 October, and the Fear and Greed Index stood at 37. At that price level, hashprice is the lens through which miners judge whether to keep machines running, upgrade hardware, or shut down." },
      { type: "p", text: "Hashprice matters beyond mining because it links the Bitcoin market to the physical world of electricity, hardware, and data centres. When hashprice rises, mining becomes more profitable and new capacity joins; when it falls, inefficient miners exit and difficulty eventually adjusts. Understanding that cycle helps investors read miner selling pressure, network security, and the economics behind new mining investment. The [glossary](/glossary) defines hashrate and difficulty, and the [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) page is a reminder that prices differ across venues, just as mining costs differ across regions." },
      { type: "h2", text: "Defining hashprice precisely" },
      { type: "p", text: "Hashprice is calculated by dividing total daily miner revenue, in dollars, by total network hashrate, expressed in petahashes per second. Total daily revenue equals the number of blocks mined per day multiplied by the reward per block, subsidy plus fees, multiplied by the Bitcoin price. Because blocks arrive roughly every ten minutes, about 144 blocks are mined daily, although the actual count varies with luck and difficulty conditions." },
      { type: "p", text: "Two points are often misunderstood. First, hashprice is revenue, not profit: electricity, hardware depreciation, maintenance, and financing costs still come out of it. Second, hashprice is an average across the whole network; an individual miner's revenue per petahash depends on their pool's luck, fee policies, and uptime. A miner with frequent downtime earns less than the headline hashprice, while a miner in a lucky pool may briefly earn more." },
      { type: "h2", text: "How price, difficulty, and fees move it" },
      { type: "p", text: "The Bitcoin price is the most powerful driver of hashprice, because revenue is earned in Bitcoin but usually measured in dollars. A doubling of the Bitcoin price roughly doubles dollar hashprice, assuming difficulty and fees stay constant, which is why bull markets rescue inefficient miners and bear markets punish them. Difficulty is the counterweight: as more hashrate joins the network, each unit earns a smaller share of the fixed daily Bitcoin issuance, so hashprice falls even if the price is flat." },
      { type: "p", text: "Transaction fees are the third driver, and the most volatile. Fees spike during congestion, when users compete for block space, and can briefly lift hashprice far above its subsidy-only level. After the 2024 halving cut the subsidy, fees became a larger share of miner revenue, so fee spikes now matter more to miner survival. A miner's business plan that assumes only subsidy revenue, and ignores fee variability, will misjudge both good months and bad ones." },
      {
        type: "list",
        items: [
        "Daily Bitcoin issuance in blocks",
        "Block reward: subsidy plus fees",
        "Bitcoin price in dollars",
        "Network hashrate in petahashes",
        "Miner uptime and pool policies"
        ],
      },
      { type: "h2", text: "Reading hashprice as a market signal" },
      { type: "p", text: "Investors use hashprice to judge miner stress. When hashprice falls below the operating cost of a large share of miners, those miners may sell Bitcoin reserves to cover bills, upgrade to efficient machines, or shut down, and each response affects the market differently. Forced selling adds supply, upgrades increase future hashrate, and shutdowns reduce hashrate until difficulty adjusts downward and the remaining miners earn more per unit." },
      { type: "p", text: "Hashprice also signals network security indirectly. A high hashprice attracts hashrate, which raises the cost of attacking the network, while a low hashprice can reduce hashrate and security margins. The relationship is not mechanical, because difficulty adjustments and hardware efficiency change over time, but sustained low hashprice combined with falling hashrate is a genuine warning sign worth watching, especially after subsidy cuts when fees must carry more of the security budget." },
      {
        type: "table",
        headers: ["Driver", "Rises when", "Effect on hashprice"],
        rows: [
          ["Bitcoin price", "BTC price rises", "Increases"],
          ["Difficulty", "More hashrate joins", "Decreases"],
          ["Transaction fees", "Network congestion rises", "Increases"],
          ["Block subsidy", "Halving occurs", "Decreases"]
        ],
      },
      { type: "h2", text: "Using hashprice in practice" },
      { type: "p", text: "For a prospective miner, hashprice converts a hardware purchase into a payback calculation. Multiply hashprice by your machine's hashrate to estimate daily revenue, subtract daily electricity and operating costs, and compare the result with the machine's price to estimate payback time. Repeat that calculation at several hashprice levels, not just today's, because difficulty rises and prices fall, and a machine that pays back in a year at high hashprice may never pay back at low hashprice." },
      { type: "p", text: "For non-miners, hashprice is a reality check on mining stocks, cloud mining contracts, and hashrate tokens. Any product promising returns far above what hashprice implies is either taking extra risk, charging hidden fees, or misrepresenting its costs. Ask for the product's assumed hashprice, electricity price, and fee structure, and compare them with current network figures before investing, because inflated assumptions are the most common flaw in mining investment pitches." },
      {
        type: "callout",
        title: "Risk note",
        text: "Hashprice is revenue, not profit, and it can fall sharply when prices drop or difficulty rises. Mining investments based on a single day's hashprice, without stress-testing lower levels, carry a high risk of loss.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain hashprice in simple words and help you work through a payback estimate for a mining machine step by step. It can also summarise how price, difficulty, and fees each move miner revenue." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What exactly is hashprice?",
            a: "Hashprice is miner revenue per petahash per second per day, in dollars. It combines the Bitcoin price, block subsidy, transaction fees, and network difficulty into one figure.",
          },
          {
            q: "Is hashprice the same as mining profit?",
            a: "No. Hashprice is revenue before electricity, hardware, maintenance, and financing costs. Profit is what remains after those costs, and it varies widely by miner.",
          },
          {
            q: "Why does hashprice fall when more miners join?",
            a: "Daily Bitcoin issuance is roughly fixed, so more hashrate means each unit earns a smaller share. Difficulty rises to keep block times near ten minutes, reducing revenue per unit.",
          },
          {
            q: "Why do fees matter more after the halving?",
            a: "The 2024 halving cut the subsidy, so fees became a larger share of total miner revenue. Fee spikes during congestion now have a bigger effect on hashprice and miner survival.",
          }
        ],
      },
  ],
};
