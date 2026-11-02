import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "bitcoin-mining-pool-payout-models-2026",
  title: "Mining Pool Payout Models: PPS, FPPS and PPLNS Explained",
  description: "PPS, FPPS and PPLNS mining pool payouts differ in who bears variance and fee risk. Compare them before choosing a pool and which model suits your cash flow.",
  keywords: [
      "Mining Pool Payout Models",
      "mining pools",
      "PPS vs FPPS vs PPLNS",
      "pool fees",
      "miner payouts",
      "bitcoin mining pools"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 8,
  category: "Basics",
  excerpt: " Solo mining is a lottery. Pools smooth the payouts, but each payout model distributes risk differently between miners and the pool.",
  image: "/images/blog/bitcoin-mining-pool-payout-models-2026.svg",
  blocks: [
      { type: "p", text: "Mining Pool Payout Models decide how a pool shares block rewards among its miners, and the choice affects income stability, fees, and who bears the risk of bad luck. Solo miners may wait months or years for a block, while pool miners earn small, regular payments, but the pool's model decides whether those payments are steady, fee-inclusive, or luck-dependent. as of 2 Nov 2026, Bitcoin traded near $78,400, up about 1% in 24 hours, while Ether traded near $2,280, also up about 1%, gold spot traded near $3,900 an ounce after rebounding from a one-year low near $3,876 on 31 October, and the Fear and Greed Index stood at 37. At that price level, steady payouts matter more than ever, because miners face tight margins and need predictable cash flow to pay power bills." },
      { type: "p", text: "The three dominant models, PPS, FPPS, and PPLNS, look similar at first glance but allocate variance and fee risk in opposite ways. Understanding them helps miners choose a pool that matches their risk tolerance and cash-flow needs, and helps investors judge pool businesses. The [glossary](/glossary) defines shares, variance, and block rewards, and the [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) page shows how small structural differences compound over time, just as pool fee differences do." },
      { type: "h2", text: "Why pools exist at all" },
      { type: "p", text: "Bitcoin mining is a lottery in which each hash is a ticket, and a solo miner with a small share of network hashrate may wait years for a win. Pools combine many miners' hashrate, win blocks regularly, and distribute the rewards in proportion to each miner's contributed work, measured in shares. Shares are easier units of work submitted to the pool, and they prove a miner was hashing even when no block was found." },
      { type: "p", text: "Pooling converts lumpy, unpredictable income into regular payments, which matters because electricity bills arrive monthly regardless of mining luck. Pools charge fees for this service, and the payout model decides how those fees work and who absorbs the remaining luck. A miner's choice is therefore a trade-off: pay more for certainty, or accept variance for lower fees and a share of transaction fees." },
      { type: "h2", text: "PPS: the pool bears the variance" },
      { type: "p", text: "Pay Per Share, or PPS, pays miners a fixed amount for every valid share submitted, regardless of whether the pool actually finds a block. The pool operator bears all variance risk: during unlucky streaks the pool pays out more than it earns, and during lucky streaks it keeps the surplus. For miners, PPS offers the steadiest income and the simplest budgeting, which is valuable for operations with tight cash flow." },
      { type: "p", text: "That certainty costs more. PPS pools typically charge higher fees, often several percent, to compensate for the risk they carry and the reserves they must hold. PPS traditionally pays only the block subsidy, not transaction fees, so miners miss fee upside during congestion. A PPS pool with weak reserves or poor risk management can also fail during a long unlucky streak, so miners should check a pool's history, size, and transparency before trusting it with steady payments." },
      {
        type: "list",
        items: [
        "Income stability you need",
        "Fee level you accept",
        "Whether fees are included",
        "Pool size and luck history",
        "Payout threshold and frequency"
        ],
      },
      { type: "h2", text: "FPPS and PPLNS: sharing fees and luck" },
      { type: "p", text: "Full Pay Per Share, or FPPS, extends PPS by also paying an expected share of transaction fees, estimated from recent averages. Miners get steady subsidy plus steady fee income, while the pool still bears variance on both. FPPS fees are usually similar to or slightly higher than PPS, and the fee estimate may lag real fee levels, so miners can over- or under-earn relative to actual fees in unusual periods, but the smoothing is generally attractive." },
      { type: "p", text: "Pay Per Last N Shares, or PPLNS, works differently: miners are paid only when the pool finds a block, and payment depends on shares submitted during a recent window, the last N shares. When the pool is lucky, miners earn more; when unlucky, they earn less, and miners who join or leave at the wrong time can miss payments. PPLNS fees are usually lower, often under 2 percent, and miners receive actual transaction fees, so long-term earnings can exceed PPS if the miner stays with the pool consistently through luck cycles." },
      {
        type: "table",
        headers: ["Model", "Who bears variance", "Fees typically"],
        rows: [
          ["PPS", "Pool operator", "Higher"],
          ["FPPS", "Pool operator", "Higher, includes fees"],
          ["PPLNS", "Miners share it", "Lower, includes fees"],
          ["Solo mining", "Miner alone", "None, but lumpy"]
        ],
      },
      { type: "h2", text: "Choosing the right model for you" },
      { type: "p", text: "Choose PPS or FPPS if predictable cash flow matters most, if you have tight power-payment deadlines, or if you cannot tolerate income swings. The higher fee is the price of certainty, and for many operations that price is worth paying. Choose PPLNS if you can tolerate variance, plan to mine with the same pool for months, and want lower fees plus full fee income, accepting that short-term earnings will fluctuate with pool luck." },
      { type: "p", text: "Also consider factors beyond the model: pool size and reliability, payout thresholds and frequency, fee transparency, geographic server locations, and support quality. A large pool finds blocks more regularly, reducing PPLNS variance, while a small pool's luck swings are larger. Test a pool with a small share of hashrate first, compare actual payouts against expected earnings over several weeks, and switch only after the data, not the marketing, supports the move." },
      {
        type: "callout",
        title: "Risk note",
        text: "Pool payouts are not guaranteed: PPS pools can fail during unlucky streaks, and PPLNS income varies with pool luck. Never assume a pool's advertised rate equals your actual earnings without checking real payouts.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain PPS, FPPS, and PPLNS in simple words and help you compare two pools on fees, stability, and fee sharing. It can also summarise which model suits steady cash flow versus lower fees." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the difference between PPS and PPLNS?",
            a: "PPS pays a fixed amount per share regardless of blocks found, with the pool bearing variance. PPLNS pays only when blocks are found, based on recent shares, so miners share luck and usually pay lower fees.",
          },
          {
            q: "Does FPPS include transaction fees?",
            a: "Yes. FPPS pays an expected share of transaction fees on top of the subsidy, while traditional PPS pays subsidy only. The fee estimate is based on recent averages.",
          },
          {
            q: "Why are PPLNS fees lower?",
            a: "Because miners bear variance risk, the pool needs smaller reserves and less risk compensation. Miners accept fluctuating income in exchange for lower fees and full fee income.",
          },
          {
            q: "Can a pool fail to pay?",
            a: "Yes, especially a PPS pool during a long unlucky streak if its reserves are inadequate. Check a pool's size, history, and transparency, and test with a small share of hashrate first.",
          }
        ],
      },
  ],
};
