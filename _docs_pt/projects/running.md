---
title: Rodar e logs
section: Projetos
description: Inicie e pare projetos, acompanhe logs ao vivo e detecte conflitos de porta e execuções externas.
---

Projetos executáveis podem ser iniciados e parados pelo devhub, com logs ao vivo.

## Comando de start

O **comando de start** de um projeto (ex.: `npm run dev`) é definido em
**Detalhes → Situação**. Desligue **"Pode iniciar"** para projetos que você só
quer organizar (sem botão de iniciar).

Use **Iniciar** no card ou nos Detalhes. Se o start falhar porque uma porta está
em uso, o devhub oferece forçar o início.

## Logs ao vivo

Enquanto um projeto roda, a saída é capturada com cores ANSI preservadas. Abra
**Detalhes → Comandos → Ver logs** para vê-los, e copie com um clique.

<figure class="shot">
  <img src="{{ '/images/running-logs.png' | relative_url }}" alt="Logs coloridos ao vivo de um projeto rodando" loading="lazy" />
  <figcaption>Logs ao vivo com cores preservadas. (screenshot pendente)</figcaption>
</figure>

## Conflitos de porta

O devhub sabe quais portas do host seus projetos usam e sinaliza **conflitos**
(dois projetos querendo a mesma porta) com um banner no painel e, no desktop, uma
notificação.

## Execuções externas

Se você iniciou um projeto num terminal (fora do devhub), o devhub ainda o mostra
como **rodando** — detectado sondando a porta da URL web ou as portas do host do
compose. Estes mostram um ponto de status **vazado** para distinguir (o devhub não
pode parar um processo que não iniciou).

## URL web

Defina uma **URL web** (ex.: `http://localhost:3000`) para o link rápido 🌐 do
card e a ação "abrir no navegador" apontarem para o lugar certo.
