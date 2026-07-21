---
title: Manifest export & import
section: Portability
description: Move your granspace setup between machines with a manifest.
---

A **manifest** captures your tracked projects so you can recreate your setup on
another machine.

## Export

**⋯ → Export manifest** downloads a `granspace.manifest.json` describing your tracked
projects (paths, git remotes and metadata). Secrets are **not** included.

## Import

**⋯ → Import manifest** reads a manifest and adds its projects. granspace asks
whether to **clone** repositories that aren't already under your configured
[roots]({{ '/docs/getting-started/first-launch/' | relative_url }}):

- projects already present are **tracked** in place;
- missing ones can be **cloned** from their git remote;
- anything it can't resolve is **skipped** (and reported).

## Use cases

- Set up granspace on a new machine.
- Share a curated set of projects with a teammate (they clone on import).
- Back up which projects you were managing.
