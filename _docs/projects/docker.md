---
title: Docker containers
section: Projects
description: Manage a compose project's containers from devhub.
---

For **Docker Compose** projects, devhub adds a **Containers** panel to the
project detail.

<div class="callout">
  Requires Docker installed and on your <code>PATH</code>. The panel appears only
  for projects detected as compose.
</div>

## The Containers panel

Under **Details → Containers (Docker)** you get each service with its state and
ports, and per-service actions:

- **Start** a stopped service,
- **Stop** a running one,
- **Restart**.

```text
● postgres · Up 2 hours · 5432→5432
● redis    · Up 2 hours · 6379→6379
```

Use **Refresh** to re-read the current state (`docker compose ps`).

## Compose commands

Compose projects also expose the usual commands (`up`, `down`, `ps`, `logs`,
`build`) under [Commands]({{ '/docs/projects/commands/' | relative_url }}), with
live logs.

<figure class="shot">
  <img src="{{ '/images/docker-panel.png' | relative_url }}" alt="The Docker containers panel" loading="lazy" />
  <figcaption>The Containers panel. (screenshot pending)</figcaption>
</figure>
