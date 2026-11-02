import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "asic-efficiency-generations-compared-2026",
  title: "ASIC Generations Compared: Efficiency, Cost and Break-Even Power Prices",
  description: "ASIC efficiency has improved from over 100 to under 20 joules per terahash. Compare generations and find your break-even electricity price for your power price.",
  keywords: [
      "ASIC Generations",
      "bitcoin ASIC miners",
      "miner efficiency",
      "joules per terahash",
      "break-even electricity",
      "mining hardware"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Each ASIC generation uses less electricity per unit of computing power. That efficiency gap decides which miners survive a downturn.",
  image: "/images/blog/asic-efficiency-generations-compared-2026.svg",
  blocks: [
      { type: "p", text: "ASIC Generations of Bitcoin miners tell the story of an industry racing against physics and electricity prices. Early machines consumed over 100 joules per terahash, while the newest models use under 20, meaning the same computing power now costs a fifth of the energy. as of 2 Nov 2026, Bitcoin traded near $78,400, up about 1% in 24 hours, while Ether traded near $2,280, also up about 1%, gold spot traded near $3,900 an ounce after rebounding from a one-year low near $3,876 on 31 October, and the Fear and Greed Index stood at 37. At that price level, efficiency is the difference between a machine that earns its keep and one that should be switched off." },
      { type: "p", text: "Efficiency alone does not decide profitability, because purchase price, electricity cost, and network conditions matter too. A cheap old machine on very cheap power can out-earn an expensive new machine on costly power, and that trade-off shapes where miners operate and when they upgrade. This article compares generations on efficiency, cost, and break-even power prices, with the [glossary](/glossary) for efficiency terms and the [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) as a parallel lesson in how small cost differences decide winners." },
      { type: "h2", text: "Measuring efficiency: joules per terahash" },
      { type: "p", text: "Efficiency is measured in joules per terahash, often written J/TH, which states how much energy a machine uses to perform one trillion hashes per second. Lower is better. A machine rated at 20 J/TH running at 200 terahashes per second consumes about 4,000 watts, while a machine rated at 40 J/TH at the same hashrate consumes about 8,000 watts. Over a year, that difference is tens of thousands of kilowatt-hours, and at industrial power prices it can exceed the machine's purchase price." },
      { type: "p", text: "Manufacturers quote efficiency at ideal conditions, so real-world figures are usually worse. Heat, dust, firmware settings, and power supply losses all add overhead, and overclocking a machine for more hashrate raises efficiency numbers further. Compare machines on independently measured efficiency where possible, and budget for cooling and infrastructure power on top of the miner's rated draw, because data centre overhead can add 10 to 30 percent to total consumption." },
      { type: "h2", text: "Generations side by side" },
      { type: "p", text: "The first commercial ASICs, from the early 2010s, were revolutionary against graphics cards but consumed well over 100 J/TH. By the late 2010s, machines in the 60 to 90 J/TH range dominated, and the 2020 generation brought efficiency into the 30 to 40 J/TH range. The most recent generations, built on advanced chip processes, reach roughly 15 to 25 J/TH, with the best models at the lower end and budget models higher. Each step required new chip designs and larger capital investment, which is why manufacturing has concentrated among a few firms." },
      { type: "p", text: "That concentration matters for buyers. When only a few manufacturers produce competitive machines, prices and availability follow their production cycles, and miners may wait months for delivery. Buying an older generation second-hand can be rational when prices are low and power is cheap, but the buyer inherits shorter remaining economic life: the next difficulty rise or price fall retires old machines first, leaving little resale value." },
      {
        type: "list",
        items: [
        "Rated power draw in watts",
        "Hashrate in terahashes per second",
        "Joules per terahash efficiency",
        "Purchase price and delivery time",
        "Your all-in electricity price"
        ],
      },
      { type: "h2", text: "Break-even electricity maths" },
      { type: "p", text: "Break-even power price is the electricity price at which a machine's daily revenue exactly covers its daily electricity cost, before other expenses. Calculate it by dividing daily revenue, from hashprice multiplied by the machine's hashrate, by daily electricity consumption in kilowatt-hours. A machine earning $10 a day and consuming 100 kilowatt-hours breaks even at 10 cents per kilowatt-hour; above that price it loses money on power alone, and below it, it covers power with room for other costs." },
      { type: "p", text: "This single number lets miners compare machines fairly. A new efficient machine may break even at 15 cents, while an old machine breaks even at 5 cents, so the old machine is viable only where power is exceptionally cheap, such as curtailed hydro or stranded gas sites. Run the calculation at several hashprice levels, because a machine profitable at today's hashprice may be unprofitable after the next difficulty rise, and use conservative revenue assumptions that include pool fees and downtime." },
      {
        type: "table",
        headers: ["Generation era", "Typical efficiency", "Break-even power"],
        rows: [
          ["Early ASICs", "Over 100 J/TH", "Very low only"],
          ["Late 2010s", "60-90 J/TH", "Low"],
          ["2020 generation", "30-40 J/TH", "Moderate"],
          ["Latest generation", "15-25 J/TH", "Highest"]
        ],
      },
      { type: "h2", text: "When to upgrade and when to wait" },
      { type: "p", text: "Upgrading makes sense when the new machine's efficiency gain, applied to your actual power price, repays its purchase cost within its expected economic life, with a margin for difficulty growth. A common mistake is upgrading during a bull market, when machine prices are highest and payback assumptions are most optimistic, only to face falling prices and rising difficulty after delivery. Buying during downturns, when machines are cheap, often produces better returns even though sentiment is poor." },
      { type: "p", text: "Waiting makes sense when your current machines still cover power and maintenance, your power contract is short, or a new generation is expected soon. Also consider non-energy factors: noise, heat, maintenance skills, and hosting availability. A machine that is efficient on paper but unreliable in your facility, or that your host cannot cool, will underperform a slightly less efficient machine that runs continuously. Efficiency is the headline, but uptime is the multiplier." },
      {
        type: "callout",
        title: "Risk note",
        text: "Mining hardware loses value as newer generations appear, and break-even calculations based on today's hashprice can turn negative quickly. Never buy miners on credit against optimistic price assumptions.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain joules per terahash in simple words and help you calculate a break-even electricity price for a specific machine. It can also compare two miner models side by side in plain language." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What does joules per terahash mean?",
            a: "It measures energy used per trillion hashes per second. Lower numbers mean a more efficient machine that earns more revenue per unit of electricity.",
          },
          {
            q: "How do I calculate break-even power price?",
            a: "Divide daily revenue, from hashprice times hashrate, by daily electricity use in kilowatt-hours. The result is the highest power price at which the machine covers its electricity cost.",
          },
          {
            q: "Is the newest machine always the best buy?",
            a: "Not necessarily. Purchase price, delivery time, and your power price matter too. A cheap older machine on very cheap power can beat an expensive new machine on costly power.",
          },
          {
            q: "Why do old machines retire first?",
            a: "When hashprice falls or difficulty rises, the least efficient machines cross break-even first. Their owners switch them off, and their resale value falls sharply.",
          }
        ],
      },
  ],
};
