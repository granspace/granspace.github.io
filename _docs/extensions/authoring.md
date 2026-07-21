---
title: Writing an extension
section: Extensions
description: The declarative manifest that describes detection and commands.
---

An extension is a small JSON manifest with two responsibilities: **detect** a
project type and describe where its **commands** come from.

## Shape

```json
{
  "id": "deno",
  "name": "Deno",
  "detectors": [
    { "files": ["deno.json", "deno.jsonc"] }
  ],
  "commandSources": [
    { "type": "static", "commands": [
      { "key": "dev", "label": "dev", "command": "deno task dev", "kind": "dev" },
      { "key": "test", "label": "test", "command": "deno test", "kind": "test" }
    ]}
  ]
}
```

### Detectors

A folder matches when one of the `detectors` matches — typically by the presence
of specific **files** (exact filenames). That's how `package.json` → Node,
`composer.json` → PHP, `deno.json` → Deno, and so on.

### Command sources

Two providers:

- **`scriptsFile`** — read named scripts from a file, e.g. the `scripts` object
  of a `package.json` or `composer.json`. Great when the project already lists its
  commands.
- **`static`** — a fixed list of commands you spell out (as above).

<div class="callout">
  The authoritative JSON Schema and a contributing guide live in the
  <a href="{{ site.repos.extensions }}">extensions</a> repo — validate your
  manifest against <code>schema.json</code> before publishing.
</div>

## Test it

Host the manifest anywhere (a raw file URL works) and
[install it from a URL]({{ '/docs/extensions/installing/' | relative_url }}) to
try it locally before submitting it to the registry.
