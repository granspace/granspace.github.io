---
title: Exportar e importar manifesto
section: Portabilidade
description: Mova sua configuração do Granspace entre máquinas com um manifesto.
---

Um **manifesto** captura seus projetos acompanhados para você recriar sua
configuração em outra máquina. É um único arquivo JSON, com caminhos relativos e
portáteis.

## Exportar

**⋯ → Exportar manifesto** baixa um `granspace.manifest.json` descrevendo seus
projetos acompanhados. Para cada projeto ele registra o remote git e os metadados:
etapa, propósito, tags, URL web, comandos de instalação, auto-start, favorito, o
**grupo** em que está e as **chaves de env** que ele usa. Também anota em qual
**SO** o manifesto foi feito.

Os **valores** de env secretos nunca são escritos — só as chaves são listadas,
então você reinsere os secrets do outro lado. Nada confidencial sai da sua máquina.

## Importar

**⋯ → Importar manifesto** primeiro mostra uma breve **nota de segurança** (um
manifesto pode clonar repositórios e carregar comandos de start/stop, então só
importe os que você confia), depois lê o arquivo e adiciona os projetos:

- projetos já presentes sob suas
  [raízes]({{ '/pt-br/docs/getting-started/first-launch/' | relative_url }})
  configuradas são **acompanhados** no lugar;
- projetos com repositório que estão faltando podem ser **clonados** do remote git,
  e as configurações do [`granspace.json`]({{ '/pt-br/docs/projects/granspace-json/' | relative_url }})
  deles são aplicadas (dependências **não** são instaladas automaticamente);
- projetos **sem remote** não podem ser clonados, então são adicionados como
  **ausentes no disco** — abra um para re-vinculá-lo a uma pasta, ou remova;
- o que for inválido é **ignorado** e reportado.

Você recebe um resumo do que foi **adicionado / clonado / ausente / ignorado**. Se o
manifesto foi feito em outro **SO**, o Granspace também lembra que comandos de
start/stop personalizados podem precisar de ajuste. Um manifesto malformado é
rejeitado com um motivo claro.

Após a importação, os valores de env públicos são restaurados; os **secretos**
voltam como chaves vazias para preencher.

## Casos de uso

- Configurar o Granspace numa máquina nova.
- Compartilhar um conjunto curado de projetos com um colega (ele clona ao importar).
- Fazer backup de quais projetos você estava gerenciando.
