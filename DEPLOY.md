# Deploying Crypto RB Trade Scanner Website

Follow these steps in order. You only do this once — after that, every `git push` redeploys automatically.

## 1. Push the code to GitHub

```bash
cd crypto-rb-scanner-website
git init
git add .
git commit -m "Launch Crypto RB Trade Scanner website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 2. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New → Project** and choose your GitHub repo.
3. Keep all defaults (Framework Preset: Next.js) and click **Deploy** once — we will add the
   environment variables below and redeploy afterwards. (Or add them now in
   **Settings → Environment Variables** before deploying.)

## 3. Add Vercel Postgres + Blob storage

In your Vercel project dashboard:

1. Go to the **Storage** tab.
2. **Create Database → Postgres** → follow the wizard. This automatically adds
   `POSTGRES_URL` (and friends) to your project's environment variables.
3. **Create → Blob** → follow the wizard. This automatically adds
   `BLOB_READ_WRITE_TOKEN`.

No code changes needed — the site detects these automatically.

## 4. Create the database tables

1. Open **Storage → your Postgres database → Query** tab.
2. Paste the full contents of `lib/schema.sql` and run it.
3. You should see the `users` and `payments` tables created.

## 5. Create a Google OAuth Client ID

1. Go to [console.cloud.google.com](https://console.cloud.google.com).
2. Create (or select) a project.
3. Go to **APIs & Services → OAuth consent screen**, choose **External**, fill in the app name
   ("Crypto RB Trade Scanner") and your email, and save.
4. Go to **APIs & Services → Credentials → Create Credentials → OAuth client ID**,
   application type **Web application**.
5. Under **Authorized redirect URIs**, add exactly:
   ```
   https://YOUR-DOMAIN/api/auth/callback/google
   ```
   (Replace `YOUR-DOMAIN` with your real Vercel domain, e.g.
   `https://crypto-rb-scanner.vercel.app/api/auth/callback/google`.)
6. Copy the **Client ID** and **Client Secret**.

## 6. Set the remaining environment variables

In Vercel: **Settings → Environment Variables**, add these (Production + Preview + Development):

| Variable | Value |
|---|---|
| `GOOGLE_CLIENT_ID` | From step 5 |
| `GOOGLE_CLIENT_SECRET` | From step 5 |
| `NEXTAUTH_SECRET` | Run `openssl rand -base64 32` in your terminal and paste the output |
| `NEXTAUTH_URL` | Your production URL, e.g. `https://crypto-rb-scanner.vercel.app` |
| `NEXT_PUBLIC_BINANCE_ID` | `346894283` — already set as the default in the code; override only if your Binance ID changes |
| `ADMIN_EMAILS` | Your Google account email, e.g. `you@gmail.com` (comma-separated for multiple admins) |
| `NEXT_PUBLIC_SITE_URL` | Your production URL (used for sitemap, canonical tags) |

`POSTGRES_URL` and `BLOB_READ_WRITE_TOKEN` were already added automatically in step 3.

## 7. Redeploy

After saving the variables: **Deployments → ⋯ → Redeploy** (or just `git push` a change).

## 8. Test the full flow

1. Open your site and click **Start Free 3-Day Trial** → sign in with Google.
2. Check **/dashboard** — you should see the trial countdown and a **Launch App** button.
3. Click **Upgrade to Pro → /payment**, send 24.99 USDT to your own Binance ID, upload a
   screenshot + transaction ID, and submit.
4. Sign in as the admin email, open **/admin**, and **Approve** the payment.
5. The user's **/dashboard** should now show **Pro Active**.

## Local development (optional)

```bash
npm install
cp .env.example .env.local   # fill in your values
npm run dev                  # http://localhost:3000
```

For local DB work you can point `POSTGRES_URL` at any Postgres, including the one from Vercel
(Storage → Postgres → `.env.local` tab → copy).

## What you (the site owner) must provide

- **Binance ID** — already configured as `346894283` (buyers send the $24.99 USDT here). Only change `NEXT_PUBLIC_BINANCE_ID` if your ID ever changes.
- **Google OAuth Client ID + Secret** — for "Sign in with Google".
- **Admin email(s)** — who can open `/admin` and approve payments (`ADMIN_EMAILS`).
- **NEXTAUTH_SECRET** — any random string from `openssl rand -base64 32`.
