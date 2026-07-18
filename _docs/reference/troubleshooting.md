---
title: Troubleshooting
section: Reference
description: Common issues and how to resolve them.
---

## The app won't open / "damaged" (macOS)

Builds are unsigned. Right-click → **Open**, or clear the quarantine flag:

```bash
xattr -cr /Applications/devhub.app
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

devhub calls your system **git** — make sure it's installed and on your `PATH`,
and that the repo has the remote/credentials it needs.

## The Docker panel doesn't appear

It only shows for **compose** projects, and Docker must be installed and on your
`PATH`. See [Docker containers]({{ '/docs/projects/docker/' | relative_url }}).

## Can't see a secret

Secret values require the vault to be **unlocked** with your master password. See
[Encrypted secrets]({{ '/docs/security/secrets/' | relative_url }}).

## Moving the database

Point devhub at a different database file with the `DB_PATH` environment variable.
