---
title: Overview
section: Extensions
description: How Granspace detects project types and discovers commands — declaratively, via extensions.
---

Extensions add support for more languages and tools **without changing Granspace
itself**. They are **declarative** — plain JSON manifests, no third-party code
runs — and they drive two things:

- **Detection** — how a folder is recognized as a project of some type.
- **Commands** — which named commands that project exposes.

## Built-in extensions

Granspace ships with built-ins for **Node**, **Docker Compose**, **Unity**,
**PHP**, **Python**, **Go** and **Rust**. Built-in ids can't be shadowed by
installed extensions.

## Installed extensions

You can add more from a URL or the [official registry]({{ '/docs/extensions/registry/' | relative_url }}).
Installed extensions are validated against a strict schema, stored locally, and
merged with the built-ins at runtime.

## No code execution

An extension is data, not code: it declares *file patterns* to detect a project
and *where commands come from* (e.g. the `scripts` in a `package.json`). Granspace
never executes code shipped by an extension — it only reads your project files.

Next: [Installing]({{ '/docs/extensions/installing/' | relative_url }}) ·
[Writing an extension]({{ '/docs/extensions/authoring/' | relative_url }}).
