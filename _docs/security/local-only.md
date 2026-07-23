---
title: Local-first & private
section: Security
description: Granspace is a local-first desktop app — your projects, code and secrets stay on your machine.
---

Granspace is local-first: it runs on your machine and keeps your projects and
secrets there.

## Your projects and secrets stay local

Granspace never uploads your source code, your project metadata, or your secrets.
Everything it knows — projects, tags, notes, boards, settings and (encrypted)
secrets — lives in a **local SQLite database** on your machine. You can point it
elsewhere with the `DB_PATH` environment variable. And your source code never
moves: Granspace only points at folders you already have.

## Runs on your machine

Granspace is a desktop app. Its backend runs locally and binds to **loopback**
(`127.0.0.1`) — the dashboard talks to that local server, and it isn't exposed on
your network.

## Network access

The network requests Granspace makes are for the features you use:

- **git** operations (fetch/pull/push) to your own remotes;
- the **update check** against the public releases feed;
- **fetching an extension** manifest when you install one;
- optional **GitHub** API calls when you import your repos.

None of these send your project contents or secrets anywhere.

## Secrets at rest

Secret env vars are [encrypted]({{ '/docs/security/secrets/' | relative_url }})
so they're unreadable in the database without your master password.
