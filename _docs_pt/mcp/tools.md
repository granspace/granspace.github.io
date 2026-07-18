---
title: Referência de ferramentas
section: MCP (agentes de IA)
description: Os tipos de ferramenta que o devhub expõe via MCP.
---

<div class="callout warn">
  <strong>No roadmap</strong> — o servidor MCP ainda não está nos builds
  distribuídos. Isto é o que os agentes vão poder fazer quando chegar.
</div>

O devhub expõe suas funcionalidades a agentes como **ferramentas** MCP, agrupadas
por área. Elas espelham o que você faz na interface.

| Área | O que agentes podem fazer |
| --- | --- |
| **Projetos** | Listar, ler, atualizar metadados (etapa, propósito, tags, favorito, comando de start, URL web…). |
| **Tarefas / quadro** | Ler o quadro, adicionar / mover / atualizar / apagar tarefas e colunas. |
| **Notas** | Listar, adicionar, atualizar e remover notas de projeto. |
| **Git** | Ler o estado de sincronização e atualizá-lo. |
| **Runtime** | Iniciar / parar projetos e ler status. |
| **Portas** | Inspecionar uso de portas e conflitos. |
| **Configurações** | Ler/atualizar raízes e preferências. |

<div class="callout">
  Os nomes e entradas exatos das ferramentas são declarados pelo servidor e
  expostos pelo seu cliente MCP — abra a lista de ferramentas do cliente para ver
  o conjunto atual, que cresce conforme o devhub.
</div>

## Um fluxo típico

1. O agente lista projetos para achar os que interessam.
2. Ele lê o quadro ou o estado do git de um projeto.
3. Ele faz mudanças (adiciona tarefas, atualiza tags, etc.) — tudo escrito no mesmo
   banco de dados local que a interface lê.
