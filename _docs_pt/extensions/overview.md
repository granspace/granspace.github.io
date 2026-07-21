---
title: Visão geral
section: Extensões
description: Como o Granspace detecta tipos de projeto e descobre comandos — de forma declarativa, via extensões.
---

Extensões adicionam suporte a mais linguagens e ferramentas **sem alterar o
Granspace em si**. Elas são **declarativas** — meros manifestos JSON, nenhum código
de terceiros roda — e dirigem duas coisas:

- **Detecção** — como uma pasta é reconhecida como um projeto de certo tipo.
- **Comandos** — quais comandos nomeados esse projeto expõe.

## Extensões nativas

O Granspace já vem com nativas para **Node**, **Docker Compose**, **Unity**,
**PHP**, **Python**, **Go** e **Rust**. Os ids nativos não podem ser sobrepostos
por extensões instaladas.

## Extensões instaladas

Você pode adicionar mais de uma URL ou do [registro oficial]({{ '/pt-br/docs/extensions/registry/' | relative_url }}).
Extensões instaladas são validadas contra um schema estrito, guardadas localmente,
e mescladas com as nativas em runtime.

## Nenhuma execução de código

Uma extensão é dado, não código: ela declara *padrões de arquivo* para detectar um
projeto e *de onde vêm os comandos* (ex.: os `scripts` de um `package.json`). O
Granspace nunca executa código enviado por uma extensão — só lê os arquivos do seu
projeto.

A seguir: [Instalando]({{ '/pt-br/docs/extensions/installing/' | relative_url }}) ·
[Criando uma extensão]({{ '/pt-br/docs/extensions/authoring/' | relative_url }}).
