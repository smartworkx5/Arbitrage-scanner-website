import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "stock-to-flow-critique-2026",
  title: "Stock-to-Flow Model: Why It Broke and What Replaced It",
  description: "Stock-to-Flow critique for 2026: why the famous Bitcoin scarcity model broke, what its failures teach, and which valuation models traders use instead today.",
  keywords: [
      "Stock-to-Flow",
      "Bitcoin valuation models",
      "PlanB S2F",
      "Bitcoin scarcity",
      "crypto model failure",
      "Bitcoin price models"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Stock-to-flow fitted Bitcoin's early history strikingly well, then broke decisively, and the reasons it broke matter more than the model itself.",
  image: "/images/blog/stock-to-flow-critique-2026.svg",
  blocks: [
      { type: "p", text: "On October 30, 2026, Bitcoin traded around $77,300 to $77,975, well below levels that early Stock-to-Flow projections once implied for this stage of the cycle, after breaking below $80,000 on October 29 and below $78,000 on October 30. That gap is a good place to start a fair critique, because Stock-to-Flow was once the most famous valuation model in crypto, and its failure is instructive rather than merely embarrassing. The model borrowed a concept from commodities: scarcity, measured as existing stock divided by annual new production flow, should predict value. For Bitcoin, halvings cut new supply on a fixed schedule, so the model projected ever-higher prices as stock-to-flow rose. For several years the fit looked impressive, which made the model feel like a law. Then price diverged from the model for years, and the divergence kept growing, which is what separates a broken model from a temporarily early one." },
      { type: "h2", text: "What Stock-to-Flow Claimed" },
      { type: "p", text: "Stock-to-flow is a simple ratio: take the total existing supply of an asset and divide it by how much new supply is produced each year. Gold has a high ratio because annual mining adds only a small fraction to the vast existing stock, while a consumable commodity has a low ratio because its stock is used up and must be constantly replaced. Applied to Bitcoin, the model argued that halvings, which cut the block reward roughly every four years, mechanically raise scarcity and therefore should raise price in a predictable power-law relationship. The model's appeal was its simplicity and its commodity analogy: if scarcity drives gold's value, and Bitcoin is digital scarcity with a capped supply of 21 million, then Bitcoin's price should follow its scarcity trajectory. That story was easy to chart, easy to share, and easy to believe during bull markets when price was rising anyway. Its weakness was that it treated scarcity as the only driver, ignoring demand, liquidity, regulation, macro rates, and the fact that Bitcoin's demand is far more volatile than gold's. A [glossary](/glossary) entry on scarcity can help separate the useful intuition, that limited supply matters, from the model's stronger claim, that supply alone determines price." },
      { type: "h2", text: "How and When It Broke" },
      { type: "p", text: "The model began to break when Bitcoin's price stayed far below its projected path for an extended period, not just for a few weeks of volatility. A model can be early or late around a trend, but when the gap persists across changing macro conditions, the model's core relationship is in doubt. Critics pointed to several structural problems: the model was fitted to a short history with only a few halvings, so its statistical confidence was far weaker than its charts suggested; it assumed that past co-movement between scarcity and price would continue indefinitely, even as Bitcoin's market structure changed with futures, exchange-traded funds, institutional custody, and regulated products; and it had no mechanism for demand shocks, such as a hawkish central bank, a liquidity crunch, or a shift in risk appetite. By late October 2026, those demand-side forces are plainly visible, with the Federal Reserve holding rates on October 28 at 3.75 percent to 4.00 percent in a hawkish hold, United States core PCE at 3.1 percent year on year for September, and broad selling taking Ethereum to around $2,254 and Solana to around $95.68. Scarcity did not change on those days; demand and liquidity did, which is exactly what a supply-only model cannot capture." },
      {
        type: "list",
        items: [
        "Only a few halvings existed to fit the model, so statistical confidence was low.",
        "The model assumed scarcity alone drives price, ignoring demand and liquidity.",
        "Market structure changed with futures, ETFs, and institutional custody.",
        "Macro shocks such as rate decisions can dominate supply effects for years.",
        "A model that cannot be falsified in advance is a story, not a forecast."
        ],
      },
      { type: "h2", text: "The Statistical Critique in Plain Language" },
      { type: "p", text: "The deeper statistical critique is about fitting a curve to a short, trending history. Bitcoin's price and its stock-to-flow ratio both rose over its early years, so almost any rising curve could be made to look like a good fit, especially when the model was tuned after seeing the data. This is sometimes called overfitting: a model that describes the past well because it was shaped to fit it, but fails on new data because it captured noise or a temporary regime rather than a durable law. Another problem is that the model treated time as if it did not matter except through halvings, while in reality adoption, regulation, exchange infrastructure, and macro cycles all evolved alongside supply. When a model has no error bands, no stated conditions under which it would be declared wrong, and no way to update when demand regimes change, it stops being a scientific tool and becomes a belief. Traders should ask any model three questions: what would prove it wrong, over what horizon, and what has it predicted correctly out of sample, meaning on data it was not fitted to. Stock-to-flow struggles on all three." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Do not trade on a single price model, especially one that has diverged from price for years. Models that promise a specific future price from scarcity alone ignore demand, leverage, and macro risk, and can encourage dangerously large positions.",
        tone: "warning",
      },
      { type: "h2", text: "What Replaced It: A Toolkit, Not a Single Law" },
      { type: "p", text: "No single model has replaced Stock-to-Flow, and that is itself the lesson. Modern valuation work in 2026 tends to use a toolkit: on-chain cost-basis measures such as realised price, which show the average price at which coins last moved; holder behaviour measures such as long-term-holder supply and UTXO age bands; network usage measures such as fees and active addresses; and market-structure measures such as exchange flows, futures funding, and ETF flows, including the $137 million in spot Bitcoin ETF inflows on October 28, the third straight day of inflows. Each measure answers a different question, and none claims to predict a precise future price. Some analysts also use power-law trend models, but with explicit uncertainty bands and the caveat that a long-run trend is not a price target for next month. The honest replacement for a single law is therefore a dashboard with stated limits, where several independent signals must agree before a trader forms a strong view, and where disagreement is treated as information rather than ignored." },
      { type: "h2", text: "How to Judge Any Bitcoin Model Now" },
      { type: "p", text: "A practical checklist for judging a model starts with its assumptions: does it assume demand is constant, growing, or irrelevant, and is that assumption stated. Next, check its track record out of sample, not just its fit to history, and ask whether its author updated it when it failed or simply moved the target. Then check whether it accounts for the macro backdrop that plainly matters in 2026, including gold near $4,002 to $4,008 per ounce on October 30, the dollar-rupee rate around 276.60, and a Fear and Greed reading of 30. Finally, ask what action the model implies and whether that action survives a stress test: if price fell another 20 percent, would the model still justify the position size, or would it require averaging down indefinitely. Models that only work if you keep adding risk are not valuation tools; they are justifications for exposure. For traders focused on execution rather than valuation, a [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) keeps the job separate: capture a verifiable price gap, do not bet a valuation story with leverage." },
      { type: "h2", text: "Bottom Line: Scarcity Matters, But It Is Not Destiny" },
      { type: "p", text: "Stock-to-Flow got one important intuition right: Bitcoin's fixed supply schedule is a genuine difference from fiat money and from most commodities, and scarcity supports long-run value when demand persists. Where it went wrong was in turning that intuition into a precise, supply-only price law and in treating early fit as proof. The successor approach is humbler and more useful: track cost basis, holder behaviour, usage, and market structure together, respect macro forces, and admit wide uncertainty. On October 30, 2026, with Bitcoin below $78,000 and fear elevated, the question is not which single model predicts the next high, but whether demand, liquidity, and holder behaviour together support the current price. That question has no single-number answer, and any model that pretends otherwise should be treated with the scepticism its own failure earned." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain the Stock-to-Flow debate in simple words, separating the scarcity idea from the price prediction. For this article, it can help you compare Stock-to-Flow with realised price and holder metrics side by side in a short summary." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is Stock-to-Flow?",
            a: "It divides existing supply by annual new production. For Bitcoin, halvings raise the ratio over time, and the model claimed this scarcity trajectory predicted price.",
          },
          {
            q: "Why did Stock-to-Flow fail?",
            a: "It was fitted to a short history, ignored demand, liquidity, and macro conditions, and price stayed far below its projections for years as market structure changed.",
          },
          {
            q: "Does scarcity still matter for Bitcoin?",
            a: "Yes, as one factor. A capped supply supports long-run value only if demand persists; scarcity alone cannot set a precise price or timing.",
          },
          {
            q: "What should traders use instead?",
            a: "A toolkit: realised price, holder behaviour, network fees and usage, exchange and ETF flows, and macro context, with explicit uncertainty rather than a single price target.",
          }
        ],
      },
  ],
};
