import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "nupl-net-unrealized-profit-2026",
  title: "NUPL: Measuring Market Euphoria and Capitulation On-Chain",
  description: "NUPL explained for 2026: how net unrealised profit and loss maps market phases from hope and optimism to euphoria, anxiety, and capitulation in practice.",
  keywords: [
      "NUPL",
      "net unrealized profit loss",
      "Bitcoin NUPL phases",
      "market euphoria on-chain",
      "Bitcoin capitulation metric",
      "on-chain market phases"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "NUPL turns the market's unrealised profit into a single phase reading, from hope through euphoria to capitulation, and warns when greed or fear peaks.",
  image: "/images/blog/nupl-net-unrealized-profit-2026.svg",
  blocks: [
      { type: "p", text: "NUPL is the phase map traders consult on October 30, 2026, as Bitcoin trades around $77,300 to $77,975, down roughly 4 to 5 percent in 24 hours, and the Fear and Greed index reads 30, in Fear, down from 51. Net Unrealised Profit and Loss asks a deceptively simple question: if every holder sold at today's price, how much profit or loss would the market realise in total, expressed as a share of market value? The answer moves through recognisable phases, from hope and optimism through belief and euphoria, then back through anxiety, denial, and capitulation. NUPL does not predict the next candle, but it names the emotional season the market is living in." },
      { type: "h2", text: "How NUPL is built" },
      { type: "p", text: "NUPL starts from the same ingredients as MVRV: market capitalisation minus realised capitalisation gives total unrealised profit or loss across the network, and dividing that difference by market capitalisation expresses it as a proportion. A NUPL of 0.5 means half of market value is unrealised profit; a NUPL of zero means the market as a whole sits at break-even; a negative NUPL means the average holder is underwater. The formula is simple, but its value lies in the history: the same calculation, applied across every cycle, produces a comparable emotional record." },
      { type: "p", text: "The denominator matters. Expressing unrealised profit as a share of market value, rather than as a raw dollar figure, lets traders compare a small early market with a large mature one. A billion dollars of unrealised profit meant something different when Bitcoin's market value was a few billion than it does today. NUPL therefore travels well across cycles, even as the market grows, though like all on-chain metrics it still carries noise from lost coins, dormant wallets, and exchange operations. Treat the phase as the signal and the exact decimal as an approximation." },
      { type: "h2", text: "The climb: hope, optimism, belief, euphoria" },
      { type: "p", text: "The upward phases describe a market healing and then overheating. After capitulation, NUPL climbs from negative territory into hope, where holders are barely back above water and scepticism dominates. Optimism follows as profit builds and early buyers are rewarded, then belief, where the rally feels durable and dips are bought confidently. Euphoria arrives when NUPL reaches high levels, historically above roughly 0.75, and new buyers pour in convinced that gains are easy and permanent. Euphoria is not a moral judgement; it is a measurable condition in which the average holder sits on very large unrealised gains and the incentive to sell is at its peak." },
      { type: "p", text: "The practical lesson of the climb is that euphoria feels wonderful and is dangerous precisely because it feels wonderful. Portfolios look their best, social media is most confident, and leverage is most tempting at exactly the moment when the marginal buyer is weakest. NUPL does not say euphoria ends tomorrow; markets can stay euphoric for weeks. It says the risk-reward of adding exposure has deteriorated, and that taking some profit, reducing leverage, or simply refusing to chase is the rational response to a measurable condition rather than a reaction to fear." },
      { type: "h2", text: "The fall: anxiety, denial, panic, capitulation" },
      { type: "p", text: "The downward phases mirror the climb with different psychology. Anxiety appears as NUPL falls from euphoria and holders watch gains shrink, hoping for a recovery that may not come. Denial follows when price keeps falling but holders insist the bull market is intact, often buying dips that keep dipping. Panic arrives as losses accelerate and selling becomes indiscriminate, and capitulation marks the end, when NUPL turns negative and even patient holders give up. Capitulation is the phase most traders fear and most contrarians study, because it describes selling exhaustion." },
      { type: "p", text: "Reading the fall honestly requires separating price from phase. A 30 percent fall from euphoria may only move NUPL from euphoria to anxiety, with plenty of downside still possible, while the same fall from belief may push NUPL toward capitulation. That is why traders who count percentages alone get surprised: the same move means different things depending on where the market started. On October 30, 2026, with gold near $4,002 to $4,008 per ounce and Ether near $2,254, down about 4.5 percent, the useful NUPL question is not how far price fell this week but which phase the market now occupies, and whether that phase is stabilising or still deteriorating." },
      { type: "h2", text: "NUPL versus sentiment surveys" },
      { type: "p", text: "NUPL is often compared with sentiment indices like Fear and Greed, and the comparison is instructive. Sentiment surveys and social data measure what people say and feel, which can change in a day. NUPL measures what holders' positions actually imply, which changes slowly as coins move and prices shift. The two usually agree at extremes, fearful surveys during capitulation and greedy surveys during euphoria, but they diverge in the middle phases, where stated sentiment may be calm while unrealised profit is quietly building toward danger, or vice versa." },
      { type: "p", text: "For traders, the combination is stronger than either alone. When NUPL shows euphoria and sentiment shows extreme greed, the warning is loud. When NUPL shows capitulation but sentiment is merely fearful, the market may still have further to fall before true exhaustion. When NUPL and sentiment disagree sharply, treat the disagreement as uncertainty and reduce size. Neither measure is a crystal ball, and both are best used to set the odds and the position size rather than to pick a day. For background on trading across venues in different phases, see [cex vs dex arbitrage](/guides/cex-vs-dex-arbitrage), and for terms, the [glossary](/glossary)." },
      { type: "h2", text: "Using NUPL in a real routine" },
      { type: "p", text: "A workable NUPL routine has three steps. First, name the phase and its direction: is NUPL rising from capitulation toward hope, or falling from euphoria toward anxiety? Direction matters as much as level, because a market leaving capitulation behaves differently from one entering it. Second, confirm with behaviour: are long-term holders accumulating or distributing, are exchange balances rising or falling, and is leverage expanding or contracting? Third, translate the phase into an action rule decided in advance, such as reducing leverage in euphoria or staggering accumulation in capitulation, rather than improvising under stress." },
      { type: "p", text: "The rules should be modest. NUPL justifies adjusting exposure at the margin, not betting everything on a phase change, because phases can last months and the exact turning point is only obvious in hindsight. It also justifies patience: capitulation phases reward those who can wait through sideways months, while euphoria phases punish those who must chase. The metric's real gift is emotional: it gives traders a language for what they are feeling, and a reminder that every previous cycle contained both euphoria and capitulation, and survived both." },
      {
        type: "callout",
        title: "Phases last months, not days",
        text: "Do not trade a NUPL phase change as if it were a daily signal. Euphoria can persist for weeks and capitulation can grind for months. Use phases to adjust exposure gradually and to resist leverage at extremes, not to time a single trade.",
        tone: "warning",
      },
      {
        type: "table",
        headers: ["NUPL phase", "Market feeling", "Prudent stance"],
        rows: [
          ["Capitulation (negative)", "Maximum pain, sellers exhausted", "Patience, staged accumulation only"],
          ["Hope", "Barely above water, scepticism", "Watch for confirmation"],
          ["Optimism / Belief", "Profit building, dips bought", "Normal sizing, rebalance gains"],
          ["Euphoria (high)", "Gains feel easy and permanent", "Reduce leverage, take some profit"],
          ["Anxiety / Denial", "Gains shrinking, excuses growing", "Tighten risk, avoid dip-chasing"]
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help here by explaining market phases like euphoria and capitulation in simple words, or by summarising a long on-chain article into the phase it describes and the evidence behind it." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is NUPL in simple terms?",
            a: "It is total unrealised profit or loss across the Bitcoin market, expressed as a share of market value. Positive means holders are in profit overall; negative means they are underwater overall.",
          },
          {
            q: "What NUPL level marks euphoria?",
            a: "Historically, readings above roughly 0.75 have coincided with euphoric tops, when average unrealised profit is very large and selling incentives peak. Thresholds can shift as markets mature, so treat them as zones, not exact triggers.",
          },
          {
            q: "Does capitulation mean the bottom is in?",
            a: "Not immediately. Capitulation describes selling exhaustion, but price can grind sideways or fall further for weeks. The more reliable development is NUPL stabilising and rising back toward hope with holder accumulation.",
          },
          {
            q: "How is NUPL different from Fear and Greed?",
            a: "Fear and Greed measures stated sentiment and short-term signals, which change fast. NUPL measures what holders' actual positions imply, which changes slowly, making it better for naming the market's phase than for daily timing.",
          }
        ],
      },
  ],
};
