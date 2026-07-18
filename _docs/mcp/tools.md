---
title: Tools reference
section: MCP (AI agents)
description: The kinds of tools devhub exposes over MCP.
---

<div class="callout warn">
  <strong>On the roadmap</strong> — the MCP server isn't in the distributed builds
  yet. This is what agents will be able to do once it ships.
</div>

devhub exposes its features to agents as MCP **tools**, grouped by area. They
mirror what you can do in the UI.

| Area | What agents can do |
| --- | --- |
| **Projects** | List, read, update metadata (stage, purpose, tags, favorite, start command, web URL…). |
| **Tasks / board** | Read the board, add / move / update / delete tasks and columns. |
| **Notes** | List, add, update and remove project notes. |
| **Git** | Read sync state and refresh it. |
| **Runtime** | Start / stop projects and read status. |
| **Ports** | Inspect port usage and conflicts. |
| **Settings** | Read/update roots and preferences. |

<div class="callout">
  The exact tool names and inputs are declared by the server and surfaced by your
  MCP client — open the client's tool list to see the current set, which grows as
  devhub does.
</div>

## A typical flow

1. The agent lists projects to find the ones it cares about.
2. It reads a project's board or git state.
3. It makes changes (adds tasks, updates tags, etc.) — all written to the same
   local database the UI reads.
