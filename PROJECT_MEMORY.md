# Project Memory

## Identity

Project: ShopFeeCalc / shopmargin

Domain: https://shopfeecalc.com

Repository: https://github.com/nzd65f6tfc-source/shopmargin

Deployment: Cloudflare Pages project `shopmargin`

Created: 2026-05

Status: Launched

## Why This Exists

Target user: US TikTok Shop sellers.

Primary problem: Sellers need a fast way to estimate TikTok Shop fees, ad cost,
affiliate commission, shipping, refunds, and net profit.

Primary keyword: `tiktok shop fee calculator`

Related keywords:

- `tiktok shop profit calculator`
- `tiktok shop commission calculator`
- `tiktok shop roas calculator`
- `tiktok shop break even calculator`

Evidence summary:

- Ubersuggest showed relevant TikTok Shop calculator keywords.
- Some keywords had modest volume but low enough difficulty for a new niche
  static tool site to test.
- Existing calculator pages provided useful references but left room for a more
  focused US-seller profit workflow.

## Build

Tech stack: static HTML, CSS, and JavaScript.

Key pages:

- `index.html`
- `privacy.html`
- `disclaimer.html`
- `ads.txt`
- `robots.txt`
- `sitemap.xml`

Core functionality:

- TikTok Shop fee and profit calculator
- Monthly profit estimate
- Profit margin
- Break-even ROAS
- Related calculator sections
- SEO FAQ content

Known limitations:

- Current version is a static MVP.
- Fee assumptions should be reviewed periodically against TikTok Shop policy
  changes.
- No analytics dashboard has been added yet.

## Deployment

GitHub: https://github.com/nzd65f6tfc-source/shopmargin

Cloudflare Pages: `shopmargin`

Production URL: https://shopfeecalc.com

GitHub Actions:

- Workflow: `.github/workflows/cloudflare-pages.yml`
- Status: verified successful
- Deploy target: Cloudflare Pages Direct Upload project

Search Console:

- Property added
- Sitemap submitted

Email routing:

- `contact@shopfeecalc.com`
- Cloudflare Email Routing verified

AdSense:

- Publisher ID: `pub-7325891001032972`
- AdSense script is installed on all public HTML pages.
- `ads.txt` is deployed at `https://shopfeecalc.com/ads.txt`.
- 2026-05-26: AdSense verified site ownership, requested site review, and
  created the Google CMP European regulations message with the 3-option
  consent flow.
- Auto ads are enabled with overlapping formats disabled and in-page ads left
  enabled for a less intrusive first monetization pass.

## Decisions

- 2026-05-21: Use `shopfeecalc.com` as the production domain.
- 2026-05-22: Use GitHub Actions plus Wrangler to deploy because the existing
  Cloudflare Pages project was created as Direct Upload and cannot be converted
  to native Git integration.
- 2026-05-22: Store future projects under `D:\工作区\Project`.

## Git Notes

Stable local Git proxy config on this machine:

```powershell
git config --local http.version HTTP/1.1
git config --local http.proxy "http://127.0.0.1:7897"
git config --local https.proxy "http://127.0.0.1:7897"
```

Avoid proxy variables pointing at `127.0.0.1:9`.

## Next Actions

- Wait for AdSense site approval and `ads.txt` status refresh.
- Monitor Search Console indexing and impressions.
- Plan the next related calculator or content page.
- Review TikTok Shop fee assumptions.

## Review Notes

- First site is a working template for the Website Factory workflow.
