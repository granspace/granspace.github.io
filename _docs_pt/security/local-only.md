---
title: Local por design
section: Segurança
description: O Granspace roda inteiramente na sua máquina — somente loopback, armazenamento local, sem telemetria.
---

O Granspace é feito para ficar na sua máquina.

## Somente loopback

O backend escuta em **loopback** (`127.0.0.1`). O painel do app desktop conversa
com esse servidor local, e a versão web self-hosted e o
[servidor MCP]({{ '/pt-br/docs/mcp/overview/' | relative_url }}) planejados também
vão — nada é exposto na sua rede.

## Armazenamento local

Tudo que o Granspace sabe — projetos, tags, notas, quadros, configurações e secrets
(criptografados) — vive num **banco SQLite local** na sua máquina. Você pode
apontá-lo para outro lugar com a variável de ambiente `DB_PATH`.

## Sem telemetria

O Granspace não liga pra casa. As únicas requisições de saída são as que você dispara:

- operações de **git** (fetch/pull/push) para seus próprios remotes;
- a **verificação de atualização** contra o feed público de releases;
- o **fetch de um manifesto** de extensão quando você instala uma;
- chamadas opcionais à API do **GitHub** ao importar seus repositórios.

## Secrets em repouso

Variáveis de env secretas são [criptografadas]({{ '/pt-br/docs/security/secrets/' | relative_url }})
para serem ilegíveis no banco de dados sem sua senha-mestra.
