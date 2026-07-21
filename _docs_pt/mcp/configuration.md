---
title: Configurando um cliente
section: MCP (agentes de IA)
description: Como um cliente MCP vai conectar ao servidor MCP do granspace.
---

<div class="callout warn">
  <strong>No roadmap.</strong> O servidor MCP ainda não é entregue nos builds
  desktop distribuídos, então não há nada para configurar hoje. Esta página
  descreve o setup <em>planejado</em> para você saber o que esperar.
</div>

## Formato planejado

O servidor MCP roda sobre **stdio** — um cliente MCP o inicia como um comando e
conversa por entrada/saída padrão. O plano é entregar um launcher **junto com o
app desktop**, para que clientes apontem para um comando estável sem precisar de
checkout do código.

A maioria dos clientes (Claude Desktop, Cursor, Claude Code, …) usa um mapa
`mcpServers`, então a configuração vai parecer com:

```json
{
  "mcpServers": {
    "granspace": {
      "command": "<launcher MCP do granspace entregue com o app>"
    }
  }
}
```

Ele vai usar o **mesmo banco de dados local** do painel, então qualquer coisa que
um agente faça é refletida no app na hora.

## Enquanto isso

Veja o que os agentes vão poder fazer na [Referência de ferramentas]({{ '/pt-br/docs/mcp/tools/' | relative_url }}),
e a [Visão geral]({{ '/pt-br/docs/mcp/overview/' | relative_url }}) para a ideia.
