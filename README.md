# asvanlabs.com

The Asvan Labs company site: one static page that introduces the company and its products. Asvan Labs
is part of **JIRA Corp Private Limited**, which the footer and the structured data name as the parent
company. Served by GitHub Pages from `main`; `CNAME` holds the domain. No build step: edit the files,
push to `main`. To preview, run `python3 -m http.server` in this folder (GoatCounter skips counting on
localhost).

History: this repo started as a copy of `tdb-project/jiracorp-site` (jiracorp.co.in, 2026-11-09). That
domain now redirects here.

## Design

- **Logo:** the **<A> mark** (from 2026-11-11): an uppercase A between the code brackets `<` and `>`, white
  on a rounded navy-to-indigo square, with a teal crossbar (`logo-mark.svg`; `favicon.svg` has heavier
  strokes for small sizes). It replaced a plain `</>` the same day because that symbol is common. Shown
  beside "Asvan Labs" in Geist 600. The same tile is the favicon, the Apple icon and the GitHub, LinkedIn
  and social avatar.
- **Colours:** trust (navy `#0B1B3F`, blue `#2563EB`), intelligence (indigo `#6366F1`), progress
  (teal `#2DD4BF`). Buttons are blue, small labels teal.
- **Look:** dark infrastructure style on an engineering grid. Fonts: Geist and JetBrains Mono, self-hosted.
- **Sections:** hero, Who we are, What drives us, Products, Latest, Contact. The header's Products menu opens each
  product's own site in a new tab. Products keep their own marks, on the same tile as the Asvan Labs `<A>` (The Data-Bridge:
  a white arch over a teal deck on two piers, `tdb-mark.svg`, from 2026-11-13; the same SVG is the
  docs logo and, inline, the tdb.asvanlabs.com header, footer, 404 and favicon) and appear as "<Product> by Asvan Labs" on this site.
- **Adding a product:** one item in the Products menu and one card in the Products section.
- **Latest:** newest first, four entries, each something that was run or released (never a plan), dated, with a link to the evidence. Drop the oldest when adding one.

## Rules for the copy

- Everything must be true today: no customer logos, testimonials, team size or numbers that can't be proved.
- "Technology startup", not "software startup". The developer works solo: "small company", not "small team".
- Name JIRA Corp Private Limited as the parent company, exactly in those words.
- Contact is `hello@asvanlabs.com` (an alias of a Google Workspace user). TDB's own pages keep their
  own addresses; don't change them from here.

## Files

- `index.html`, `404.html`: the pages, with inline CSS.
- `site.js`: menus and the copy button. The Content-Security-Policy allows scripts from this site only,
  so keep scripts in files, never inline.
- `count.js`: GoatCounter's counting script (ISC licence), self-hosted for the same reason. Counts go to
  the `asvanlabs` site at `asvanlabs.goatcounter.com`. Refresh the file from https://gc.zgo.at/count.js
  now and then.
- `fonts/`: Latin subsets of Geist and JetBrains Mono (OFL, see `fonts/OFL.txt`).
- `logo-mark.svg`, `favicon.svg` (same tile, heavier strokes for small sizes), `favicon-32.png`,
  `apple-touch-icon.png` (square, iOS rounds it), `og.png` (1200×630 social card).
- `brand/`: LinkedIn cover (`linkedin-cover-1128x191.png`, and `-2256x382.png` for sharp displays) and its
  source `linkedin-cover.html` (render at 1128×191; keep text clear of the lower-left, where LinkedIn puts the logo).
- `.well-known/security.txt`: the security contact (RFC 9116). **Renew `Expires` before 2027-11-11.**
- `.nojekyll`: needed so GitHub Pages serves `.well-known/`.
- `robots.txt`, `sitemap.xml`, `CNAME`.

## Hosting and DNS

Registrar and DNS: Squarespace Domains. The "Squarespace Defaults" preset (A, `www`, HTTPS records) was
removed on 2026-11-11.

- `@` A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` CNAME: `tdb-project.github.io` (redirects to the apex)
- `_github-pages-challenge-tdb-project` TXT: GitHub domain verification for the org; keep it
- MX, SPF (`@` TXT), DKIM (`google._domainkey`) and DMARC (`_dmarc`) are Google Workspace mail; leave
  them alone. DMARC reports go to `hello@`.
- `_domainconnect` CNAME is Squarespace's; harmless.

GitHub Pages: HTTPS enforced, Let's Encrypt certificate for the apex and www, renewed by GitHub.
**When changing Pages settings through the API, always send `cname` with `https_enforced`:** a `PUT`
without `cname` removes the custom domain and the site goes to GitHub's 404.

## Last checked

2026-11-09: Lighthouse 100/100/100/100 on mobile and desktop, axe finds no violations, no console errors
under the CSP, GoatCounter accepting counts.
