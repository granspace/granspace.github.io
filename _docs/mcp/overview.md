---
title: Overview
section: MCP (AI agents)
description: devhub speaks the Model Context Protocol so AI agents can manage your projects.
---

devhub includes an **MCP** (Model Context Protocol) server, so AI agents like
Claude, Cursor and other MCP clients can work with your projects — using the same
local logic as the dashboard and desktop app.

## Same brain, different surface

The MCP server connects to the **same local SQLite database** and reuses the same
use cases as the UI. Anything an agent does through MCP is exactly what the app
would do — list projects, update metadata, manage tasks and notes, check git,
start/stop, and more.

## Why it's useful

- Ask an agent to *"tag every Node project that hasn't been touched in 6 months as
  `stale`"* and it can do it.
- Let an agent create tasks on a project's board from a spec.
- Have an agent check which projects have unpushed commits.

## Local & private

Like everything else in devhub, the MCP server is
[local-only]({{ '/docs/security/local-only/' | relative_url }}) — it runs on your
machine and talks to your local database.

Next: [Configuring a client]({{ '/docs/mcp/configuration/' | relative_url }}) ·
[Tools reference]({{ '/docs/mcp/tools/' | relative_url }}).
