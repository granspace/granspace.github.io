---
title: FAQ
section: Referência
description: Perguntas frequentes sobre o devhub.
---

## O devhub envia meu código ou dados para algum lugar?

Não. Ele é [local-only]({{ '/pt-br/docs/security/local-only/' | relative_url }}) —
escuta em loopback, armazenamento SQLite local, sem telemetria. As únicas chamadas
de saída são as que você dispara (git, verificação de atualização, fetch de
extensão, import opcional do GitHub).

## Preciso do app desktop, ou posso usar o painel web?

Hoje o **app desktop** é como o devhub é distribuído — o painel é embutido nele
(bandeja, menus nativos, notificações, abertura rápida, auto-update). Uma versão
web self-hosted (rodar e abrir o painel no navegador) está no roadmap.

## Onde meus projetos ficam guardados?

O devhub não move seus projetos — ele aponta para pastas que você já tem. Os dados
dele (metadados, notas, quadros, configurações, secrets criptografados) ficam num
banco SQLite local (`DB_PATH` para realocá-lo).

## Agentes de IA podem usar?

Está no roadmap — via [servidor MCP]({{ '/pt-br/docs/mcp/overview/' | relative_url }}),
que ainda não está nos builds distribuídos.

## Como adiciono suporte a outra linguagem ou ferramenta?

Instale ou escreva uma [extensão]({{ '/pt-br/docs/extensions/overview/' | relative_url }}) —
são JSON declarativo, sem execução de código.

## É gratuito / open source?

Confira o [projeto]({{ '/pt-br/' | relative_url }}) e os
[releases]({{ site.repos.releases }}) para o licenciamento e downloads atuais.
