---
title: Local-first e privado
section: Segurança
description: O Granspace é um app desktop local-first — seus projetos, código e secrets ficam na sua máquina.
---

O Granspace é local-first: roda na sua máquina e mantém seus projetos e secrets ali.

## Seus projetos e secrets ficam locais

O Granspace nunca envia para fora seu código-fonte, os metadados dos seus projetos
ou seus secrets. Tudo que ele sabe — projetos, tags, notas, quadros, configurações
e secrets (criptografados) — vive num **banco SQLite local** na sua máquina. Você
pode apontá-lo para outro lugar com a variável de ambiente `DB_PATH`. E seu
código-fonte nunca sai do lugar: o Granspace só aponta para pastas que você já tem.

## Roda na sua máquina

O Granspace é um app desktop. O backend roda localmente e escuta em **loopback**
(`127.0.0.1`) — o painel conversa com esse servidor local, e ele não é exposto na
sua rede.

## Acesso à rede

As requisições de rede que o Granspace faz são para as funcionalidades que você usa:

- operações de **git** (fetch/pull/push) para seus próprios remotes;
- a **verificação de atualização** contra o feed público de releases;
- o **fetch de um manifesto** de extensão quando você instala uma;
- chamadas opcionais à API do **GitHub** ao importar seus repositórios.

Nenhuma delas envia o conteúdo dos seus projetos ou seus secrets para lugar nenhum.

## Secrets em repouso

Variáveis de env secretas são [criptografadas]({{ '/pt-br/docs/security/secrets/' | relative_url }})
para serem ilegíveis no banco de dados sem sua senha-mestra.
