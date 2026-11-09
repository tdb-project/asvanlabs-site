# jiracorp.co.in

The JIRACORP company site: one static page that introduces the company and points to
[The Data-Bridge](https://tdb.jiracorp.co.in/). Served by GitHub Pages from `main`; `CNAME` holds
the domain.

Dark infrastructure design with the Node wordmark (JIRAC◉RP: the O is a ring with a dot). Each product gets its own dot colour; The Data-Bridge uses indigo. Fonts: Geist and JetBrains Mono.
No JavaScript and no build step. To preview it, run `python3 -m http.server` in this folder.

What it says must be true today: no customer logos, testimonials or numbers that can't be proved.

## DNS (GoDaddy)

- `@` A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` CNAME: `tdb-project.github.io`
- `tdb` CNAME: `tdb-project.github.io` (the TDB landing page; leave it alone)
- MX and TXT records are Google Workspace mail; leave them alone.

## Files worth knowing

- `site.js`: menus and the copy button. The page's Content-Security-Policy allows scripts from
  this site only, so keep scripts in files, not inline.
- `fonts/`: Geist and JetBrains Mono, self-hosted (OFL). No requests go to Google.
- `.well-known/security.txt`: the security contact. **Renew `Expires` before 2027-11-09.**
- `.nojekyll`: needed so GitHub Pages serves `.well-known/`.
- GitHub Pages API: always send `cname` along with `https_enforced`; a PUT without it removes
  the custom domain.

Checked 2026-11-09: Lighthouse 100/100/100/100 on mobile and desktop; axe finds no violations.
- `count.js`: GoatCounter's counting script (ISC licence), self-hosted so the CSP stays `script-src 'self'`. Counts go to `jiracorp.goatcounter.com`; refresh the file from https://gc.zgo.at/count.js now and then.
