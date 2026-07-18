---
title: Installation
section: Getting started
description: Install devhub on Linux, Windows or macOS.
---

devhub ships as a desktop app. Grab your platform from the
[Download page]({{ '/download/' | relative_url }}) (all builds live on the latest
GitHub release).

## Requirements

- **git** on your `PATH` (devhub reads and runs git for your projects).
- **Docker** — optional, only for Docker Compose projects and the container panel.

## Linux

**AppImage** (portable, self-updating):

```bash
chmod +x devhub-*.AppImage
./devhub-*.AppImage
```

**.deb** (Debian / Ubuntu / Pop!_OS):

```bash
sudo dpkg -i devhub_*_amd64.deb
# then launch "devhub" from your app menu
```

## Windows

Run the NSIS installer (`.exe`). If SmartScreen warns about an unknown
publisher, choose **More info → Run anyway** (builds are unsigned).

## macOS

Open the `.dmg` and drag devhub to Applications. Because builds are unsigned,
the first launch needs a right-click → **Open**, or clear the quarantine flag:

```bash
xattr -cr /Applications/devhub.app
```

## Updates

The app checks for updates on launch. AppImage and Windows update in place; other
builds notify you. See [Auto-update]({{ '/docs/desktop/auto-update/' | relative_url }}).

## Next

Continue to [First launch]({{ '/docs/getting-started/first-launch/' | relative_url }}).
