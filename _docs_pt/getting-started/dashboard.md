---
title: O painel
section: Primeiros passos
description: Um tour pelo painel do granspace — barra superior, filtros, cards de projeto e ações em lote.
---

O painel é a tela inicial: cada projeto acompanhado como um card, com busca,
filtros e ações rápidas.

<figure class="shot">
  <img src="{{ '/images/dashboard-tour.png' | relative_url }}" alt="Painel com a barra superior, filtros e cards de projeto" loading="lazy" />
  <figcaption>O painel. (screenshot pendente)</figcaption>
</figure>

## Barra superior

- **Busca** — busca global por projetos, tarefas e notas. Foque com
  <kbd>/</kbd> ou <kbd>Cmd/Ctrl</kbd>+<kbd>K</kbd>.
- **+ Adicionar** — Descobrir projetos, Clonar por URL, Importar do GitHub.
- **Atualizar git** — fetch + atualização do estado do git de todos os projetos.
- **⋯ (mais)** — Exportar / Importar um [manifesto]({{ '/pt-br/docs/portability/manifest/' | relative_url }}) e abrir [Extensões]({{ '/pt-br/docs/extensions/overview/' | relative_url }}).
- **Configurações** — pastas, segurança, GitHub, editor, notificações.

## Filtros

Filtre a grade por **etapa**, **propósito** e **tag**, e mude a **ordenação**
(favoritos primeiro, nome, recentes, etapa). O contador mostra quantos batem.

## Cards de projeto

Cada card mostra:

- uma **estrela** de favorito e um checkbox de seleção múltipla;
- o ícone de **tipo** (stack) e o nome;
- um **ponto de status** — sólido quando o granspace iniciou, um **anel vazado**
  quando está rodando mas foi iniciado fora do granspace;
- **badges** de etapa, propósito e estado de sincronização do git, mais chips de
  **tag**;
- **links rápidos** — quadro, localhost, repositório e (desktop) pasta/terminal/editor;
- **Iniciar/Parar** e **Detalhes**.

Clique-direito num card (desktop) para um menu nativo (copiar caminho, abrir
pasta/terminal/editor).

## Ações em lote

Marque vários cards para revelar uma barra que **inicia / para / atualiza** todos
de uma vez.

## Banner de conflito de porta

Se dois projetos rodando quiserem a mesma porta do host, um banner lista o
conflito. Ele é dispensável e fica escondido até o conjunto de portas em conflito
realmente mudar.
