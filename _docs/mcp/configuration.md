---
title: Configuring a client
section: MCP (AI agents)
description: How an MCP client will connect to Granspace's MCP server.
---

<div class="callout warn">
  <strong>On the roadmap.</strong> The MCP server isn't shipped in the distributed
  desktop builds yet, so there's nothing to configure today. This page describes
  the <em>planned</em> setup so you know what to expect.
</div>

## Planned shape

The MCP server runs over **stdio** — an MCP client launches it as a command and
talks to it over standard input/output. The plan is to ship a launcher **with the
desktop app**, so clients point at a stable command with no source checkout
required.

Most clients (Claude Desktop, Cursor, Claude Code, …) take an `mcpServers` map, so
the configuration will look roughly like:

```json
{
  "mcpServers": {
    "granspace": {
      "command": "<Granspace MCP launcher shipped with the app>"
    }
  }
}
```

It will use the **same local database** as the dashboard, so anything an agent
does is reflected in the app immediately.

## Meanwhile

See what agents will be able to do in the [Tools reference]({{ '/docs/mcp/tools/' | relative_url }}),
and the [Overview]({{ '/docs/mcp/overview/' | relative_url }}) for the idea.
