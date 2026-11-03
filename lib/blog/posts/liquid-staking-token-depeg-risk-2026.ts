import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "liquid-staking-token-depeg-risk-2026",
  title: "Liquid Staking Tokens and Depeg Risk: When stETH Trades Below ETH",
  description: "Liquid staking token depeg risk explained: why stETH can trade below ETH in stress, how redemption differs from market price, and what to check first.",
  keywords: [
      "Liquid Staking Tokens",
      "stETH depeg",
      "liquid staking risk",
      "staking token peg",
      "Lido stETH",
      "staking liquidity"
  ],
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Liquid Staking Tokens promise staked ETH you can still trade, but their market price can fall below redemption value when liquidity dries up.",
  image: "/images/blog/liquid-staking-token-depeg-risk-2026.svg",
  blocks: [
      { type: "p", text: "On Tuesday 3 November 2026, ETH traded around $2,255, down about 1% in 24 hours, while the Fear and Greed Index sat at 26. In fearful markets, Liquid Staking Tokens get tested, and their most famous test case is stETH trading below ETH. A liquid staking token represents ETH staked in validators plus accumulated rewards, and in calm markets it trades very close to one ETH. In stress, it can trade at a visible discount, and understanding why that discount appears, and what it does and does not mean, is essential for anyone holding these tokens." },
      { type: "h2", text: "Redemption value versus market price" },
      { type: "p", text: "The core distinction is between what a token is worth if redeemed and what someone will pay for it right now. Redemption value is the ETH backing each token: the staked ETH plus rewards, minus fees, divided by tokens outstanding. Market price is whatever buyers and sellers agree on an exchange at a given moment. In calm conditions these two numbers sit close together because arbitrageurs buy discounted tokens and redeem them, or mint new ones, until the gap closes. The gap widens when redemption itself becomes slow or uncertain, because arbitrage needs time and capital, and both get scarce in a panic." },
      { type: "p", text: "The key bottleneck is the Ethereum exit queue. Redeeming a large amount of stETH ultimately requires validators to exit, and exits are capped daily by the churn limit. If everyone wants to redeem at once, arbitrageurs cannot convert tokens to ETH quickly enough to close the discount, so the market price stays below redemption value for as long as the queue lasts. The token is not broken in this state; it is simply illiquid at par. Holders who can wait for redemption may recover full value, while holders forced to sell immediately realise the discount." },
      { type: "h2", text: "Why depegs happen: the stress playbook" },
      { type: "p", text: "Depegs follow a familiar pattern. First, a market shock makes holders want liquid ETH quickly. Second, selling pressure hits the token's trading pools, pushing its price below one ETH. Third, arbitrageurs step in but face the exit-queue delay, capital constraints, and the risk that the discount widens further before they can redeem. Fourth, leveraged positions using the token as collateral get liquidated, adding more selling. Each step feeds the next, and the discount can persist for days or weeks until exits clear and confidence returns. The 2022 stETH discount during a major market crisis is the textbook example, and it eventually closed as redemptions processed." },
      { type: "p", text: "Pool design adds another layer. Many holders trade through automated liquidity pools where the token is paired with ETH, and large sales move the pool price sharply when liquidity is thin. A pool drained of ETH by sellers offers worse and worse prices to the next seller, which exaggerates the headline discount beyond what a large, deep market would show. Checking pool depth, not just the quoted price, gives a fairer picture of how bad a depeg really is. For definitions of these mechanics, see our [glossary](/glossary)." },
      { type: "h2", text: "What a discount does and does not mean" },
      { type: "p", text: "A discount does not automatically mean the underlying staked ETH is lost or the protocol is insolvent. It most often means liquidity is scarce and redemption is slow. But it can also signal deeper problems, and holders should know how to tell the difference. Check whether the protocol publishes verifiable backing, whether validators are performing normally, and whether the discount is shrinking as exits process or widening despite redemptions clearing. A discount that narrows steadily is usually a liquidity story; one that widens while redemptions flow freely deserves harder questions." },
      { type: "p", text: "Counterparty and smart-contract risks sit behind the price story. A liquid staking protocol depends on its code, its operator set, and its governance, and a bug or operator failure could affect backing in ways no market discount captures. Diversifying across providers, or holding plain ETH instead of a staking token, removes some of these layers at the cost of giving up staking yield. There is no free version of yield: every extra percent comes with a risk that must be named. For how price gaps behave across venues generally, our guide to [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) covers the same arbitrage logic." },
      { type: "h2", text: "Practical checks before holding a liquid staking token" },
      { type: "p", text: "Before holding, check the token's backing transparency, the size and depth of its main trading pools, and the current exit-queue length, since a long queue means slower redemption. Decide in advance whether you would hold through a discount or need to sell at any price, because that decision is much harder to make well during a panic. Size the position so that a temporary 5% or 10% discount would be uncomfortable but not ruinous, and avoid using the token as collateral for loans you cannot repay if its price drops. The token is a useful tool for staying liquid while staking, but it is not the same as holding ETH, and the difference shows up exactly when markets are stressed." },
      {
        type: "list",
        items: [
        "Redemption value = ETH backing per token; market price = what traders pay now",
        "Depeg cause: exit-queue delays stop arbitrage from closing the gap fast",
        "Stress loop: selling, thin pools, liquidations, wider discount",
        "A narrowing discount usually means liquidity stress; a widening one needs scrutiny",
        "Check: backing transparency, pool depth, exit-queue length, collateral use"
        ],
      },
      {
        type: "callout",
        title: "Risk note",
        text: "Liquid staking tokens can trade materially below ETH during stress, and leveraged positions using them as collateral can be liquidated. Smart-contract and operator risks are separate from price risk. This article is educational, not financial advice.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain a topic like liquid staking depeg risk in simple words, or compare two ideas side by side, such as redemption value versus market price. It can also draft a short research checklist of checks to run before holding a liquid staking token. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why does stETH sometimes trade below ETH?",
            a: "Because market price and redemption value separate during stress. Sellers want liquid ETH fast, while redemption requires validators to exit through a daily-capped queue, so arbitrage cannot close the gap immediately.",
          },
          {
            q: "Does a discount mean the staked ETH is lost?",
            a: "Usually not. Most discounts reflect scarce liquidity and slow redemption, not lost backing. Check backing transparency, validator performance, and whether the discount narrows as exits process.",
          },
          {
            q: "How long can a depeg last?",
            a: "Days to weeks, depending on exit-queue length and market confidence. The 2022 discount persisted for weeks before closing as redemptions processed and selling pressure eased.",
          },
          {
            q: "How can holders reduce depeg risk?",
            a: "Hold only what you can afford to keep through a discount, avoid using the token as loan collateral you cannot repay, check pool depth and queue length, and consider plain ETH if you need certain liquidity.",
          }
        ],
      },
  ],
};
