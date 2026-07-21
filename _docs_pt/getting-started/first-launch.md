---
title: Primeiro início
section: Primeiros passos
description: Aponte o Granspace para seus projetos e deixe ele descobri-los.
---

No primeiro início o Granspace pergunta onde seus projetos ficam. Tudo começa daí.

## 1. Adicione as raízes de projeto

Abra **Configurações → Pastas** e adicione um ou mais caminhos absolutos onde seus
projetos são guardados, por exemplo:

```text
/home/voce/Core/dev
/home/voce/trabalho
```

O Granspace escaneia essas raízes (um nível de profundidade) por qualquer coisa que
pareça um projeto — um repositório git, um `package.json`, um `composer.json`, um
arquivo compose e assim por diante (a detecção é dirigida por
[extensões]({{ '/pt-br/docs/extensions/overview/' | relative_url }})).

<figure class="shot">
  <img src="{{ '/images/first-launch-settings.png' | relative_url }}" alt="Configurações — pastas para escanear" loading="lazy" />
  <figcaption>Configurações → Pastas, onde você adiciona as raízes a escanear. (screenshot pendente)</figcaption>
</figure>

## 2. Descubra projetos

Use **Adicionar → Descobrir projetos** (ou o atalho na bandeja/menu). O Granspace
lista o que encontrou nas suas raízes mas ainda não gerencia — marque os que quer
adicionar.

Você também pode:

- **Clonar por URL** — clonar um repositório git numa raiz e acompanhá-lo.
- **Importar do GitHub** — listar seus repositórios (precisa de um token para os
  privados) e cloná-los/acompanhá-los.
- **Arrastar uma pasta** para a janela (app desktop) para acompanhá-la direto.

## 3. Organize

Uma vez acompanhado, um projeto aparece como um card. Defina a **etapa** e o
**propósito**, adicione **tags**, marque **favoritos**, e abra **Detalhes** para
o resto. Veja [Organizando]({{ '/pt-br/docs/projects/organizing/' | relative_url }}) e
[O painel]({{ '/pt-br/docs/getting-started/dashboard/' | relative_url }}).

## Opcional: projetos auto-configuráveis

Coloque um [`granspace.json`]({{ '/pt-br/docs/projects/granspace-json/' | relative_url }})
num projeto e o Granspace o aplica quando o projeto é adicionado — comandos de
instalação, chaves de env, auto-start e mais.
