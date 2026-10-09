/**
 * Formats the Order Size according to strict exchange order book rules:
 * Order Size must represent ONLY the quantity available at the displayed Best Bid or Best Ask price level.
 * Calculate Order Size as: USDT Value = Best Price × Quantity at that exact price level
 * Display format: Order Size: $15.00 USDT (3,000 BAR)
 * If the exchange does not provide the required order book data, displays "Unavailable" instead of incorrect values.
 */
export function formatOrderSize(
  usdtVal?: number | null,
  tokenQty?: number | null,
  baseSymbol: string = '',
  includeLabel = false
): string {
  if (
    usdtVal === undefined ||
    usdtVal === null ||
    tokenQty === undefined ||
    tokenQty === null ||
    isNaN(usdtVal) ||
    isNaN(tokenQty) ||
    usdtVal <= 0 ||
    tokenQty <= 0
  ) {
    return includeLabel ? 'Order Size: Unavailable' : 'Unavailable';
  }

  const formattedUsdt = usdtVal.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedTokenQty = tokenQty.toLocaleString('en-US', {
    maximumFractionDigits: 6,
  });

  const body = baseSymbol
    ? `$${formattedUsdt} USDT (${formattedTokenQty} ${baseSymbol})`
    : `$${formattedUsdt} USDT`;

  return includeLabel ? `Order Size: ${body}` : body;
}
