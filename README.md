# get-devhub

Public distribution site for **devhub** (a local project manager). This repo:

- **Site** — the presentation/docs/download page, served via **GitHub Pages** at
  <https://bryant-anjos.github.io/get-devhub>.
- **Downloads** — the installable builds (AppImage, .deb, Windows, macOS) live in
  this repo's [**Releases**](https://github.com/Bryant-Anjos/get-devhub/releases).
- **Auto-update feed** — the desktop app's updater reads the same Releases
  (electron-updater metadata) to check for and download new versions.

The devhub **source code is private and separate**; only the site, downloads and
update feed are public here.

## Structure

- `index.html` — the static landing page (self-contained; no build step).

## Releases

Each release attaches the platform artifacts plus the update metadata
(`latest*.yml`). The site's download buttons point at the latest release.
