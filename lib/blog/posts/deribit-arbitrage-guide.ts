import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "deribit-arbitrage-guide",
  title: "Arbitrage on Deribit: Options Focus",
  description: "Arbitrage on Deribit explained: options-focused venue guide covering liquidity, settlement, margin, and the spreads that actually exist, with trade examples.",
  keywords: [
      "Deribit arbitrage",
      "Deribit options guide",
      "arbitrage on Deribit",
      "Deribit options trading",
      "crypto options venue",
      "Deribit vs other exchanges",
      "options arbitrage Deribit"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Deribit is the leading venue for crypto options, and its deep options books create arbitrage structures that do not exist anywhere else — if you understand its rules.",
  image: "/images/blog/deribit-arbitrage-guide.svg",
  blocks: [
      { type: "h2", text: "Why Deribit Matters for Options Arbitrage" },
      { type: "p", text: "Arbitrage on Deribit starts with a fact that shapes the whole crypto options market: Deribit is the leading venue for crypto options, and a large share of global bitcoin and ether options open interest sits on its books. That concentration matters because arbitrage needs liquidity, and Deribit's options books are where the liquidity is. A trader looking for put-call parity gaps, volatility smile dislocations, or cross-venue spreads will usually find the deepest, most tradeable quotes on Deribit, and the thinnest elsewhere. The venue's dominance also means its prices often set the reference for the rest of the market, so spreads between Deribit and other venues can reflect genuine segmentation rather than noise." },
      { type: "p", text: "Deribit's focus is options and futures, not spot. That specialization shapes its user base: market makers, professional traders, and funds dominate, and retail flow is a smaller share than on spot exchanges. For an arbitrageur, a professional-dominated order book is both good and bad. It is good because quotes are tight, execution is fast, and the market is efficient. It is bad because the easy edges are competed away quickly, and the remaining spreads are small and short-lived. A trader approaching Deribit should expect a professional arena, not a playground. On October 17, 2026, with bitcoin near $81,300 to $81,600 and implied volatility still elevated after a heavy liquidation day, Deribit's options board was pricing real fear, and any spread had to be measured against that backdrop." },
      { type: "h2", text: "What Trades on Deribit" },
      { type: "p", text: "Deribit lists options and futures on bitcoin and ether, with a range of strikes and expiries from short-dated to long-dated. Options are the core product, and the venue supports the structures arbitrageurs use: single options, spreads, straddles, strangles, and combinations, with portfolio margin for qualifying accounts. Futures include perps and dated contracts. Settlement is an area where traders must read the venue's current documentation carefully, because settlement currency, index construction, and exercise rules define what a position is actually worth. In general, Deribit contracts have historically been settled in crypto, and settlement prices are based on an index rather than a single exchange's print, which reduces the risk of manipulation at expiry but does not eliminate basis risk." },
      { type: "p", text: "Liquidity on Deribit is concentrated where you would expect: near-the-money strikes, near expiries, and the big assets. Far out-of-the-money strikes and long-dated expiries can be thin, with wide bid-ask spreads that make apparent arbitrage untradeable. A trader screening for spreads should filter by executable liquidity, not by headline open interest, and should check the depth of the book at the size they intend to trade. A spread that exists for one contract may not exist for fifty. The same discipline applies to comparing Deribit prices with other venues: compare executable quotes at the same timestamp, in the same settlement terms, or the comparison is meaningless." },
      {
        type: "list",
        items: [
        "Confirm the current settlement currency, index, and exercise rules in Deribit documentation.",
        "Filter spreads by executable liquidity at your intended size.",
        "Compare Deribit quotes with other venues at the same timestamp.",
        "Check margin requirements for every leg before opening a combination.",
        "Know the expiry calendar and settlement times for every contract you hold."
        ],
      },
      { type: "h2", text: "Arbitrage Structures That Work on Deribit" },
      { type: "p", text: "Several arbitrage structures are natural fits for Deribit's books. Put-call parity arbitrage, buying or selling combinations of calls, puts, and the underlying to exploit parity violations, works best where options are liquid, and Deribit is where they are most liquid. Volatility arbitrage, trading options against spot or futures to profit when implied volatility is out of line with realized volatility, benefits from Deribit's full range of strikes, which lets traders build precise volatility exposure. Smile and skew trades, such as risk reversals and vertical spreads, are practical on Deribit because the wings have enough depth to execute in reasonable size. Cross-venue arbitrage, buying an option on Deribit and selling the equivalent elsewhere, or the reverse, exploits the fact that other venues price the same risk differently." },
      { type: "p", text: "Each structure carries the same core risks: execution, margin, and model risk. Execution risk means the spread moves while you are legging into the trade. Margin risk means a position that starts neutral can become directional and trigger a margin call if the market moves sharply. Model risk means the pricing model you used to identify the edge may be wrong about volatility, rates, or settlement. Professional arbitrageurs manage these risks with automation, portfolio margin, and strict position limits. Retail traders should manage them with small sizes, defined maximum loss, and a rule to unwind if the trade moves against them. The classic cross-exchange framework in our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) applies here with an options accent: price every leg, including the hedge, before you trade." },
      {
        type: "table",
        headers: ["Structure", "What it exploits", "Main risk"],
        rows: [
          ["Put-call parity", "Call-put-spot mispricing", "Execution and hedging costs"],
          ["Volatility arbitrage", "Implied vs realized volatility gap", "Volatility regime change"],
          ["Skew and smile trades", "Relative pricing across strikes", "Directional move plus thin wings"],
          ["Cross-venue arbitrage", "Same option, different venue price", "Transfer and settlement mismatch"]
        ],
      },
      { type: "h2", text: "Margin, Risk, and Account Practicalities" },
      { type: "p", text: "Margin on Deribit is a subject that deserves careful study before any arbitrage, because options margin is more complex than spot margin. A trader holding combinations may qualify for portfolio margin, which recognizes that offsetting positions reduce risk and therefore requires less collateral than the sum of the individual legs. A trader holding naked short options, by contrast, faces large margin requirements that can rise sharply if the market moves. Liquidation mechanics, maintenance margins, and the treatment of expiring positions all affect whether a trade survives a volatile session. Traders should read the venue's current margin documentation, start with small sizes, and keep a buffer above the minimum margin so that an ordinary move does not trigger a liquidation." },
      { type: "p", text: "Account practicalities matter too. Access, identity verification, and deposit and withdrawal methods vary by jurisdiction, and traders should confirm that they can use the venue legally from their location before depositing funds. Tax treatment of options gains varies by jurisdiction, so traders should check current local rules rather than assuming a rate. Security practices are the same as on any exchange: strong unique passwords, two-factor authentication, withdrawal allowlists where available, and no sharing of credentials. Deribit's professional user base does not make it immune to the phishing, impersonation, and social-engineering attacks that target every crypto venue." },
      {
        type: "callout",
        title: "Naked short options are dangerous",
        text: "Selling options without a hedge exposes you to potentially large losses and rising margin calls. Beginners should stick to defined-risk structures with a known maximum loss.",
        tone: "warning",
      },
      { type: "h2", text: "A Sensible Deribit Workflow" },
      { type: "p", text: "A sensible Deribit workflow starts with observation, not trading. Watch a small set of liquid strikes, track the smile and the parity gap at fixed intervals, and compare Deribit quotes with one other venue at the same timestamp. Define your threshold in advance: a minimum net edge after all fees, a maximum position size, and a rule for unwinding. Rehearse the full structure on paper, including the hedge and the margin, before committing capital. When you do trade, use small sizes, keep the hedge tight, and close or manage positions before expiry rather than letting settlement surprise you. For the broader derivatives toolkit, see our [funding-rate arbitrage guide](/guides/funding-rate-arbitrage) and the [arbitrage hub](/arbitrage). Deribit rewards the prepared and the patient, and it punishes those who mistake a deep order book for easy money." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you learn Deribit's structures before you trade them. Ask it to explain portfolio margin versus isolated margin in plain language, or to draft a pre-trade checklist covering settlement, margin, expiry, and hedge costs for one options combination." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why is Deribit important for crypto options?",
            a: "Because a large share of global bitcoin and ether options open interest sits on Deribit, giving it the deepest options books and the tightest quotes in crypto.",
          },
          {
            q: "What arbitrage structures work on Deribit?",
            a: "Put-call parity arbitrage, volatility arbitrage, smile and skew trades like risk reversals, and cross-venue arbitrage against other options platforms.",
          },
          {
            q: "What is portfolio margin?",
            a: "A margin method that recognizes offsetting positions, so a hedged combination requires less collateral than the sum of its legs. It rewards hedged structures and requires careful risk management.",
          },
          {
            q: "Can beginners arbitrage on Deribit?",
            a: "Beginners should start by observing, paper-trading, and learning margin and settlement rules. Live arbitrage on a professional options venue requires preparation, small sizes, and defined-risk structures.",
          }
        ],
      },
  ],
};
