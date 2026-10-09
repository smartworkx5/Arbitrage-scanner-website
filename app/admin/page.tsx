import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAdminEmail } from "@/lib/admin";
import { isDbConfigured, listPendingPayments } from "@/lib/db";
import AdminPayments from "./AdminPayments";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin — payment review",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/signin");
  }

  const email = session.user.email;

  if (!isAdminEmail(email)) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="card max-w-md text-center">
          <p className="text-4xl" aria-hidden>⛔</p>
          <h1 className="mt-4 text-2xl font-bold">Access denied</h1>
          <p className="mt-2 text-sm text-slate-400">
            This area is restricted to site administrators.
          </p>
          <Link href="/dashboard" className="btn-secondary mt-6 w-full">
            Back to dashboard
          </Link>
        </div>
      </main>
    );
  }

  let payments: Awaited<ReturnType<typeof listPendingPayments>> = [];
  let dbError = "";
  if (isDbConfigured()) {
    try {
      payments = await listPendingPayments();
    } catch (err) {
      dbError = "Could not load payments from the database.";
      console.error("[admin] load failed:", err);
    }
  } else {
    dbError = "Database not configured — connect Vercel Postgres and run lib/schema.sql.";
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin — Payment Review</h1>
          <p className="mt-1 text-sm text-slate-400">Signed in as {email}</p>
        </div>
        <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white">
          Dashboard →
        </Link>
      </header>

      {dbError ? (
        <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-200">
          ⚠️ {dbError}
        </p>
      ) : (
        <AdminPayments initial={payments} />
      )}
    </main>
  );
}
