---
title: granspace.json
section: Projetos
description: O arquivo de config por projeto — cada campo, o que faz e como configurar.
---

O `granspace.json` é um arquivinho que um projeto carrega para se descrever ao
Granspace. Quando você adiciona (ou clona) um projeto que tem um, o Granspace o lê e
aplica automaticamente — assim um repositório compartilhado se configura igual para
todo mundo, sem setup manual. É JSON puro, seguro de commitar, e nunca contém
valores de secrets.

## Exemplo completo

Todos os campos são opcionais — inclua só o que seu projeto precisa.

```json
{
  "version": 1,
  "stage": "in_development",
  "purpose": "wants_to_publish",
  "tags": ["web", "api"],
  "webUrl": "http://localhost:5173",
  "startCommand": "npm run dev",
  "install": ["npm install", "npm run build"],
  "autoStart": false,
  "env": {
    "DATABASE_URL": "postgres://localhost:5432/app",
    "API_KEY": null
  }
}
```

## Campos

| Campo | Tipo | O que faz |
| --- | --- | --- |
| `version` | number | Versão do formato do config. Atualmente `1`. Escrito pelo Granspace ao exportar; você pode omitir. |
| `stage` | string | Etapa do ciclo de vida do projeto. Um de `planning`, `in_development`, `launched`, `paused`, `archived`. |
| `purpose` | string | Para que o projeto serve. Um de `personal_use`, `local_only`, `wants_to_publish`, `public`. |
| `tags` | string[] | Tags livres, exibidas como chips no card e usáveis como filtro no painel. |
| `webUrl` | string \| null | Uma URL para abrir o projeto (ex.: seu dev server local ou o site no ar). `null` limpa. |
| `startCommand` | string \| null | O comando que o Granspace roda ao apertar **Iniciar**. `null` limpa. |
| `install` | string[] | Comandos de setup, rodados **em ordem**, de forma não-interativa. Veja [Instalar dependências]({{ '/pt-br/docs/projects/dependencies/' | relative_url }}). |
| `autoStart` | boolean | Iniciar o projeto automaticamente após uma instalação bem-sucedida. |
| `env` | object | Variáveis de ambiente para semear (veja abaixo). |

O arquivo é **estrito**: só os campos acima são aceitos. Um campo desconhecido torna
o arquivo inválido, e o Granspace informa qual chave foi rejeitada em vez de aplicar
um config parcial.

### Valores de `stage`

`planning` · `in_development` · `launched` · `paused` · `archived`

### Valores de `purpose`

`personal_use` · `local_only` · `wants_to_publish` · `public`

### `env`

Um mapa de nome da variável → valor. Um valor `null` **declara a chave sem valor** —
use para uma variável que o projeto precisa mas cujo valor cada pessoa deve
preencher (tipicamente um secret):

```json
"env": {
  "DATABASE_URL": "postgres://localhost:5432/app",
  "API_KEY": null
}
```

Quando o Granspace **escreve** um `granspace.json` para você, ele lista toda chave de
env que o projeto usa, mas só escreve um valor quando a variável **não é secreta** e
você escolheu publicá-la — caso contrário a chave mapeia para `null`. Assim o arquivo
documenta o que o projeto precisa sem nunca vazar um valor confidencial. Veja
[Ambiente e secrets]({{ '/pt-br/docs/projects/environment/' | relative_url }}).

<div class="callout">
  Secrets <strong>nunca</strong> são escritos no <code>granspace.json</code>, então o
  arquivo é sempre seguro de commitar.
</div>

## Como o Granspace usa o arquivo

- **Ao adicionar / clonar** — se o projeto tem um `granspace.json`, o Granspace o lê e
  aplica etapa, propósito, tags, URL web, comando de start, comandos de instalação e
  auto-start, e semeia as chaves de env declaradas.
- **Campos que o Granspace não conhece, que você adicionou à mão**, são preservados
  quando o Granspace reescreve o arquivo, contanto que ele continue válido.

## Salvar, aplicar, testar

Em **Detalhes → granspace.json** no app:

- **Salvar granspace.json** — escreve as configurações atuais do projeto (comandos de
  instalação, chaves de env, comando de start, auto-start, …) no arquivo do repo.
- **Aplicar granspace.json** — relê o arquivo e o aplica ao projeto.
- **Instalar** — roda os comandos de `install` de verdade (logs ao vivo).
- **Testar** — um ensaio (dry run) que mostra o que a instalação faria, sem rodar.
