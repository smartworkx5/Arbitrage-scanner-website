import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "puell-multiple-miner-revenue-2026",
  title: "Puell Multiple: Reading Miner Revenue Stress",
  description: "Puell Multiple explained for 2026: how daily miner revenue versus its yearly average reveals miner stress, capitulation, and cycle turning points today.",
  keywords: [
      "Puell Multiple",
      "miner revenue Bitcoin",
      "Bitcoin mining capitulation",
      "Puell Multiple zones",
      "miner stress metric",
      "Bitcoin miner selling"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Puell Multiple compares today's miner revenue with its yearly average. Very low readings mark miner stress and capitulation; very high readings mark euphoric over-earning.",
  image: "/images/blog/puell-multiple-miner-revenue-2026.svg",
  blocks: [
      { type: "p", text: "Puell Multiple is the miner-stress gauge traders check on October 30, 2026, as Bitcoin trades around $77,300 to $77,975, down roughly 4 to 5 percent in 24 hours, with Ether near $2,254 and gold near $4,002 to $4,008 per ounce. Miners are Bitcoin's only natural sellers: they must sell coins to pay for electricity, hardware, and facilities, whether price is high or low. Puell Multiple divides the daily value of newly issued coins by its 365-day moving average, showing whether miners are earning far more or far less than usual. When the ratio collapses, miners are under stress, and history shows that stress often marks cycle turning points." },
      { type: "h2", text: "The calculation and why miners matter" },
      { type: "p", text: "Daily miner revenue from issuance is simple: the number of new coins mined that day multiplied by the price. The 365-day moving average of that figure represents a normal year of miner earnings, smoothing out price spikes and difficulty changes. Dividing today's revenue by that average gives the Puell Multiple: a reading of 1.0 means miners earn exactly their yearly average, above 1.0 means they earn more than usual, and below 1.0 means they earn less. The metric deliberately excludes transaction fees, focusing on issuance, which is the steadier and larger revenue source for most of Bitcoin's history." },
      { type: "p", text: "Miners matter disproportionately because they are forced sellers with fixed costs in fiat currency. A holder can wait out a downturn; a miner with an electricity bill cannot. When revenue falls below operating costs, inefficient miners shut down machines, sell reserves, or close entirely, and that selling can push price lower, which pushes more miners underwater, in a feedback loop known as miner capitulation. Conversely, when revenue surges, miners accumulate reserves and expand, adding supply capacity for the future. Miner economics therefore transmit price moves into real-world decisions about machines, power, and jobs." },
      { type: "h2", text: "Reading the zones" },
      { type: "p", text: "Puell Multiple is read in zones, with the extremes carrying the signal. Very high readings, historically above roughly 4, have coincided with euphoric tops, when miners earn several times their yearly average and the market is overheated. Very low readings, historically below roughly 0.5, have coincided with deep value zones, when miners earn less than half their yearly average and capitulation is underway or complete. The middle range, roughly 0.5 to 4, describes normal operations, where miners earn enough to continue without either euphoria or distress." },
      { type: "p", text: "The zones are wide by design, because miner revenue is volatile and the moving average lags. A reading of 0.6 is not a precise buy signal, and a reading of 3.5 is not a precise sell signal; both are conditions that have historically accompanied turning points when combined with other evidence. The metric's strength is that it is grounded in the economics of the network's producers, not in trader sentiment, so it cannot be manipulated by social media or by a single large trade. Its weakness is that producer economics change structurally, as halvings cut issuance and fees grow as a revenue share." },
      { type: "h2", text: "Miner capitulation: how it unfolds" },
      { type: "p", text: "Miner capitulation unfolds in stages that on-chain analysts can track. First, revenue falls as price drops, squeezing margins for the least efficient operators. Second, hash rate stalls or falls as machines switch off, and difficulty adjusts downward at the next retarget, easing pressure on survivors. Third, miners sell treasury reserves to cover costs, adding supply to a falling market. Fourth, the weakest miners exit, their machines sold or scrapped, and hash rate stabilises at a lower level supported only by efficient operators. That stabilisation, often visible as hash rate flattening while price stops falling, has historically marked the exhaustion of miner selling." },
      { type: "p", text: "The key point for traders is that capitulation is a process, not an event, and Puell Multiple traces it in real time. A single low print may only mark the start of stress, while a sustained low period with falling hash rate and then stabilisation marks its end. Buying the first low print risks catching further miner selling, while waiting for stabilisation risks missing the early recovery. The prudent approach treats low Puell readings as a reason to study miner behaviour closely and to reduce leverage, not as a reason to buy aggressively. The October 29 liquidation wave, about $356 million in futures liquidations, shows how quickly leveraged positions can fail while a slower capitulation process is still unfolding." },
      { type: "h2", text: "Halvings, fees, and structural change" },
      { type: "p", text: "Puell Multiple must be read with halvings in mind, because each halving cuts new issuance in half overnight, mechanically depressing miner revenue from issuance even if price is unchanged. After a halving, the 365-day average still contains pre-halving revenue for a year, so the ratio is biased downward until the average rolls forward. Analysts therefore interpret post-halving low readings cautiously, asking whether stress reflects price weakness, the issuance cut, or both. Over longer horizons, transaction fees are growing as a share of miner revenue, which the issuance-only Puell Multiple ignores, and future versions of the metric may need to include fees to stay relevant." },
      { type: "p", text: "Difficulty adjustment is the network's shock absorber and the reason miner capitulation eventually ends. When miners switch off, difficulty falls, making the remaining machines more profitable at the same price, which stops the exodus without any price recovery. This self-correcting mechanism is unique to proof-of-work networks and is why Bitcoin has survived multiple capitulation episodes. Traders who understand it worry less about hash-rate headlines: a falling hash rate during capitulation is the system working, not failing, provided the decline stabilises rather than accelerates. For background on how miners and traders interact across venues, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), and for definitions, the [glossary](/glossary)." },
      { type: "h2", text: "Using Puell Multiple alongside other signals" },
      { type: "p", text: "Puell Multiple works best in a committee. Combine it with hash rate and difficulty trends to see whether capitulation is starting, deepening, or stabilising. Combine it with miner reserve balances to see whether miners are still selling or have finished. Combine it with MVRV and NUPL to see whether holder capitulation accompanies miner capitulation, since joint capitulation has historically marked stronger bottoms than either alone. And combine it with price structure, because a miner-stress signal during a macro shock, such as the Fed's October 28 hawkish hold at 3.75 to 4.00 percent, may resolve differently from one during a purely crypto-native downturn." },
      { type: "p", text: "For holders, the practical takeaway is patience during miner stress: capitulation phases have historically rewarded those who accumulated gradually rather than those who timed the exact low. For traders, the takeaway is risk control: miner selling adds supply pressure that can extend declines, so leverage should shrink when Puell readings are very low and hash rate is still falling. For everyone, the takeaway is perspective: miners have capitulated in every cycle, the network has adjusted every time, and the metric's job is to tell you where in that recurring process the market currently sits." },
      {
        type: "callout",
        title: "Low Puell readings are not instant buy signals",
        text: "Miner capitulation is a process that can last weeks or months, and early low readings can precede further miner selling and lower prices. Never add leverage on a low Puell print alone; wait for hash-rate stabilisation and confirmation from holder metrics.",
        tone: "warning",
      },
      {
        type: "list",
        items: [
        "Above ~4: miners earn far above yearly average, euphoric zone",
        "Around 1.0: miners earn their normal yearly average",
        "Below ~0.5: miners earn less than half the average, stress zone",
        "Capitulation stages: margin squeeze, hash-rate fall, reserve selling, exit, stabilisation",
        "Difficulty adjustment eventually restores profitability for surviving miners"
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help here by explaining mining concepts like hash rate, difficulty, and miner revenue in simple words, or by comparing Puell Multiple with other on-chain metrics." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the Puell Multiple?",
            a: "It divides the daily value of newly mined Bitcoin by its 365-day moving average, showing whether miners earn more or less than their normal yearly revenue from issuance.",
          },
          {
            q: "What does a very low Puell Multiple mean?",
            a: "Miners earn far less than usual, historically below about 0.5, signalling stress and possible capitulation, where inefficient miners shut down and sell reserves.",
          },
          {
            q: "What does a very high Puell Multiple mean?",
            a: "Miners earn several times their yearly average, historically above about 4, signalling euphoric conditions that have coincided with cycle tops.",
          },
          {
            q: "How do halvings affect Puell Multiple?",
            a: "A halving cuts issuance in half, mechanically lowering issuance revenue while the 365-day average still includes pre-halving earnings, biasing the ratio downward for up to a year. Post-halving low readings need cautious interpretation.",
          }
        ],
      },
  ],
};
