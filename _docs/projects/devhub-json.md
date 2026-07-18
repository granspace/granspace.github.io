---
title: devhub.json
section: Projects
description: A per-project config file that devhub applies automatically.
---

`devhub.json` lets a project describe how devhub should set it up. When you add a
project that has one, devhub applies it automatically — great for shared repos
and onboarding.

## Example

```json
{
  "install": ["npm install", "npm run build"],
  "autoStart": false,
  "env": {
    "DATABASE_URL": "postgres://localhost:5432/app",
    "API_KEY": null
  }
}
```

| Field | Meaning |
| --- | --- |
| `install` | Commands to run to set the project up (in order). |
| `autoStart` | Start the project automatically after a successful install. |
| `env` | Environment variables to seed. A value of `null` declares a **key only** (no value stored). Secrets are never included here. |

## Saving & applying

From **Details → devhub.json**:

- **Save devhub.json** — write the current install commands / env / auto-start to
  the file in the repo.
- **Apply devhub.json** — re-read the file and apply it to the project.
- **Install** / **Test** — run the install commands for real, or as a dry run to
  preview what would happen.

<div class="callout">
  Secrets you mark in the <a href="{{ '/docs/projects/environment/' | relative_url }}">environment panel</a> are excluded from <code>devhub.json</code>, so it's safe to commit.
</div>
