---
title: The dashboard
section: Getting started
description: A tour of the granspace dashboard — top bar, filters, project cards and bulk actions.
---

The dashboard is the home screen: every tracked project as a card, with search,
filters and quick actions.

<figure class="shot">
  <img src="{{ '/images/dashboard-tour.png' | relative_url }}" alt="Dashboard with the top bar, filters and project cards" loading="lazy" />
  <figcaption>The dashboard. (screenshot pending)</figcaption>
</figure>

## Top bar

- **Search** — global search across projects, tasks and notes. Focus it with
  <kbd>/</kbd> or <kbd>Cmd/Ctrl</kbd>+<kbd>K</kbd>.
- **+ Add** — Discover projects, Clone by URL, Import from GitHub.
- **Refresh git** — fetch + refresh git status for every project.
- **⋯ (more)** — Export / Import a [manifest]({{ '/docs/portability/manifest/' | relative_url }}), and open [Extensions]({{ '/docs/extensions/overview/' | relative_url }}).
- **Settings** — folders, security, GitHub, editor, notifications.

## Filters

Filter the grid by **stage**, **purpose** and **tag**, and change the **sort**
(favorites first, name, recent, stage). The count shows how many match.

## Project cards

Each card shows:

- a **favorite** star and a multi-select checkbox;
- the **type** icon (tech stack) and name;
- a **status dot** — solid when granspace started it, a **hollow ring** when it's
  running but was started outside granspace;
- **badges** for stage, purpose and git sync state, plus **tag** chips;
- **quick links** — board, localhost, repo, and (desktop) folder/terminal/editor;
- **Start/Stop** and **Details**.

Right-click a card (desktop) for a native menu (copy path, open folder/terminal/
editor).

## Bulk actions

Tick several cards to reveal a bar to **start / stop / refresh** them together.

## Port-conflict banner

If two running projects want the same host port, a banner lists the conflict. It
is dismissible and stays dismissed until the conflicting ports actually change.
