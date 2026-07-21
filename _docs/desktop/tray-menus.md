---
title: Tray & menus
section: Desktop app
description: The desktop app's tray, native menus and notifications.
---

The desktop build wraps the dashboard in a native shell with a few extras.

## System tray

Granspace lives in the tray with a label showing how many projects are running and
how many need attention. The tray menu offers **Show Granspace**, **Discover
projects**, **Refresh all git**, quick-open for your
[projects]({{ '/docs/desktop/quick-open/' | relative_url }}), **Check for
updates**, and **Quit**.

Closing the window **hides to tray** (the backend keeps running); quitting is
explicit.

## Application menu

The native menu bar mirrors the app:

- **File** — Settings.
- **Project** — Discover, Clone by URL, Import from GitHub, Extensions, Export /
  Import manifest.
- **Git** — Refresh all.
- **View** — Home, Back/Forward, reload, zoom, full screen.
- **Help** — Documentation, Website, Download, Check for updates, About.

## Notifications

The app raises OS notifications on meaningful events — a new **port conflict**, or
a project that **stopped on its own**. Clicking a notification opens that project.
Notifications can be toggled in **Settings**.
