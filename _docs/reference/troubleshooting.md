---
title: Troubleshooting
section: Reference
description: Common issues and how to resolve them.
---

## The app won't open / "damaged" (macOS)

Builds are unsigned. Right-click → **Open**, or clear the quarantine flag:

```bash
xattr -cr /Applications/granspace.app
```

## SmartScreen blocks it (Windows)

Choose **More info → Run anyway** — the installer is unsigned.

## A project isn't detected

Detection is driven by [extensions]({{ '/docs/extensions/overview/' | relative_url }}).
Make sure the project has a recognized marker file (e.g. `package.json`,
`composer.json`, a compose file). Install an
[extension]({{ '/docs/extensions/installing/' | relative_url }}) for other stacks,
then re-run **Discover**.

## Git actions fail

Granspace calls your system **git** — make sure it's installed and on your `PATH`,
and that the repo has the remote/credentials it needs.

## The Docker panel doesn't appear

It only shows for **compose** projects, and Docker must be installed and on your
`PATH`. See [Docker containers]({{ '/docs/projects/docker/' | relative_url }}).

## Can't see a secret

Secret values require the vault to be **unlocked** with your master password. See
[Encrypted secrets]({{ '/docs/security/secrets/' | relative_url }}).

## The app seems already open, or a new launch does nothing

Granspace runs a **single instance**. If **Keep running in the tray** is on, closing
the window leaves it running in the tray — open it from the tray icon, or **Quit**
from the tray menu to fully exit. With the tray off, closing the window quits. See
[Tray & menus]({{ '/docs/desktop/tray-menus/' | relative_url }}).

## Something else is using its port

The desktop app picks a **free port automatically**, so another service on a given
port won't stop it from starting.

## Moving the database

Point Granspace at a different database file with the `DB_PATH` environment variable.
