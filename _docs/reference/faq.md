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

Either. The dashboard runs in your browser against the local server; the desktop
app adds tray, native menus, notifications, quick-open and auto-update.

## Where are my projects stored?

devhub doesn't move your projects — it points at folders you already have. Its own
data (metadata, notes, boards, settings, encrypted secrets) lives in a local
SQLite database (`DB_PATH` to relocate it).

## Can AI agents use it?

Yes — via the [MCP server]({{ '/docs/mcp/overview/' | relative_url }}).

## How do I add support for another language or tool?

Install or write an [extension]({{ '/docs/extensions/overview/' | relative_url }}) —
they're declarative JSON, no code execution.

## Is it free / open source?

Check the [project]({{ '/' | relative_url }}) and the
[releases]({{ site.repos.releases }}) for the current licensing and downloads.
