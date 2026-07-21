---
title: Local-only by design
section: Security
description: Granspace runs entirely on your machine — loopback only, local storage, no telemetry.
---

Granspace is built to stay on your machine.

## Loopback only

The backend binds to **loopback** (`127.0.0.1`). The desktop app's dashboard talks
to that local server, and the planned self-hosted web version and
[MCP server]({{ '/docs/mcp/overview/' | relative_url }}) will too — nothing is
exposed on your network.

## Local storage

Everything Granspace knows — projects, tags, notes, boards, settings and
(encrypted) secrets — lives in a **local SQLite database** on your machine. You
can point it elsewhere with the `DB_PATH` environment variable.

## No telemetry

Granspace doesn't phone home. The only outbound requests are the ones you trigger:

- **git** operations (fetch/pull/push) to your own remotes;
- the **update check** against the public releases feed;
- **fetching an extension** manifest when you install one;
- optional **GitHub** API calls when you import your repos.

## Secrets at rest

Secret env vars are [encrypted]({{ '/docs/security/secrets/' | relative_url }})
so they're unreadable in the database without your master password.
