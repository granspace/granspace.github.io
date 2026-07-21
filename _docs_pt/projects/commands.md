---
title: Comandos
section: Projetos
description: Descubra e rode os comandos nomeados de um projeto com logs em streaming ao vivo.
---

Além do único comando de start, o Granspace expõe os **comandos nomeados** de um
projeto e deixa você rodá-los individualmente.

## De onde vêm os comandos

Os comandos são descobertos declarativamente por [extensões]({{ '/pt-br/docs/extensions/overview/' | relative_url }}):

- **Node** — os `scripts` do `package.json`.
- **PHP** — os `scripts` do `composer.json`.
- **Docker Compose** — `up`, `down`, `ps`, `logs`, `build`.
- …e o que as extensões instaladas declararem.

Então um projeto assim:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  }
}
```

mostra `dev`, `build` e `test` como comandos executáveis em
**Detalhes → Comandos**, cada um marcado por tipo.

## Rodar e streaming

Cada comando tem **Rodar** e uma visão de **log ao vivo** que transmite a saída
conforme acontece (server-sent events). Pare um comando em execução na mesma
linha.

## Estratégias de execução

Como um comando de fato roda é escolhido por tipo de projeto (um script Node vs um
serviço compose, por exemplo). Isso vive na camada de runtime do app — você só
aperta Rodar.
