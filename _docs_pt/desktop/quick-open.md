---
title: Abertura rápida
section: App desktop
description: Pule direto para um projeto pela bandeja, dock ou barra de tarefas.
---

Seus projetos **favoritos** (e depois o resto) ficam a um clique do sistema
operacional, sem nem a janela estar aberta.

## Onde

- Menu da **bandeja** — uma lista "Abrir projeto".
- Menu do **dock no macOS** (clique-direito no ícone do dock).
- **Jump list do Windows** (clique-direito no ícone da barra de tarefas), mais as
  tarefas **Descobrir** e **Atualizar git de todos**.

Os favoritos vêm primeiro, então favorite os projetos que você mais abre (veja
[Organizando]({{ '/pt-br/docs/projects/organizing/' | relative_url }})).

## Deep links

O Granspace registra um esquema de URL `granspace://`:

- `granspace://project/<id>` abre um projeto específico.
- `granspace://discover`, `granspace://refresh-git`, … disparam ações do painel.

A jump list e as notificações usam isso por baixo dos panos, e outras ferramentas
também podem.
