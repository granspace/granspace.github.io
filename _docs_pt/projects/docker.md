---
title: Containers Docker
section: Projetos
description: Gerencie os containers de um projeto compose pelo Granspace.
---

Para projetos **Docker Compose**, o Granspace adiciona um painel **Containers** aos
detalhes do projeto.

<div class="callout">
  Requer Docker instalado e no seu <code>PATH</code>. O painel aparece apenas para
  projetos detectados como compose.
</div>

## O painel Containers

Em **Detalhes → Containers (Docker)** você vê cada serviço com seu estado e
portas, e ações por serviço:

- **Iniciar** um serviço parado,
- **Parar** um em execução,
- **Reiniciar**.

```text
● postgres · Up 2 hours · 5432→5432
● redis    · Up 2 hours · 6379→6379
```

Use **Atualizar** para reler o estado atual (`docker compose ps`).

## Comandos do compose

Projetos compose também expõem os comandos usuais (`up`, `down`, `ps`, `logs`,
`build`) em [Comandos]({{ '/pt-br/docs/projects/commands/' | relative_url }}), com
logs ao vivo.

<figure class="shot">
  <img src="{{ '/images/docker-panel.png' | relative_url }}" alt="O painel de containers Docker" loading="lazy" />
  <figcaption>O painel Containers.</figcaption>
</figure>
