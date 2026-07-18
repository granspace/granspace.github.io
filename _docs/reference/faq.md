---
title: FAQ
section: Reference
description: Frequently asked questions about devhub.
---

## Does devhub send my code or data anywhere?

No. It's [local-only]({{ '/docs/security/local-only/' | relative_url }}) — loopback
binding, local SQLite storage, no telemetry. The only outbound calls are ones you
trigger (git, update check, extension fetch, optional GitHub import).

## Do I need the desktop app, or can I use the web dashboard?

Today the **desktop app** is how devhub is distributed — the dashboard is built
into it (tray, native menus, notifications, quick-open, auto-update). A
self-hosted web version (run it and open the dashboard in a browser) is on the
roadmap.

## Where are my projects stored?

devhub doesn't move your projects — it points at folders you already have. Its own
data (metadata, notes, boards, settings, encrypted secrets) lives in a local
SQLite database (`DB_PATH` to relocate it).

## Can AI agents use it?

That's on the roadmap — via the [MCP server]({{ '/docs/mcp/overview/' | relative_url }}),
which isn't in the distributed builds yet.

## How do I add support for another language or tool?

Install or write an [extension]({{ '/docs/extensions/overview/' | relative_url }}) —
they're declarative JSON, no code execution.

## Is it free / open source?

Check the [project]({{ '/' | relative_url }}) and the
[releases]({{ site.repos.releases }}) for the current licensing and downloads.
