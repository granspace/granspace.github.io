---
title: Ambiente e secrets
section: Projetos
description: Variáveis de ambiente por projeto, mascaramento de secrets e sync com .env.
---

Cada projeto tem suas próprias variáveis de ambiente, gerenciadas em
**Detalhes → Variáveis de ambiente**.

## Adicionando variáveis

Adicione uma `KEY` e um valor. Dois toggles controlam como ela é tratada:

- **Secreta** — o valor é mascarado na interface e **criptografado em repouso**
  (veja [Secrets criptografados]({{ '/pt-br/docs/security/secrets/' | relative_url }})).
  Revele com o botão de olho (requer o cofre destrancado).
- **No granspace.json** — se a variável é publicada no [`granspace.json`]({{ '/pt-br/docs/projects/granspace-json/' | relative_url }})
  do projeto. Secrets **nunca** são escritos no `granspace.json`.

Você também pode declarar uma **chave sem valor guardado** (um placeholder que
documenta que o projeto precisa dela, sem commitar o valor).

## Detectar

**Detectar** escaneia o projeto (ex.: um `.env.example`) e sugere variáveis que
você ainda não adicionou.

## Sincronizar com `.env`

**Sincronizar .env** escreve as variáveis do projeto num arquivo `.env` local:

```dotenv
DATABASE_URL=postgres://localhost:5432/app
API_KEY=••••••••        # secreta — só escrita quando o cofre está destrancado
```

Se o `.env` já existe, o Granspace pergunta antes de sobrescrever.

<figure class="shot">
  <img src="{{ '/images/env-panel.png' | relative_url }}" alt="O painel de variáveis de ambiente" loading="lazy" />
  <figcaption>O painel de ambiente com uma secreta e uma var publicada. (screenshot pendente)</figcaption>
</figure>
