---
title: Solução de problemas
section: Referência
description: Problemas comuns e como resolvê-los.
---

## O app não abre / "danificado" (macOS)

Os builds não são assinados. Clique-direito → **Abrir**, ou limpe a flag de
quarentena:

```bash
xattr -cr /Applications/devhub.app
```

## O SmartScreen bloqueia (Windows)

Escolha **Mais informações → Executar assim mesmo** — o instalador não é assinado.

## Um projeto não é detectado

A detecção é dirigida por [extensões]({{ '/pt-br/docs/extensions/overview/' | relative_url }}).
Garanta que o projeto tem um arquivo marcador reconhecido (ex.: `package.json`,
`composer.json`, um arquivo compose). Instale uma
[extensão]({{ '/pt-br/docs/extensions/installing/' | relative_url }}) para outras
stacks e rode **Descobrir** de novo.

## Ações de git falham

O devhub chama o **git** do sistema — garanta que ele está instalado e no `PATH`,
e que o repositório tem o remote/credenciais que precisa.

## O painel do Docker não aparece

Ele só aparece para projetos **compose**, e o Docker precisa estar instalado e no
`PATH`. Veja [Containers Docker]({{ '/pt-br/docs/projects/docker/' | relative_url }}).

## Não consigo ver uma secreta

Valores secretos exigem o cofre **destrancado** com sua senha-mestra. Veja
[Secrets criptografados]({{ '/pt-br/docs/security/secrets/' | relative_url }}).

## Movendo o banco de dados

Aponte o devhub para outro arquivo de banco com a variável de ambiente `DB_PATH`.
