import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "tokenized-gold-vs-physical-gold-2026",
  title: "Tokenized Gold vs Physical Gold: PAXG, XAUT, and Redemption",
  description: "Tokenized gold like PAXG and XAUT promises gold on blockchain rails. Compare backing, fees, redemption, and custody against physical gold before buying.",
  keywords: [
      "tokenized gold",
      "PAXG vs XAUT",
      "tokenized gold vs physical gold",
      "gold tokens",
      "PAXG redemption",
      "XAUT gold token"
  ],
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Tokenized gold promises the safety of gold with the speed of crypto. PAXG and XAUT lead the market, but backing, fees, and redemption work differently from holding bars and coins.",
  image: "/images/blog/tokenized-gold-vs-physical-gold-2026.svg",
  blocks: [
      { type: "p", text: "Gold has been a store of value for thousands of years, and tokenized gold tries to combine that history with the speed of crypto. Tokens such as PAXG and XAUT are each meant to represent one troy ounce of gold held in custody, and they let holders buy, sell, and transfer gold exposure on blockchain rails around the clock. The idea is appealing: gold without vault fees, dealers, or shipping, divisible to tiny fractions, and tradable at any hour. But tokenized gold is not the same as holding a bar in your hand, and the differences, backing, redemption, custody, and counterparty risk, decide whether the convenience is worth it. As of October 2026, gold is in a strong market, with spot gold near $4,178 to $4,185 per ounce on 2026-10-19, up about 0.4% on the day and hovering near $4,200, supported by a weaker US dollar and lower Treasury yields. That strength makes the tokenized-versus-physical comparison a live question for many investors." },
      { type: "h2", text: "How Tokenized Gold Works" },
      { type: "p", text: "The structure of tokenized gold is straightforward. A custodian holds physical gold bars in a vault. An issuer creates tokens on a blockchain, each representing a claim on a specific amount of that gold, typically one troy ounce per token. The issuer publishes attestations or audits showing that the gold in custody matches the tokens outstanding. Holders can trade the tokens on exchanges, transfer them between wallets, and in some cases redeem them for physical gold or cash. The token's price is meant to track the spot gold price, and arbitrage by traders helps keep it close. But the tracking depends on liquidity and on the credibility of the backing, not on a physical law. A token is a claim on gold held by someone else, and that claim is only as good as the issuer and custodian behind it." },
      { type: "p", text: "PAXG and XAUT are the two largest gold tokens, and they share the same basic model while differing in issuer, custodian, supported blockchains, and redemption details. Both are backed by physical gold held in professional vaults, and both publish information about their reserves. The choice between them comes down to the details: which issuer and custodian you trust, which chains and exchanges you use, what the fees are, and how redemption works for your situation. Neither token is government-insured, and neither is a substitute for holding gold yourself if your goal is to eliminate counterparty risk entirely. The [glossary](/glossary) defines backing, custody, and redemption for readers who want the foundations." },
      { type: "h2", text: "Backing: What Sits Behind the Token" },
      { type: "p", text: "Backing is the first thing to verify with any gold token. The issuer should hold enough physical gold to cover every token outstanding, and the reserves should be checked by independent audits or attestations on a regular schedule. The gold should be held by a reputable custodian in a professional vault, segregated from the issuer's own assets, so that it survives if the issuer fails. Holders should also check whether the gold is allocated, meaning specific bars are assigned to the token program, or unallocated, meaning the token represents a general claim on the custodian's gold pool. Allocated gold is stronger, because the bars are identified and set aside. Unallocated claims depend more on the custodian's overall solvency. The quality of backing is the difference between a gold token and a gold IOU." },
      { type: "p", text: "Transparency is part of backing. Reputable issuers publish vault details, bar lists or serial numbers, and audit reports, and they update them regularly. Holders should look for this evidence rather than taking the issuer's word. A token whose backing is opaque, infrequently audited, or held by an unknown custodian should be treated with skepticism, no matter how attractive the marketing. In gold, trust is earned through audits, not through branding." },
      {
        type: "table",
        headers: ["Factor", "Tokenized gold (PAXG, XAUT)", "Physical gold"],
        rows: [
          ["Backing", "Claim on vaulted gold via issuer", "The metal itself, in your possession"],
          ["Counterparty risk", "Issuer, custodian, smart contract", "Minimal if held directly"],
          ["Trading hours", "Around the clock on crypto venues", "Dealer hours, slower settlement"],
          ["Divisibility", "Tiny fractions, easy", "Coins and small bars, less flexible"],
          ["Redemption", "Per issuer terms, may have minimums", "Sell to dealer, spread applies"]
        ],
      },
      { type: "h2", text: "Fees: The Quiet Cost of Convenience" },
      { type: "p", text: "Tokenized gold is not free to hold. Issuers typically charge fees for creation and redemption, and trading on exchanges adds spreads and transaction costs. Some products charge ongoing custody or administration fees that reduce the effective return over time. These costs are usually modest compared with the price of gold, but they compound over a long holding period, and they should be compared honestly with the costs of physical gold, which include dealer spreads on purchase and sale, storage or safe deposit fees, insurance, and assay costs on resale. Neither form is costless. The right comparison is total cost over your expected holding period for the same amount of gold, not the headline fee of one product against the worst-case cost of the other." },
      { type: "p", text: "One cost that is easy to overlook is the spread. The difference between the buy and sell price on a gold token can widen during volatile periods or on thinly traded venues, and frequent traders pay it repeatedly. Physical gold has spreads too, often wider. Long-term holders who trade rarely are less affected by spreads in either form. As with other markets, liquidity shapes the real cost, which is why traders compare venues and spreads, as described in [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Redemption: Turning Tokens Back Into Gold or Cash" },
      { type: "p", text: "Redemption is where tokenized gold's promises meet their test. Reputable gold tokens offer redemption: holders can exchange tokens for physical gold, usually in standard bar sizes, or for cash at the gold value, subject to minimums, fees, and the issuer's process. The details matter. Minimum redemption amounts can be large, sometimes a full bar's worth, which means small holders cannot redeem directly and must sell on the secondary market instead. Redemption may take days, require identity verification, and involve shipping or collection arrangements. Holders should understand the redemption process before they buy, including the minimum, the fees, the timeline, and whether redemption is available in their jurisdiction. A token that cannot be redeemed on reasonable terms is a weaker claim than one that can." },
      { type: "p", text: "Physical gold, by contrast, is redeemed by selling it to a dealer, which is straightforward but involves spreads, verification, and sometimes assay costs. The advantage of physical gold is that redemption does not depend on any issuer's process: you hold the metal, and you can sell it to any willing buyer. The disadvantage is friction: finding a buyer, transporting the metal, and accepting the dealer's spread. Tokenized gold reduces that friction at the cost of depending on the issuer. The trade-off is between independence and convenience, and different holders will weigh it differently." },
      { type: "h2", text: "Which Form Suits Which Holder" },
      { type: "p", text: "Tokenized gold suits holders who want gold exposure with crypto-native convenience: traders who need to move gold exposure quickly, portfolios that rebalance on blockchain rails, and investors in regions where physical gold is hard to buy or store. Physical gold suits holders whose priority is eliminating counterparty risk: people who want the metal itself, independent of any issuer, custodian, or blockchain, and who are willing to accept storage and dealer friction for that independence. Many holders use both: physical gold as a long-term core holding, and a smaller tokenized allocation for liquidity and trading. There is no single right answer. The right mix depends on how much you value independence versus convenience, and on how much counterparty risk you are willing to accept." },
      {
        type: "callout",
        title: "Verify backing before you buy",
        text: "A gold token is a claim on vaulted gold. Check audits, custodian reputation, allocation, and redemption terms. Opaque backing is a reason to walk away.",
        tone: "warning",
      },
      { type: "p", text: "Risk disclosure: this article is educational, not financial advice. Gold tokens carry issuer, custodian, regulatory, and smart contract risks, and physical gold carries storage and theft risks. Gold prices move with macro forces: on 2026-10-19, spot gold near $4,178 to $4,185 per ounce was supported by a weaker dollar and lower yields, but those forces can reverse. Do your own research, verify backing and redemption terms, and never invest more than you can afford to lose. Traders comparing gold exposure with crypto spreads can explore [spot-futures arbitrage](/guides/spot-futures-arbitrage) and [funding rate arbitrage](/guides/funding-rate-arbitrage)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you compare tokenized gold with physical gold. Ask it to explain how PAXG and XAUT backing works in simple words, compare the fees of tokenized and physical gold, or draft a checklist of backing and redemption questions for any gold token." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is tokenized gold?",
            a: "A blockchain token representing a claim on physical gold held in a vault. PAXG and XAUT are the largest examples, each meant to represent one troy ounce of gold.",
          },
          {
            q: "Is tokenized gold as safe as physical gold?",
            a: "Not in the same way. Tokenized gold adds issuer, custodian, and smart contract risk. Physical gold held directly eliminates counterparty risk but adds storage and theft risk.",
          },
          {
            q: "Can I redeem gold tokens for physical gold?",
            a: "Reputable tokens offer redemption, but minimums, fees, timelines, and jurisdiction rules apply. Check the issuer's redemption terms before buying.",
          },
          {
            q: "What fees does tokenized gold carry?",
            a: "Creation and redemption fees, trading spreads, and sometimes ongoing custody or administration fees. Compare total costs over your holding period with physical gold costs.",
          }
        ],
      },
  ],
};
