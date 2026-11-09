# jiracorp.co.in

The JIRACORP company site: one static page that introduces the company and its products. Served by
GitHub Pages from `main`; `CNAME` holds the domain. No build step: edit the files, push to `main`.
To preview, run `python3 -m http.server` in this folder (GoatCounter skips counting on localhost).

## Design

- **Wordmark:** Node, JIRAC◉RP (the O is a ring with a dot). It is also the product-family system: each
  product gets its own dot colour (The Data-Bridge uses indigo) and appears as "<Product> by JIRACORP"
  on this site only.
- **Look:** dark infrastructure style on an engineering grid. Fonts: Geist and JetBrains Mono, self-hosted.
- **Sections:** hero, Who we are, What drives us, Products, Contact. The header's Products menu opens each
  product's own site in a new tab.
- **Adding a product:** one item in the Products menu and one card in the Products section.

## Rules for the copy

- Everything must be true today: no customer logos, testimonials, team size or numbers that can't be proved.
- "Technology startup", not "software startup". The developer works solo: "small company", not "small team".
- Contact is `hello@jiracorp.co.in`. TDB's own pages keep `hello@tdb.jiracorp.co.in`; don't change them from here.

## Files

- `index.html`, `404.html`: the pages, with inline CSS.
- `site.js`: menus and the copy button. The Content-Security-Policy allows scripts from this site only,
  so keep scripts in files, never inline.
- `count.js`: GoatCounter's counting script (ISC licence), self-hosted for the same reason. Counts go to
  the `jiracorp` site at `jiracorp.goatcounter.com` (same account as `tdb` and `tdb-docs`). Refresh the file
  from https://gc.zgo.at/count.js now and then.
- `fonts/`: Latin subsets of Geist and JetBrains Mono (OFL, see `fonts/OFL.txt`).
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og.png` (1200×630 social card).
- `.well-known/security.txt`: the security contact (RFC 9116). **Renew `Expires` before 2027-11-09.**
- `.nojekyll`: needed so GitHub Pages serves `.well-known/`.
- `robots.txt`, `sitemap.xml`, `CNAME`.

## Hosting and DNS

DNS is at GoDaddy (`ns31/32.domaincontrol.com`):

- `@` A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` CNAME: `tdb-project.github.io` (redirects to the apex)
- `tdb`: A records to the same four addresses (the TDB landing page; leave it alone)
- `_github-pages-challenge-tdb-project` TXT: GitHub domain verification for the org; keep it
- MX and other TXT records are Google Workspace mail; leave them alone.

GitHub Pages: HTTPS enforced, Let's Encrypt certificate for the apex and www, renewed by GitHub.
**When changing Pages settings through the API, always send `cname` with `https_enforced`:** a `PUT`
without `cname` removes the custom domain and the site goes to GitHub's 404.

## Last checked

2026-11-09: Lighthouse 100/100/100/100 on mobile and desktop, axe finds no violations, no console errors
under the CSP, GoatCounter accepting counts.
