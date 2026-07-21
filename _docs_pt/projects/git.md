---
title: Git
section: Projetos
description: Veja o estado de sincronização do git de relance e rode ações comuns pela interface.
---

O Granspace lê o status do git de cada projeto e deixa você rodar ações comuns sem
sair do app.

## Estado de sincronização

Um badge mostra o estado do repositório: **atualizado**, **não commitado**, **não
enviado (à frente)**, **atrás**, **divergiu**, ou **sem remote**. Estados que
pedem atenção também alimentam a bandeja/badge do desktop.

## Atualizar (fetch)

**Atualizar git** roda um `git fetch` de verdade (rede) para os contadores de
*à frente/atrás* ficarem exatos, e então relê o status. O **Atualizar git** do
painel faz isso para todos os projetos de uma vez; a aba **Detalhes → Git** faz
para um.

A página de detalhes também **faz fetch automático quando você a abre**, então os
contadores ficam frescos sem clicar.

## Ações

Em **Detalhes → Git** você pode:

- **Pull**, **Push**, **Commit** (com mensagem inline), **Stash** /
  **Stash pop**, e **Descartar** (com confirmação).

<figure class="shot">
  <img src="{{ '/images/git-tab.png' | relative_url }}" alt="A aba Git com estado de sincronização e ações" loading="lazy" />
  <figcaption>A aba Git. (screenshot pendente)</figcaption>
</figure>

## Abrir o remote

Se o projeto tem um remote git, o link rápido 🔗 do card abre a página web do
repositório (URLs de GitHub/GitLab/Bitbucket são derivadas do remote).
