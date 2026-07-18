---
title: Registro oficial
section: Extensões
description: O registro público que o devhub navega, e como contribuir.
---

O **registro oficial** é uma lista pública de extensões da comunidade que o devhub
pode navegar e instalar diretamente.

## Onde ele fica

O registro é o repositório público
[**devhub-extensions**]({{ site.repos.extensions }}). Ele contém:

- `registry.json` — o índice que o devhub lê;
- um manifesto por extensão;
- `schema.json` — o JSON Schema contra o qual todo manifesto é validado;
- um guia `CONTRIBUTING` e CI que valida as submissões.

## Contribuindo

1. Escreva um manifesto (veja [Criando uma extensão]({{ '/pt-br/docs/extensions/authoring/' | relative_url }})).
2. Valide-o contra o `schema.json`.
3. Abra um pull request adicionando seu manifesto e uma entrada no registro.

O CI checa o schema em todo PR, então um manifesto válido é a maior parte do
trabalho.

## Instalando dele

No devhub, abra **⋯ → Extensões → Ver extensões oficiais** para instalar qualquer
entrada do registro. Veja [Instalando]({{ '/pt-br/docs/extensions/installing/' | relative_url }}).
