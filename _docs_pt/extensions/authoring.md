---
title: Criando uma extensão
section: Extensões
description: O manifesto declarativo que descreve detecção e comandos.
---

Uma extensão é um pequeno manifesto JSON com duas responsabilidades: **detectar**
um tipo de projeto e descrever de onde vêm seus **comandos**.

## Formato

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

### Detectores

Uma pasta combina quando um dos `detectors` combina — tipicamente pela presença de
**arquivos** específicos (nomes exatos). É assim que `package.json` → Node,
`composer.json` → PHP, `deno.json` → Deno, e por aí vai.

### Fontes de comando

Dois provedores:

- **`scriptsFile`** — lê scripts nomeados de um arquivo, ex.: o objeto `scripts`
  de um `package.json` ou `composer.json`. Ótimo quando o projeto já lista seus
  comandos.
- **`static`** — uma lista fixa de comandos que você escreve (como acima).

<div class="callout">
  O JSON Schema autoritativo e um guia de contribuição ficam no repositório
  <a href="{{ site.repos.extensions }}">extensions</a> — valide seu
  manifesto contra o <code>schema.json</code> antes de publicar.
</div>

## Teste

Hospede o manifesto em qualquer lugar (uma URL de arquivo raw serve) e
[instale de uma URL]({{ '/pt-br/docs/extensions/installing/' | relative_url }})
para testá-lo localmente antes de submeter ao registro.
