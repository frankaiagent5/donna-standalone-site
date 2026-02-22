# Analytics + Search Console Setup (Donna Site)

## 1) Google Analytics (GA4)
1. Go to https://analytics.google.com/
2. Create property: **Donna Hodges Site**
3. Create web data stream for:
   - `https://frankaiagent5.github.io/donna-standalone-site/`
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
5. In `index.html`, replace `G-XXXXXXXXXX` in the GA script.

## 2) Google Search Console
1. Go to https://search.google.com/search-console
2. Add property as URL prefix:
   - `https://frankaiagent5.github.io/donna-standalone-site/`
3. Verify using HTML tag method
4. Add the verification meta tag in `index.html` (replace placeholder)
5. Submit sitemap:
   - `https://frankaiagent5.github.io/donna-standalone-site/sitemap.xml`

## 3) What to watch weekly
- Queries in Search Console (impressions/clicks)
- Top pages by clicks
- Form submission count
- Branded vs non-branded traffic

## 4) Upgrade when custom domain is connected
- Add the custom domain property in GA4 and Search Console
- Keep GitHub URL property for continuity
