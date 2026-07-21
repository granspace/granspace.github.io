---
title: Running & logs
section: Projects
description: Start and stop projects, watch live logs, and detect port conflicts and external runs.
---

Runnable projects can be started and stopped from Granspace, with live logs.

## Start command

A project's **start command** (e.g. `npm run dev`) is set under
**Details → Situação**. Toggle **"Pode iniciar"** off for projects you only want
to organize (no start button).

Use **Start** on the card or in Details. If the start fails because a port is in
use, Granspace offers to force-start.

## Live logs

While a project runs, its output is captured with ANSI colors preserved. Open
**Details → Comandos → View logs** to see them, and copy them with one click.

<figure class="shot">
  <img src="{{ '/images/running-logs.png' | relative_url }}" alt="Live colored logs for a running project" loading="lazy" />
  <figcaption>Live logs with colors preserved. (screenshot pending)</figcaption>
</figure>

## Port conflicts

Granspace knows which host ports your projects use and flags **conflicts** (two
projects wanting the same port) with a dashboard banner and, on desktop, a
notification.

## External runs

If you started a project in a terminal (outside Granspace), Granspace still shows it as
**running** — detected by probing its web-URL port or compose host ports. These
show a **hollow** status dot to distinguish them (Granspace can't stop a process it
didn't start).

## Web URL

Set a **web URL** (e.g. `http://localhost:3000`) so the card's 🌐 quick link and
the "open in browser" action point at the right place.
