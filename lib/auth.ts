import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser, getUser } from "@/lib/db";

export const googleConfigured = Boolean(
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
);

export const authOptions: NextAuthOptions = {
  // Empty strings are safe at build time: NextAuth only validates them when a
  // sign-in request actually runs. The /signin page shows a setup hint instead.
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    // On first sign-in, create the user row (3-day trial). All DB work is
    // wrapped so auth still works in demo mode without a database.
    async signIn({ user }) {
      if (user?.email) {
        try {
          const existing = await getUser(user.email);
          if (!existing) {
            await createUser(user.email, user.name ?? null, user.image ?? null);
          }
        } catch (err) {
          console.error("[auth] sign-in user upsert failed (demo mode?):", err);
        }
      }
      return true;
    },
    async session({ session }) {
      try {
        if (session.user?.email) {
          const dbUser = await getUser(session.user.email);
          if (dbUser) {
            session.user.plan = dbUser.plan;
            session.user.trialEndsAt = dbUser.trial_ends_at;
          }
        }
      } catch (err) {
        console.error("[auth] session DB lookup failed (demo mode?):", err);
      }
      return session;
    },
  },
};
