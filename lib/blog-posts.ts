import type { ArticleMeta, ContentBlock } from "./content";

export interface BlogPost extends ArticleMeta {
  excerpt: string; // 1-2 sentences, used on blog index cards
  blocks: ContentBlock[];
  i