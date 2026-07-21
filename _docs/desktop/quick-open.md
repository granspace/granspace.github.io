---
title: Quick-open
section: Desktop app
description: Jump straight into a project from the tray, dock or taskbar.
---

Your **favorite** projects (then the rest) are one click away from the OS,
without the window even being open.

## Where

- **System tray** menu — an "Open project" list.
- **macOS dock** menu (right-click the dock icon).
- **Windows jump list** (right-click the taskbar icon), plus **Discover** and
  **Refresh all git** tasks.

Favorites come first, so star the projects you jump to most (see
[Organizing]({{ '/docs/projects/organizing/' | relative_url }})).

## Deep links

granspace registers a `granspace://` URL scheme:

- `granspace://project/<id>` opens a specific project.
- `granspace://discover`, `granspace://refresh-git`, … trigger dashboard actions.

The jump list and notifications use these under the hood, and other tools can too.
