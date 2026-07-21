---
title: Exportar e importar manifesto
section: Portabilidade
description: Mova sua configuração do Granspace entre máquinas com um manifesto.
---

Um **manifesto** captura seus projetos acompanhados para você recriar sua
configuração em outra máquina.

## Exportar

**⋯ → Exportar manifesto** baixa um `Granspace.manifest.json` descrevendo seus
projetos acompanhados (caminhos, remotes git e metadados). Secrets **não** são
incluídos.

## Importar

**⋯ → Importar manifesto** lê um manifesto e adiciona os projetos dele. O Granspace
pergunta se deve **clonar** os repositórios que ainda não estão sob suas
[raízes]({{ '/pt-br/docs/getting-started/first-launch/' | relative_url }})
configuradas:

- projetos já presentes são **acompanhados** no lugar;
- os que faltam podem ser **clonados** do remote git;
- o que não puder ser resolvido é **ignorado** (e reportado).

## Casos de uso

- Configurar o Granspace numa máquina nova.
- Compartilhar um conjunto curado de projetos com um colega (ele clona ao
  importar).
- Fazer backup de quais projetos você estava gerenciando.
