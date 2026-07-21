---
title: Visão geral
section: MCP (agentes de IA)
description: O granspace fala Model Context Protocol para que agentes de IA gerenciem seus projetos.
---

O granspace inclui um servidor **MCP** (Model Context Protocol), para que agentes de
IA como Claude, Cursor e outros clientes MCP trabalhem com seus projetos — usando
a mesma lógica local do painel e do app desktop.

<div class="callout warn">
  <strong>No roadmap.</strong> O servidor MCP ainda não está nos builds desktop
  distribuídos — esta página descreve o que vem e como vai funcionar. Acompanhe os
  <a href="{{ site.repos.releases }}">releases</a> para saber quando chegar.
</div>

## Mesmo cérebro, outra superfície

O servidor MCP conecta no **mesmo banco SQLite local** e reutiliza os mesmos casos
de uso da interface. Qualquer coisa que um agente faça via MCP é exatamente o que
o app faria — listar projetos, atualizar metadados, gerenciar tarefas e notas,
checar git, iniciar/parar, e mais.

## Por que é útil

- Peça a um agente *"marque como `stale` todo projeto Node que não é tocado há 6
  meses"* e ele faz.
- Deixe um agente criar tarefas no quadro de um projeto a partir de uma spec.
- Peça a um agente para checar quais projetos têm commits não enviados.

## Local e privado

Como tudo no granspace, o servidor MCP é
[local-only]({{ '/pt-br/docs/security/local-only/' | relative_url }}) — roda na sua
máquina e conversa com seu banco de dados local.

A seguir: [Configurando um cliente]({{ '/pt-br/docs/mcp/configuration/' | relative_url }}) ·
[Referência de ferramentas]({{ '/pt-br/docs/mcp/tools/' | relative_url }}).
