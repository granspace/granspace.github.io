---
title: Bandeja e menus
section: App desktop
description: A bandeja, os menus nativos e as notificações do app desktop.
---

O build desktop envolve o painel numa casca nativa com alguns extras.

## Bandeja do sistema

A bandeja é **opcional**. Ative **Manter rodando na bandeja** em **Configurações** e
o Granspace fica na bandeja com um rótulo mostrando quantos projetos estão rodando e
quantos precisam de atenção. O menu da bandeja oferece **Mostrar Granspace**,
**Descobrir projetos**, **Atualizar git de todos**, abertura rápida dos seus
[projetos]({{ '/pt-br/docs/desktop/quick-open/' | relative_url }}), **Verificar
atualizações** e **Sair**.

### Comportamento ao fechar

- **Bandeja desligada (padrão):** fechar a janela **encerra** o Granspace.
- **Bandeja ligada:** fechar a janela **esconde na bandeja** (o backend continua
  rodando, acompanhando seus projetos) — saia pelo menu da bandeja.

**Iniciar no login** é um opt-in separado e independente em **Configurações**.

## Menu da aplicação

A barra de menu nativa espelha o app:

- **File** — Configurações.
- **Project** — Descobrir, Clonar por URL, Importar do GitHub, Extensões,
  Exportar / Importar manifesto.
- **Git** — Atualizar todos.
- **View** — Home, Voltar/Avançar, recarregar, zoom, tela cheia.
- **Help** — Documentação, Site, Download, Verificar atualizações, Sobre.

## Notificações

O app dispara notificações do sistema em eventos relevantes — um novo **conflito
de porta**, ou um projeto que **parou sozinho**. Clicar numa notificação abre esse
projeto. Notificações podem ser ligadas/desligadas em **Configurações**.
