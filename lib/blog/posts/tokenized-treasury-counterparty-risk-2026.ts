import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "tokenized-treasury-counterparty-risk-2026",
  title: "Who Actually Holds the T-Bills Behind Your Token?",
  description: "Trace who actually holds the T-bills behind your token in 2026: issuer, custodian and fund layers, and where token holder claims really sit if trouble hits.",
  keywords: [
      "T-Bills Behind Your Token",
      "treasury token custodian",
      "tokenized treasury counterparty risk",
      "fund issuer layers",
      "treasury token claims"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 10,
  category: "Risk",
  excerpt: "Behind every treasury token sits a chain of issuers, custodians and funds. Your claim depends on that chain, and the weakest link decides what you recover if it breaks.",
  image: "/images/blog/tokenized-treasury-counterparty-risk-2026.svg",
  blocks: [
      { type: "p", text: "T-Bills Behind Your Token are rarely held directly by you, and that distance is the central counterparty question in tokenized treasuries. When you buy a treasury token, you usually buy a token issued by a fund or company, which in turn holds T-bills through a custodian, which in turn holds them through clearing and settlement systems. Market odds of about 80 percent, as of 2 Nov 2026, pointed to a Federal Reserve rate hike in December 2026, according to reports dated 2 Nov 2026, and interest in treasury-backed tokens is high, but enthusiasm should not skip the mapping exercise: who holds what, for whom, and under what legal arrangement? If you cannot trace that chain, you cannot judge your real risk." },
      { type: "h2", text: "Mapping the Issuer, Custodian and Fund Layers" },
      { type: "p", text: "Start with the issuer, the entity that creates and sells the token. The issuer may be a fund, a trust, or a special-purpose company, and its legal form determines what token holders own. In a fund structure, holders typically own shares or units in the fund, and the fund owns the T-bills. In a debt structure, holders may own a tokenised note, which is a claim against the issuer rather than ownership of fund assets. These are different claims with different outcomes in failure, so the offering documents, not the marketing page, are the authoritative source. If the documents are hard to find or hard to understand, that itself is a warning sign." },
      { type: "p", text: "Next comes the custodian, the bank or regulated firm that actually holds the T-bills. A strong custodian holds client assets in segregated accounts, separate from its own balance sheet, so that the issuer's creditors cannot simply seize them if the issuer fails. A weaker arrangement may pool assets or rely on contractual promises without segregation, leaving holders exposed to the custodian's or issuer's other problems. Ask for the custodian name, the account structure, and whether an independent auditor verifies holdings. The [glossary](/glossary) explains custody and segregation, and the [arbitrage guide](/guides/cross-exchange-arbitrage) shows why claims matter when an asset trades across venues at different prices." },
      { type: "h2", text: "Where Token Holder Claims Really Sit" },
      { type: "p", text: "Token holder claims sit at the end of a priority chain, and their position depends on the structure. In a well-designed fund, token holders are the beneficial owners of the fund assets, and the fund's assets should be available to them ahead of the fund manager's own creditors. In a debt structure, token holders are creditors of the issuer, ranking alongside or behind other creditors, and they may recover only part of their investment if the issuer has other debts. In some structures, holders have no direct claim on the T-bills at all, only a contractual promise from an intermediary, which is the weakest position of all." },
      {
        type: "table",
        headers: ["Structure", "What holders own", "Failure outcome"],
        rows: [
          ["Fund shares or units", "Beneficial interest in fund assets", "Fund assets should be ring-fenced for holders"],
          ["Tokenised note or debt", "Creditor claim against issuer", "Holders rank with other creditors"],
          ["Intermediary promise only", "Contractual claim, no asset backing", "Recovery depends on intermediary solvency"],
          ["Direct T-bill ownership", "The T-bill itself", "Strongest claim, but not tokenized"]
        ],
      },
      { type: "p", text: "Jurisdiction adds another layer. The issuer, the custodian, the fund and the token holder may all sit in different countries, and insolvency law differs by jurisdiction. A structure that looks clean in one country may be tested very differently in another, and cross-border recovery can be slow and expensive. This does not mean every multi-jurisdiction structure is unsafe, but it does mean holders should not assume that familiar domestic protections automatically apply. Professional advice is warranted for large positions, because the documents and jurisdictions involved are genuinely complex." },
      { type: "h2", text: "Operational Risks Between the Layers" },
      { type: "p", text: "Even when the legal structure is sound, operational links can fail. The token contract may be upgradeable by a key holder, the minting process may depend on a single administrator, or the redemption process may require manual steps that stall during stress. A custodian may use a sub-custodian, adding another link, and each link needs its own controls. Reconciliation between the on-chain token supply and the off-chain T-bill holdings is critical: if more tokens are minted than T-bills held, even briefly, later holders bear the shortfall. Regular, independent reconciliation and public reporting reduce this risk, but they do not eliminate it." },
      {
        type: "list",
        items: [
        "Identify the issuer, fund, custodian and any sub-custodian by name",
        "Confirm whether holder assets are segregated from issuer assets",
        "Read the claim type: fund interest, creditor claim, or contractual promise",
        "Check audit frequency and who performs the audit",
        "Ask how redemption works if the issuer or custodian fails"
        ],
      },
      { type: "p", text: "Recent market events underline why withdrawal and redemption mechanics deserve scrutiny. Binance, as of 2 Nov 2026, said about 95 percent of the roughly 6.3 billion dollars in stolen tokens was covered, with 3.64 billion dollars in net outflows in the first 9.5 hours after withdrawals resumed on 1 November. That episode involved a different asset and venue, but the lesson transfers: when confidence wobbles, users rush to redeem or withdraw, and the speed and reliability of that process become the product. A treasury token whose redemption queue lengthens under stress may trade at a discount long before any legal failure occurs." },
      { type: "h2", text: "Questions to Ask Before Buying" },
      { type: "p", text: "Before buying a treasury token, write down the answers to five questions. Who is the issuer, and what exactly do I own? Who is the custodian, and are assets segregated? Who audits holdings, and how often? How do I redeem, how fast, and what can pause redemption? What happens if the issuer fails, in which jurisdiction, and in what order are holders paid? If any answer is vague, missing, or contradicted by the documents, reduce the position size or choose a simpler product. Simplicity is a feature in treasury investing, because every added layer is another party that must behave correctly for you to be paid." },
      {
        type: "callout",
        title: "Warning: do not trust the token name alone",
        text: "A token called a treasury token may give you only a contractual claim against an intermediary, with no direct claim on any T-bill. Verify the issuer, custodian, segregation and claim type in the offering documents before committing significant funds.",
        tone: "warning",
      },
      { type: "p", text: "Tokenized treasuries can be genuinely useful, bringing short-term government debt into on-chain workflows, but their safety is only as strong as their weakest layer. Compare structures, not just yields, and use the [best scanners list](/best-crypto-arbitrage-scanners) for cross-venue context where relevant. A product that answers the five questions clearly, with named custodians, segregated accounts and independent audits, deserves more trust than one that answers them with slogans, however familiar its name may be." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain issuer, custodian and fund layers in simple words and help you draft the five claim questions to ask before buying a treasury token. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Who holds the T-bills behind a treasury token?",
            a: "Usually a custodian holds them for a fund or issuer, which in turn issues tokens to investors. Token holders generally own a fund interest or a claim against the issuer, not a specific T-bill directly.",
          },
          {
            q: "What does segregated custody mean?",
            a: "Segregated custody means client assets are held separately from the custodian's or issuer's own assets, so they should not be available to the firm's own creditors if it fails.",
          },
          {
            q: "What happens if the issuer fails?",
            a: "It depends on the structure. Fund holders may have a claim on ring-fenced fund assets, while note holders rank as creditors, and holders of a mere contractual promise depend on the intermediary's solvency.",
          },
          {
            q: "How can I verify backing?",
            a: "Look for a named custodian, segregated accounts, and regular independent audits or attestations. Be cautious if backing claims cannot be checked against named parties and published reports.",
          }
        ],
      },
  ],
};
