---
title: granspace.json
section: Projetos
description: Um arquivo de config por projeto que o Granspace aplica automaticamente.
---

O `granspace.json` deixa um projeto descrever como o Granspace deve configurá-lo. Quando
você adiciona um projeto que tem um, o Granspace o aplica automaticamente — ótimo
para repositórios compartilhados e onboarding.

## Exemplo

```json
{
  "install": ["npm install", "npm run build"],
  "autoStart": false,
  "env": {
    "DATABASE_URL": "postgres://localhost:5432/app",
    "API_KEY": null
  }
}
```

| Campo | Significado |
| --- | --- |
| `install` | Comandos para configurar o projeto (em ordem). |
| `autoStart` | Iniciar o projeto automaticamente após uma instalação bem-sucedida. |
| `env` | Variáveis de ambiente para semear. Um valor `null` declara **só a chave** (sem valor guardado). Secrets nunca são incluídos aqui. |

## Salvar e aplicar

Em **Detalhes → granspace.json**:

- **Salvar granspace.json** — escreve os comandos de instalação / env / auto-start
  atuais no arquivo do repositório.
- **Aplicar granspace.json** — relê o arquivo e o aplica ao projeto.
- **Instalar** / **Testar** — roda os comandos de instalação de verdade, ou como
  ensaio (dry run) para prever o que aconteceria.

<div class="callout">
  Secrets que você marca no <a href="{{ '/pt-br/docs/projects/environment/' | relative_url }}">painel de ambiente</a> são excluídos do <code>granspace.json</code>, então é seguro commitá-lo.
</div>
