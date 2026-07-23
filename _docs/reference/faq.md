---
title: FAQ
section: Reference
description: Frequently asked questions about Granspace.
---

## Does Granspace send my code or data anywhere?

No. Granspace is [local-first]({{ '/docs/security/local-only/' | relative_url }}):
your projects, code and secrets stay on your machine and are never uploaded. The
network requests it makes are for features you use — git to your own remotes, the
update check, fetching an extension you install, and optional GitHub import.

## Where are my projects stored?

Granspace doesn't move your projects — it points at folders you already have. Its own
data (metadata, notes, boards, settings, encrypted secrets) lives in a local
SQLite database (`DB_PATH` to relocate it).

## How do I add support for another language or tool?

Install or write an [extension]({{ '/docs/extensions/overview/' | relative_url }}) —
they're declarative JSON, no code execution.

## How do I report a bug or request a feature?

Open an issue on the [feedback repository]({{ site.repos.feedback }}/issues). See
[Feedback]({{ '/docs/reference/feedback/' | relative_url }}).

## Is it free / open source?

Check the [project]({{ '/' | relative_url }}) and the
[releases]({{ site.repos.releases }}) for the current licensing and downloads.
