# Project Status

## Project

ShopFeeCalc

## Current Phase

v1 is live on Cloudflare Pages.

## Current Decision

The v1 page is:

> TikTok Shop Fee Calculator for US Sellers

## Primary Keyword

`tiktok shop fee calculator`

## Next Implementation Tasks

1. Update page title, H1, meta description, and copy to fee-first positioning. Done.
2. Add fee-specific outputs. Done:
   - TikTok Shop fee amount
   - Creator commission amount
   - Total selling costs
   - Net revenue
   - Net profit
   - Profit margin
   - Break-even ROAS
3. Keep all fee assumptions editable.
4. Add deeper SEO content sections for seller fees, commission fee, referral fee, and fee calculation formula.

## Latest UX Additions

- Added seller country, currency, and product category controls.
- Added result insight text for losing money, thin margin, workable margin, and healthy margin.
- Expanded FAQ around commission fee, creator commission, coupons, negative profit, and country/category accuracy.
- Added formula section for on-page SEO clarity.
- Added embed code section to support sharing and future backlink growth.
- Added canonical, Open Graph metadata, SoftwareApplication schema, and FAQPage schema with placeholder production URL.
- Added privacy policy, disclaimer, robots.txt, and sitemap.xml placeholders for launch readiness.
- Updated UI theme from green ecommerce styling to a restrained TikTok-inspired palette: ink black, cyan accent, and red highlight.
- Added Cloudflare Pages deployment guide.
5. Preserve pure frontend/static implementation.

## Live Deployment

- Cloudflare Pages URL: `https://shopmargin-7w9.pages.dev`
- Production domain: `https://shopfeecalc.com`
- Production domain status: connected and verified.
- WWW domain: `https://www.shopfeecalc.com` redirects to the root domain.
- GitHub repository: `https://github.com/nzd65f6tfc-source/shopmargin`
- Latest production URL placeholders have been replaced with the production domain.
- Current deployment method: Cloudflare Pages Direct Upload.

## Known Issues

- Cloudflare GitHub integration is installed for `nzd65f6tfc-source/shopmargin`, but Cloudflare returned `Error connecting to git account`.
- Follow-up task: repair GitHub integration so future `git push` changes deploy automatically.
- GitHub CLI push instability was traced to process-level proxy variables pointing
  at `127.0.0.1:9`. Plain `git push origin main` now works in this repository
  after overriding proxy use in local Git config.

## Next Business/Launch Tasks

1. Choose and connect a production domain. Done: `shopfeecalc.com`.
2. Add a real contact email to privacy and disclaimer pages. Done: `contact@shopfeecalc.com`.
3. Submit the site to Google Search Console. Done.
4. Submit `sitemap.xml`. Done; Search Console initially showed "Could not fetch", likely temporary for a newly verified domain.
5. Monitor impressions for the primary keyword and related seller-fee keywords.

## Search Console

- Domain property verified: `shopfeecalc.com`
- Verification method: Google / Cloudflare DNS TXT authorization
- Sitemap submitted: `https://shopfeecalc.com/sitemap.xml`
- Main URL inspection submitted for priority crawling: `https://shopfeecalc.com/tiktok-shop-fee-calculator`

## Email Routing

- Public contact email: `contact@shopfeecalc.com`
- Cloudflare Email Routing status: enabled.
- Forwarding destination: `shilei1205971577@gmail.com`, verified.
- DNS records status: enabled and managed by Cloudflare Email Routing.
- A same-Gmail test email was sent successfully, but Gmail did not place the
  self-sent alias copy in Inbox. Final delivery should be tested once from an
  external sender.
- External delivery test passed: `1205971577@qq.com` sent a test email to
  `contact@shopfeecalc.com`, and it arrived in the Gmail Inbox.

## Important Files

- `KEYWORD_SELECTION.md`: final keyword/topic decision
- `PROJECT_RESEARCH.md`: research notes and rationale
- `index.html`: current MVP page
- `script.js`: calculator logic
- `styles.css`: page styles
