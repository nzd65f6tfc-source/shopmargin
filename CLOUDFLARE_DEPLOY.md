# Cloudflare Pages Deploy Guide

## Recommended Setup

Use Cloudflare Pages to deploy this static site from GitHub.

Repository:

`https://github.com/nzd65f6tfc-source/shopmargin`

## Cloudflare Pages Settings

When creating the Pages project:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: leave empty
- Production branch: `main`

This project is plain static HTML/CSS/JavaScript, so no build step is required.

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
