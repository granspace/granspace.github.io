---
title: Official registry
section: Extensions
description: The public registry Granspace browses, and how to contribute.
---

The **official registry** is a public list of community extensions that Granspace
can browse and install from directly.

## Where it lives

The registry is the public
[**extensions**]({{ site.repos.extensions }}) repository. It contains:

- `registry.json` — the index Granspace reads;
- one manifest per extension;
- `schema.json` — the JSON Schema every manifest is validated against;
- a `CONTRIBUTING` guide and CI that validates submissions.

## Contributing

1. Write a manifest (see [Writing an extension]({{ '/docs/extensions/authoring/' | relative_url }})).
2. Validate it against `schema.json`.
3. Open a pull request adding your manifest and a registry entry.

CI checks the schema on every PR, so a valid manifest is most of the work.

## Installing from it

In Granspace, open **⋯ → Extensions → Browse official extensions** to install any
registry entry. See [Installing]({{ '/docs/extensions/installing/' | relative_url }}).
