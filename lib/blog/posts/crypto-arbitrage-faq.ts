import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-arbitrage-faq",
  title: "Crypto Arbitrage FAQ: 30 Questions Answered",
  description: "New to crypto arbitrage? Get clear answers to 30 common questions about spreads, fees, exchanges, risks, bots, and how arbitrage actually works in practice.",
  keywords: [
      "crypto arbitrage",
      "crypto arbitrage questions",
      "arbitrage trading FAQ",
      "how does crypto arbitrage work",
      "arbitrage spreads",
      "crypto arbitrage beginner"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 12,
  category: "Basics",
  excerpt: "Thirty honest answers to the questions every beginner asks about crypto arbitrage: spreads, fees, bots, risks, capital, and what actually works.",
  image: "/images/blog/crypto-arbitrage-faq.svg",
  blocks: [
      { type: "p", text: "Crypto arbitrage sounds simple: buy low on one exchange, sell high on another, and keep the difference. In practice, it is a race against fees, transfer times, liquidity, and risk, and the traders who succeed are the ones who understand all four. This guide answers the thirty questions beginners ask most, with honest, hype-free answers. The timing is a good reminder of why the details matter. On Oct 17, 2026, Bitcoin traded near $81,300 with a 24-hour range from about $80,707 to $82,836, Ethereum near $2,421, and more than $830 million in liquidations had hit the market the previous day. In a market that moves that fast, a spread that looks profitable on screen can vanish before a transfer confirms. Read this guide before risking real money." },
      { type: "h2", text: "What Arbitrage Is, and What It Is Not" },
      { type: "p", text: "Arbitrage is the practice of profiting from a price difference for the same asset in two places. In crypto, the same coin can trade at slightly different prices on different exchanges, or between spot and futures markets, or between a centralized exchange and a decentralized one. These gaps exist because markets are not perfectly connected: information, capital, and liquidity move at different speeds. Arbitrageurs close the gaps by buying where the price is low and selling where it is high, which pushes prices back toward each other. That is the useful role arbitrage plays. It makes markets more efficient, and it is why spreads are usually small and short-lived." },
      { type: "p", text: "What arbitrage is not is risk-free money. Every form of arbitrage carries execution risk, fee risk, transfer risk, and counterparty risk. The gap you see on screen is the gross spread, not your profit. Your profit is what remains after trading fees, withdrawal fees, network fees, slippage, funding costs, and taxes, and after accounting for the chance that the price moves while your funds are in transit. Anyone who promises guaranteed arbitrage profits is either mistaken or selling something. The rest of this guide walks through the mechanics honestly so you can judge opportunities for yourself. Start with [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and [CEX vs DEX arbitrage](/guides/cex-vs-dex-arbitrage) for the two most common forms." },
      { type: "h2", text: "Spreads, Fees, and Capital: The Math That Decides Everything" },
      { type: "p", text: "The math of arbitrage is unforgiving, and it is where most beginners lose money. Suppose Bitcoin trades at $81,300 on Exchange A and $81,500 on Exchange B. The gross spread is $200, or about 0.25%. That looks tempting. Now subtract a 0.1% taker fee on the buy, a 0.1% taker fee on the sell, a withdrawal fee, and a network fee. You are already near zero. Add slippage if your order is large relative to the order book, and the trade can easily lose money. Add a price move during a 10-minute transfer, and it can lose much more. This is why experienced arbitrageurs obsess over fee schedules, order book depth, and transfer times. The spread is the starting point, not the answer." },
      { type: "p", text: "Capital matters because spreads are usually thin. A 0.2% net edge on $1,000 is $2. The same edge on $100,000 is $200, but it also demands far more attention to slippage, withdrawal limits, and counterparty risk. Beginners should start with small amounts and treat the first weeks as paid education. Measure your true all-in costs across several trades, including the trades that fail, before scaling up. And keep records: without a log of gross spreads, fees, slippage, and outcomes, you cannot tell whether a strategy works or whether you got lucky. For a comparison of venues, see the [arbitrage](/arbitrage) hub and [Binance vs Kraken](/arbitrage/binance-vs-kraken)." },
      {
        type: "list",
        items: [
        "Gross spread minus all fees is the only number that matters.",
        "Transfer time is risk: prices move while funds are in transit.",
        "Slippage grows with order size relative to order book depth.",
        "Small capital means small absolute profits even on good spreads.",
        "Log every trade: gross spread, fees, slippage, outcome."
        ],
      },
      { type: "h2", text: "Bots, Speed, and the Competition" },
      { type: "p", text: "Most visible arbitrage today is done by bots, because machines react in milliseconds while humans take seconds. That does not mean a beginner has no chance. It means the easy, obvious spreads are usually gone before a human can act, and the remaining opportunities involve trade-offs bots also face: slow transfers, withdrawal limits, thin books, or stressed markets. Bots help with monitoring and execution, but they do not remove risk. A bot can execute a losing trade faster than a human, and a badly configured bot can repeat the same mistake all day. If you use a bot, understand exactly what it does, test it with tiny amounts, set hard loss limits, and never give it withdrawal permissions it does not need." },
      {
        type: "callout",
        title: "The golden rule",
        text: "If a spread looks too good to be true, it usually carries a risk you have not priced yet: a frozen withdrawal, a fake price, a thin order book, or a transfer delay. Stop and find the catch before you trade.",
        tone: "warning",
      },
      { type: "h2", text: "Risks Beginners Underestimate" },
      { type: "p", text: "The risks that hurt arbitrageurs most are rarely the exotic ones. They are the ordinary ones: an exchange pauses withdrawals during volatility, a network congests and a transfer takes an hour instead of ten minutes, a stablecoin wobbles, or a fat-fingered order eats the book. Counterparty risk is the deepest of these. Funds held on an exchange are exposed to hacks, freezes, and insolvency. That is why experienced traders spread capital across venues, keep most funds in self-custody when not actively trading, and treat any single exchange as a risk, not a vault. The Oct 16, 2026 liquidation wave of more than $830 million is a reminder that stressed markets punish crowded positions and slow movers first." },
      { type: "p", text: "Taxes and record-keeping are the quiet risk. Many jurisdictions treat each leg of an arbitrage trade as a taxable event, and frequent trading creates a paperwork burden that surprises beginners. Check your local rules before scaling up, and keep clean records from day one. Regulation is also evolving: the GENIUS Act rules expected from the OCC by end of October 2026 and Australia digital-asset consultation show that the rulebook for stablecoins and exchanges is still being written. Staying compliant is part of the job, not an optional extra." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you learn arbitrage step by step. Ask it to explain spreads, fees, or slippage in simple words, compare two arbitrage strategies, or draft a research checklist you can work through before your first trade." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is crypto arbitrage in one sentence?",
            a: "Buying the same asset where it is cheaper and selling it where it is more expensive, keeping the difference after all fees and costs.",
          },
          {
            q: "Is crypto arbitrage risk-free?",
            a: "No. Execution delays, fees, slippage, transfer risk, depegs, and exchange counterparty risk can all turn a winning spread into a loss.",
          },
          {
            q: "What is a spread?",
            a: "The price gap for the same asset between two venues or markets, usually expressed as a percentage of price.",
          },
          {
            q: "Why do spreads exist?",
            a: "Because markets are not perfectly connected. Liquidity, capital, and information move at different speeds across exchanges.",
          },
          {
            q: "How long do spreads last?",
            a: "Usually seconds to minutes for obvious gaps. Larger gaps during stress can persist longer, but they carry higher risk.",
          },
          {
            q: "What fees eat arbitrage profits?",
            a: "Taker fees on both legs, withdrawal fees, network fees, funding costs, and slippage. All of them must come out of the gross spread.",
          },
          {
            q: "What is slippage?",
            a: "The difference between the price you expected and the price you actually got, because your order moved the market or the book changed.",
          },
          {
            q: "Do I need a lot of capital?",
            a: "Not to learn, but spreads are thin, so small capital means small absolute profits. Start small and treat early trades as education.",
          },
          {
            q: "What is cross-exchange arbitrage?",
            a: "Buying on one exchange and selling on another where the same coin trades higher, usually by transferring the coin between venues.",
          },
          {
            q: "What is funding rate arbitrage?",
            a: "Earning the funding payments in perpetual futures by holding an offsetting spot position, profiting from the funding rate rather than price direction.",
          },
          {
            q: "What is CEX vs DEX arbitrage?",
            a: "Exploiting price gaps between centralized exchanges and decentralized exchanges, where liquidity and pricing update at different speeds.",
          },
          {
            q: "What is triangular arbitrage?",
            a: "Profiting from mispricing among three trading pairs on the same exchange, for example BTC to ETH to USDT back to BTC.",
          },
          {
            q: "Why do transfers matter so much?",
            a: "Because prices move while funds are in transit. A slow or congested network can erase a spread before your coins arrive.",
          },
          {
            q: "Can I arbitrage without transferring coins?",
            a: "Yes, by holding balances on both exchanges and trading both legs at once. This avoids transfer risk but ties up more capital.",
          },
          {
            q: "Do arbitrage bots guarantee profits?",
            a: "No. Bots execute faster, but they can also execute losing trades faster. They need testing, limits, and supervision.",
          },
          {
            q: "Is arbitrage legal?",
            a: "In most places, yes, but rules vary by jurisdiction and are evolving. Check your local tax and trading rules before scaling up.",
          },
          {
            q: "How are arbitrage profits taxed?",
            a: "Often each leg counts as a taxable event. Rules differ by country, so keep clean records and get local advice.",
          },
          {
            q: "What is counterparty risk?",
            a: "The risk that an exchange, lender, or issuer fails, freezes funds, or is hacked while holding your capital.",
          },
          {
            q: "Can a stablecoin depeg hurt arbitrage?",
            a: "Yes. If the stablecoin you use to settle loses its peg, your profit can vanish or turn into a loss even if both legs executed well.",
          },
          {
            q: "What happens if an exchange freezes withdrawals?",
            a: "Your capital is trapped and the local price can detach from the market. A wide spread on a frozen venue is risk compensation, not free money.",
          },
          {
            q: "How do I find spreads?",
            a: "Use a scanner that compares prices across venues in real time, and always verify order book depth before trading a quoted spread.",
          },
          {
            q: "What is order book depth?",
            a: "How much volume sits near the best price. Thin books mean your order moves the price, causing slippage.",
          },
          {
            q: "Should beginners use leverage for arbitrage?",
            a: "No. Leverage magnifies losses from delays and adverse moves, and it adds liquidation risk to a strategy meant to be market-neutral.",
          },
          {
            q: "What is the biggest beginner mistake?",
            a: "Trading the gross spread instead of the net spread. Beginners forget fees, slippage, and transfer time until a winning screen becomes a losing trade.",
          },
          {
            q: "Can arbitrage lose money even if both legs fill?",
            a: "Yes, if fees and slippage exceed the spread, or if the settlement asset moves against you.",
          },
          {
            q: "How much time does arbitrage take?",
            a: "Monitoring can be near-continuous, since spreads appear and vanish at any hour. Automation helps, but supervision is still required.",
          },
          {
            q: "What is the best exchange pair for arbitrage?",
            a: "There is no single best pair. It depends on fees, transfer options, liquidity, and the coins you trade. Compare venues before committing capital.",
          },
          {
            q: "Does arbitrage work in bear markets?",
            a: "Yes, spreads exist in all markets, but bear markets often bring wider spreads with higher counterparty and volatility risk.",
          },
          {
            q: "What records should I keep?",
            a: "Every trade: gross spread, fees, slippage, transfer times, and outcome. Without a log you cannot tell whether a strategy works.",
          },
          {
            q: "What is the first step for a beginner?",
            a: "Learn the mechanics with tiny amounts, measure your true all-in costs over many trades, and only scale up when the numbers prove the strategy works.",
          }
        ],
      },
  ],
};
