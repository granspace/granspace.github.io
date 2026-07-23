---
title: Introduction
section: Introduction
permalink: /docs/
description: What Granspace is — a local manager for the dev projects scattered across your machine.
---

**Granspace** is a local manager for the dev projects scattered across your machine.
It discovers your projects, keeps them organized, runs them with live logs, and
tracks their git health — all from one place, as a desktop app that runs on your
computer.

<figure class="shot">
  <img src="{{ '/images/intro-overview.png' | relative_url }}" alt="Granspace dashboard overview" loading="lazy" />
  <figcaption>The dashboard listing discovered projects.</figcaption>
</figure>

## What you get

- **Discover & organize** — scan folders for projects; tag them, set stage and
  purpose, favorite them, group them into folders, and add notes. See
  [Organizing]({{ '/docs/projects/organizing/' | relative_url }}) and
  [Groups & folders]({{ '/docs/projects/groups/' | relative_url }}).
- **Run & watch** — start/stop projects and named commands with live, colored
  logs; port-conflict detection. See [Running & logs]({{ '/docs/projects/running/' | relative_url }}).
- **Install dependencies** — let a project set itself up when you add it. See
  [Installing dependencies]({{ '/docs/projects/dependencies/' | relative_url }}).
- **Git health** — sync state at a glance, plus pull/push/commit/stash from the
  UI. See [Git]({{ '/docs/projects/git/' | relative_url }}).
- **Environment & secrets** — per-project env vars, with secrets encrypted behind
  a master password. See [Environment & secrets]({{ '/docs/projects/environment/' | relative_url }}).
- **Kanban & notes** — a configurable board per project. See [Kanban & notes]({{ '/docs/projects/kanban/' | relative_url }}).
- **Extensions** — declarative, installable support for more languages/tools.
  See [Extensions]({{ '/docs/extensions/overview/' | relative_url }}).

## Local-first & private

Granspace is a desktop app that runs on your machine and keeps its data in a local
SQLite database. Your projects, code and secrets stay on your machine — Granspace
never uploads them. See [Local-first & private]({{ '/docs/security/local-only/' | relative_url }}).

## Next steps

- [Install Granspace]({{ '/docs/getting-started/installation/' | relative_url }})
- [First launch]({{ '/docs/getting-started/first-launch/' | relative_url }})
