# Launch Checklist

## Before Deploy

- Pick production domain. Done: `shopfeecalc.com`.
- Replace all placeholder domain references in:
  - `index.html`
  - `robots.txt`
  - `sitemap.xml`
- Add a real contact email to:
  - `privacy.html`
  - `disclaimer.html`
- Recheck fee disclaimer language.

## Deploy

- Deploy static files to Cloudflare Pages. Done via Direct Upload.
- Use framework preset `None`.
- Leave build command empty.
- Use `/` as the build output directory.
- Confirm the main page loads at the final canonical URL. Done for `https://shopfeecalc.com`.
- Confirm `robots.txt` loads. Done.
- Confirm `sitemap.xml` loads. Done.
- Confirm `privacy` and `disclaimer` pages load.
- Confirm `www.shopfeecalc.com` redirects to `shopfeecalc.com`. Pending Cloudflare redirect rule.

## Deployment Follow-Up

- Repair Cloudflare GitHub integration. Current workaround is Direct Upload.
- Once repaired, confirm `git push` triggers a Cloudflare Pages production deployment.
- Add a Cloudflare redirect rule from `www.shopfeecalc.com/*` to `shopfeecalc.com/*`.

## After Deploy

- Add the domain to Google Search Console.
- Submit `sitemap.xml`.
- Request indexing for the main calculator page.
- Track impressions for:
  - `tiktok shop fee calculator`
  - `tiktok shop fees calculator`
  - `tiktok shop seller fees`
  - `tiktok shop commission fee`
  - `tiktok shop referral fee`

## First 30 Days

- Improve title/meta based on Search Console impressions.
- Add one supporting page if impressions appear for a related term.
- Share the calculator in relevant seller communities only when it directly answers a question.
