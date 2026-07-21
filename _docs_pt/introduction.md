---
title: Introdução
section: Introdução
permalink: /pt-br/docs/
description: O que é o granspace — um gerenciador local dos projetos de desenvolvimento espalhados pela sua máquina.
---

O **granspace** é um gerenciador local dos projetos de desenvolvimento espalhados
pela sua máquina. Ele descobre seus projetos, mantém tudo organizado, roda com
logs ao vivo e acompanha o estado do git/saúde — tudo num só lugar, rodando
inteiramente no seu computador.

## Três formas de usar

O granspace é um app com três superfícies, todas apoiadas na mesma lógica. **Hoje
ele é distribuído como app desktop**; as outras duas estão no roadmap:

| Superfície | O que é | Disponibilidade |
| --- | --- | --- |
| **App desktop** | Um app Electron com o painel embutido, além de bandeja, menus nativos, notificações e auto-update. | **Disponível agora** |
| **Web self-hosted** | O mesmo painel servido localmente num navegador. | Roadmap |
| **Servidor MCP** | Um servidor [Model Context Protocol]({{ '/pt-br/docs/mcp/overview/' | relative_url }}) para agentes de IA (Claude, Cursor, …) gerenciarem seus projetos. | Roadmap |

<div class="callout">
  Só o <strong>app desktop</strong> é distribuído agora (veja a
  <a href="{{ '/pt-br/download/' | relative_url }}">página de download</a>). A
  versão web self-hosted e o servidor MCP são planejados — a documentação os
  descreve para você saber o que vem por aí.
</div>

<figure class="shot">
  <img src="{{ '/images/intro-overview.png' | relative_url }}" alt="Visão geral do painel do granspace" loading="lazy" />
  <figcaption>O painel listando os projetos descobertos. (screenshot pendente)</figcaption>
</figure>

## O que você ganha

- **Descobrir e organizar** — escaneia pastas em busca de projetos; adicione tags,
  defina etapa e propósito, favorite e adicione notas. Veja [Organizando]({{ '/pt-br/docs/projects/organizing/' | relative_url }}).
- **Rodar e acompanhar** — inicie/pare projetos e comandos nomeados com logs
  coloridos ao vivo; detecção de conflito de porta. Veja [Rodar e logs]({{ '/pt-br/docs/projects/running/' | relative_url }}).
- **Saúde do git** — estado de sincronização de relance, mais pull/push/commit/stash
  pela interface. Veja [Git]({{ '/pt-br/docs/projects/git/' | relative_url }}).
- **Ambiente e secrets** — variáveis de ambiente por projeto, com secrets
  criptografados atrás de uma senha-mestra. Veja [Ambiente e secrets]({{ '/pt-br/docs/projects/environment/' | relative_url }}).
- **Kanban e notas** — um quadro configurável por projeto. Veja [Kanban e notas]({{ '/pt-br/docs/projects/kanban/' | relative_url }}).
- **Extensões** — suporte declarativo e instalável para mais linguagens/ferramentas.
  Veja [Extensões]({{ '/pt-br/docs/extensions/overview/' | relative_url }}).

## Local-first e privado

O granspace escuta apenas em loopback e guarda tudo num banco SQLite local na sua
máquina. Nada é enviado para lugar nenhum. Veja [Local por design]({{ '/pt-br/docs/security/local-only/' | relative_url }}).

## Próximos passos

- [Instalar o granspace]({{ '/pt-br/docs/getting-started/installation/' | relative_url }})
- [Primeiro início]({{ '/pt-br/docs/getting-started/first-launch/' | relative_url }})
