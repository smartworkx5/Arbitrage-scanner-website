import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "stablecoin-reserve-rules-genius-2026",
  title: "Stablecoin Reserve Rules Under GENIUS: What's Backing Your Dollars",
  description: "Under GENIUS, every stablecoin must hold 1:1 reserves in cash and liquid assets, verified monthly. Learn what counts as reserves and how to check them.",
  keywords: [
      "stablecoin reserve rules",
      "GENIUS Act reserves",
      "stablecoin backing",
      "stablecoin reserves",
      "stablecoin attestations",
      "what backs stablecoins",
      "stablecoin reserve composition"
  ],
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "A stablecoin is only as good as what backs it. Under GENIUS, reserves must be one-to-one in cash and liquid assets, with monthly public attestations. Here is how to verify them.",
  image: "/images/blog/stablecoin-reserve-rules-genius-2026.svg",
  blocks: [
      { type: "p", text: "Stablecoin reserve rules answer the most important question a stablecoin holder can ask: if everyone redeemed at once, would the money be there? Under the GENIUS Act, the US answer is that it must be. The law requires payment stablecoin issuers to hold reserves equal to one hundred percent of coins in circulation, in cash and highly liquid assets such as Treasury bills and similar instruments, with monthly attestations confirming the reserves exist. That one-to-one standard is the backbone of the framework, and it is what separates a regulated stablecoin from a token backed by promises, illiquid assets, or nothing at all. On 2026-10-19, with Bitcoin near $82,100 to $82,600 and Ethereum near $2,405 to $2,427, trillions of dollars in crypto trading still settled through stablecoins, so the quality of their backing is a market-wide concern, not a niche detail." },
      { type: "h2", text: "Why Reserves Decide Whether a Stablecoin Holds" },
      { type: "p", text: "A stablecoin holds its peg when holders believe they can redeem it for a dollar at any time. That belief rests on reserves. If an issuer holds a dollar of safe assets for every coin outstanding, then redemption is a mechanical exercise: the issuer hands over the asset, retires the coin, and the peg holds. If reserves are partial, illiquid, or made up of the issuer own risky assets, then redemption becomes a race. Early redeemers get paid, late redeemers do not, and the peg breaks as soon as the market suspects a shortfall. This is why reserve quality matters more than any marketing claim about stability. The history of stablecoin failures is largely a history of reserve problems: opaque backing, assets that could not be sold fast enough, and issuers that could not survive a redemption wave." },
      { type: "p", text: "The GENIUS framework addresses this directly by requiring reserves that are both full and liquid. Full means one-to-one, not ninety percent or mostly covered. Liquid means assets that can be sold quickly at close to face value, even in stressed markets. Cash and short-term government securities fit that definition. Long-term corporate bonds, real estate, equity stakes, or the issuer own tokens generally do not, because their value can fall exactly when redemption demand spikes. Traders should treat any stablecoin whose reserves include large amounts of illiquid or self-referential assets as carrying extra risk, even if the headline reserve ratio looks like one hundred percent. Composition matters as much as the total." },
      { type: "h2", text: "Reserve Composition: What Counts as Backing" },
      { type: "p", text: "Under the GENIUS framework, eligible reserves are cash and highly liquid assets of the kind regulators consider safe and sellable on short notice, such as Treasury bills and similar instruments. The principle is that reserves must be available when redemption demand arrives, not locked in assets that take weeks to sell or that lose value in a crisis. Issuers disclose their reserve composition in their attestations, and traders can compare issuers by reading those disclosures. A stablecoin backed mostly by cash and short-term government securities is the most conservative profile. A stablecoin backed by a mix that includes longer-dated securities, commercial paper, or other credit instruments carries more market and credit risk, even if it still meets a one-to-one headline ratio." },
      { type: "p", text: "Traders should also pay attention to where reserves are held. Reserves held at regulated banks and custodians, in segregated accounts that are separate from the issuer operating funds, are harder for an issuer to misuse and easier for an attestor to verify. Reserves held at affiliated entities, in complex structures, or in accounts that mix customer and company money are harder to verify and easier to misuse. The GENIUS framework emphasis on segregation and attestation is meant to close exactly that gap. When you read an attestation, look for three things: the total reserve figure, the breakdown by asset type, and the custodian or bank holding the assets. If any of those three is missing or vague, treat the disclosure as incomplete." },
      {
        type: "table",
        headers: ["Reserve asset type", "Liquidity in stress", "What traders should think"],
        rows: [
          ["Cash at regulated banks", "Highest: available immediately", "Most conservative backing"],
          ["Short-term government securities", "High: deep, liquid markets", "Strong backing if maturities are short"],
          ["Longer-dated securities", "Lower: prices fall when rates rise", "More market risk than the headline ratio shows"],
          ["Illiquid or affiliated assets", "Lowest: may be unsellable in a run", "Extra risk; composition matters more than the ratio"]
        ],
      },
      { type: "h2", text: "Monthly Attestations: How Verification Works" },
      { type: "p", text: "Monthly reserve attestations are the GENIUS framework regular check on issuer claims. An independent party examines the issuer reserves and confirms, in a public report, that the reserves exist and match the coins outstanding. Attestations are not the same as full financial audits. An audit examines an entire company finances in depth, while an attestation focuses on the specific claim that reserves equal circulation at a point in time. That narrower scope is still valuable, because it gives traders a dated, third-party check rather than the issuer word alone. Over months, a consistent record of clean attestations builds confidence. A missed attestation, a qualified attestation, or a sudden change in reserve composition is a warning sign worth investigating before holding more." },
      { type: "p", text: "Traders should read attestations with a critical eye. Check the date: an attestation from three months ago says nothing about today. Check the attestor: a reputable independent firm carries more weight than an unknown one. Check whether the attestation covers all coins in circulation or only a subset, and whether it reports the reserve breakdown or just a single total. And check whether the issuer has ever restated an attestation or changed attestors abruptly, both of which can signal problems. Attestations are a tool, not a guarantee. They reduce the risk of outright reserve fraud, but they do not eliminate market risk, operational risk, or the risk that an issuer banking partner fails. For a plain-language overview of the law itself, see the companion guide on the [GENIUS Act](/blog/genius-act-explained-traders-2026) and the [glossary](/glossary)." },
      { type: "h2", text: "What Happens If Reserves Fall Short" },
      { type: "p", text: "If an issuer reserves fall below circulation, the consequences under the framework can include regulatory action, restrictions on issuance, and in serious cases loss of the license to issue. In market terms, the consequences are faster: holders who learn of a shortfall rush to redeem, the peg comes under pressure, and the stablecoin may trade below a dollar on exchanges even if the issuer is still processing redemptions. This is why traders should never wait for official confirmation of a reserve problem before acting. By the time a shortfall is publicly confirmed, the market has usually already priced it. Traders who monitor attestations, reserve composition, and redemption behavior can spot deterioration early and reduce exposure before a crisis, rather than trying to exit during one." },
      { type: "p", text: "Redemption mechanics matter here too. Even a fully reserved issuer can face delays if its banking partners are slow, if redemption minimums are high, or if the issuer processes redemptions in batches rather than continuously. A trader holding a large stablecoin balance should know the redemption path before needing it: minimum amounts, processing times, fees, and whether redemption is available directly or only through an exchange. Stablecoin reserves are only useful if you can actually convert the coin into dollars when it matters. A stablecoin that is fully reserved but hard to redeem is safer than an unreserved one, but it is still a source of friction in a fast-moving market." },
      { type: "h2", text: "How Traders Can Check Reserves Themselves" },
      {
        type: "list",
        items: [
        "Find the issuer latest monthly attestation and confirm it is current, independent, and covers all coins in circulation.",
        "Read the reserve breakdown: favor cash and short-term government securities over longer-dated or affiliated assets.",
        "Check where reserves are held and whether they are segregated from the issuer operating funds.",
        "Track redemption behavior: are redemptions processing on time, and is the peg holding on major exchanges?",
        "Compare issuers side by side rather than trusting any single stablecoin brand by default."
        ],
      },
      { type: "p", text: "These checks take minutes and can prevent a costly surprise. They also fit naturally into a broader trading routine. A trader who runs [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) already compares prices across venues; comparing stablecoin reserve quality across issuers is the same habit applied to the settlement asset. The goal is not to become an auditor. It is to avoid holding a stablecoin whose backing you could not describe in one sentence. If you cannot say what backs your stablecoin, you are holding a risk you have not priced." },
      {
        type: "callout",
        title: "A 1:1 ratio is not the whole story",
        text: "Two stablecoins can both claim one-to-one reserves and carry very different risk. One backed by cash and short-term government securities is far safer than one backed by illiquid or affiliated assets. Always read the composition, not just the ratio.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you understand stablecoin reserve rules in plain language. Ask it to explain what counts as eligible reserves under GENIUS, how a monthly attestation differs from a full audit, or draft a checklist for comparing two stablecoin issuers reserve disclosures." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What are stablecoin reserves?",
            a: "The assets an issuer holds to back every coin in circulation. Under GENIUS, reserves must equal 100% of circulation in cash and highly liquid assets such as Treasury bills.",
          },
          {
            q: "What is a monthly reserve attestation?",
            a: "A public report by an independent party confirming that an issuer reserves exist and match coins outstanding. It is a focused check on reserves, not a full audit of the company.",
          },
          {
            q: "Does a 1:1 reserve ratio mean a stablecoin cannot depeg?",
            a: "No. A stablecoin can still depeg during a panic, an operational failure, or a banking problem. Full reserves reduce the risk but do not eliminate it.",
          },
          {
            q: "What reserve assets are safest?",
            a: "Cash at regulated banks and short-term government securities, held in segregated accounts. Longer-dated, illiquid, or affiliated assets carry more risk even at a 1:1 ratio.",
          }
        ],
      },
  ],
};
