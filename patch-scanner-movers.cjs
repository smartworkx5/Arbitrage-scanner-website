const fs = require('fs');
let code = fs.readFileSync('src/server/scanner.ts', 'utf8');

const newMethod = `
  public getExchangeMovers(exchangeId: string, limit: number = 20) {
    if (!this.priceCache.has(exchangeId)) {
      return { gainers: [], losers: [] };
    }
    const prices = this.priceCache.get(exchangeId)!;
    
    interface Mover {
      symbol: string;
      price: number;
      change24h: number;
      opp?: ArbitrageOpportunity;
    }
    
    const allMovers: Mover[] = [];
    for (const [symbol, ticker] of Object.entries(prices)) {
      if (ticker.change24h !== undefined && ticker.last && ticker.last > 0) {
        allMovers.push({
          symbol,
          price: ticker.last,
          change24h: ticker.change24h,
        });
      }
    }
    
    allMovers.sort((a, b) => b.change24h - a.change24h);
    
    const gainers = allMovers.slice(0, limit);
    const losers = allMovers.slice(-limit).reverse();
    
    // Find best opportunity for each gainer (where we sell on this exchange)
    const allOpps = this.cachedOpportunities;
    
    for (const g of gainers) {
      // Find an opp where sellExchange === exchangeId and symbol === g.symbol
      const bestOpp = allOpps.find((o) => o.symbol === g.symbol && o.sellExchange === exchangeId);
      if (bestOpp) g.opp = bestOpp;
    }
    
    for (const l of losers) {
      // Find an opp where buyExchange === exchangeId and symbol === l.symbol
      const bestOpp = allOpps.find((o) => o.symbol === l.symbol && o.buyExchange === exchangeId);
      if (bestOpp) l.opp = bestOpp;
    }
    
    return { gainers, losers };
  }
`;

// Insert the method just before `public getExchangeSpreads`
code = code.replace(
  '  public getExchangeSpreads(',
  newMethod + '\n\n  public getExchangeSpreads('
);

fs.writeFileSync('src/server/scanner.ts', code);
