import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "stablecoin-issuers-licensed-2026",
  title: "Licensed vs Offshore Stablecoin Issuers After GENIUS",
  description: "GENIUS splits stablecoins into licensed issuers and offshore tokens outside the US framework. Learn the dual-path licensing system and its impact on traders.",
  keywords: [
      "licensed vs offshore stablecoin issuers",
      "offshore stablecoin issuers",
      "GENIUS licensing",
      "stablecoin licensing",
      "dual-path licensing stablecoin",
      "regulated stablecoins",
      "offshore stablecoins"
  ],
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "After GENIUS, not all stablecoins are equal. Licensed issuers follow federal rules on reserves and disclosure, while offshore issuers sit outside the framework. Here is how to tell them apart.",
  image: "/images/blog/stablecoin-issuers-licensed-2026.svg",
  blocks: [
      { type: "p", text: "Licensed vs offshore stablecoin issuers are now the most important distinction in the stablecoin market. Under the GENIUS Act, a stablecoin issuer that wants to serve the US market must be licensed through a federal or state pathway, hold one-to-one reserves in cash and highly liquid assets, and publish monthly reserve attestations. Issuers outside that framework, often based offshore, are not subject to the same reserve, disclosure, or redemption rules, even if their tokens trade on the same exchanges and look identical in a wallet. For traders, that difference is real risk. On 2026-10-19, Bitcoin traded near $82,100 to $82,600 and Ethereum near $2,405 to $2,427, and a large share of the trading volume around those prices settled in stablecoins. Which issuer stands behind the settlement token matters more than most traders realize." },
      { type: "h2", text: "Dual-Path Licensing: Federal and State Routes" },
      { type: "p", text: "The GENIUS framework offers issuers two licensing paths: a federal route and a state route. Under the federal path, an issuer is supervised by a federal regulator and must meet the law reserve, disclosure, and operational standards. Under the state path, an issuer is licensed by a state regulator whose regime meets standards comparable to the federal framework. In plain language, the law lets states continue to play a role in stablecoin supervision, as they already did under state money-transmitter and trust regimes, while setting a federal floor that state regimes must meet. The practical result is that licensed issuers, whether federal or state, are subject to ongoing supervision, regular reporting, and reserve requirements that unlicensed issuers are not." },
      { type: "p", text: "For traders, the distinction between federal and state licensing is less important than the distinction between licensed and unlicensed. Both licensed paths require the issuer to meet the framework standards. The key question for any stablecoin is simpler: is the issuer licensed under the framework at all? A licensed issuer has a regulator watching its reserves, a legal obligation to redeem, and public disclosures a trader can check. An unlicensed issuer has none of those protections, even if it publishes voluntary reports or claims to follow similar standards. Voluntary disclosure is not the same as supervised compliance, and traders should not treat it as equivalent. When in doubt, check the issuer own disclosures and regulatory statements rather than relying on marketing." },
      { type: "h2", text: "How Foreign and Offshore Issuers Are Treated" },
      { type: "p", text: "Foreign issuers sit in a middle category. Under the framework, a foreign stablecoin issuer can serve the US market if it meets comparable standards, typically by being supervised in a jurisdiction with a regime regulators consider equivalent, and by meeting the framework requirements on reserves and redemption. In practice, that means some large offshore issuers may continue to operate in the US market if they bring their practices up to the framework standard, while others may not qualify and may be restricted to non-US venues. The treatment of foreign issuers is one of the areas where the framework details continue to develop as of 2026, and traders should not assume that every offshore stablecoin available today will remain available on US venues indefinitely." },
      { type: "p", text: "The offshore category also includes stablecoins issued in jurisdictions with lighter regulation, where reserve rules may be weaker, disclosure may be voluntary, and redemption rights may be limited. These tokens can still be widely used on global exchanges, in DeFi, and in regions where local rules differ. Their availability does not mean they meet the US standard. A trader who holds an offshore stablecoin is accepting the issuer home jurisdiction rules, whatever they are, and the enforcement options available there. That is a legitimate choice for some traders, but it should be a conscious one, not an accident caused by assuming all dollar tokens are the same." },
      {
        type: "table",
        headers: ["Issuer type", "Supervision", "Reserve and disclosure standard"],
        rows: [
          ["Federally licensed", "Federal regulator", "Full GENIUS standards"],
          ["State licensed", "State regulator meeting federal floor", "Full GENIUS standards"],
          ["Foreign, comparable regime", "Home regulator plus US conditions", "Must meet comparable standards to serve US"],
          ["Offshore, unlicensed", "Home jurisdiction only", "Varies; may be weaker or voluntary"]
        ],
      },
      { type: "h2", text: "What Changes for Traders in Practice" },
      { type: "p", text: "In practice, the licensed-versus-offshore split shows up in three places: exchange listings, redemption terms, and price behavior during stress. Exchanges serving US customers increasingly favor licensed stablecoins, because listing an unlicensed token creates regulatory risk for the exchange itself. Redemption terms differ too: licensed issuers operate under a legal obligation to redeem, while offshore issuers redemption terms are set by their own policies and may include minimums, delays, or restrictions that only become visible in a crisis. And during stress, the price gap between licensed and offshore stablecoins can widen, as traders pay a premium for tokens with supervised reserves and a clear redemption path. Traders who hold both types should expect that gap and plan for it, rather than assuming they can swap one for the other at par in a panic." },
      { type: "p", text: "The split also affects arbitrage. A trader running [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) may find that the same trading pair settles in different stablecoins on different venues, and the spread between those venues partly reflects stablecoin quality. A spread that looks like free money may actually be compensation for holding the riskier stablecoin. Experienced arbitrage traders check which stablecoin each leg settles in before treating a spread as risk-free. The same logic applies to [funding rate arbitrage](/guides/funding-rate-arbitrage), where margin posted in a weaker stablecoin carries a different risk profile than margin posted in a licensed one. The GENIUS framework makes these distinctions easier to see, because licensed status is a public fact rather than a matter of guesswork." },
      { type: "h2", text: "Risks of Unlicensed and Offshore Stablecoins" },
      { type: "p", text: "Offshore and unlicensed stablecoins carry several risks that licensed stablecoins reduce. Reserve risk is first: without a supervised one-to-one requirement, reserves may be partial, illiquid, or unverified. Redemption risk is second: an offshore issuer may delay, restrict, or refuse redemptions under conditions a licensed issuer could not. Legal risk is third: if an offshore issuer fails, a trader recourse may be limited to the issuer home jurisdiction, where courts, regulators, and bankruptcy rules may differ sharply from US practice. Concentration risk is fourth: some offshore stablecoins are heavily used in specific regions or platforms, so a problem with one issuer can cascade through the venues that depend on it. None of these risks means offshore stablecoins are unusable. They mean the risks are real and should be priced." },
      {
        type: "callout",
        title: "Offshore does not mean unsafe, but it does mean unsupervised",
        text: "Some offshore issuers maintain strong reserves and good practices. The point is that no US regulator verifies that. Traders holding offshore stablecoins are relying on the issuer own discipline, not on supervised compliance.",
        tone: "warning",
      },
      { type: "h2", text: "How to Check an Issuer Status" },
      {
        type: "list",
        items: [
        "Look for the issuer licensing status in its own disclosures: federal, state, foreign comparable, or unlicensed.",
        "Read the latest reserve attestation and check whether it is independent, current, and complete.",
        "Review redemption terms: who can redeem, minimum amounts, timing, and fees.",
        "Check which exchanges and venues list the stablecoin, and whether US venues treat it as a licensed token.",
        "Limit exposure to any single unlicensed stablecoin, and keep a path to convert into a licensed token or fiat."
        ],
      },
      { type: "p", text: "Risk disclosure: stablecoin issuers can fail, licenses can be revoked, and regulatory treatment of foreign issuers continues to develop. This article is educational, not legal or financial advice. Traders should verify issuer status and disclosures themselves, and treat every stablecoin as counterparty exposure. For reserve details, see the companion article on [stablecoin reserve rules](/blog/stablecoin-reserve-rules-genius-2026), and for definitions, see the [glossary](/glossary)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you compare stablecoin issuers clearly. Ask it to explain the difference between federal, state, and offshore stablecoin licensing in simple words, summarize what to check in an issuer disclosure, or draft a checklist for choosing between a licensed and an offshore stablecoin." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What does dual-path licensing mean for stablecoins?",
            a: "Issuers can be licensed through a federal route or a state route whose standards meet the federal floor. Both paths require 1:1 reserves, monthly attestations, and ongoing supervision.",
          },
          {
            q: "Can offshore stablecoins still be used in the US?",
            a: "Some foreign issuers may serve the US market if they meet comparable standards. Others may be restricted to non-US venues. Offshore stablecoins do not carry the protections of the GENIUS framework.",
          },
          {
            q: "Is a licensed stablecoin guaranteed safe?",
            a: "No. Licensing reduces issuer risk through reserve and disclosure rules, but stablecoins can still depeg, and issuers can still face operational or banking problems.",
          },
          {
            q: "How do I check if a stablecoin issuer is licensed?",
            a: "Read the issuer own disclosures for its licensing status, check its latest reserve attestation, and review its redemption terms. Do not rely on marketing claims alone.",
          }
        ],
      },
  ],
};
