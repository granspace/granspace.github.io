---
title: Introduction
section: Introduction
permalink: /docs/
description: What Granspace is — a local manager for the dev projects scattered across your machine.
---

**Granspace** is a local manager for the dev projects scattered across your machine.
It discovers your projects, keeps them organized, runs them with live logs, and
tracks their git/health — all from one place, running entirely on your computer.

## How you use it

Granspace is one app with three surfaces, all backed by the same logic. **Today it's
distributed as a desktop app**; the other two surfaces are on the roadmap.

| Surface | What it is | Availability |
| --- | --- | --- |
| **Desktop app** | An Electron app with the dashboard built in, plus tray, native menus, notifications and auto-update. | **Available now** |
| **Self-hosted web** | The same dashboard served locally in a browser. | Roadmap |
| **MCP server** | A [Model Context Protocol]({{ '/docs/mcp/overview/' | relative_url }}) server so AI agents (Claude, Cursor, …) can manage your projects. | Roadmap |

<div class="callout">
  Only the <strong>desktop app</strong> is distributed right now (see the
  <a href="{{ '/download/' | relative_url }}">download page</a>). The self-hosted
  web version and the MCP server are planned — the docs describe them so you know
  what's coming.
</div>

<figure class="shot">
  <img src="{{ '/images/intro-overview.png' | relative_url }}" alt="Granspace dashboard overview" loading="lazy" />
  <figcaption>The dashboard listing discovered projects. (screenshot pending)</figcaption>
</figure>

## What you get

- **Discover & organize** — scan folders for projects; tag them, set stage and
  purpose, favorite, and add notes. See [Organizing]({{ '/docs/projects/organizing/' | relative_url }}).
- **Run & watch** — start/stop projects and named commands with live, colored
  logs; port-conflict detection. See [Running & logs]({{ '/docs/projects/running/' | relative_url }}).
- **Git health** — sync state at a glance, plus pull/push/commit/stash from the
  UI. See [Git]({{ '/docs/projects/git/' | relative_url }}).
- **Environment & secrets** — per-project env vars, with secrets encrypted behind
  a master password. See [Environment & secrets]({{ '/docs/projects/environment/' | relative_url }}).
- **Kanban & notes** — a configurable board per project. See [Kanban & notes]({{ '/docs/projects/kanban/' | relative_url }}).
- **Extensions** — declarative, installable support for more languages/tools.
  See [Extensions]({{ '/docs/extensions/overview/' | relative_url }}).

## Local-first & private

Granspace binds to loopback only and stores everything in a local SQLite database on
your machine. Nothing is sent anywhere. See [Local-only by design]({{ '/docs/security/local-only/' | relative_url }}).

## Next steps

- [Install Granspace]({{ '/docs/getting-started/installation/' | relative_url }})
- [First launch]({{ '/docs/getting-started/first-launch/' | relative_url }})
