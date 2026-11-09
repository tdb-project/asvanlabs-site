# jiracorp.co.in

The JiraCorp company site: one static page that introduces the company and points to
[The Data-Bridge](https://tdb.jiracorp.co.in/). Served by GitHub Pages from `main`; `CNAME` holds
the domain.

It uses the same design tokens and fonts as `tdb-landing`, so change them in both places.
No JavaScript and no build step. To preview it, run `python3 -m http.server` in this folder.

What it says must be true today: no customer logos, testimonials or numbers that can't be proved.

## DNS (GoDaddy)

- `@` A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` CNAME: `tdb-project.github.io`
- `tdb` CNAME: `tdb-project.github.io` (the TDB landing page; leave it alone)
- MX and TXT records are Google Workspace mail; leave them alone.
