# AI Tool Hub — Landing Page

An independent, mobile-responsive affiliate pre-sell landing page for **AI Tool Hub**, currently
built to introduce visitors (mainly from YouTube and YouTube Shorts) to the **AI Video Bundle** by
BlueFX before sending them to the official product page via an affiliate link.

This is a plain HTML / CSS / JavaScript site — no build step, no framework, no dependencies. You
can open it directly in a browser or deploy it as a static site.

## Project Structure

```
.
├── index.html                 Main landing page
├── privacy.html                Privacy Policy
├── terms.html                  Terms of Use
├── disclaimer.html             General Disclaimer
├── affiliate-disclosure.html   Affiliate Disclosure
├── css/
│   └── style.css               All site styles (dark navy theme, responsive)
├── js/
│   └── main.js                 Nav toggle, FAQ accordion, affiliate link wiring
├── robots.txt
├── sitemap.xml
├── vercel.json                 Vercel config (clean URLs)
└── README.md
```

## ⚠️ Before You Launch: Add Your Affiliate Link

Every "Explore / View AI Video Bundle" button on the site pulls its destination from **one single
constant** at the top of `js/main.js`:

```js
const AFFILIATE_URL = "https://example.com/replace-with-your-clickbank-affiliate-link";
```

Replace that value with your real ClickBank (or other network) tracking link. Every button with a
`data-affiliate-link` attribute on the page will automatically use it, open in a new tab, and use
`rel="noopener noreferrer sponsored"` (the recommended `rel` for paid/affiliate links, which helps
search engines treat them correctly).

You do not need to edit any HTML to update the link — just update this one constant.

## Running Locally

Because the site is plain static files, you can preview it in a couple of ways:

**Option 1 — just open it:**
Double-click `index.html`, or open it directly in your browser.

**Option 2 — local server (recommended, avoids any relative-path quirks):**

```bash
# Python 3
python3 -m http.server 8000

# or Node.js
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to Vercel

This project deploys as a static site with zero configuration.

**Option A — Vercel CLI:**

```bash
npm install -g vercel
vercel
```

**Option B — Vercel Dashboard:**

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Framework preset: choose **Other** (no build command / no output directory needed).
4. Click **Deploy**.

`vercel.json` is already included with clean URL support (e.g. `/privacy` instead of
`/privacy.html`).

## What's Still Needed From You

1. **Affiliate tracking link** — the real ClickBank URL to paste into `AFFILIATE_URL` in
   `js/main.js`.
2. **Domain name** — once you have a live domain, update:
   - `<link rel="canonical">` and Open Graph `og:image` URLs in `index.html`
   - `robots.txt` and `sitemap.xml` (currently placeholder `https://example.com/`)
3. **Legal pages review** — `privacy.html`, `terms.html`, `disclaimer.html`, and
   `affiliate-disclosure.html` are general-purpose templates. Have them reviewed (ideally by a
   professional) and add a real contact method (email or contact form) before publishing.
4. **Open Graph image** (optional) — a `1200×630` social preview image at `assets/og-image.png` if
   you want rich link previews on social platforms.
5. **Analytics** (optional) — if you want visitor/click tracking, add your analytics snippet
   (e.g. Plausible, Google Analytics) to the `<head>` of each HTML page.

## Content & Compliance Notes

- This page is an **independent review/pre-sell page**. It does not copy BlueFX's sales page
  wording, layout, branding, or testimonials.
- No fabricated testimonials, customer counts, earnings claims, discounts, countdown timers, fake
  scarcity, star ratings, or guarantees are used anywhere on the site.
- The site does not claim the product was personally tested.
- The affiliate relationship is disclosed in the hero section and in the footer, plus a dedicated
  `Affiliate Disclosure` page.
