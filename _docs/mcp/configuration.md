---
title: Configuring a client
section: MCP (AI agents)
description: Point your MCP client at the devhub MCP server.
---

The MCP server runs over **stdio** — your MCP client launches it as a command and
talks to it over standard input/output.

## Client config

Most clients (Claude Desktop, Cursor, Claude Code, …) take an `mcpServers` map.
Point it at the command that starts devhub's MCP server:

```json
{
  "mcpServers": {
    "devhub": {
      "command": "/absolute/path/to/devhub/mcp.sh"
    }
  }
}
```

The wrapper sets the working directory so local dependencies resolve. From a
source checkout you can also start it with:

```bash
npm run mcp
```

<div class="callout">
  Check the app / repo for the exact launcher path on your install. The server
  uses the same database as the dashboard, so changes are reflected immediately in
  both.
</div>

## Verifying

Once configured, your client lists devhub's [tools]({{ '/docs/mcp/tools/' | relative_url }}).
Try asking it to list your projects.
