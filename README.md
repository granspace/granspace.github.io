# site

Public distribution **site + downloads + update feed** for **granspace** (a local
project manager). The granspace source code is private and separate; only these
public bits live here.

- **Site** — presentation, documentation and download pages, served via **GitHub
  Pages** at <https://granspace.github.io/site>.
- **Downloads** — the installable builds (AppImage, .deb, Windows, macOS) live in
  this repo's [**Releases**](https://github.com/granspace/site/releases).
- **Auto-update feed** — the desktop app's updater reads the same Releases
  (electron-updater metadata) to check for and download new versions.

## The site (Jekyll)

Built with **Jekyll** (native to GitHub Pages — it builds on push, no CI). Files
are split by responsibility to stay small and maintainable:

```
_config.yml            site config + shared data (repos, baseurl)
_layouts/              default · page · doc  (chrome isn't duplicated per page)
_includes/             head · header · footer · docs-sidebar
_data/docs_nav.yml     the docs sidebar (single source of truth)
_docs/                 one Markdown file per docs topic
assets/css/            base · layout · components · home · docs
assets/js/             theme toggle · screenshot fallback
index.html             home
download.html          /download/
images/                screenshots (see IMAGES.md)
```

### Adding a docs page

1. Create `_docs/<section>/<topic>.md` with front matter (`title`, `section`).
2. Add its entry to `_data/docs_nav.yml` (this drives the sidebar and order).

Internal links must use `relative_url` (the site has a `/site` base path):
`[x]({% raw %}{{ '/docs/...' | relative_url }}{% endraw %})`.

### Screenshots

Referenced but not committed yet — see [`IMAGES.md`](IMAGES.md) for the list,
names and what to capture. Drop PNGs into `images/`.

### Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
```

## Releases

Each release attaches the platform artifacts plus the update metadata
(`latest*.yml`). The download pages point at the latest release.
