import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "usdc-depeg-2023-case",
  title: "The USDC Depeg: Case Study",
  description: "In March 2023 USDC fell below its dollar peg after a bank failure. A case study of bank-run mechanics in stablecoins — and what it means for traders in 2026.",
  keywords: [
      "USDC depeg",
      "USDC depeg 2023 case study",
      "stablecoin depeg",
      "USDC Silicon Valley Bank",
      "stablecoin bank run",
      "USDC peg"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "In March 2023, the second-largest stablecoin traded well below a dollar. The USDC depeg shows how bank-run mechanics work in stablecoins — and what has changed since.",
  image: "/images/blog/usdc-depeg-2023-case.svg",
  blocks: [
      { type: "h2", text: "The USDC Depeg: When a Dollar Coin Traded at 87 Cents" },
      { type: "p", text: "The USDC depeg of March 2023 is the most instructive stablecoin crisis in crypto history, and its mechanics still matter in 2026. USDC was — and remains — one of the largest and most trusted stablecoins, backed by cash and short-term Treasury bills held at regulated financial institutions. In March 2023, Silicon Valley Bank (SVB), which held a portion of USDC's cash reserves, collapsed. When Circle, USDC's issuer, disclosed that roughly $3.3 billion of its reserves were held at SVB, the market reacted instantly: USDC traded well below its dollar peg, falling to around 87 cents at the worst point on major exchanges. The depeg was not caused by fraud or by an algorithmic flaw. It was caused by the oldest mechanism in finance: a bank run. Holders who feared their dollars were trapped rushed to sell, the selling pushed the price down, and the falling price convinced more holders to sell. As of Oct 16, 2026, BTC trades near $82,200 and USDC trades at its peg — but the run mechanics that broke it in 2023 have not gone away, and every stablecoin holder should understand them." },
      { type: "p", text: "The key fact is that USDC's reserves were sound in aggregate but concentrated in one bank. The cash at SVB was a small share of total reserves, and the rest was held in Treasury bills and other banks. In a calm market, that concentration would not have mattered: the reserves exceeded the coins outstanding, and redemptions would have been honoured in full. But a bank run is not about solvency — it is about confidence and timing. When holders saw a headline linking USDC to a failed bank, they did not wait for an audit to confirm the reserves were adequate. They sold first and asked questions later. The selling overwhelmed the market makers who normally keep USDC at a dollar, and the peg broke. The lesson is that stablecoin safety is not just about reserve quality; it is about reserve structure, transparency, and the speed with which an issuer can prove that redemptions will be honoured. A coin with perfect reserves but slow, opaque communication can still depeg in a panic." },
      { type: "h2", text: "Bank-Run Mechanics in Stablecoins" },
      {
        type: "table",
        headers: ["Stage", "What happens", "USDC 2023 example"],
        rows: [
          ["Trigger", "A shock hits reserves or issuer", "SVB collapse, $3.3B reserve exposure disclosed"],
          ["Doubt", "Holders question redemption", "Social media and news amplify the fear"],
          ["Run", "Holders sell or redeem en masse", "USDC traded to ~87 cents"],
          ["Feedback", "Falling price fuels more selling", "Depeg deepens as market makers step back"],
          ["Resolution", "Authority or issuer restores confidence", "Regulators backstop SVB deposits; peg recovers"]
        ],
      },
      { type: "p", text: "The resolution stage is the part most people misremember. USDC did not recover because the market calmed down on its own. It recovered because US regulators announced that SVB depositors would be made whole, which removed the reserve doubt at the heart of the run. That is an uncomfortable truth for stablecoin design: the most credible stablecoins still depend, at the margin, on the banking system and on regulators. The 2023 depeg was therefore not a failure of the stablecoin model — it was a demonstration that the model is only as strong as its weakest banking link. In 2026, the better issuers have responded by diversifying reserves across multiple banks, holding more in Treasury bills, and publishing more detailed reserve breakdowns. Those are real improvements. But no stablecoin has eliminated the bank-run mechanism, because no stablecoin has eliminated the need for banks." },
      { type: "h2", text: "What Changed After the Depeg" },
      {
        type: "list",
        items: [
        "Reserve diversification: issuers spread cash across more banks and hold more in Treasury bills.",
        "Faster disclosure: issuers now publish reserve breakdowns and respond to crises in hours, not days.",
        "Regulatory pressure: stablecoin rules in major jurisdictions now target reserve quality and redemption timelines.",
        "Market discipline: traders now test stablecoin pegs during stress and rotate out of weaker coins faster.",
        "Contagion awareness: a stablecoin depeg now triggers immediate scrutiny of every other coin and venue."
        ],
      },
      { type: "p", text: "The market discipline point deserves emphasis. Before 2023, many traders treated all large stablecoins as interchangeable dollars. After the depeg, traders learned to discriminate: they watch reserve disclosures, track which banks hold the cash, and rotate capital at the first sign of trouble. That discrimination is healthy, but it also means that the next depeg could be faster and more violent, because capital now moves at the first hint of doubt. Arbitrage traders have a specific exposure here: if you hold an open arbitrage position denominated in a stablecoin that depegs, the settlement asset itself moves against you. The practical rule is to treat stablecoin choice as a risk decision, diversify across two or more reputable coins, and never assume a peg will hold during a crisis. For the broader stablecoin picture, see our [stablecoin landscape 2026](/blog) and [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Lessons for 2026 Stablecoin Holders" },
      { type: "p", text: "The 2026 lessons of the USDC depeg are concrete. First, diversify reserves and diversify your own holdings: no single coin, no single bank, no single point of failure. Second, verify: read the reserve attestations, check the auditor, and know where the cash actually sits. Third, plan for the run: assume that during a crisis you may not be able to redeem or sell at par, and size positions so that a temporary depeg is survivable. Fourth, watch the trigger events: bank failures, regulatory actions, and issuer disclosures are the moments when pegs break, and they arrive without warning. As of Oct 16, 2026, the macro backdrop is tense — US CPI at 3.7% year over year, PPI up 1.3% month over month, the FOMC decision due Oct 28, gold near $4,155 per ounce — and stress is exactly when bank-run mechanics activate. The USDC depeg ended well. The next one might not. The traders who treat every peg as a hypothesis, not a fact, will be the ones who survive it." },
      {
        type: "callout",
        title: "Risk note",
        text: "Stablecoins can depeg suddenly, even well-run ones. Never hold more in any single stablecoin than you can afford to see trade well below a dollar for days.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help you understand stablecoin risk by explaining bank-run mechanics and reserve models in simple words, and by comparing how different stablecoins handled past stress." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why did USDC depeg in 2023?",
            a: "Circle disclosed that $3.3 billion of USDC's reserves were held at Silicon Valley Bank, which had collapsed. Holders rushed to sell, the selling overwhelmed market makers, and USDC traded as low as around 87 cents.",
          },
          {
            q: "Was USDC insolvent during the depeg?",
            a: "No. Total reserves still exceeded coins outstanding. The depeg was a confidence crisis — a bank run — not an insolvency. Regulators' decision to backstop SVB deposits removed the doubt and the peg recovered.",
          },
          {
            q: "Can a stablecoin depeg again?",
            a: "Yes. Any stablecoin that depends on banks can face a run if holders doubt redemptions. Reserve diversification and faster disclosure reduce the risk but do not eliminate it.",
          },
          {
            q: "How should traders protect against a depeg?",
            a: "Diversify across two or more reputable stablecoins, read reserve attestations, size positions so a temporary depeg is survivable, and never assume a peg holds during a crisis.",
          }
        ],
      },
  ],
};
