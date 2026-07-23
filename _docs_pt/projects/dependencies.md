---
title: Instalar dependências
section: Projetos
description: Deixe um projeto se configurar ao ser adicionado — com logs ao vivo e feedback claro de sucesso/erro.
---

Um projeto pode carregar os comandos necessários para se configurar (instalar
dependências, buildar, gerar arquivos). O Granspace os roda para você, com logs ao
vivo, para que um projeto recém-adicionado ou clonado fique pronto sem você caçar no
README.

Os comandos de instalação vêm do campo `install` do
[`granspace.json`]({{ '/pt-br/docs/projects/granspace-json/' | relative_url }}). Eles
rodam **em ordem**.

## Auto-instalação ao adicionar ou clonar

Quando você adiciona ou clona um projeto que tem comandos de instalação, o Granspace
**oferece rodá-los** — é opt-in, então nada roda sem você saber. Aceite e ele
instala; pule e você pode rodar depois pelos detalhes do projeto.

Funciona igual seja o projeto vindo do **Descobrir**, do **Clonar por URL** ou do
**Clonar do GitHub**.

## Feedback ao vivo

Enquanto uma instalação roda:

- o card do projeto mostra um indicador **Instalando…** (ele permanece se você sair
  da tela e voltar);
- os **logs aparecem ao vivo** para você acompanhar o progresso;
- ao terminar você recebe um resultado claro de **sucesso ou erro** — e, se falhou,
  o log diz o porquê.

Mais de um projeto pode instalar ao mesmo tempo; cada um acompanha seu próprio
progresso e logs.

## Somente não-interativo

Os comandos de instalação rodam **sem prompt de terminal** — eles não podem fazer
perguntas. Use flags não-interativas (por exemplo `npm ci`, ou o `--yes` do seu
gerenciador) para um comando nunca travar esperando uma resposta.

## Rodando você mesmo

Em **Detalhes → granspace.json**:

- **Instalar** — roda os comandos de `install` de verdade, com logs ao vivo.
- **Testar** — um ensaio (dry run) que mostra o que aconteceria, sem rodar nada.

<div class="callout">
  Os comandos de instalação são do próprio projeto — o Granspace só roda o que está
  no <code>granspace.json</code> dele, nunca um comando arbitrário de outro lugar.
</div>
