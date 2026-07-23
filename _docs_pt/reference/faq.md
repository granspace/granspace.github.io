---
title: FAQ
section: Referência
description: Perguntas frequentes sobre o Granspace.
---

## O Granspace envia meu código ou dados para algum lugar?

Não. O Granspace é [local-first]({{ '/pt-br/docs/security/local-only/' | relative_url }}):
seus projetos, código e secrets ficam na sua máquina e nunca são enviados para fora.
As requisições de rede que ele faz são para funcionalidades que você usa — git para
seus próprios remotes, a verificação de atualização, o fetch de uma extensão que
você instala e o import opcional do GitHub.

## Onde meus projetos ficam guardados?

O Granspace não move seus projetos — ele aponta para pastas que você já tem. Os dados
dele (metadados, notas, quadros, configurações, secrets criptografados) ficam num
banco SQLite local (`DB_PATH` para realocá-lo).

## Como adiciono suporte a outra linguagem ou ferramenta?

Instale ou escreva uma [extensão]({{ '/pt-br/docs/extensions/overview/' | relative_url }}) —
são JSON declarativo, sem execução de código.

## Como reporto um bug ou peço uma funcionalidade?

Abra uma issue no [repositório de feedback]({{ site.repos.feedback }}/issues). Veja
[Feedback]({{ '/pt-br/docs/reference/feedback/' | relative_url }}).

## É gratuito / open source?

Confira o [projeto]({{ '/pt-br/' | relative_url }}) e os
[releases]({{ site.repos.releases }}) para o licenciamento e downloads atuais.
