---
title: Installing dependencies
section: Projects
description: Let a project set itself up when you add it — with live logs and clear success/failure feedback.
---

A project can carry the commands needed to set it up (install dependencies, build,
generate files). Granspace runs them for you, with live logs, so a freshly added or
cloned project is ready without hunting through a README.

Install commands come from the project's
[`granspace.json`]({{ '/docs/projects/granspace-json/' | relative_url }}) `install`
field. They run **in order**.

## Auto-install when you add or clone

When you add or clone a project that has install commands, Granspace **offers to run
them** — it's opt-in, so nothing runs behind your back. Accept and it installs;
skip and you can run it later from the project's details.

This works the same whether the project came from **Discover**, **Clone by URL**,
or **Clone from GitHub**.

## Live feedback

While an install runs:

- the project's card shows an **Installing…** indicator (it stays there if you
  navigate away and come back);
- the **logs stream live** so you can watch progress;
- when it finishes you get a clear **success or failure** result — and if it
  failed, the log tells you why.

More than one project can install at the same time; each tracks its own progress
and logs.

## Non-interactive only

Install commands run **without a terminal prompt** — they can't ask questions. Use
non-interactive flags (for example `npm ci`, or a package manager's `--yes`) so a
command never stalls waiting for input.

## Running it yourself

From **Details → granspace.json**:

- **Install** — run the `install` commands for real, with streamed logs.
- **Test** — a dry run that shows what would happen, without running anything.

<div class="callout">
  Install commands are the project's own — Granspace only runs what's in its
  <code>granspace.json</code>, never an arbitrary command from elsewhere.
</div>
