import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      plan?: string;
      trialEndsAt?: string | null;
    } & DefaultSession["user"];
  }
}
