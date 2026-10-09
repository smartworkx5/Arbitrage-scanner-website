export interface ExchangeTradeInfo {
  webUrl: string;
  appScheme: string;
  intentUri: string;
  exchangeName: string;
}

/**
 * Returns direct trading pair URLs (Web URL, App Custom Scheme, and Android Intent URI)
 * for any of the supported 14 spot exchanges.
 */
export function getTradeUrl(exchangeIdOrName: string, baseSymbol: string, quoteSymbol = 'USDT'): ExchangeTradeInfo {
  return getExchangeTradeUrls(exchangeIdOrName, `${baseSymbol}${quoteSymbol}`);
}

export function getExchangeTradeUrls(exchangeIdOrName: string, symbol: string): ExchangeTradeInfo {
  const cleanSymbol = symbol.toUpperCase().replace('/', '').replace('-', '');
  const base = cleanSymbol.endsWith('USDT')
    ? cleanSymbol.slice(0, -4)
    : cleanSymbol;
  const quote = 'USDT';

  const exKey = exchangeIdOrName.toLowerCase().replace(/[^a-z0-9]/g, '');

  let webUrl = `https://www.google.com/search?q=${encodeURIComponent(exchangeIdOrName + ' ' + base + ' USDT spot trade')}`;
  let appScheme = ``;
  let intentUri = ``;
  let exchangeName = exchangeIdOrName;

  if (exKey.includes('gate')) {
    exchangeName = 'Gate.io';
    webUrl = `https://www.gate.io/trade/${base}_${quote}`;
    appScheme = `gateio://spot/${base}_${quote}`;
    intentUri = `intent://spot/${base}_${quote}#Intent;scheme=gateio;package=com.gateio.gateio;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('huobi') || exKey.includes('htx')) {
    exchangeName = 'HTX';
    webUrl = `https://www.htx.com/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    appScheme = `huobi://exchange/${base.toLowerCase()}_${quote.toLowerCase()}`;
    intentUri = `intent://exchange/${base.toLowerCase()}_${quote.toLowerCase()}#Intent;scheme=huobi;package=pro.huobi;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('kucoin')) {
    exchangeName = 'KuCoin';
    webUrl = `https://www.kucoin.com/trade/${base}-${quote}`;
    appScheme = `kucoin://trade/${base}-${quote}`;
    intentUri = `intent://trade/${base}-${quote}#Intent;scheme=kucoin;package=com.kubi.kucoin;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('mexc')) {
    exchangeName = 'MEXC';
    webUrl = `https://www.mexc.com/exchange/${base}_${quote}`;
    appScheme = `mexc://exchange/${base}_${quote}`;
    intentUri = `intent://exchange/${base}_${quote}#Intent;scheme=mexc;package=com.mexc.global;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('bybit')) {
    exchangeName = 'Bybit';
    webUrl = `https://www.bybit.com/trade/usdt/${base}${quote}`;
    appScheme = `bybit://trade/usdt/${base}${quote}`;
    intentUri = `intent://trade/usdt/${base}${quote}#Intent;scheme=bybit;package=com.bybit.app;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('okx')) {
    exchangeName = 'OKX';
    webUrl = `https://www.okx.com/trade-spot/${base.toLowerCase()}-${quote.toLowerCase()}`;
    appScheme = `okx://spot/trade?symbol=${base.toLowerCase()}-${quote.toLowerCase()}`;
    intentUri = `intent://spot/trade?symbol=${base.toLowerCase()}-${quote.toLowerCase()}#Intent;scheme=okx;package=com.okinc.okex.gp;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('bitget')) {
    exchangeName = 'Bitget';
    webUrl = `https://www.bitget.com/spot/${base}${quote}`;
    appScheme = `bitget://spot/${base}${quote}`;
    intentUri = `intent://spot/${base}${quote}#Intent;scheme=bitget;package=com.bitget.exchange;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('coinex')) {
    exchangeName = 'CoinEx';
    webUrl = `https://www.coinex.com/exchange/${base.toLowerCase()}-${quote.toLowerCase()}`;
    appScheme = `coinex://market/${base}${quote}`;
    intentUri = `intent://market/${base}${quote}#Intent;scheme=coinex;package=com.mcoinex.coinex;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('bitmart')) {
    exchangeName = 'BitMart';
    webUrl = `https://www.bitmart.com/trade/en-US?symbol=${base}_${quote}`;
    appScheme = `bitmart://trade?symbol=${base}_${quote}`;
    intentUri = `intent://trade?symbol=${base}_${quote}#Intent;scheme=bitmart;package=com.bitmart.bitmarket;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('lbank')) {
    exchangeName = 'LBank';
    webUrl = `https://www.lbank.com/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    appScheme = `lbank://trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    intentUri = `intent://trade/${base.toLowerCase()}_${quote.toLowerCase()}#Intent;scheme=lbank;package=com.lbank.exchange;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('xt')) {
    exchangeName = 'XT.com';
    webUrl = `https://www.xt.com/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    appScheme = `xt://trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    intentUri = `intent://trade/${base.toLowerCase()}_${quote.toLowerCase()}#Intent;scheme=xt;package=com.xt.trade;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('bitrue')) {
    exchangeName = 'Bitrue';
    webUrl = `https://www.bitrue.com/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    appScheme = `bitrue://trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    intentUri = `intent://trade/${base.toLowerCase()}_${quote.toLowerCase()}#Intent;scheme=bitrue;package=com.bitrue.currency.exchange;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('cex')) {
    exchangeName = 'CEX.io';
    webUrl = `https://cex.io/trade/${base}-${quote}`;
    appScheme = `cexio://trade/${base}-${quote}`;
    intentUri = `intent://trade/${base}-${quote}#Intent;scheme=cexio;package=io.cex.app.personal;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('coinstore')) {
    exchangeName = 'Coinstore';
    webUrl = `https://www.coinstore.com/spot/${base}-${quote}`;
    appScheme = `coinstore://spot/${base}_${quote}`;
    intentUri = `intent://spot/${base}_${quote}#Intent;scheme=coinstore;package=com.io.coinstore;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  } else if (exKey.includes('binance')) {
    exchangeName = 'Binance';
    webUrl = `https://www.binance.com/en/trade/${base}_${quote}`;
    appScheme = `bnc://app.binance.com/trade/spot?symbol=${base}_${quote}`;
    intentUri = `intent://trade/spot?symbol=${base}_${quote}#Intent;scheme=bnc;package=com.binance.dev;S.browser_fallback_url=${encodeURIComponent(webUrl)};end;`;
  }

  return { webUrl, appScheme, intentUri, exchangeName };
}

/**
 * Triggers opening the token directly in the installed exchange mobile/desktop application.
 * If the application is installed, it opens the app directly without opening a browser tab.
 * If the app is not installed, it provides a seamless fallback after a timeout.
 */
export function openExchangeTrade(exchangeIdOrName: string, symbol: string) {
  const { webUrl, appScheme, intentUri } = getExchangeTradeUrls(exchangeIdOrName, symbol);

  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  // Target URI to launch native app
  const targetAppUri = isAndroid && intentUri ? intentUri : (appScheme || webUrl);

  let appOpened = false;

  const onBlurOrHide = () => {
    appOpened = true;
    window.removeEventListener('pagehide', onBlurOrHide);
    window.removeEventListener('blur', onBlurOrHide);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };

  const onVisibilityChange = () => {
    if (document.hidden) {
      appOpened = true;
    }
  };

  window.addEventListener('pagehide', onBlurOrHide);
  window.addEventListener('blur', onBlurOrHide);
  document.addEventListener('visibilitychange', onVisibilityChange);

  try {
    // 1. Create a dynamic anchor element and dispatch click
    const anchor = document.createElement('a');
    anchor.href = targetAppUri;
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(() => {
      if (document.body.contains(anchor)) {
        document.body.removeChild(anchor);
      }
    }, 500);

    // 2. Direct location assignment for broader OS scheme handling
    if (!isAndroid && appScheme) {
      try {
        window.location.href = appScheme;
      } catch {
        // ignore
      }
    }
  } catch (err) {
    console.warn('App launch intent dispatched:', err);
  }

  // 3. Fallback to web URL ONLY if app was NOT opened (page remained active/focused after 2.5s)
  setTimeout(() => {
    window.removeEventListener('pagehide', onBlurOrHide);
    window.removeEventListener('blur', onBlurOrHide);
    document.removeEventListener('visibilitychange', onVisibilityChange);

    // If document is still visible and focused, meaning no app intercepted the scheme
    if (!appOpened && !document.hidden) {
      // Open web URL only as fallback if app isn't installed
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    }
  }, 2500);
}
