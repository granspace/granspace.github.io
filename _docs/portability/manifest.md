---
title: Manifest export & import
section: Portability
description: Move your Granspace setup between machines with a manifest.
---

A **manifest** captures your tracked projects so you can recreate your setup on
another machine. It's a single JSON file with relative, portable paths.

## Export

**⋯ → Export manifest** downloads a `granspace.manifest.json` describing your tracked
projects. For each project it records the git remote and metadata: stage, purpose,
tags, web URL, install commands, auto-start, favorite, the **group** it's in, and
the **env keys** it uses. It also notes which **OS** the manifest was made on.

Secret env **values** are never written — only the keys are listed, so you re-enter
secrets on the other side. Nothing confidential leaves your machine.

## Import

**⋯ → Import manifest** first shows a short **security note** (a manifest can clone
repositories and carry start/stop commands, so only import ones you trust), then
reads the file and adds its projects:

- projects already present under your configured
  [roots]({{ '/docs/getting-started/first-launch/' | relative_url }}) are **tracked**
  in place;
- repo-backed projects that are missing can be **cloned** from their git remote, and
  their [`granspace.json`]({{ '/docs/projects/granspace-json/' | relative_url }})
  settings are applied (dependencies are **not** installed automatically);
- projects **without a remote** can't be cloned, so they're added as **missing on
  disk** — open one to re-link it to a folder, or remove it;
- anything invalid is **skipped** and reported.

You get a summary of what was **added / cloned / missing / skipped**. If the manifest
was made on a **different OS**, Granspace also reminds you that custom start/stop
commands may need adjusting. A malformed manifest is rejected with a clear reason.

After import, public env values are restored; **secret** ones come back as empty keys
to fill in.

## Use cases

- Set up Granspace on a new machine.
- Share a curated set of projects with a teammate (they clone on import).
- Back up which projects you were managing.
