const fs = require('fs');

let code = fs.readFileSync('src/components/CexDexCard.tsx', 'utf8');

code = code.replace(
  "import { getTradeUrl } from '../utils/tradeUrls';",
  "import { getTradeUrl } from '../utils/tradeUrls';\nimport { formatOrderSize } from '../utils/formatters';\nimport { formatPrice, formatUsd } from '../utils/formatters';"
);

// I might have added formatPrice twice, but let's check
fs.writeFileSync('src/components/CexDexCard.tsx', code);
