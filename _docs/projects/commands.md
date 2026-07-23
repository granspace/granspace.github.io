---
title: Commands
section: Projects
description: Discover and run a project's named commands with live streaming logs.
---

Beyond the single start command, Granspace surfaces a project's **named commands**
and lets you run them individually.

## Where commands come from

Commands are discovered declaratively by [extensions]({{ '/docs/extensions/overview/' | relative_url }}):

- **Node** — the `scripts` in `package.json`.
- **PHP** — the `scripts` in `composer.json`.
- **Docker Compose** — `up`, `down`, `ps`, `logs`, `build`.
- …and whatever installed extensions declare.

So a project like this:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  }
}
```

shows `dev`, `build` and `test` as runnable commands under
**Details → Comandos**, each tagged by kind.

## Running & streaming

Each command has **Run** and a **live log** view that streams output as it happens
(server-sent events). Every command runs as its own tracked process with its own
**log file**, so:

- you can **add your own** named commands beyond the discovered ones;
- the row shows whether a command is **running**, and you can **Stop** it from the
  same row;
- when a command ends you get **finish feedback** — success or failure — and the
  log stays available to scroll back through, even after it stops or you navigate
  away and return.

This is separate from the project's primary
[Start/Stop]({{ '/docs/projects/running/' | relative_url }}) — you can run commands
alongside it.

## Runtime strategies

How a command actually runs is chosen per project type (a Node script vs a
compose service, for example). This lives in the app's runtime layer — you just
press Run.
