---
title: Introdução
section: Introdução
permalink: /pt-br/docs/
description: O que é o Granspace — um gerenciador local dos projetos de desenvolvimento espalhados pela sua máquina.
---

O **Granspace** é um gerenciador local dos projetos de desenvolvimento espalhados
pela sua máquina. Ele descobre seus projetos, mantém tudo organizado, roda com
logs ao vivo e acompanha a saúde do git — tudo num só lugar, como um app desktop
que roda no seu computador.

<figure class="shot">
  <img src="{{ '/images/intro-overview.png' | relative_url }}" alt="Visão geral do painel do Granspace" loading="lazy" />
  <figcaption>O painel listando os projetos descobertos. (screenshot pendente)</figcaption>
</figure>

## O que você ganha

- **Descobrir e organizar** — escaneia pastas em busca de projetos; adicione tags,
  defina etapa e propósito, favorite, agrupe em pastas e adicione notas. Veja
  [Organizando]({{ '/pt-br/docs/projects/organizing/' | relative_url }}) e
  [Grupos e pastas]({{ '/pt-br/docs/projects/groups/' | relative_url }}).
- **Rodar e acompanhar** — inicie/pare projetos e comandos nomeados com logs
  coloridos ao vivo; detecção de conflito de porta. Veja [Rodar e logs]({{ '/pt-br/docs/projects/running/' | relative_url }}).
- **Instalar dependências** — deixe um projeto se configurar ao ser adicionado. Veja
  [Instalar dependências]({{ '/pt-br/docs/projects/dependencies/' | relative_url }}).
- **Saúde do git** — estado de sincronização de relance, mais pull/push/commit/stash
  pela interface. Veja [Git]({{ '/pt-br/docs/projects/git/' | relative_url }}).
- **Ambiente e secrets** — variáveis de ambiente por projeto, com secrets
  criptografados atrás de uma senha-mestra. Veja [Ambiente e secrets]({{ '/pt-br/docs/projects/environment/' | relative_url }}).
- **Kanban e notas** — um quadro configurável por projeto. Veja [Kanban e notas]({{ '/pt-br/docs/projects/kanban/' | relative_url }}).
- **Extensões** — suporte declarativo e instalável para mais linguagens/ferramentas.
  Veja [Extensões]({{ '/pt-br/docs/extensions/overview/' | relative_url }}).

## Local-first e privado

O Granspace é um app desktop que roda na sua máquina e guarda seus dados num banco
SQLite local. Seus projetos, código e secrets ficam na sua máquina — o Granspace
nunca os envia para fora. Veja [Local-first e privado]({{ '/pt-br/docs/security/local-only/' | relative_url }}).

## Próximos passos

- [Instalar o Granspace]({{ '/pt-br/docs/getting-started/installation/' | relative_url }})
- [Primeiro início]({{ '/pt-br/docs/getting-started/first-launch/' | relative_url }})
