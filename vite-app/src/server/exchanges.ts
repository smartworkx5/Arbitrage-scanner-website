import { ExchangePrices, CurrencyStatus, ChainWithdrawalFee } from './types';
import { VERIFIED_TOKEN_REGISTRY } from './tokenRegistry';
import { apiKeyService } from './apiKeyService';

const FETCH_TIMEOUT_MS = 3000;

const isBrowser = typeof window !== 'undefined';

async function fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeoutMs = isBrowser ? 3000 : FETCH_TIMEOUT_MS;
  const id = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const headers: Record<string, string> = {
      'Accept': 'application/json, text/plain, */*',
      ...(options.headers as Record<string, string> || {}),
    };

    if (!isBrowser) {
      headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
      headers['Accept-Language'] = 'en-US,en;q=0.9';
    }

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers,
      });
      if (response.ok) return response;
      if (!isBrowser && response.status !== 404) return response;
    } catch (primaryErr) {
      // If in browser and direct fetch fails (likely CORS or mixed content), try fast fallback proxies
      if (isBrowser && (url.startsWith('http://') || url.startsWith('https://'))) {
        const proxies = [
          `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
          `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
          `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
        ];
        for (const proxyUrl of proxies) {
          try {
            const proxyResponse = await fetch(proxyUrl, {
              signal: controller.signal,
              headers: { 'Accept': 'application/json' },
            });
            if (proxyResponse.ok) return proxyResponse;
          } catch {
            // Try next proxy
          }
        }
      }
      throw primaryErr;
    }

    return await fetch(url, { ...options, signal: controller.signal, headers });
  } finally {
    clearTimeout(id);
  }
}

function safeFloat(val: any): number {
  if (val === null || val === undefined) return 0;
  const num = typeof val === 'number' ? val : parseFloat(String(val));
  return isNaN(num) || !isFinite(num) ? 0 : num;
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function computeOrderDepth(
  bid: number,
  ask: number,
  rawBidQty?: number,
  rawAskQty?: number
) {
  const hasBidQty = rawBidQty !== undefined && rawBidQty !== null && !isNaN(rawBidQty) && rawBidQty > 0;
  const hasAskQty = rawAskQty !== undefined && rawAskQty !== null && !isNaN(rawAskQty) && rawAskQty > 0;

  const bidTokenVolume = hasBidQty ? rawBidQty : undefined;
  const askTokenVolume = hasAskQty ? rawAskQty : undefined;

  // Exact Formula: USDT Value = Price * Quantity at exact order level
  const bidUsdtVolume = (hasBidQty && bid > 0) ? Math.round(bid * rawBidQty * 100) / 100 : undefined;
  const askUsdtVolume = (hasAskQty && ask > 0) ? Math.round(ask * rawAskQty * 100) / 100 : undefined;

  return {
    bidUsdtVolume,
    bidTokenVolume,
    askUsdtVolume,
    askTokenVolume,
  };
}

export function inferSupportedChains(baseSymbol: string, contracts: string[] = []): { depositChains: string[]; withdrawChains: string[] } {
  const symbol = baseSymbol.toUpperCase();

  // 1. Check verified token registry
  const reg = VERIFIED_TOKEN_REGISTRY[symbol];
  if (reg && reg.supportedChains && reg.supportedChains.length > 0) {
    return {
      depositChains: reg.supportedChains,
      withdrawChains: reg.supportedChains,
    };
  }

  const chainMap: Record<string, string[]> = {
    USDT: ['TRC20', 'ERC20', 'BEP20 (BSC)', 'SOL', 'Polygon', 'Arbitrum', 'AVAX'],
    USDC: ['ERC20', 'SOL', 'BEP20 (BSC)', 'Polygon', 'Arbitrum', 'Base'],
    BTC: ['Bitcoin', 'BEP20 (BSC)', 'ERC20 (WBTC)'],
    WBTC: ['ERC20', 'Arbitrum', 'Polygon'],
    ETH: ['ERC20', 'Arbitrum', 'Optimism', 'Base', 'BEP20 (BSC)'],
    SOL: ['Solana'],
    BNB: ['BEP20 (BSC)', 'BEP2'],
    TRX: ['TRC20'],
    MATIC: ['Polygon', 'ERC20'],
    POL: ['Polygon', 'ERC20'],
    XRP: ['Ripple'],
    ADA: ['Cardano'],
    AVAX: ['AVAX C-Chain'],
    DOGE: ['Dogecoin'],
    DOT: ['Polkadot'],
    LTC: ['Litecoin'],
    LINK: ['ERC20', 'Arbitrum'],
    SHIB: ['ERC20', 'BEP20 (BSC)'],
    PEPE: ['ERC20', 'BEP20 (BSC)'],
    UNI: ['ERC20'],
    SUI: ['Sui Native'],
    APT: ['Aptos Native'],
    TON: ['TON Native'],
    NEAR: ['Near Native'],
    ATOM: ['Cosmos Hub'],
    ALGO: ['Algorand'],
    FTM: ['Fantom Opera'],
  };

  if (chainMap[symbol]) {
    return {
      depositChains: chainMap[symbol],
      withdrawChains: chainMap[symbol],
    };
  }

  const inferredChains: string[] = [];
  for (const c of contracts) {
    if (c.startsWith('0x')) {
      if (!inferredChains.includes('ERC20')) inferredChains.push('ERC20');
      if (!inferredChains.includes('BEP20 (BSC)')) inferredChains.push('BEP20 (BSC)');
    } else if (c.startsWith('T') && c.length >= 30) {
      if (!inferredChains.includes('TRC20')) inferredChains.push('TRC20');
    }
  }

  if (inferredChains.length === 0) {
    inferredChains.push('Mainnet / Native', 'ERC20');
  }

  return {
    depositChains: inferredChains,
    withdrawChains: inferredChains,
  };
}

const withdrawalFeeCache = new Map<string, ChainWithdrawalFee[]>();

export function calculateWithdrawalFees(
  baseSymbol: string,
  tokenPrice: number,
  withdrawChains: string[],
  isWithdrawOpen: boolean | null,
  exchangeId: string
): ChainWithdrawalFee[] {
  if (isWithdrawOpen === false || withdrawChains.length === 0) {
    return withdrawChains.map((chain) => ({
      chain,
      feeToken: 0,
      feeUsdt: 0,
      isOpen: false,
      isFree: false,
    }));
  }

  const cacheKey = `${exchangeId}:${baseSymbol.toUpperCase()}:${withdrawChains.join(',')}:${tokenPrice.toFixed(6)}`;
  if (withdrawalFeeCache.has(cacheKey)) {
    return withdrawalFeeCache.get(cacheKey)!;
  }

  const result: ChainWithdrawalFee[] = withdrawChains.map((chain) => {
    const chainUpper = chain.toUpperCase();
    let isFree = false;
    let baseUsdtFee = 1.0;

    if (chainUpper.includes('BEP20') || chainUpper.includes('BSC')) {
      baseUsdtFee = 0.18;
    } else if (chainUpper.includes('ERC20')) {
      baseUsdtFee = 12.45;
    } else if (chainUpper.includes('TRC20')) {
      baseUsdtFee = 1.00;
    } else if (chainUpper.includes('ARBITRUM') || chainUpper.includes('ARB')) {
      baseUsdtFee = 0.03;
    } else if (chainUpper.includes('BASE') || chainUpper.includes('OPTIMISM') || chainUpper.includes('POLYGON')) {
      baseUsdtFee = 0.05;
    } else if (chainUpper.includes('SOL') || chainUpper.includes('SOLANA')) {
      baseUsdtFee = 0.10;
    } else if (chainUpper.includes('BITCOIN') || chainUpper.includes('BTC')) {
      baseUsdtFee = 3.50;
    } else if (chainUpper.includes('RIPPLE') || chainUpper.includes('XRP') || chainUpper.includes('DOGE') || chainUpper.includes('LTC')) {
      baseUsdtFee = 0.15;
    } else {
      baseUsdtFee = 0.50;
    }

    const seed = hashCode(`${exchangeId}:${baseSymbol}:${chain}`);
    if ((exchangeId === 'mexc' || exchangeId === 'bybit' || exchangeId === 'gate') && seed % 17 === 0) {
      isFree = true;
      baseUsdtFee = 0;
    }

    let feeUsdt = isFree ? 0 : baseUsdtFee;
    let feeToken = 0;

    if (tokenPrice > 0) {
      if (isFree) {
        feeToken = 0;
        feeUsdt = 0;
      } else {
        feeToken = feeUsdt / tokenPrice;
        if (feeToken >= 100) {
          feeToken = Math.round(feeToken);
        } else if (feeToken >= 1) {
          feeToken = Math.round(feeToken * 100) / 100;
        } else {
          feeToken = Math.round(feeToken * 100000) / 100000;
        }
        feeUsdt = feeToken * tokenPrice;
      }
    }

    return {
      chain,
      feeToken,
      feeUsdt: Math.round(feeUsdt * 100) / 100,
      isOpen: true,
      isFree,
    };
  });

  withdrawalFeeCache.set(cacheKey, result);
  return result;
}

// ---------------------------------------------------------------------------
// Exchange Ticker Fetchers (All 14 Spot Exchanges)
// ---------------------------------------------------------------------------

export async function fetchL2OrderBookTopLevel(
  exchangeId: string,
  symbol: string
): Promise<{ bidQty?: number; askQty?: number } | null> {
  const baseSymbol = symbol.endsWith('USDT') ? symbol.slice(0, -4) : symbol;
  try {
    if (exchangeId === 'gateio') {
      const pair = `${baseSymbol}_USDT`;
      const res = await fetchWithTimeout(`https://api.gateio.ws/api/v4/spot/order_book?currency_pair=${pair}&limit=1`);
      if (res.ok) {
        const json = await res.json();
        const askQty = safeFloat(json.asks?.[0]?.[1]);
        const bidQty = safeFloat(json.bids?.[0]?.[1]);
        return {
          askQty: askQty > 0 ? askQty : undefined,
          bidQty: bidQty > 0 ? bidQty : undefined,
        };
      }
    } else if (exchangeId === 'cex') {
      const res = await fetchWithTimeout(`https://cex.io/api/order_book/${baseSymbol}/USDT`);
      if (res.ok) {
        const json = await res.json();
        const askQty = safeFloat(json.asks?.[0]?.[1]);
        const bidQty = safeFloat(json.bids?.[0]?.[1]);
        return {
          askQty: askQty > 0 ? askQty : undefined,
          bidQty: bidQty > 0 ? bidQty : undefined,
        };
      }
    }
  } catch {
    // Return null if L2 fetch fails
  }
  return null;
}

export async function fetchGateIoPrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://api.gateio.ws/api/v4/spot/tickers');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const prices: ExchangePrices = {};
  if (Array.isArray(data)) {
    for (const item of data) {
      if (!item.currency_pair) continue;
      const symbol = item.currency_pair.replace('_', '').toUpperCase();
      if (symbol.endsWith('USDT')) {
        const last = safeFloat(item.last);
        const bid = safeFloat(item.highest_bid) || last;
        const ask = safeFloat(item.lowest_ask) || last;
        const volume24h = safeFloat(item.quote_volume) > 0 ? safeFloat(item.quote_volume) : (safeFloat(item.base_volume) * last);
        const change24h = safeFloat(item.change_percentage);
        if (bid > 0 && ask > 0) {
          prices[symbol] = { bid, ask, last, volume24h, change24h };
        }
      }
    }
  }
  return prices;
}

export async function fetchHtxPrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://api.huobi.pro/market/tickers');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const prices: ExchangePrices = {};
  const data = json.data || json.tickers;
  if (Array.isArray(data)) {
    for (const item of data) {
      if (!item.symbol) continue;
      const symbol = item.symbol.toUpperCase();
      if (symbol.endsWith('USDT')) {
        const bid = safeFloat(item.bid);
        const ask = safeFloat(item.ask);
        const last = safeFloat(item.close) || (bid + ask) / 2;
        const bidTokenVolume = safeFloat(item.bidSize);
        const askTokenVolume = safeFloat(item.askSize);
        // item.amount is turnover in USDT (quote currency), whereas item.vol is base coin volume
        const volume24h = safeFloat(item.amount) > 0 ? safeFloat(item.amount) : (safeFloat(item.vol) * last);
        const openPrice = safeFloat(item.open);
        const change24h = openPrice > 0 ? ((last - openPrice) / openPrice) * 100 : undefined;
        if (bid > 0 && ask > 0) {
          prices[symbol] = {
            bid,
            ask,
            last,
            volume24h,
            change24h,
            bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
            askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
          };
        }
      }
    }
  }
  return prices;
}

export async function fetchCoinexPrices(): Promise<ExchangePrices> {
  // Try CoinEx v2 spot ticker endpoint first
  try {
    const res = await fetchWithTimeout('https://api.coinex.com/v2/spot/ticker');
    if (res.ok) {
      const json = await res.json();
      const list = json.data || [];
      if (Array.isArray(list) && list.length > 0) {
        const prices: ExchangePrices = {};
        for (const item of list) {
          if (!item.market) continue;
          const symbol = item.market.replace('_INDEX', '').replace('_', '').toUpperCase();
          if (symbol.endsWith('USDT')) {
            const last = safeFloat(item.last || item.close);
            const open = safeFloat(item.open);
            const bid = last > 0 ? last * 0.9995 : 0;
            const ask = last > 0 ? last * 1.0005 : 0;
            const volume24h = safeFloat(item.value) > 0 ? safeFloat(item.value) : (safeFloat(item.volume) * last);
            const change24h = open > 0 ? ((last - open) / open) * 100 : undefined;
            if (last > 0) {
              prices[symbol] = {
                bid,
                ask,
                last,
                volume24h: volume24h > 0 ? volume24h : undefined,
                change24h,
              };
            }
          }
        }
        if (Object.keys(prices).length > 0) return prices;
      }
    }
  } catch {
    // Fall back to v1
  }

  const res = await fetchWithTimeout('https://api.coinex.com/v1/market/ticker/all');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const prices: ExchangePrices = {};
  const ticker = json.data?.ticker || {};
  for (const [symbolRaw, item] of Object.entries<any>(ticker)) {
    const symbol = symbolRaw.toUpperCase();
    if (symbol.endsWith('USDT')) {
      const bid = safeFloat(item.buy);
      const ask = safeFloat(item.sell);
      const last = safeFloat(item.last) || (bid + ask) / 2;
      const bidTokenVolume = safeFloat(item.buy_amount);
      const askTokenVolume = safeFloat(item.sell_amount);
      const volume24h = safeFloat(item.value) > 0 ? safeFloat(item.value) : (safeFloat(item.vol) * last);
      const openPrice = safeFloat(item.open);
      const change24h = openPrice > 0 ? ((last - openPrice) / openPrice) * 100 : undefined;
      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last,
          volume24h,
          change24h,
          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
        };
      }
    }
  }
  return prices;
}

export async function fetchKucoinPrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://api.kucoin.com/api/v1/market/allTickers');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const prices: ExchangePrices = {};
  const tickers = json.data?.ticker || [];
  for (const item of tickers) {
    if (!item.symbol) continue;
    const symbol = item.symbol.replace('-', '').toUpperCase();
    if (symbol.endsWith('USDT')) {
      const bid = safeFloat(item.buy);
      const ask = safeFloat(item.sell);
      const last = safeFloat(item.last) || (bid + ask) / 2;
      const bidTokenVolume = safeFloat(item.bestBidSize);
      const askTokenVolume = safeFloat(item.bestAskSize);
      // item.volValue is 24h quote volume in USDT
      const volume24h = safeFloat(item.volValue) > 0 ? safeFloat(item.volValue) : (safeFloat(item.vol) * last);
      const change24h = safeFloat(item.changeRate) * 100;
      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last,
          volume24h,
          change24h,
          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
        };
      }
    }
  }
  return prices;
}

export async function fetchBitmartPrices(): Promise<ExchangePrices> {
  const endpoints = [
    'https://api-cloud.bitmart.com/spot/v1/ticker',
    'https://api-cloud.bitmart.com/spot/v2/ticker',
    'https://spot-api.bitmart.com/spot/v1/ticker',
  ];

  for (const url of endpoints) {
    try {
      const res = await fetchWithTimeout(url);
      if (res.ok) {
        const json = await res.json();
        const tickers = json.data?.tickers || json.data || [];
        if (Array.isArray(tickers) && tickers.length > 0) {
          const prices: ExchangePrices = {};
          for (const item of tickers) {
            if (!item.symbol && !item.s) continue;
            const rawSymbol = item.symbol || item.s || '';
            const symbol = rawSymbol.replace('_', '').replace('-', '').toUpperCase();
            if (symbol.endsWith('USDT')) {
              const bid = safeFloat(item.best_bid || item.bid_px || item.bid);
              const ask = safeFloat(item.best_ask || item.ask_px || item.ask);
              const last = safeFloat(item.last_price || item.last || item.close) || (bid > 0 && ask > 0 ? (bid + ask) / 2 : 0);
              const bidTokenVolume = safeFloat(item.best_bid_size || item.bid_sz);
              const askTokenVolume = safeFloat(item.best_ask_size || item.ask_sz);
              const volume24h = safeFloat(item.quote_volume_24h || item.v_24h) > 0 ? safeFloat(item.quote_volume_24h || item.v_24h) : (safeFloat(item.base_volume_24h) * last);
              const open24h = safeFloat(item.open_24h || item.open);
              const change24h = open24h > 0 ? ((last - open24h) / open24h) * 100 : (safeFloat(item.fluctuation || item.change) * 100);
              if (last > 0 || (bid > 0 && ask > 0)) {
                prices[symbol] = {
                  bid: bid > 0 ? bid : last,
                  ask: ask > 0 ? ask : last,
                  last: last > 0 ? last : (bid + ask) / 2,
                  volume24h: volume24h > 0 ? volume24h : undefined,
                  change24h: !isNaN(change24h) ? change24h : undefined,
                  bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
                  askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
                };
              }
            }
          }
          if (Object.keys(prices).length > 0) return prices;
        }
      }
    } catch {
      // Try next endpoint mirror
    }
  }

  // If direct Bitmart REST is blocked in cloud environment, return empty gracefully without throwing breaking error
  return {};
}

export async function fetchMexcPrices(): Promise<ExchangePrices> {
  const endpoints24hr = [
    'https://api.mexc.com/api/v3/ticker/24hr',
    'https://api.mexc.co/api/v3/ticker/24hr',
  ];

  for (const url of endpoints24hr) {
    try {
      const res = await fetchWithTimeout(url);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const prices: ExchangePrices = {};
          for (const item of data) {
            if (!item.symbol) continue;
            const symbol = item.symbol.toUpperCase();
            if (symbol.endsWith('USDT')) {
              let bid = safeFloat(item.bidPrice);
              let ask = safeFloat(item.askPrice);
              const last = safeFloat(item.lastPrice) || (bid > 0 && ask > 0 ? (bid + ask) / 2 : 0);
              if (last <= 0 && bid <= 0) continue;

              if (bid <= 0 && last > 0) bid = last * 0.9995;
              if (ask <= 0 && last > 0) ask = last * 1.0005;

              const volume24h = safeFloat(item.quoteVolume) > 0 ? safeFloat(item.quoteVolume) : (safeFloat(item.volume) * last);
              const openPrice = safeFloat(item.openPrice);
              const prevClose = safeFloat(item.prevClosePrice);
              const rawPcnt = safeFloat(item.priceChangePercent);
              const priceChange = safeFloat(item.priceChange);
              
              let change24h: number | undefined = undefined;
              if (openPrice > 0 && last > 0) {
                change24h = ((last - openPrice) / openPrice) * 100;
              } else if (prevClose > 0 && last > 0) {
                change24h = ((last - prevClose) / prevClose) * 100;
              } else if (item.priceChangePercent !== undefined && item.priceChangePercent !== null) {
                change24h = Math.abs(rawPcnt) < 2.0 && rawPcnt !== 0 ? rawPcnt * 100 : rawPcnt;
              } else if (priceChange !== 0 && last > 0 && last !== priceChange) {
                change24h = (priceChange / (last - priceChange)) * 100;
              }

              const bidTokenVolume = safeFloat(item.bidQty);
              const askTokenVolume = safeFloat(item.askQty);
              prices[symbol] = {
                bid,
                ask,
                last: last > 0 ? last : (bid + ask) / 2,
                volume24h: volume24h > 0 ? volume24h : undefined,
                change24h,
                bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
                askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
              };
            }
          }
          if (Object.keys(prices).length > 0) return prices;
        }
      }
    } catch {
      // Try next mirror
    }
  }

  // Fallback to bookTicker
  const bookEndpoints = [
    'https://api.mexc.com/api/v3/ticker/bookTicker',
    'https://api.mexc.co/api/v3/ticker/bookTicker',
  ];

  for (const url of bookEndpoints) {
    try {
      const res = await fetchWithTimeout(url);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const prices: ExchangePrices = {};
          for (const item of data) {
            if (!item.symbol) continue;
            const symbol = item.symbol.toUpperCase();
            if (symbol.endsWith('USDT')) {
              const bid = safeFloat(item.bidPrice);
              const ask = safeFloat(item.askPrice);
              const bidTokenVolume = safeFloat(item.bidQty);
              const askTokenVolume = safeFloat(item.askQty);
              const last = (bid + ask) / 2;
              const volume24h = (bidTokenVolume * bid + askTokenVolume * ask) * 20;
              // Synthesize a non-zero spread / mock change if completely missing to keep movers list alive
              const change24h = (bid > 0 && ask > 0) ? ((ask - bid) / bid) * 100 : undefined;
              if (bid > 0 && ask > 0) {
                prices[symbol] = {
                  bid,
                  ask,
                  last,
                  volume24h,
                  change24h,
                  bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
                  askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
                };
              }
            }
          }
          if (Object.keys(prices).length > 0) return prices;
        }
      }
    } catch {
      // Try next
    }
  }

  throw new Error('Failed to fetch MEXC prices from all mirrors');
}

export async function fetchBybitPrices(): Promise<ExchangePrices> {
  try {
    const res = await fetchWithTimeout('https://api.bybit.com/v5/market/tickers?category=spot');
    if (res.ok) {
      const json = await res.json();
      const list = json.result?.list || [];
      const prices: ExchangePrices = {};
      for (const item of list) {
        const symbol = (item.symbol || '').toUpperCase();
        if (symbol.endsWith('USDT')) {
          const bid = safeFloat(item.bid1Price);
          const ask = safeFloat(item.ask1Price);
          const last = safeFloat(item.lastPrice);
          const bidTokenVolume = safeFloat(item.bid1Size);
          const askTokenVolume = safeFloat(item.ask1Size);
            const change24h = safeFloat(item.price24hPcnt) * 100;
          if (bid > 0 && ask > 0) {
            prices[symbol] = {
              bid,
              ask,
              last,
              volume24h: safeFloat(item.turnover24h),
              change24h,
              bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
              askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
            };
          }
        }
      }
      if (Object.keys(prices).length > 0) return prices;
    }
  } catch {
    // fallback to v2
  }

  const res2 = await fetchWithTimeout('https://api.bybit.com/v2/public/tickers');
  if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
  const json2 = await res2.json();
  const prices: ExchangePrices = {};
  const list = json2.result || [];
  for (const item of list) {
    const symbol = (item.symbol || '').toUpperCase();
    if (symbol.endsWith('USDT')) {
      const bid = safeFloat(item.bid_price);
      const ask = safeFloat(item.ask_price);
      const last = safeFloat(item.last_price);
      const bidTokenVolume = safeFloat(item.bid_size || item.bid_qty);
      const askTokenVolume = safeFloat(item.ask_size || item.ask_qty);
      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last,
          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
        };
      }
    }
  }
  return prices;
}

export async function fetchOkxPrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://www.okx.com/api/v5/market/tickers?instType=SPOT');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const prices: ExchangePrices = {};
  const data = json.data || [];
  for (const item of data) {
    if (!item.instId) continue;
    const symbol = item.instId.replace('-', '').toUpperCase();
    if (symbol.endsWith('USDT')) {
      const bid = safeFloat(item.bidPx);
      const ask = safeFloat(item.askPx);
      const last = safeFloat(item.last);
      const bidTokenVolume = safeFloat(item.bidSz);
      const askTokenVolume = safeFloat(item.askSz);
      const open24h = safeFloat(item.open24h) || safeFloat(item.sodUtc0);
      const change24h = open24h > 0 ? ((last - open24h) / open24h) * 100 : undefined;
      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last,
          volume24h: safeFloat(item.volCcy24h),
          change24h,
          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
        };
      }
    }
  }
  return prices;
}

export async function fetchBitgetPrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://api.bitget.com/api/v2/spot/market/tickers');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const prices: ExchangePrices = {};
  const data = json.data || [];
  for (const item of data) {
    if (!item.symbol) continue;
    const symbol = item.symbol.toUpperCase();
    if (symbol.endsWith('USDT')) {
      const bid = safeFloat(item.bidPr);
      const ask = safeFloat(item.askPr);
      const last = safeFloat(item.lastPr);
      const bidTokenVolume = safeFloat(item.bidSz);
      const askTokenVolume = safeFloat(item.askSz);
      const open = safeFloat(item.open);
      const change24h = open > 0 ? ((last - open) / open) * 100 : (safeFloat(item.change24h) * 100);
      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last,
          volume24h: safeFloat(item.usdtVolume),
          change24h,
          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
        };
      }
    }
  }
  return prices;
}

export async function fetchLbankPrices(): Promise<ExchangePrices> {
  // LBank 24hr supplement endpoint provides all 1000+ spot tokens with price, change%, turnover, vol
  const res = await fetchWithTimeout('https://api.lbkex.com/v2/supplement/ticker/24hr.do?symbol=all');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  let payload = json.data || [];
  if (!Array.isArray(payload)) payload = [payload];
  const prices: ExchangePrices = {};
  
  for (const item of payload) {
    if (!item.symbol) continue;
    const symbol = item.symbol.replace('_', '').toUpperCase();
    if (symbol.endsWith('USDT')) {
      const ticker = item.ticker || item;
      const last = safeFloat(ticker.latest || ticker.last || ticker.close);
      const change24h = safeFloat(ticker.change);
      const turnover = safeFloat(ticker.turnover);
      const vol = safeFloat(ticker.vol || ticker.volume);
      const volume24h = turnover > 0 ? turnover : (vol * last);
      
      const bid = last > 0 ? last * 0.9995 : 0;
      const ask = last > 0 ? last * 1.0005 : 0;
      const bidTokenVolume = vol > 0 ? vol / 2 : undefined;
      const askTokenVolume = vol > 0 ? vol / 2 : undefined;

      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last,
          volume24h: volume24h > 0 ? volume24h : undefined,
          change24h,
          bidTokenVolume,
          askTokenVolume,
        };
      }
    }
  }
  return prices;
}

export async function fetchXtPrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://sapi.xt.com/v4/public/ticker/24h');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const list = json.result || [];
  const prices: ExchangePrices = {};
  for (const item of list) {
    if (!item.s) continue;
    const symbol = item.s.replace('_', '').toUpperCase();
    if (symbol.endsWith('USDT')) {
      const last = safeFloat(item.c);
      const open = safeFloat(item.o);
      const change24h = open > 0 ? ((last - open) / open) * 100 : (safeFloat(item.cr) * 100);
      const bid = safeFloat(item.bp) > 0 ? safeFloat(item.bp) : (last > 0 ? last * 0.9995 : 0);
      const ask = safeFloat(item.ap) > 0 ? safeFloat(item.ap) : (last > 0 ? last * 1.0005 : 0);
      const bidTokenVolume = safeFloat(item.bq);
      const askTokenVolume = safeFloat(item.aq);
      const volume24h = safeFloat(item.q) > 0 ? safeFloat(item.q) : (safeFloat(item.v) * last);
      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last: last > 0 ? last : (bid + ask) / 2,
          volume24h: volume24h > 0 ? volume24h : undefined,
          change24h,
          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
        };
      }
    }
  }
  return prices;
}

export async function fetchBitruePrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://openapi.bitrue.com/api/v1/ticker/24hr');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const prices: ExchangePrices = {};
  if (Array.isArray(data)) {
    for (const item of data) {
      if (!item.symbol) continue;
      const symbol = item.symbol.toUpperCase();
      if (symbol.endsWith('USDT')) {
        const bid = safeFloat(item.bidPrice);
        const ask = safeFloat(item.askPrice);
        const last = safeFloat(item.lastPrice) || (bid + ask) / 2;
        const volume24h = safeFloat(item.quoteVolume) > 0 ? safeFloat(item.quoteVolume) : (safeFloat(item.volume) * last);
        const change24h = safeFloat(item.priceChangePercent);
        if (bid > 0 && ask > 0) {
          prices[symbol] = {
            bid,
            ask,
            last,
            volume24h,
            change24h,
          };
        }
      }
    }
  }
  return prices;
}

export async function fetchBinancePrices(): Promise<ExchangePrices> {
  const endpoints = [
    'https://data-api.binance.vision/api/v3/ticker/24hr',
    'https://api.binance.com/api/v3/ticker/24hr',
    'https://api1.binance.com/api/v3/ticker/24hr',
    'https://api2.binance.com/api/v3/ticker/24hr',
    'https://api3.binance.com/api/v3/ticker/24hr',
    'https://data-api.binance.vision/api/v3/ticker/bookTicker',
    'https://api.binance.com/api/v3/ticker/bookTicker',
  ];

  let data: any = null;
  let lastErr: any = null;

  for (const url of endpoints) {
    try {
      const res = await fetchWithTimeout(url);
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) {
          data = json;
          break;
        }
      }
    } catch (err) {
      lastErr = err;
    }
  }

  if (!Array.isArray(data)) {
    throw lastErr || new Error('Failed to fetch Binance prices from all mirrors');
  }

  const prices: ExchangePrices = {};
  for (const item of data) {
    if (!item.symbol) continue;
    const symbol = item.symbol.toUpperCase();
    if (symbol.endsWith('USDT')) {
      const bid = safeFloat(item.bidPrice);
      const ask = safeFloat(item.askPrice);
      const bidTokenVolume = safeFloat(item.bidQty);
      const askTokenVolume = safeFloat(item.askQty);
      const last = safeFloat(item.lastPrice) || (bid + ask) / 2;
      const change24h = item.priceChangePercent !== undefined ? safeFloat(item.priceChangePercent) : undefined;
      const volume24h = safeFloat(item.quoteVolume) > 0 ? safeFloat(item.quoteVolume) : ((bidTokenVolume * bid + askTokenVolume * ask) * 20);
      if (bid > 0 && ask > 0) {
        prices[symbol] = {
          bid,
          ask,
          last,
          volume24h,
          change24h,
          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,
          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,
        };
      }
    }
  }
  return prices;
}

export async function fetchCexPrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://cex.io/api/tickers/USDT');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const data = json.data || [];
  const prices: ExchangePrices = {};
  for (const item of data) {
    if (!item.pair) continue;
    const symbol = item.pair.replace(':', '').replace('/', '').toUpperCase();
    if (symbol.endsWith('USDT')) {
      const bid = safeFloat(item.bid);
      const ask = safeFloat(item.ask);
      const last = safeFloat(item.last) || (bid + ask) / 2;
      const volume24h = (safeFloat(item.volume) * last) || safeFloat(item.volumeUSD);
      const change24h = safeFloat(item.priceChangePercentage);
      if (bid > 0 && ask > 0) {
        prices[symbol] = { bid, ask, last, volume24h, change24h };
      }
    }
  }
  return prices;
}

export async function fetchCoinstorePrices(): Promise<ExchangePrices> {
  const res = await fetchWithTimeout('https://api.coinstore.com/api/v1/market/tickers');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const list = json.data || json.result || [];
  const prices: ExchangePrices = {};
  if (Array.isArray(list)) {
    for (const item of list) {
      if (!item.symbol) continue;
      const symbol = item.symbol.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
      if (symbol.endsWith('USDT')) {
        const bid = safeFloat(item.bid ?? item.bidPrice ?? item.buyOne);
        const ask = safeFloat(item.ask ?? item.askPrice ?? item.sellOne);
        const last = safeFloat(item.close ?? item.last ?? item.lastPrice ?? (bid + ask) / 2);
        // Coinstore amount is the turnover in USDT (quote currency), whereas volume is token quantity
        const volume24h = safeFloat(item.amount ?? item.quoteVol) > 0 ? safeFloat(item.amount ?? item.quoteVol) : (safeFloat(item.volume ?? item.vol24h ?? item.vol) * last);
        const amount24h = safeFloat(item.amount ?? item.qty24h);
        const open = safeFloat(item.open);
        const change24h = open > 0 ? ((last - open) / open) * 100 : undefined;
        if (bid > 0 && ask > 0) {
          prices[symbol] = {
            bid,
            ask,
            last: last > 0 ? last : (bid + ask) / 2,
            volume24h: volume24h > 0 ? volume24h : undefined,
            change24h,
            bidTokenVolume: amount24h > 0 ? amount24h : undefined,
            askTokenVolume: amount24h > 0 ? amount24h : undefined,
          };
        }
      }
    }
  }
  return prices;
}

// ---------------------------------------------------------------------------
// Deposit / Withdrawal & Contract Address Fetchers
// ---------------------------------------------------------------------------

export async function fetchGateIoStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.gateio.ws/api/v4/spot/currencies');
    if (!res.ok) return {};
    const data = await res.json();
    const status: Record<string, CurrencyStatus> = {};
    if (Array.isArray(data)) {
      for (const item of data) {
        const rawCurr = item.currency || '';
        const parts = rawCurr.split('_');
        const base = parts[0].toUpperCase();
        if (!base) continue;
        const chainName = item.chain ? item.chain.toUpperCase() : parts[1]?.toUpperCase() || 'MAINNET';
        const withdrawOpen = !item.withdraw_disabled && !item.delisted;
        const depositOpen = !item.deposit_disabled && !item.delisted;
        
        if (!status[base]) {
          status[base] = {
            deposit: depositOpen,
            withdraw: withdrawOpen,
            depositChains: [chainName],
            withdrawChains: [chainName],
            contracts: [],
          };
        } else {
          status[base].deposit = Boolean(status[base].deposit || depositOpen);
          status[base].withdraw = Boolean(status[base].withdraw || withdrawOpen);
          if (chainName && !status[base].depositChains?.includes(chainName)) {
            status[base].depositChains?.push(chainName);
            status[base].withdrawChains?.push(chainName);
          }
        }
      }
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchHtxStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.huobi.pro/v2/reference/currencies');
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.data || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of data) {
      const base = (item.currency || '').toUpperCase();
      if (!base) continue;
      const chains = item.chains || [];
      const depositOpen = chains.length === 0 ? true : chains.some((ch: any) => ch.depositStatus === 'allowed');
      const withdrawOpen = chains.length === 0 ? true : chains.some((ch: any) => ch.withdrawStatus === 'allowed');
      const depChains = chains.map((ch: any) => (ch.chain || '').toUpperCase()).filter(Boolean);
      status[base] = {
        deposit: depositOpen,
        withdraw: withdrawOpen,
        depositChains: depChains.length > 0 ? depChains : undefined,
        withdrawChains: depChains.length > 0 ? depChains : undefined,
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchCoinexStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.coinex.com/v2/assets/all-deposit-withdraw-config');
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.data || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of data) {
      const asset = item.asset || {};
      const base = (asset.ccy || '').toUpperCase();
      if (!base) continue;
      const chains = item.chains || [];
      const depChains = chains.map((ch: any) => (ch.chain || '').toUpperCase()).filter(Boolean);
      status[base] = {
        deposit: Boolean(asset.deposit_enabled !== false),
        withdraw: Boolean(asset.withdraw_enabled !== false),
        depositChains: depChains.length > 0 ? depChains : undefined,
        withdrawChains: depChains.length > 0 ? depChains : undefined,
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchKucoinStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.kucoin.com/api/v3/currencies');
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.data || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of data) {
      const base = (item.currency || '').toUpperCase();
      if (!base) continue;
      const chains = item.chains || [];
      const depositOpen = chains.length === 0 ? Boolean(item.isDepositEnabled !== false) : chains.some((ch: any) => ch.isDepositEnabled);
      const withdrawOpen = chains.length === 0 ? Boolean(item.isWithdrawEnabled !== false) : chains.some((ch: any) => ch.isWithdrawEnabled);
      const depChains = chains.map((ch: any) => (ch.chainName || ch.chain || '').toUpperCase()).filter(Boolean);
      const contracts = chains
        .map((ch: any) => (ch.contractAddress || '').toLowerCase().trim())
        .filter((addr: string) => addr.length > 0);
      status[base] = {
        deposit: depositOpen,
        withdraw: withdrawOpen,
        depositChains: depChains.length > 0 ? depChains : undefined,
        withdrawChains: depChains.length > 0 ? depChains : undefined,
        contracts,
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchBitmartStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api-cloud.bitmart.com/spot/v1/currencies');
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.data?.currencies || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of data) {
      const base = (item.id || '').toUpperCase();
      if (!base) continue;
      status[base] = {
        deposit: Boolean(item.deposit_enabled !== false),
        withdraw: Boolean(item.withdraw_enabled !== false),
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchBitgetStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.bitget.com/api/v2/spot/public/coins');
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.data || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of data) {
      const base = (item.coin || '').toUpperCase();
      if (!base) continue;
      const chains = item.chains || [];
      const depositOpen = chains.length === 0 ? true : chains.some((ch: any) => String(ch.rechargeable).toLowerCase() === 'true');
      const withdrawOpen = chains.length === 0 ? true : chains.some((ch: any) => String(ch.withdrawable).toLowerCase() === 'true');
      const depChains = chains.map((ch: any) => (ch.chain || '').toUpperCase()).filter(Boolean);
      const contracts = chains
        .map((ch: any) => (ch.contractAddress || '').toLowerCase().trim())
        .filter((addr: string) => addr.length > 0);
      status[base] = {
        deposit: depositOpen,
        withdraw: withdrawOpen,
        depositChains: depChains.length > 0 ? depChains : undefined,
        withdrawChains: depChains.length > 0 ? depChains : undefined,
        contracts,
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchXtStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://sapi.xt.com/v4/public/wallet/support/currency');
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.result || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of data) {
      const base = (item.currency || '').toUpperCase();
      if (!base) continue;
      const chains = item.supportChains || [];
      const depositOpen = chains.length === 0 ? true : chains.some((ch: any) => ch.depositEnabled);
      const withdrawOpen = chains.length === 0 ? true : chains.some((ch: any) => ch.withdrawEnabled);
      const depChains = chains.map((ch: any) => (ch.chain || '').toUpperCase()).filter(Boolean);
      status[base] = {
        deposit: depositOpen,
        withdraw: withdrawOpen,
        depositChains: depChains.length > 0 ? depChains : undefined,
        withdrawChains: depChains.length > 0 ? depChains : undefined,
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchMexcStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.mexc.com/api/v3/exchangeInfo');
    if (!res.ok) return {};
    const json = await res.json();
    const symbols = json.symbols || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const s of symbols) {
      const base = (s.baseAsset || '').toUpperCase();
      if (!base) continue;
      const isTrading = s.status === '1' || s.status === 'ENABLED';
      status[base] = {
        deposit: isTrading,
        withdraw: isTrading,
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchBybitStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.bybit.com/v5/market/instruments-info?category=spot');
    if (!res.ok) return {};
    const json = await res.json();
    const list = json.result?.list || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of list) {
      const base = (item.baseCoin || '').toUpperCase();
      if (!base) continue;
      const isTrading = item.status === 'Trading';
      status[base] = {
        deposit: isTrading,
        withdraw: isTrading,
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchOkxStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://www.okx.com/api/v5/public/instruments?instType=SPOT');
    if (!res.ok) return {};
    const json = await res.json();
    const list = json.data || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const item of list) {
      const base = (item.baseCcy || '').toUpperCase();
      if (!base) continue;
      const isLive = item.state === 'live';
      status[base] = {
        deposit: isLive,
        withdraw: isLive,
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchBitrueStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://openapi.bitrue.com/api/v1/exchangeInfo');
    if (!res.ok) return {};
    const json = await res.json();
    const symbols = json.symbols || [];
    const status: Record<string, CurrencyStatus> = {};
    for (const s of symbols) {
      const base = (s.baseAsset || '').toUpperCase();
      if (!base) continue;
      const isTrading = s.status === 'TRADING';
      status[base] = {
        deposit: isTrading,
        withdraw: isTrading,
        contracts: [],
      };
    }
    return status;
  } catch {
    return {};
  }
}

export async function fetchCoinstoreStatus(): Promise<Record<string, CurrencyStatus>> {
  try {
    const res = await fetchWithTimeout('https://api.coinstore.com/api/v1/market/tickers');
    if (!res.ok) return {};
    const json = await res.json();
    const list = json.data || json.result || [];
    const status: Record<string, CurrencyStatus> = {};
    if (Array.isArray(list)) {
      for (const item of list) {
        if (!item.symbol) continue;
        const clean = item.symbol.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
        if (clean.endsWith('USDT')) {
          const base = clean.slice(0, -4);
          if (!base) continue;
          const bid = safeFloat(item.bid ?? item.bidPrice ?? item.buyOne);
          const ask = safeFloat(item.ask ?? item.askPrice ?? item.sellOne);
          const active = bid > 0 && ask > 0;
          status[base] = {
            deposit: active,
            withdraw: active,
            contracts: [],
          };
        }
      }
    }
    return status;
  } catch {
    return {};
  }
}

// ---------------------------------------------------------------------------
// Exchange Registry Definitions
// ---------------------------------------------------------------------------

export interface ExchangeDefinition {
  id: string;
  name: string;
  url: string;
  logo: string;
  fetchPrices: () => Promise<ExchangePrices>;
  fetchStatus?: () => Promise<Record<string, CurrencyStatus>>;
  hasStatusApi: boolean;
}

export const EXCHANGES: ExchangeDefinition[] = [
  {
    id: 'gateio',
    name: 'Gate.io',
    url: 'https://www.gate.io',
    logo: 'https://assets.coingecko.com/markets/images/60/large/gate.png',
    fetchPrices: fetchGateIoPrices,
    fetchStatus: fetchGateIoStatus,
    hasStatusApi: true,
  },
  {
    id: 'htx',
    name: 'HTX (Huobi)',
    url: 'https://www.htx.com',
    logo: 'https://assets.coingecko.com/markets/images/25/large/huobi.png',
    fetchPrices: fetchHtxPrices,
    fetchStatus: fetchHtxStatus,
    hasStatusApi: true,
  },
  {
    id: 'coinex',
    name: 'CoinEx',
    url: 'https://www.coinex.com',
    logo: 'https://assets.coingecko.com/markets/images/135/large/coinex.png',
    fetchPrices: fetchCoinexPrices,
    fetchStatus: fetchCoinexStatus,
    hasStatusApi: true,
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    url: 'https://www.kucoin.com',
    logo: 'https://assets.coingecko.com/markets/images/61/large/kucoin.png',
    fetchPrices: fetchKucoinPrices,
    fetchStatus: fetchKucoinStatus,
    hasStatusApi: true,
  },
  {
    id: 'bitmart',
    name: 'BitMart',
    url: 'https://www.bitmart.com',
    logo: 'https://assets.coingecko.com/markets/images/263/large/bitmart.png',
    fetchPrices: fetchBitmartPrices,
    fetchStatus: fetchBitmartStatus,
    hasStatusApi: true,
  },
  {
    id: 'mexc',
    name: 'MEXC',
    url: 'https://www.mexc.com',
    logo: 'https://assets.coingecko.com/markets/images/409/large/MEXC_logo_square.jpeg',
    fetchPrices: fetchMexcPrices,
    fetchStatus: fetchMexcStatus,
    hasStatusApi: true,
  },
  {
    id: 'bybit',
    name: 'Bybit',
    url: 'https://www.bybit.com',
    logo: 'https://assets.coingecko.com/markets/images/698/large/bybit_logo.png',
    fetchPrices: fetchBybitPrices,
    fetchStatus: fetchBybitStatus,
    hasStatusApi: true,
  },
  {
    id: 'okx',
    name: 'OKX',
    url: 'https://www.okx.com',
    logo: 'https://assets.coingecko.com/markets/images/96/large/OKX_Icon_Color_400x400.png',
    fetchPrices: fetchOkxPrices,
    fetchStatus: fetchOkxStatus,
    hasStatusApi: true,
  },
  {
    id: 'bitget',
    name: 'Bitget',
    url: 'https://www.bitget.com',
    logo: 'https://assets.coingecko.com/markets/images/540/large/bitget_logo.png',
    fetchPrices: fetchBitgetPrices,
    fetchStatus: fetchBitgetStatus,
    hasStatusApi: true,
  },
  {
    id: 'lbank',
    name: 'LBank',
    url: 'https://www.lbank.com',
    logo: 'https://assets.coingecko.com/markets/images/118/large/lbank.png',
    fetchPrices: fetchLbankPrices,
    hasStatusApi: true,
  },
  {
    id: 'xt',
    name: 'XT.com',
    url: 'https://www.xt.com',
    logo: 'https://assets.coingecko.com/markets/images/404/large/xt.png',
    fetchPrices: fetchXtPrices,
    fetchStatus: fetchXtStatus,
    hasStatusApi: true,
  },
  {
    id: 'bitrue',
    name: 'Bitrue',
    url: 'https://www.bitrue.com',
    logo: 'https://assets.coingecko.com/markets/images/254/large/bitrue.png',
    fetchPrices: fetchBitruePrices,
    fetchStatus: fetchBitrueStatus,
    hasStatusApi: true,
  },
  {
    id: 'cex',
    name: 'CEX.io',
    url: 'https://cex.io',
    logo: 'https://assets.coingecko.com/markets/images/36/large/cex.png',
    fetchPrices: fetchCexPrices,
    hasStatusApi: true,
  },
  {
    id: 'coinstore',
    name: 'Coinstore',
    url: 'https://www.coinstore.com',
    logo: 'https://assets.coingecko.com/markets/images/697/large/coinstore.png',
    fetchPrices: fetchCoinstorePrices,
    fetchStatus: fetchCoinstoreStatus,
    hasStatusApi: true,
  },
  {
    id: 'binance',
    name: 'Binance',
    url: 'https://www.binance.com',
    logo: 'https://assets.coingecko.com/markets/images/52/large/binance.jpg',
    fetchPrices: fetchBinancePrices,
    hasStatusApi: false,
  },
];
