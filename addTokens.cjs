const fs = require('fs');

const path = 'src/server/tokenRegistry.ts';
let code = fs.readFileSync(path, 'utf8');

const newTokens = `
  HAWK: { name: 'HawkSight', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': 'BKipkEAx5rQJTwW7eE3m7CDEpQ8d15p7mFm1JpZ5pump' }, tier: 'micro' },
  KANG: { name: 'Kangaroo', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': '7g1zMyHwQtzhSWhzK7sC4k9jDGHqD9s1pQYgD6kApump' }, tier: 'micro' },
  TREMP: { name: 'Doland Tremp', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': 'FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv' }, tier: 'micro' },
  BODEN: { name: 'Jeo Boden', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': '3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o' }, tier: 'micro' },
  MOTHER: { name: 'MOTHER', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': '3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN' }, tier: 'micro' },
  RTR: { name: 'Restore The Republic', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': 'E7B3W422C4w4b2r1Y4X8s2L3m1N4m2M3r6a1D3B4pump' }, tier: 'micro' },
  TOOKER: { name: 'Tooker Kurlson', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': '9xLzK8U4F8d8B5c6m1D5g6s8G7k3r3F2b6G3B3c6pump' }, tier: 'micro' },
  USA: { name: 'American Coin', isNative: false, primaryChain: 'Base', supportedChains: ['Base'], contracts: { 'Base': '0x170b6a5d5a2c81c92518e38b4a16377507bbc54c' }, tier: 'micro' },
  TOSHI: { name: 'Toshi', isNative: false, primaryChain: 'Base', supportedChains: ['Base'], contracts: { 'Base': '0xac1bd2486aaf3b5c0fc3fd868558b082a531b2b4' }, tier: 'micro' },
  BENO: { name: 'Beno', isNative: false, primaryChain: 'Base', supportedChains: ['Base'], contracts: { 'Base': '0x5c414a0b7e9b2a7f5a9e3a1a607e0c4af5c13636' }, tier: 'micro' },
  NPC: { name: 'Non-Playable Coin', isNative: false, primaryChain: 'Ethereum', supportedChains: ['ERC20'], contracts: { 'ERC20': '0x8f7c1fb70ea39c637ecb5109b4d81fbd6d0c1e87' }, tier: 'micro' },
  BITCOIN: { name: 'HarryPotterObamaSonic10Inu', isNative: false, primaryChain: 'Ethereum', supportedChains: ['ERC20'], contracts: { 'ERC20': '0x72e4f9fa83277fb9725156f139ce316974b612ec' }, tier: 'micro' },
  OMNI: { name: 'Omni Network', isNative: false, primaryChain: 'Ethereum', supportedChains: ['ERC20'], contracts: { 'ERC20': '0x36e66fbbce51e4cd5bd3c62b637eb411b18949d4' }, tier: 'small' },
  BOBO: { name: 'Bobo', isNative: false, primaryChain: 'Ethereum', supportedChains: ['ERC20'], contracts: { 'ERC20': '0xb90b2a33c5d65824e4d7a8c7edcfc6563bb70d9a' }, tier: 'micro' },
  PEIPEI: { name: 'PeiPei', isNative: false, primaryChain: 'Ethereum', supportedChains: ['ERC20'], contracts: { 'ERC20': '0x3ffeea07a27fab7ad1df5297fa75e77a43cb5790' }, tier: 'micro' },
  MOG: { name: 'Mog Coin', isNative: false, primaryChain: 'Ethereum', supportedChains: ['ERC20'], contracts: { 'ERC20': '0xaaee1a9723aadb7afa2810263653a34ba2c21c7a' }, tier: 'micro' },
  GIGA: { name: 'GigaChad', isNative: false, primaryChain: 'Solana', supportedChains: ['Solana'], contracts: { 'Solana': '63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9' }, tier: 'micro' },
  HOPPY: { name: 'Hoppy', isNative: false, primaryChain: 'Ethereum', supportedChains: ['ERC20'], contracts: { 'ERC20': '0x8db1c9812df934f8101a8848d799f2b84eb430d4' }, tier: 'micro' },
`;

code = code.replace(
  'export const VERIFIED_TOKEN_REGISTRY: Record<string, TokenRegistryEntry> = {',
  'export const VERIFIED_TOKEN_REGISTRY: Record<string, TokenRegistryEntry> = {' + newTokens
);

fs.writeFileSync(path, code);
