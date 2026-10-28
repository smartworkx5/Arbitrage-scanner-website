const fs = require('fs');

let code = fs.readFileSync('src/server/dexScanner.ts', 'utf8');

const cexToDexReplacement = `
            cexDepositOpen,
            cexWithdrawOpen,
            cexVolume24h: item.volume24h,
            cexVolumeToken: item.askTokenVolume,
            cexVolumeUsd: item.askTokenVolume && item.ask ? Math.round(item.askTokenVolume * item.ask * 100) / 100 : undefined,
`;
code = code.replace(
  '            cexDepositOpen,\n            cexWithdrawOpen,\n            cexVolume24h: item.volume24h,',
  cexToDexReplacement.trim()
);

const dexToCexReplacement = `
            cexDepositOpen,
            cexWithdrawOpen,
            cexVolume24h: item.volume24h,
            cexVolumeToken: item.bidTokenVolume,
            cexVolumeUsd: item.bidTokenVolume && item.bid ? Math.round(item.bidTokenVolume * item.bid * 100) / 100 : undefined,
`;
code = code.replace(
  '            cexDepositOpen,\n            cexWithdrawOpen,\n            cexVolume24h: item.volume24h,',
  dexToCexReplacement.trim()
);

fs.writeFileSync('src/server/dexScanner.ts', code);
