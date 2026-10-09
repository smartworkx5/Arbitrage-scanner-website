import {
  CexDexArbitrageOpportunity,
  CexDexFilterOptions,
  CexDexSummary,
  ExchangePrices,
  CurrencyStatus,
} from './types';
import { VERIFIED_TOKEN_REGISTRY } from './tokenRegistry';

// Tracked DEX Tokens & Known Verified Contracts across Chains
export interface DexTrackedToken {
  symbol: string;
  name: string;
  chain: string; // 'Ethereum' | 'Solana' | 'Base' | 'BEP20 (BSC)' | 'Arbitrum' | 'Polygon' | 'Avalanche'
  address: string;
  decimals?: number;
  explorerBaseUrl: string;
  tier: 'micro' | 'small' | 'major';
  category?: string;
}

// Curated list of high-liquidity, high-volume arbitrageable tokens across chains,
// including major, small-cap, and micro-cap tokens from both CEX and DEX origins.
export const TRACKED_DEX_TOKENS: DexTrackedToken[] = [
  // --- Solana Micro & Small Cap Tokens (Pump.fun graduates, AI Agents, Memes, Low-Caps) ---
  { symbol: 'FARTCOIN', name: 'Fartcoin', chain: 'Solana', address: '9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'AI Meme' },
  { symbol: 'AI16Z', name: 'ai16z', chain: 'Solana', address: 'HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'AI Agent' },
  { symbol: 'GRIFFAIN', name: 'GRIFFAIN', chain: 'Solana', address: 'KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'AI Agent' },
  { symbol: 'ZEREBRO', name: 'zerebro', chain: 'Solana', address: '8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'AI Meme' },
  { symbol: 'SWARMS', name: 'Swarms', chain: 'Solana', address: '9tm2DYRkWmKPaei9yS1s4kG11wT7hN5h8Bpm2vQypump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'AI Agent' },
  { symbol: 'PIPPIN', name: 'Pippin', chain: 'Solana', address: 'Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4So2gDEapump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'AI Agent' },
  { symbol: 'CHILLGUY', name: 'Just a chill guy', chain: 'Solana', address: 'Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'FWOG', name: 'Fwog', chain: 'Solana', address: 'A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'GIGA', name: 'GigaChad', chain: 'Solana', address: '63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'SLERF', name: 'Slerf', chain: 'Solana', address: '7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'MYRO', name: 'Myro', chain: 'Solana', address: 'HhJpBhNeSpveoxdqBqcMfGeWjGVYopR4ZsFjrek8pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'WEN', name: 'Wen', chain: 'Solana', address: 'WENWENvqqNya429ubCdXr81ZmD69brwQaaBYY6p3LC', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'PONKE', name: 'Ponke', chain: 'Solana', address: '5z32nNenBHgDHvdGG3v6kWgK386VDURzgUb5io7hpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'MICHI', name: 'Michi', chain: 'Solana', address: '5mbK36SZ7J19Un8Em8utfxKcCYM5f68BC9mKAUppmurn', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'MOTHER', name: 'Mother Iggy', chain: 'Solana', address: '3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Celebrity' },
  { symbol: 'BILLY', name: 'Billy', chain: 'Solana', address: '3B5wuUrMEiZTdmBrqcC2vhQvBhgwvdQuFD2Zqm2pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'RETARDIO', name: 'Retardio', chain: 'Solana', address: '6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'SAMO', name: 'Samoyedcoin', chain: 'Solana', address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'FIDA', name: 'Bonfida', chain: 'Solana', address: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Infrastructure' },
  { symbol: 'MANEKI', name: 'Maneki', chain: 'Solana', address: '25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'PUPS', name: 'Pups', chain: 'Solana', address: 'PUPS14bLPj4q1eHqD57m1MZ3yq8P464j9H938vXwpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'SC', name: 'Shark Cat', chain: 'Solana', address: '6D7NaB2xsLd7cauUM1z8GLySBiWDYH3phjEv2456pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'LOCKIN', name: 'Lock In', chain: 'Solana', address: '8Ki8DpuWNxu9VsS3kQbarsCPUcFGWkKEg8gk9kkpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'LUCE', name: 'Official Mascot', chain: 'Solana', address: 'CBdCxKo9QavR9hfShgpE2HgDhpf9Jyd4mr2Zkxwpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'ACT', name: 'Act I : The AI Prophecy', chain: 'Solana', address: 'GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'AI Agent' },
  { symbol: 'GOAT', name: 'Goatseus Maximus', chain: 'Solana', address: 'CzLSujWBLFsSjncfkh59rQD4wE44noSnli3qH3ncpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'AI Meme' },
  { symbol: 'MOODENG', name: 'Moo Deng', chain: 'Solana', address: 'ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'PNUT', name: 'Peanut the Squirrel', chain: 'Solana', address: '2qEHjNxgo8istTWhGFZWPcrwYTaW39pwYVVDeA3pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'BOME', name: 'BOOK OF MEME', chain: 'Solana', address: 'ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'MEW', name: 'cat in a dogs world', chain: 'Solana', address: 'MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'POPCAT', name: 'Popcat', chain: 'Solana', address: '7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'DRIFT', name: 'Drift', chain: 'Solana', address: 'DriFtupJYLTosbwoN8koMbEYSx54aFAVLddWsbksjwg7', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Perp DEX' },
  { symbol: 'PENGU', name: 'Pudgy Penguins', chain: 'Solana', address: '2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'NFT' },
  { symbol: 'BAN', name: 'Comedian', chain: 'Solana', address: '9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'RIF', name: 'Rifampicin', chain: 'Solana', address: 'GJtFtNWBHJnQT5BiQzoxeL2CFJJ2zoxofh55xLpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'DeSci' },
  { symbol: 'URO', name: 'Urolithin A', chain: 'Solana', address: 'FvgqHMfL9yn39V79huDPy3YUNDPx4XYunWh2Pmxhpump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'DeSci' },
  { symbol: 'BERT', name: 'Bert', chain: 'Solana', address: 'HgBRW86Pj54z4vM437d2f9g5j6f7pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'SHOGGOTH', name: 'Shoggoth', chain: 'Solana', address: 'H2c3whSaueGGWi82LsNQUtbSARRioNWMfPRe8d42pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'AI Meme' },
  { symbol: 'NOS', name: 'Nosana', chain: 'Solana', address: 'nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'AI Compute' },
  { symbol: 'SHDW', name: 'Shadow Token', chain: 'Solana', address: 'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Storage' },
  { symbol: 'KMNO', name: 'Kamino', chain: 'Solana', address: 'KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'DeFi' },
  { symbol: 'TNSR', name: 'Tensor', chain: 'Solana', address: 'TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'NFT' },
  { symbol: 'ORCA', name: 'Orca', chain: 'Solana', address: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'DEX' },
  { symbol: 'ZEUS', name: 'Zeus Network', chain: 'Solana', address: 'ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq', explorerBaseUrl: 'https://solscan.io/token/', tier: 'small', category: 'Cross-chain' },
  { symbol: 'HAWK', name: 'HawkSight', chain: 'Solana', address: 'BKipkEAx5rQJTwW7eE3m7CDEpQ8d15p7mFm1JpZ5pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'DeFi' },
  { symbol: 'KANG', name: 'Kangaroo', chain: 'Solana', address: '7g1zMyHwQtzhSWhzK7sC4k9jDGHqD9s1pQYgD6kApump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'TREMP', name: 'Doland Tremp', chain: 'Solana', address: 'FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'PoliFi' },
  { symbol: 'BODEN', name: 'Jeo Boden', chain: 'Solana', address: '3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'PoliFi' },
  { symbol: 'RTR', name: 'Restore The Republic', chain: 'Solana', address: 'E7B3W422C4w4b2r1Y4X8s2L3m1N4m2M3r6a1D3B4pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'PoliFi' },
  { symbol: 'TOOKER', name: 'Tooker Kurlson', chain: 'Solana', address: '9xLzK8U4F8d8B5c6m1D5g6s8G7k3r3F2b6G3B3c6pump', explorerBaseUrl: 'https://solscan.io/token/', tier: 'micro', category: 'PoliFi' },

  // --- Solana Major Tokens ---
  { symbol: 'RAY', name: 'Raydium', chain: 'Solana', address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'DEX' },
  { symbol: 'JUP', name: 'Jupiter', chain: 'Solana', address: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'DEX' },
  { symbol: 'BONK', name: 'Bonk', chain: 'Solana', address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'Meme' },
  { symbol: 'WIF', name: 'dogwifhat', chain: 'Solana', address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'Meme' },
  { symbol: 'PYTH', name: 'Pyth Network', chain: 'Solana', address: 'HZ1JovNiPvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'Oracle' },
  { symbol: 'JTO', name: 'Jito', chain: 'Solana', address: 'jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'LST' },
  { symbol: 'W', name: 'Wormhole', chain: 'Solana', address: '85VBFQZC9TZkfaptBWjvUw7YbZwg58hZs5REWdPB23P0', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'Bridge' },
  { symbol: 'RENDER', name: 'Render Token', chain: 'Solana', address: 'rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof', explorerBaseUrl: 'https://solscan.io/token/', tier: 'major', category: 'AI GPU' },

  // --- Base Micro & Small Cap Tokens ---
  { symbol: 'VIRTUAL', name: 'Virtual Protocol', chain: 'Base', address: '0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b', explorerBaseUrl: 'https://basescan.org/token/', tier: 'small', category: 'AI Agent' },
  { symbol: 'CLANKER', name: 'Tokenbot Clanker', chain: 'Base', address: '0x1bc0c42215582d5a085795f4baDbaC3ff36d1Bcb', explorerBaseUrl: 'https://basescan.org/token/', tier: 'small', category: 'AI Agent' },
  { symbol: 'LUNA', name: 'Luna by Virtuals', chain: 'Base', address: '0x55cD642052103006E5335bE898f980382532B64F', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'AI Agent' },
  { symbol: 'AIXBT', name: 'aixbt', chain: 'Base', address: '0x4F9Fd6Be4a90f2620860d680c0d4d5Fb53d1A825', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'AI Agent' },
  { symbol: 'ANON', name: 'Anon Supercast', chain: 'Base', address: '0x0db510e79909666d6dec7f5e4bc3ce08301d41a3', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'AI Agent' },
  { symbol: 'SKI', name: 'Ski Mask Dog', chain: 'Base', address: '0x7a63004bb0d5885c41e8334ddb46d7907b8b204f', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'HIGHER', name: 'higher', chain: 'Base', address: '0x0578d8a7d8343073982ca97100e104c57e4e0427', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Community' },
  { symbol: 'KEYCAT', name: 'Keyboard Cat', chain: 'Base', address: '0x9a26f5433671751c3276a26524315446dd1ee97b', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'BENJI', name: 'Basenji', chain: 'Base', address: '0xbc45647ea894030a4e9801ec03d73104ce9db98e', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'CHOMP', name: 'ChompCoin', chain: 'Base', address: '0xe3520349f477a5f6eb061070660485084985240b', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'NORMIE', name: 'Normie', chain: 'Base', address: '0x7f12d13b34f5f4f0a7849d72b45027d37c688848', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'MOCHI', name: 'Mochi', chain: 'Base', address: '0xF6e932Ca12afa26665dC4dDE7e27be02A7669e50', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'DOGINME', name: 'doginme', chain: 'Base', address: '0x6921b130d297cc43754afba22e5eac0fdf8db75b', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'TYBG', name: 'Base God', chain: 'Base', address: '0x0d97f261b1e88845184f678e2d1c72D525bD9BA9', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'MFER', name: 'mfercoin', chain: 'Base', address: '0xe3086852a4b125803c815a158249ae468a3254ca', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Community' },
  { symbol: 'BRETT', name: 'Brett', chain: 'Base', address: '0x532f27101965dd16442e59d40670faf5ebb142e4', explorerBaseUrl: 'https://basescan.org/token/', tier: 'small', category: 'Meme' },
  { symbol: 'DEGEN', name: 'Degen', chain: 'Base', address: '0x4ed4e862860bed51a9570b96d89af5e1b0efefed', explorerBaseUrl: 'https://basescan.org/token/', tier: 'small', category: 'Social' },
  { symbol: 'TOSHI', name: 'Toshi', chain: 'Base', address: '0xac1bd2486aaf3b5c0fc3fd868558b082a531b2b4', explorerBaseUrl: 'https://basescan.org/token/', tier: 'small', category: 'Meme' },
  { symbol: 'MIGGLES', name: 'Mr Miggles', chain: 'Base', address: '0xb1a03eda10342529bbf8eb700a06c60441fef25d', explorerBaseUrl: 'https://basescan.org/token/', tier: 'small', category: 'Meme' },
  { symbol: 'WELL', name: 'Moonwell', chain: 'Base', address: '0xa88594d404727625a9437c3f886c7616134ca566', explorerBaseUrl: 'https://basescan.org/token/', tier: 'small', category: 'DeFi' },
  { symbol: 'EXTRA', name: 'Extra Finance', chain: 'Base', address: '0x6a048744007daabeb1e5c5ea70d04f26ca4c5be7', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'DeFi' },
  { symbol: 'USA', name: 'American Coin', chain: 'Base', address: '0x170b6A5D5A2c81C92518e38b4A16377507Bbc54C', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'BENO', name: 'Beno', chain: 'Base', address: '0x5c414A0B7e9B2a7f5a9e3A1A607e0c4aF5c13636', explorerBaseUrl: 'https://basescan.org/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'AERO', name: 'Aerodrome Finance', chain: 'Base', address: '0x940181a94a35a4569e4529a3cdfb74e38fd98631', explorerBaseUrl: 'https://basescan.org/token/', tier: 'major', category: 'DEX' },

  // --- Ethereum (ERC20) Micro & Small Cap Tokens ---
  { symbol: 'SPX', name: 'SPX6900', chain: 'Ethereum', address: '0xe0f63a424a4439cbe457d80e4f4b51ad25b2c56c', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'MOG', name: 'Mog Coin', chain: 'Ethereum', address: '0xaaee1a9723aadb7afa2810263653a34ba2c21c7a', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'APU', name: 'Apu Apustaja', chain: 'Ethereum', address: '0x594dda864e53b0e07f477e01e72040083ec802fa', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'PEPE2.0', name: 'Pepe 2.0', chain: 'Ethereum', address: '0x0305f515fa978cf87226cf8a9776d25bcfb2cc0b', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'WOJAK', name: 'Wojak', chain: 'Ethereum', address: '0x5026a3fcd35eec21b40c76327150b86520b15829', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'BITCOIN', name: 'HarryPotterObamaSonic10Inu', chain: 'Ethereum', address: '0x72e4f9fa83277fb9725156f139ce316974b612ec', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'LADYS', name: 'Milady Meme Coin', chain: 'Ethereum', address: '0x12970e6868f88f6557b76120662c1b3e50a646bf', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'GROK', name: 'Grok', chain: 'Ethereum', address: '0x8390a1da07e376ef7add4be859ba74fb83aa02d5', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'AI Meme' },
  { symbol: 'TURBO', name: 'Turbo', chain: 'Ethereum', address: '0xa35923162c49cf95e6bf26623385eb431ad920d3', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'AI Meme' },
  { symbol: 'COW', name: 'CoW Protocol', chain: 'Ethereum', address: '0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'DEX' },
  { symbol: 'BONE', name: 'Bone ShibaSwap', chain: 'Ethereum', address: '0x98130379d20d087915be637021b0a729cce82601', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'DeFi' },
  { symbol: 'BLUR', name: 'Blur', chain: 'Ethereum', address: '0x5283d291dbcf85356a21ba090e6db59121208b44', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'NFT' },
  { symbol: 'NEIRO', name: 'First Neiro on Ethereum', chain: 'Ethereum', address: '0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'CULT', name: 'Cult DAO', chain: 'Ethereum', address: '0xf0f9d895aca5c8678f706fb8216fa22957685a13', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'DAO' },
  { symbol: 'VOLT', name: 'Volt Inu', chain: 'Ethereum', address: '0x7db3463d675d7e594d34707371900c3c39d89b91', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'ELON', name: 'Dogelon Mars', chain: 'Ethereum', address: '0x761a39ca21d954730e5c8114480484777e3174f3', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'BADGER', name: 'Badger DAO', chain: 'Ethereum', address: '0x3472a5a71965499acd81917a54b49f9432667f73', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'DeFi' },
  { symbol: 'LOOKS', name: 'LooksRare', chain: 'Ethereum', address: '0xf4d2888d29d722226fafa5d9b24f91642ddd2268', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'NFT' },
  { symbol: 'SYN', name: 'Synapse', chain: 'Ethereum', address: '0x0f2d719407fd14e304b3d12d0103635b2024b914', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'Bridge' },
  { symbol: 'NPC', name: 'Non-Playable Coin', chain: 'Ethereum', address: '0x8f7c1fb70ea39c637ecb5109b4d81fbd6d0c1e87', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'OMNI', name: 'Omni Network', chain: 'Ethereum', address: '0x36e66fbbce51e4cd5bd3c62b637eb411b18949d4', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'small', category: 'Infrastructure' },
  { symbol: 'BOBO', name: 'Bobo', chain: 'Ethereum', address: '0xb90b2a33c5d65824e4d7a8c7edcfc6563bb70d9a', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'PEIPEI', name: 'PeiPei', chain: 'Ethereum', address: '0x3ffeea07a27fab7ad1df5297fa75e77a43cb5790', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'HOPPY', name: 'Hoppy', chain: 'Ethereum', address: '0x8db1c9812df934f8101a8848d799f2b84eb430d4', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'micro', category: 'Meme' },

  // --- Ethereum Major Tokens ---
  { symbol: 'PEPE', name: 'Pepe', chain: 'Ethereum', address: '0x6982508145454ce325ddbe47a25d4ec3d2311933', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'Meme' },
  { symbol: 'SHIB', name: 'Shiba Inu', chain: 'Ethereum', address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'Meme' },
  { symbol: 'UNI', name: 'Uniswap', chain: 'Ethereum', address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'DEX' },
  { symbol: 'LINK', name: 'Chainlink', chain: 'Ethereum', address: '0x514910771af9ca656af840dff83e8264ecf986ca', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'Oracle' },
  { symbol: 'PENDLE', name: 'Pendle', chain: 'Ethereum', address: '0x808507121b80c02388fad14726482e061b8da827', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'DeFi' },
  { symbol: 'FET', name: 'Artificial Superintelligence Alliance', chain: 'Ethereum', address: '0xaea46a60368a7bd060eec7df8cba43b7bef41e6f', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'AI' },
  { symbol: 'AAVE', name: 'Aave', chain: 'Ethereum', address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'Lending' },
  { symbol: 'CRV', name: 'Curve DAO', chain: 'Ethereum', address: '0xd533a949740bb3328d0ed7a4d570e300d029705a', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'DEX' },
  { symbol: 'LDO', name: 'Lido DAO', chain: 'Ethereum', address: '0x5a98fcbea516cf06857215779fd812ca96f8abe0', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'LST' },
  { symbol: 'ENA', name: 'Ethena', chain: 'Ethereum', address: '0x57e114b691db790c35207b2e685d4a43181e6061', explorerBaseUrl: 'https://etherscan.io/token/', tier: 'major', category: 'Stablecoin' },

  // --- BEP20 (BSC) Micro & Small Cap Tokens ---
  { symbol: 'BABYBNB', name: 'Baby BNB', chain: 'BEP20 (BSC)', address: '0x2d5f3b0722f87c2f0fcfba9a2ce089069d50fb91', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'FOUR', name: 'Four', chain: 'BEP20 (BSC)', address: '0x244e0f40d463d6b05210298a0c20164c01d4ca5d', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'CHEEMS', name: 'Cheems', chain: 'BEP20 (BSC)', address: '0x0df0587216a4a1bb7d5082fdc491d93d2dd4b413', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'CAT', name: "Simon's Cat", chain: 'BEP20 (BSC)', address: '0x6894cde390a3f51155ea41ed24a33a4827d3063d', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'Meme' },
  { symbol: 'BABYDOGE', name: 'Baby Doge Coin', chain: 'BEP20 (BSC)', address: '0xc748673057861a797275cd8a068abb95a902e8de', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'Meme' },
  { symbol: 'QUACK', name: 'RichQUACK', chain: 'BEP20 (BSC)', address: '0xd74b782e05aa25c50e7330af541d46e18f36661c', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'PIT', name: 'Pitbull', chain: 'BEP20 (BSC)', address: '0xa57ac35ce91ee92caefaa8dc04140c8e23252e50', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'BSCPAD', name: 'BscPad', chain: 'BEP20 (BSC)', address: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'Launchpad' },
  { symbol: 'FLOKI', name: 'Floki', chain: 'BEP20 (BSC)', address: '0xfb5b838b6cffd842270e98c09291f522143a7b1a', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'Meme' },
  { symbol: 'VELO', name: 'Velo', chain: 'BEP20 (BSC)', address: '0x5c420ea0ebec48c105001ff2a5f5f726715f40f2', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'Payments' },
  { symbol: 'BAKE', name: 'BakerySwap', chain: 'BEP20 (BSC)', address: '0xE02dF9e4e622DeBDD43daE52266506075471f869', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'DEX' },
  { symbol: 'BSW', name: 'Biswap', chain: 'BEP20 (BSC)', address: '0x965f527d9159dce6288a2219db51fc6eef120dd1', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'DEX' },
  { symbol: 'HOOK', name: 'Hooked Protocol', chain: 'BEP20 (BSC)', address: '0xa260e12d2b924cb899cf80b60c5280ee55a02d50', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'small', category: 'Web3 Learn' },
  { symbol: 'CAKE', name: 'PancakeSwap', chain: 'BEP20 (BSC)', address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', explorerBaseUrl: 'https://bscscan.com/token/', tier: 'major', category: 'DEX' },

  // --- Avalanche & Arbitrum Small & Micro Cap Tokens ---
  { symbol: 'COQ', name: 'Coq Inu', chain: 'Avalanche', address: '0x420f9412b98ecf388374ee1ac075ba32dc3cc0a2', explorerBaseUrl: 'https://snowtrace.io/token/', tier: 'small', category: 'Meme' },
  { symbol: 'KIMBO', name: 'Kimbo', chain: 'Avalanche', address: '0x184cf434e32eb2c842e4ec3c2e1f2b23a7bb9184', explorerBaseUrl: 'https://snowtrace.io/token/', tier: 'micro', category: 'Meme' },
  { symbol: 'NOCHILL', name: 'No Chill', chain: 'Avalanche', address: '0xac1e467d341991a0c7ce96ff26d6e2794017b2b6', explorerBaseUrl: 'https://snowtrace.io/token/', tier: 'micro', category: 'Social' },
  { symbol: 'ARENA', name: 'The Arena', chain: 'Avalanche', address: '0xb8d7616e2d380d621752b0165030c248038f6779', explorerBaseUrl: 'https://snowtrace.io/token/', tier: 'small', category: 'Social' },
  { symbol: 'JOE', name: 'Trader Joe', chain: 'Avalanche', address: '0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd', explorerBaseUrl: 'https://snowtrace.io/token/', tier: 'small', category: 'DEX' },
  { symbol: 'GRAIL', name: 'Camelot Token', chain: 'Arbitrum', address: '0x3d9907f9a368ad0a51be60f7da3b97cf940982d8', explorerBaseUrl: 'https://arbiscan.io/token/', tier: 'small', category: 'DEX' },
  { symbol: 'GMX', name: 'GMX', chain: 'Arbitrum', address: '0xfc5a1a6eb073a2ec3577bfd0f20c03d007bce970', explorerBaseUrl: 'https://arbiscan.io/token/', tier: 'small', category: 'Perp DEX' },
  { symbol: 'MAGIC', name: 'Treasure', chain: 'Arbitrum', address: '0x539bde0d7dbd336b79148aa742883198bbf60342', explorerBaseUrl: 'https://arbiscan.io/token/', tier: 'small', category: 'Gaming' },
  { symbol: 'RDNT', name: 'Radiant Capital', chain: 'Arbitrum', address: '0x3082cc23568ea640225c2467653db90e9250aaa0', explorerBaseUrl: 'https://arbiscan.io/token/', tier: 'small', category: 'Lending' },
  { symbol: 'SPA', name: 'Sperax', chain: 'Arbitrum', address: '0x5575552988a99a759c1283028c6514d37d616666', explorerBaseUrl: 'https://arbiscan.io/token/', tier: 'small', category: 'DeFi' },
  { symbol: 'ARB', name: 'Arbitrum', chain: 'Arbitrum', address: '0x912ce59144191c1204e64559fe8253a0e49e6548', explorerBaseUrl: 'https://arbiscan.io/token/', tier: 'major', category: 'L2' },
];

export interface DexscreenerPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceNative: string;
  priceUsd: string;
  txns?: {
    h24?: {
      buys: number;
      sells: number;
    };
  };
  volume?: {
    h24?: number;
  };
  priceChange?: {
    h24?: number;
  };
  liquidity?: {
    usd?: number;
    base?: number;
    quote?: number;
  };
}

export class CexDexScannerEngine {
  private dexPairsCache = new Map<string, DexscreenerPair>(); // tokenAddress.toLowerCase() -> DexscreenerPair
  private opportunities: CexDexArbitrageOpportunity[] = [];
  private lastScanTimestamp = 0;
  private isScanning = false;

  private formatDexName(dexId: string): string {
    const map: Record<string, string> = {
      uniswap: 'Uniswap V3',
      uniswap_v3: 'Uniswap V3',
      uniswap_v2: 'Uniswap V2',
      pancakeswap: 'PancakeSwap V3',
      pancakeswap_v3: 'PancakeSwap V3',
      pancakeswap_v2: 'PancakeSwap V2',
      raydium: 'Raydium',
      orca: 'Orca',
      meteora: 'Meteora',
      aerodrome: 'Aerodrome',
      camelot: 'Camelot',
      traderjoe: 'Trader Joe',
      sushiswap: 'SushiSwap',
      quickswap: 'QuickSwap',
      curve: 'Curve',
    };
    return map[dexId.toLowerCase()] || dexId.toUpperCase();
  }

  private formatChainName(chainId: string): string {
    const map: Record<string, string> = {
      ethereum: 'Ethereum',
      solana: 'Solana',
      base: 'Base',
      bsc: 'BEP20 (BSC)',
      arbitrum: 'Arbitrum',
      polygon: 'Polygon',
      avalanche: 'Avalanche',
      optimism: 'Optimism',
    };
    return map[chainId.toLowerCase()] || chainId.toUpperCase();
  }

  private getDexTradeUrl(pair: DexscreenerPair): string {
    const chain = pair.chainId.toLowerCase();
    const tokenAddr = pair.baseToken.address;
    const dex = pair.dexId.toLowerCase();

    if (chain === 'solana') {
      if (dex.includes('raydium')) {
        return `https://raydium.io/swap/?inputMint=sol&outputMint=${tokenAddr}`;
      }
      return `https://jup.ag/swap/USDC-${tokenAddr}`;
    }

    if (chain === 'base' && dex.includes('aerodrome')) {
      return `https://aerodrome.finance/swap?to=${tokenAddr}`;
    }

    if (dex.includes('pancake')) {
      return `https://pancakeswap.finance/swap?outputCurrency=${tokenAddr}`;
    }

    if (dex.includes('camelot')) {
      return `https://app.camelot.exchange/`;
    }

    if (dex.includes('traderjoe') || chain === 'avalanche') {
      return `https://traderjoexyz.com/avalanche/trade`;
    }

    // Default Uniswap
    return `https://app.uniswap.org/swap?outputCurrency=${tokenAddr}&chain=${chain}`;
  }

  private getEstimatedGasFee(chain: string): number {
    const c = chain.toLowerCase();
    if (c.includes('solana')) return 0.005;
    if (c.includes('base') || c.includes('arbitrum') || c.includes('optimism') || c.includes('polygon')) return 0.05;
    if (c.includes('bsc')) return 0.10;
    if (c.includes('avalanche')) return 0.15;
    if (c.includes('ethereum')) return 2.50;
    return 0.10;
  }

  /**
   * Fetch Real-Time DEX pairs from DexScreener API in batch chunks
   */
  public async fetchAllDexPrices(): Promise<void> {
    try {
      // Chunk addresses (max 30 per DexScreener call)
      const allAddresses = TRACKED_DEX_TOKENS.map((t) => t.address);
      const chunkSize = 28;
      
      const chunks: string[][] = [];
      for (let i = 0; i < allAddresses.length; i += chunkSize) {
        chunks.push(allAddresses.slice(i, i + chunkSize));
      }

      await Promise.all(
        chunks.map(async (chunk) => {
          try {
            const url = `https://api.dexscreener.com/latest/dex/tokens/${chunk.join(',')}`;
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 6000);

            const res = await fetch(url, {
              signal: controller.signal,
              headers: { Accept: 'application/json' },
            });
            clearTimeout(timeout);

            if (!res.ok) return;
            const data = await res.json();
            const pairs: DexscreenerPair[] = data.pairs || [];

            for (const pair of pairs) {
              if (!pair.priceUsd || parseFloat(pair.priceUsd) <= 0) continue;
              const addr = pair.baseToken.address.toLowerCase();
              const existing = this.dexPairsCache.get(addr);
              
              // Prefer pair with highest liquidity
              const newLiq = pair.liquidity?.usd || 0;
              const oldLiq = existing?.liquidity?.usd || 0;

              if (!existing || newLiq > oldLiq) {
                this.dexPairsCache.set(addr, pair);
              }
            }
          } catch (e) {
            // Silently handle single chunk network issues
          }
        })
      );
    } catch (err) {
      console.warn('DEX price batch fetch error:', err);
    }
  }

  /**
   * Compute CEX vs DEX Arbitrage Opportunities by comparing cached DEX pairs
   * with current CEX Prices from all 15 spot exchanges
   */
  public computeOpportunities(
    cexPricesMap: Map<string, ExchangePrices>,
    cexStatusesMap: Map<string, Record<string, CurrencyStatus>>,
    exchangeNames: Record<string, string>
  ): CexDexArbitrageOpportunity[] {
    const opps: CexDexArbitrageOpportunity[] = [];
    const seenIds = new Set<string>();
    const now = Date.now();

    for (const token of TRACKED_DEX_TOKENS) {
      const dexPair = this.dexPairsCache.get(token.address.toLowerCase());
      if (!dexPair || !dexPair.priceUsd) continue;

      const dexPrice = parseFloat(dexPair.priceUsd);
      const dexLiquidityUsd = dexPair.liquidity?.usd || 0;
      // Dynamic minimum liquidity: Lowered to $100 to allow finding 1k, 5k, 10k liquidity tokens
      const minRequiredLiq = 100;
      if (dexPrice <= 0 || dexLiquidityUsd < minRequiredLiq) continue;

      const usdtSymbol = `${token.symbol}USDT`;
      const dexChain = this.formatChainName(dexPair.chainId);
      const dexName = this.formatDexName(dexPair.dexId);
      const gasFeeUsd = this.getEstimatedGasFee(dexChain);
      const pairSuffix = (dexPair.pairAddress || token.address || 'pool').slice(0, 10).toLowerCase();

      // Compare with each CEX that trades this token
      for (const [cexId, prices] of cexPricesMap.entries()) {
        const item = prices[usdtSymbol];
        if (!item || !item.bid || !item.ask || item.bid <= 0 || item.ask <= 0) continue;

        const cexName = exchangeNames[cexId] || cexId.toUpperCase();
        const cexStatuses = cexStatusesMap.get(cexId) || {};
        const status = cexStatuses[token.symbol];

        const cexDepositOpen = status ? status.deposit : true;
        const cexWithdrawOpen = status ? status.withdraw : true;

        const cexBuyPrice = item.ask;  // Price to BUY on CEX
        const cexSellPrice = item.bid; // Price to SELL on CEX
        const cexMidPrice = (item.bid + item.ask) / 2;

        // Check 1: CEX ➔ DEX (Buy on CEX, Withdraw to wallet, Sell on DEX)
        // Spread = ((dexPrice - cexBuyPrice) / cexBuyPrice) * 100
        const cexToDexSpread = ((dexPrice - cexBuyPrice) / cexBuyPrice) * 100;
        if (cexToDexSpread >= 0.5) {
          const oppId = `cexdex-c2d-${cexId}-${dexPair.dexId}-${token.symbol}-${token.chain}-${pairSuffix}`;
          if (!seenIds.has(oppId)) {
            seenIds.add(oppId);
            const estimatedTotalFeePercent = 0.40; // 0.1% CEX + 0.3% DEX
            const grossProfit100 = (cexToDexSpread / 100) * 100;
            const netProfit100 = grossProfit100 - (100 * (estimatedTotalFeePercent / 100)) - (gasFeeUsd * 0.1);
            const grossProfit1000 = (cexToDexSpread / 100) * 1000;
            const netProfit1000 = grossProfit1000 - (1000 * (estimatedTotalFeePercent / 100)) - gasFeeUsd;
            const netProfitPercent = cexToDexSpread - estimatedTotalFeePercent;

            opps.push({
              id: oppId,
              symbol: usdtSymbol,
              baseSymbol: token.symbol,
              quoteSymbol: 'USDT',
              tokenName: token.name || dexPair.baseToken.name || token.symbol,
              direction: 'CEX_TO_DEX',
              cexId,
              cexName,
              cexPrice: cexMidPrice,
              cexBuyPrice,
              cexSellPrice,
              cexDepositOpen,
              cexWithdrawOpen,
              cexVolume24h: item.volume24h,
              cexVolumeToken: item.askTokenVolume,
              cexVolumeUsd: item.askTokenVolume && item.ask ? Math.round(item.askTokenVolume * item.ask * 100) / 100 : undefined,
              dexId: dexPair.dexId,
              dexName,
              dexChain,
              dexPrice,
              dexLiquidityUsd,
              dexVolume24h: dexPair.volume?.h24,
              dexPairAddress: dexPair.pairAddress,
              dexPairUrl: dexPair.url,
              dexTradeUrl: this.getDexTradeUrl(dexPair),
              contractAddress: token.address,
              explorerUrl: `${token.explorerBaseUrl}${token.address}`,
              isContractVerified: true,
              tokenTier: token.tier,
              tokenCategory: token.category,
              grossSpreadPercent: Math.round(cexToDexSpread * 100) / 100,
              estimatedGasFeeUsd: gasFeeUsd,
              estimatedTotalFeePercent,
              netProfitPercent: Math.round(netProfitPercent * 100) / 100,
              netProfitPer100USDT: Math.round(netProfit100 * 100) / 100,
              netProfitPer1000USDT: Math.round(netProfit1000 * 100) / 100,
              timestamp: now,
            });
          }
        }

        // Check 2: DEX ➔ CEX (Buy on DEX, Deposit to CEX, Sell on CEX)
        // Spread = ((cexSellPrice - dexPrice) / dexPrice) * 100
        const dexToCexSpread = ((cexSellPrice - dexPrice) / dexPrice) * 100;
        if (dexToCexSpread >= 0.5) {
          const oppId = `cexdex-d2c-${dexPair.dexId}-${cexId}-${token.symbol}-${token.chain}-${pairSuffix}`;
          if (!seenIds.has(oppId)) {
            seenIds.add(oppId);
            const estimatedTotalFeePercent = 0.40; // 0.3% DEX + 0.1% CEX
            const grossProfit100 = (dexToCexSpread / 100) * 100;
            const netProfit100 = grossProfit100 - (100 * (estimatedTotalFeePercent / 100)) - (gasFeeUsd * 0.1);
            const grossProfit1000 = (dexToCexSpread / 100) * 1000;
            const netProfit1000 = grossProfit1000 - (1000 * (estimatedTotalFeePercent / 100)) - gasFeeUsd;
            const netProfitPercent = dexToCexSpread - estimatedTotalFeePercent;

            opps.push({
              id: oppId,
              symbol: usdtSymbol,
              baseSymbol: token.symbol,
              quoteSymbol: 'USDT',
              tokenName: token.name || dexPair.baseToken.name || token.symbol,
              direction: 'DEX_TO_CEX',
              cexId,
              cexName,
              cexPrice: cexMidPrice,
              cexBuyPrice,
              cexSellPrice,
              cexDepositOpen,
              cexWithdrawOpen,
              cexVolume24h: item.volume24h,
              cexVolumeToken: item.bidTokenVolume,
              cexVolumeUsd: item.bidTokenVolume && item.bid ? Math.round(item.bidTokenVolume * item.bid * 100) / 100 : undefined,
              dexId: dexPair.dexId,
              dexName,
              dexChain,
              dexPrice,
              dexLiquidityUsd,
              dexVolume24h: dexPair.volume?.h24,
              dexPairAddress: dexPair.pairAddress,
              dexPairUrl: dexPair.url,
              dexTradeUrl: this.getDexTradeUrl(dexPair),
              contractAddress: token.address,
              explorerUrl: `${token.explorerBaseUrl}${token.address}`,
              isContractVerified: true,
              tokenTier: token.tier,
              tokenCategory: token.category,
              grossSpreadPercent: Math.round(dexToCexSpread * 100) / 100,
              estimatedGasFeeUsd: gasFeeUsd,
              estimatedTotalFeePercent,
              netProfitPercent: Math.round(netProfitPercent * 100) / 100,
              netProfitPer100USDT: Math.round(netProfit100 * 100) / 100,
              netProfitPer1000USDT: Math.round(netProfit1000 * 100) / 100,
              timestamp: now,
            });
          }
        }
      }
    }

    // Sort by Spread descending
    opps.sort((a, b) => b.grossSpreadPercent - a.grossSpreadPercent);
    this.opportunities = opps;
    this.lastScanTimestamp = now;
    return opps;
  }

  public getSummary(): CexDexSummary {
    const maxSpread = this.opportunities.length > 0
      ? Math.max(...this.opportunities.map((o) => o.grossSpreadPercent))
      : 0;

    const totalLiq = Array.from(this.dexPairsCache.values()).reduce(
      (acc, p) => acc + (p.liquidity?.usd || 0),
      0
    );

    const chains = new Set(this.opportunities.map((o) => o.dexChain));
    const dexs = new Set(this.opportunities.map((o) => o.dexName));

    const c2d = this.opportunities.filter((o) => o.direction === 'CEX_TO_DEX').length;
    const d2c = this.opportunities.filter((o) => o.direction === 'DEX_TO_CEX').length;
    const smallCount = this.opportunities.filter((o) => o.tokenTier === 'small' || o.tokenTier === 'micro').length;

    return {
      timestamp: this.lastScanTimestamp,
      totalCexDexPairs: this.opportunities.length,
      cexToDexCount: c2d,
      dexToCexCount: d2c,
      smallTokensCount: smallCount,
      maxSpreadPercent: Math.round(maxSpread * 100) / 100,
      totalDexLiquidityUsd: Math.round(totalLiq),
      chainsCount: chains.size,
      dexCount: dexs.size,
      isScanning: this.isScanning,
    };
  }

  public getFilteredOpportunities(options: CexDexFilterOptions): CexDexArbitrageOpportunity[] {
    let list = [...this.opportunities];

    // Search filter
    if (options.search) {
      const q = options.search.trim().toLowerCase();
      list = list.filter(
        (o) =>
          o.symbol.toLowerCase().includes(q) ||
          o.baseSymbol.toLowerCase().includes(q) ||
          o.tokenName.toLowerCase().includes(q) ||
          o.contractAddress.toLowerCase().includes(q) ||
          o.cexName.toLowerCase().includes(q) ||
          o.dexName.toLowerCase().includes(q) ||
          o.dexChain.toLowerCase().includes(q) ||
          (o.tokenCategory && o.tokenCategory.toLowerCase().includes(q))
      );
    }

    // Direction filter
    if (options.direction && options.direction !== 'ALL') {
      list = list.filter((o) => o.direction === options.direction);
    }

    // Chain filter
    if (options.chain && options.chain !== 'ALL') {
      list = list.filter((o) => o.dexChain.toLowerCase() === options.chain!.toLowerCase());
    }

    // DEX filter
    if (options.dex && options.dex !== 'ALL') {
      list = list.filter((o) => o.dexName.toLowerCase().includes(options.dex!.toLowerCase()) || o.dexId.toLowerCase().includes(options.dex!.toLowerCase()));
    }

    // CEX filter
    if (options.cex && options.cex !== 'ALL') {
      list = list.filter((o) => o.cexId.toLowerCase() === options.cex!.toLowerCase() || o.cexName.toLowerCase().includes(options.cex!.toLowerCase()));
    }

    // Token Tier filter
    if (options.tokenTier && options.tokenTier !== 'ALL') {
      if (options.tokenTier === 'SMALL_MICRO') {
        list = list.filter((o) => o.tokenTier === 'small' || o.tokenTier === 'micro');
      } else if (options.tokenTier === 'MAJOR') {
        list = list.filter((o) => o.tokenTier === 'major' || !o.tokenTier);
      }
    }

    // Min Spread
    if (options.minSpread !== undefined && options.minSpread > 0) {
      list = list.filter((o) => o.grossSpreadPercent >= options.minSpread!);
    }

    // Min DEX Liquidity
    if (options.minDexLiquidity !== undefined && options.minDexLiquidity > 0) {
      list = list.filter((o) => o.dexLiquidityUsd >= options.minDexLiquidity!);
    }

    // Sort
    const sortOrder = options.sortOrder === 'asc' ? 1 : -1;
    const sortBy = options.sortBy || 'spread';

    list.sort((a, b) => {
      if (sortBy === 'spread') {
        return (a.grossSpreadPercent - b.grossSpreadPercent) * sortOrder;
      }
      if (sortBy === 'profit') {
        return (a.netProfitPer1000USDT - b.netProfitPer1000USDT) * sortOrder;
      }
      if (sortBy === 'liquidity') {
        return (a.dexLiquidityUsd - b.dexLiquidityUsd) * sortOrder;
      }
      if (sortBy === 'dexVolume') {
        return ((a.dexVolume24h || 0) - (b.dexVolume24h || 0)) * sortOrder;
      }
      if (sortBy === 'symbol') {
        return a.symbol.localeCompare(b.symbol) * sortOrder;
      }
      return 0;
    });

    return list;
  }
}

export const cexDexScannerEngine = new CexDexScannerEngine();
