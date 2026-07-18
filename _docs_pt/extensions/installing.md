---
title: Instalando
section: Extensões
description: Instale extensões do registro oficial ou de uma URL, e remova-as.
---

Gerencie extensões pelo menu **⋯ → Extensões** da barra superior (ou, no desktop,
**Project → Extensions**).

<figure class="shot">
  <img src="{{ '/images/extensions-modal.png' | relative_url }}" alt="O modal de Extensões" loading="lazy" />
  <figcaption>O gerenciador de Extensões. (screenshot pendente)</figcaption>
</figure>

## Do registro oficial

Clique em **Ver extensões oficiais** para listar o que está disponível no
[registro]({{ '/pt-br/docs/extensions/registry/' | relative_url }}) — Ruby,
Elixir, Deno, Maven, Gradle, Dart, Make e mais — e instale com um clique.

## De uma URL

Cole a URL do manifesto JSON de uma extensão e **Instalar**. O devhub o busca
(apenas http/https), valida contra o schema e o guarda.

## Removendo

Extensões instaladas aparecem no mesmo painel com um botão de remover. Nativas não
podem ser removidas.

## Depois de instalar

Novas regras de detecção e comandos passam a valer imediatamente — rode
**Descobrir** de novo para pegar projetos que a nova extensão reconhece.
