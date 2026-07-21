---
title: Auto-update
section: Desktop app
description: How granspace updates itself across platforms.
---

The desktop app checks for a newer version on launch, against the public releases
feed.

## Per platform

| Platform | Behavior |
| --- | --- |
| **Linux — AppImage** | Updates **in place** (downloads in the background, installs on quit — a notification offers "restart now"). |
| **Windows** | Updates **in place** (NSIS). |
| **Linux — .deb** | Shows a **"new version available"** notification linking to the download. |
| **macOS (unsigned)** | Same notification-and-download flow. |

## Manual check

**Help → Check for updates** runs a check on demand and tells you whether you're
up to date or offers the download. It's also in the tray menu.

## Where updates come from

Builds and update metadata are published to the public
[site releases]({{ site.repos.releases }}). See the
[Download page]({{ '/download/' | relative_url }}).
