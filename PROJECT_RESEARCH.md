# ShopFeeCalc Research Notes

## Current Goal

Build an English SEO tool site for US TikTok Shop sellers. The first phase is keyword and tool-topic validation, not more UI work.

## Working Hypothesis

The first tool should target a keyword with:

- Clear calculator/tool intent
- US seller relevance
- Moderate search volume
- Low-to-medium SEO difficulty
- Commercial value through CPC, affiliate potential, ads, or future paid tools
- Room to build a better page than current SERP competitors

## Selection Principles From Prior Research

The user's earlier Claude research doc (`D:\工作区\资料\彩笔的救赎\副业\01 - 选题调研.md`) is valuable as a general tool-site checklist:

- A good tool topic = search demand + manageable competition + simple implementation.
- Prefer pure frontend tools with no login, no backend, no storage, and low maintenance.
- Prefer evergreen utility, especially calculators/converters.
- Avoid tools that depend on real-time data APIs, user accounts, file storage, or heavy operations.
- Avoid head terms already owned by large companies. Use narrower long-tail variants.
- Validate by keyword metrics, then inspect Google's top results for competitor weakness.

Adjustment for this project:

The old checklist recommends monthly volume > 1000 and KD < 20. That is reasonable for broad evergreen tools, but too strict for a narrow commercial niche like TikTok Shop seller calculators. For this project, acceptable targets are:

- Exact calculator keyword volume: 30-500+
- Supporting informational keyword volume: 50-1000+
- SEO difficulty: ideally below 25 for exact tool terms, below 50 for guide terms
- CPC/commercial signal: meaningful even if volume is modest
- SERP: contains smaller tool pages/blogs, not only official domains or major SaaS brands
- Implementation: still pure frontend and maintainable

This keeps the spirit of the old framework while adapting it to a niche B2B/ecommerce tool.

## Candidate Direction

Current strongest candidate:

**TikTok Shop Fee Calculator for US Sellers**

Positioning:

> Estimate TikTok Shop seller fees, commission fee, creator affiliate commission, coupons, shipping subsidies, refunds, and break-even ROAS.

Reasoning:

- `tiktok shop fee calculator` showed the strongest early signal from the user's Ubersuggest screenshot: Volume 320, CPC $20.84, SEO Difficulty 12.
- The broader `tiktok shop fees` and `tiktok shop seller fees` terms have informational demand and can support guide pages.
- `tiktok shop commission fee` has lower volume but high CPC, suggesting commercial value.

## Keyword Notes From First Ubersuggest Pass

| Keyword | Volume | SD | CPC | Notes |
|---|---:|---:|---:|---|
| tiktok shop fee calculator | 320 | 12 | $20.84 | Best current main tool candidate from screenshot |
| tiktok shop fees | 480 | 50 | $4.76 | Better as guide/supporting content |
| tiktok shop seller fees | 170 | 41 | $3.32 | Guide/supporting content |
| tiktok shop commission fee | 90 | 41 | $50.84 | Strong commercial subtopic |
| tiktok shop fees calculator | 30 | 21 | $0 | Small but exact tool intent |
| tiktok shop profit calculator | 50 | 12 | $9.34 | Good secondary page, more crowded |
| tiktok shop calculator | 50 | 22 | $12.81 | Possible hub/home page keyword |
| tiktok shop commission calculator | 0 | 4 | $0 | Feature/module, not main SEO target |
| tiktok shop affiliate commission calculator | 0 | 4 | $0 | Feature/module, not main SEO target |

## Keyword Expansion Notes

Additional Ubersuggest checks:

| Seed | Useful related terms | Notes |
|---|---|---|
| tiktok shop fbt fee | `tiktok fbt` volume 140, SD 24, CPC $9.89; `fbt tiktok` volume 70, SD 38, CPC $50.91; `tiktok shop fbt calculator` volume 0 | FBT has some demand but not clearly fee-calculator demand yet. Better as optional module or later guide. |
| tiktok shop referral fee | `tiktok fees` volume 110, SD 46, CPC $41.95; `tiktok shop referral program` volume 40, SD 32 | Referral fee is conceptually important, but exact `referral fee calculator` demand is weak. Include in fee calculator. |
| tiktok shop settlement | `tiktok shop settlement time` volume 10, SD 5; `tiktok shop settlement period` volume 10, SD 6 | Settlement is a weak tool topic, but useful as a guide/FAQ later. |
| tiktok shop commission | `tiktok shop commission fee` volume 90, SD 41, CPC $50.84; `tiktok shop commission rate` volume 50, SD 38, CPC $8.12; `tiktok shop commission fee and transaction fee` volume 30, SD 32, CPC $8.65 | Commission fee is a strong subtopic with high commercial value. |

## SERP / Competitor Notes

Searches for `tiktok shop fee calculator` and related phrases show multiple new/smaller tool pages already targeting this space. This confirms real demand, but also means a generic calculator will not be enough.

Observed competitor/category examples:

- Futureproof TikTok Shop Fee Calculator
- SellerLab US TikTok Shop Fee Calculator
- Hyperfocus TikTok Shop Fees Explained / fee resources
- Dashboardly TikTok Shop commission/fee statistics and calculators
- Other smaller calculator/tool pages

Implication:

The v1 page should not be a plain fee calculator. It should combine:

- TikTok Shop referral/platform fee
- Commission fee terminology
- Affiliate/creator commission
- Seller coupon or discount
- Seller shipping subsidy
- Refund assumptions
- Profit margin
- Break-even ROAS

This creates a better page for a seller making pricing decisions, not just checking one percentage.

## Official / Source Notes

Official TikTok public documents are often general and point sellers back to Seller Center for exact current fees. TikTok Shop terms state that fees are charged under applicable seller commission/transaction-cost policies and can be updated.

Useful external/current references found:

- TikTok Shop Merchant Terms / Global Selling Seller Terms: fees are governed by applicable policies and Seller Center notifications.
- M2E Cloud guide: notes that US TikTok Shop uses a unified referral fee model combining marketplace commission and transaction processing.
- Current fee guides from OneCart, SocialTale, Hyperfocus, Futureproof, SellerLab, Dashboardly: generally describe US seller referral/platform fees in the roughly 6-8% range, with affiliate commission, ads, fulfillment/shipping, refunds, and promotions as additional seller costs.

Implementation implication:

Do not hard-code a single official fee as truth. Use editable defaults and disclaimer copy:

> Fees vary by category, seller account, promotion, and TikTok Shop policy. Always confirm current rates in Seller Center.

Recommended default for the calculator can be 8% or configurable by category in a later version.

## Current Strategic Decision

Do not lead with a generic profit calculator. Lead with a fee calculator and include profit output as a value-added result.

Page angle:

**Fee-first, profit-second.**

Possible H1:

> TikTok Shop Fee Calculator for US Sellers

Updated first-page recommendation:

**Main SEO target:** `tiktok shop fee calculator`

**Secondary terms to cover on-page:** `tiktok shop fees calculator`, `tiktok shop commission fee`, `tiktok shop seller fees`, `tiktok shop fees usa`, `tiktok shop referral fee`, `tiktok shop commission rate`.

**Feature angle:** Make the calculator more complete than competitors by showing fee amount, commission amount, total seller costs, net profit, margin, and break-even ROAS.

Possible title tag:

> TikTok Shop Fee Calculator for US Sellers | ShopFeeCalc

## To Validate Next

- Ubersuggest expansion for:
  - TikTok Shop FBT fee
  - TikTok Shop shipping fee
  - TikTok Shop referral fee
  - TikTok Shop commission fee
  - TikTok Shop seller fees
  - TikTok Shop settlement
- Current Google SERP competitors for `tiktok shop fee calculator`
- Official TikTok Shop fee information for US sellers
- Whether FBT is worth including in v1 or later

## Recovery Note

If the chat is interrupted, resume from this file. The next step is keyword expansion and competitor/official-source validation before changing more code.
