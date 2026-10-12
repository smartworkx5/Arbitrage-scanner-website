import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "aerodrome-velodrome-merge-aero-conversion-october-2026",
  title: "Aerodrome–Velodrome Merge (Oct 22): AERO Conversion Arbitrage Explained",
  description: "Aerodrome and Velodrome merge into AERO on Oct 22, 2026 (VELO at ~1:0.044). How the token conversion ratio anchors prices — and where mispricings appear.",
  keywords: [
      "Aerodrome Velodrome merge AERO",
      "VELO AERO conversion",
      "token merger arbitrage",
      "DeFi merger arbitrage",
      "AERO price"
  ],
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 8,
  category: "Markets",
  excerpt: "AERO converts 1:1, VELO at ~1:0.044 on October 22, 2026. How the fixed ratio creates a price anchor across DEXs, where mispricings appear, and the risks the math hides.",
  image: "/images/blog/aerodrome-velodrome-merge-aero-conversion-october-2026.svg",
  blocks: [
      { type: "p", text: "The Aerodrome Velodrome merge, scheduled for October 22, 2026, is a live laboratory for conversion arbitrage: two DEX governance tokens consolidating into one, with a fixed conversion ratio that creates a price anchor — and temporary mispricings — across every venue that lists them. Existing AERO converts 1:1 into the merged token while VELO converts at approximately 1:0.044, which means the market has a hard mathematical relationship to price against, and any deviation from it is a measurable gap. This article explains the mechanics, where the mispricings appear, and why merger arbitrage in DeFi is riskier than the math suggests." },
      { type: "h2", text: "The Deal: What Happens on October 22" },
      { type: "p", text: "Aerodrome (the leading DEX on Base) and Velodrome (its Optimism counterpart) are merging their liquidity and governance into a single AERO token on October 22, 2026. The conversion terms are straightforward: AERO holders swap 1:1, while VELO holders receive approximately 0.044 AERO per VELO. The economic logic is consolidation — one token, one governance system, deeper combined liquidity — but for traders the interesting part is the window between now and execution, when two tokens with a fixed future relationship trade freely. [DEX aggregators](/blog/dex-aggregator-arbitrage) will be routing through both pools right up to the merge." },
      { type: "p", text: "Context: the merge lands in a market still digesting October volatility — BTC near $83,650 on October 12 after the $80,420 low, ETH around $2,542. Risk appetite for DeFi governance tokens is fragile, which cuts both ways: mispricings may be larger, but so is the chance the broader market overwhelms merger-specific pricing." },
      { type: "h2", text: "How the Conversion Ratio Creates a Price Anchor" },
      { type: "p", text: "The ~1:0.044 ratio is an anchor: in a frictionless market, VELO should trade at 4.4% of AERO's price, because one VELO will become 0.044 AERO. Any sustained deviation is, arithmetically, a mispricing — buy the cheap side, sell the rich side, convert at the merge, pocket the difference. This is the same logic as traditional merger arbitrage, ported to tokens with on-chain settlement. [AMM price inefficiencies](/blog/amm-price-inefficiencies) are where these deviations show up first." },
      { type: "p", text: "The anchor only holds if conversion is certain and frictionless. It is neither: governance votes can alter terms, the merge can be delayed, liquidity migrates unevenly between chains (Base vs Optimism), and the \"approximately\" in 1:0.044 deserves attention — final ratios in token mergers have been adjusted before. Price the deviation against those risks, not against the arithmetic alone." },
      { type: "h2", text: "Where the Mispricings Actually Appear" },
      {
        type: "list",
        items: [
        "**Cross-DEX VELO/AERO ratio gaps:** different AMM pools update at different speeds as AERO's price moves; the implied ratio drifts between venues.",
        "**CEX vs DEX:** centralized listings of VELO/AERO reprice on order-book dynamics while AMM pools reprice on arbitrage — the two mechanisms disagree during fast moves.",
        "**Pre-merge liquidity thinning:** market makers widen quotes into the October 22 event, creating wider but less fillable gaps.",
        "**Post-announcement drift:** if AERO rallies on merger optimism while VELO lags (or vice versa), the ratio stretches before converters step in."
        ],
      },
      { type: "p", text: "The practical setup is a ratio trade: long the relatively cheap token, short the relatively rich one in ratio-adjusted size (for example, long 1,000 VELO against short 44 AERO), then convert at the merge. In DeFi, the \"short\" leg is usually done on a perpetuals venue or by borrowing — both add funding or borrow costs that eat the edge daily. With days to go until the merge, a 2% ratio deviation needs to survive daily carry costs to pay. [Layer-2 arbitrage](/blog/layer-2-arbitrage) dynamics apply here, since both tokens live on L2s with their own liquidity quirks." },
      { type: "h2", text: "The Risks the Arithmetic Hides" },
      { type: "p", text: "Merger arbitrage looks risk-free on a spreadsheet and isn't. Governance risk: token-holder votes or team decisions can change terms or timing. Liquidity migration risk: as liquidity moves to the merged pools, the old VELO pools you need for exit can thin out — your entry was liquid, your exit may not be. Smart-contract risk: the conversion itself runs through new contracts. And market risk: a 10% market-wide drop (October 9 showed how fast that happens, BTC to $80,420) swamps a 2% ratio edge unless the position is properly hedged. [Funding rates](/blog/funding-rates-explained) on the short leg can also turn against you if sentiment shifts." },
      {
        type: "callout",
        title: "Event-risk warning",
        text: "Token-merger \"arbitrage\" is event-driven speculation with a known catalyst date, not risk-free profit. Ratio deviations can widen far beyond your entry before converging — or never converge if terms change. Size for the possibility that the merge is delayed, repriced, or overwhelmed by market moves.",
        tone: "warning",
      },
      {
        type: "faq",
        items: [
          {
            q: "What is the Aerodrome-Velodrome merge?",
            a: "A consolidation of the two DEXs' tokens into a single AERO token on October 22, 2026 — AERO converts 1:1, VELO at ~1:0.044.",
          },
          {
            q: "How do you trade the conversion ratio?",
            a: "By taking offsetting positions when VELO's price deviates from 4.4% of AERO's, sized by the ratio, and converting at the merge. Carry costs (funding/borrow) accrue daily until then.",
          },
          {
            q: "What is the biggest risk?",
            a: "Term changes or delays via governance, plus liquidity thinning in the old pools before conversion. The arithmetic is certain; the event is not.",
          },
          {
            q: "Can small traders participate?",
            a: "The math works at any size, but gas costs on entry, exit, and conversion make small positions uneconomical — and the short leg requires a venue with borrow or perps.",
          }
        ],
      },
  ],
};
