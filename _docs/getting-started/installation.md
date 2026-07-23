---
title: Installation
section: Getting started
description: Install Granspace on Linux, Windows or macOS.
---

Granspace ships as a desktop app. Grab your platform from the
[Download page]({{ '/download/' | relative_url }}) (all builds live on the latest
GitHub release).

Granspace is self-contained: it uses the SQLite database built into its own runtime,
so there's **no separate database to install** and no native modules to compile — it
just runs.

## Requirements

- **git** on your `PATH` (Granspace reads and runs git for your projects).
- **Docker** — optional, only for Docker Compose projects and the container panel.

## Linux

**AppImage** (portable, self-updating):

```bash
chmod +x granspace-*.AppImage
./granspace-*.AppImage
```

**.deb** (Debian / Ubuntu / Pop!_OS):

```bash
sudo dpkg -i granspace_*_amd64.deb
# then launch "granspace" from your app menu
```

## Windows

Run the NSIS installer (`.exe`). If SmartScreen warns about an unknown
publisher, choose **More info → Run anyway** (builds are unsigned).

## macOS

Open the `.dmg` and drag Granspace to Applications. Because builds are unsigned,
the first launch needs a right-click → **Open**, or clear the quarantine flag:

```bash
xattr -cr /Applications/granspace.app
```

## Updates

The app checks for updates on launch. AppImage and Windows update in place; other
builds notify you. See [Auto-update]({{ '/docs/desktop/auto-update/' | relative_url }}).

## Next

Continue to [First launch]({{ '/docs/getting-started/first-launch/' | relative_url }}).
