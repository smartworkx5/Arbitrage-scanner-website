const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const gate = await fetchJson('https://api.gateio.ws/api/v4/spot/tickers');
    console.log('Gate:', gate[0].change_percentage);
    
    const mexc = await fetchJson('https://api.mexc.com/api/v3/ticker/24hr');
    console.log('Mexc:', mexc[0].priceChangePercent);
    
    const bybit = await fetchJson('https://api.bybit.com/v5/market/tickers?category=spot');
    console.log('Bybit:', bybit.result.list[0].price24hPcnt);
    
    const kucoin = await fetchJson('https://api.kucoin.com/api/v1/market/allTickers');
    console.log('Kucoin:', kucoin.data.ticker[0].changeRate, kucoin.data.ticker[0].priceChangePercent);
  } catch (e) {
    console.error(e);
  }
}
run();
