---
title: granspace.json
section: Projects
description: The per-project config file — every field, what it does, and how to set it up.
---

`granspace.json` is a small file a project carries to describe itself to Granspace.
When you add (or clone) a project that has one, Granspace reads it and applies it
automatically — so a shared repo configures itself the same way for everyone, with
no manual setup. It's plain JSON, safe to commit, and never contains secret values.

## Full example

Every field is optional — include only what your project needs.

```json
{
  "version": 1,
  "stage": "in_development",
  "purpose": "wants_to_publish",
  "tags": ["web", "api"],
  "webUrl": "http://localhost:5173",
  "startCommand": "npm run dev",
  "install": ["npm install", "npm run build"],
  "autoStart": false,
  "env": {
    "DATABASE_URL": "postgres://localhost:5432/app",
    "API_KEY": null
  }
}
```

## Fields

| Field | Type | What it does |
| --- | --- | --- |
| `version` | number | Config format version. Currently `1`. Written by Granspace on export; you can omit it. |
| `stage` | string | The project's lifecycle stage. One of `planning`, `in_development`, `launched`, `paused`, `archived`. |
| `purpose` | string | What the project is for. One of `personal_use`, `local_only`, `wants_to_publish`, `public`. |
| `tags` | string[] | Free-form tags, shown as chips on the card and usable as a dashboard filter. |
| `webUrl` | string \| null | A URL to open for the project (e.g. its local dev server or live site). `null` clears it. |
| `startCommand` | string \| null | The command Granspace runs when you press **Start**. `null` clears it. |
| `install` | string[] | Setup commands, run **in order**, non-interactively. See [Installing dependencies]({{ '/docs/projects/dependencies/' | relative_url }}). |
| `autoStart` | boolean | Start the project automatically after a successful install. |
| `env` | object | Environment variables to seed (see below). |

The file is **strict**: only the fields above are accepted. An unknown field makes
the file invalid, and Granspace reports which key was rejected rather than applying
a partial config.

### `stage` values

`planning` · `in_development` · `launched` · `paused` · `archived`

### `purpose` values

`personal_use` · `local_only` · `wants_to_publish` · `public`

### `env`

A map of variable name → value. A value of `null` **declares the key without a
value** — use it for a variable the project needs but whose value each person must
fill in (typically a secret):

```json
"env": {
  "DATABASE_URL": "postgres://localhost:5432/app",
  "API_KEY": null
}
```

When Granspace **writes** a `granspace.json` for you, it lists every env key the
project uses, but only writes a value when the variable is **not secret** and you
chose to publish it — otherwise the key maps to `null`. That way the file documents
what the project needs without ever leaking a confidential value. See
[Environment & secrets]({{ '/docs/projects/environment/' | relative_url }}).

<div class="callout">
  Secrets are <strong>never</strong> written to <code>granspace.json</code>, so the
  file is always safe to commit.
</div>

## How Granspace uses it

- **On add / clone** — if the project has a `granspace.json`, Granspace reads it and
  applies stage, purpose, tags, web URL, start command, install commands and
  auto-start, and seeds the declared env keys.
- **Unknown-to-Granspace fields you added by hand** are preserved when Granspace
  rewrites the file, as long as the file stays valid.

## Saving, applying, testing

From **Details → granspace.json** in the app:

- **Save granspace.json** — write the project's current settings (install commands,
  env keys, start command, auto-start, …) to the file in the repo.
- **Apply granspace.json** — re-read the file and apply it to the project.
- **Install** — run the `install` commands for real (streamed logs).
- **Test** — a dry run that shows what the install would do, without running it.
