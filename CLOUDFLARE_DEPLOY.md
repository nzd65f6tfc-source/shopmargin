# Cloudflare Pages Deploy Guide

## Recommended Setup

Use GitHub Actions to deploy this static site to the existing Cloudflare Pages
Direct Upload project.

Repository:

`https://github.com/nzd65f6tfc-source/shopmargin`

## Cloudflare Pages Settings

Current Pages project:

- Project name: `shopmargin`
- Production branch: `main`
- Deployment type: Direct Upload

If creating a new Git-integrated project from scratch:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: leave empty
- Production branch: `main`

This project is plain static HTML/CSS/JavaScript, so no build step is required.

## Automatic Deployments

Because this Pages project was created with Direct Upload, it cannot be switched
to Cloudflare's native Git integration later. Automatic deployment is handled by
GitHub Actions instead.

Required GitHub repository secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

Workflow file:

- `.github/workflows/cloudflare-pages.yml`

The workflow copies only public static assets into `dist/`, then deploys `dist/`
to the existing `shopmargin` Pages project whenever `main` receives a push.

## GitHub Push Troubleshooting

If `git push` or `git ls-remote` hangs or fails with a GitHub connection error,
check whether the current shell process has proxy variables pointing at
`127.0.0.1:9`.

In this repository, the fix was to override proxy use in local Git config and
keep HTTP/1.1 enabled:

```powershell
git config --local http.version HTTP/1.1
git config --local http.proxy ""
git config --local https.proxy ""
```

After that, verify with:

```powershell
git ls-remote --heads origin
git push origin main
```

## After First Deploy

Cloudflare will provide a temporary domain similar to:

`https://shopfeecalc.com`

After you have the actual Pages URL, replace any placeholder domain references in:

- `index.html`
- `robots.txt`
- `sitemap.xml`

Also update the embed iframe URL in `index.html`.

## Before Search Console

Confirm these URLs load:

- `/`
- `/privacy.html`
- `/disclaimer.html`
- `/robots.txt`
- `/sitemap.xml`

Then add the site to Google Search Console and submit:

`/sitemap.xml`

## Future Domain

If a custom domain is added later, replace the Pages URL with the final domain in:

- canonical URL
- Open Graph URL
- embed code
- robots sitemap URL
- sitemap URLs
