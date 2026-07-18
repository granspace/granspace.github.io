---
title: Local-only by design
section: Security
description: devhub runs entirely on your machine — loopback only, local storage, no telemetry.
---

devhub is built to stay on your machine.

## Loopback only

The backend binds to **loopback** (`127.0.0.1`). The web dashboard, the desktop
app and the [MCP server]({{ '/docs/mcp/overview/' | relative_url }}) all talk to
that local server — nothing is exposed on your network.

## Local storage

Everything devhub knows — projects, tags, notes, boards, settings and
(encrypted) secrets — lives in a **local SQLite database** on your machine. You
can point it elsewhere with the `DB_PATH` environment variable.

## No telemetry

devhub doesn't phone home. The only outbound requests are the ones you trigger:

- **git** operations (fetch/pull/push) to your own remotes;
- the **update check** against the public releases feed;
- **fetching an extension** manifest when you install one;
- optional **GitHub** API calls when you import your repos.

## Secrets at rest

Secret env vars are [encrypted]({{ '/docs/security/secrets/' | relative_url }})
so they're unreadable in the database without your master password.
