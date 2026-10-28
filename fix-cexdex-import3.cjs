const fs = require('fs');
let code = fs.readFileSync('src/components/CexDexCard.tsx', 'utf8');

code = code.replace(
  "import { formatOrderSize, formatUsd } from '../utils/formatters';",
  "import { formatOrderSize } from '../utils/formatters';"
);

fs.writeFileSync('src/components/CexDexCard.tsx', code);
