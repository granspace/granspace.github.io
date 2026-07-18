---
title: Instalação
section: Primeiros passos
description: Instale o devhub no Linux, Windows ou macOS.
---

O devhub é distribuído como app desktop. Pegue sua plataforma na
[página de download]({{ '/pt-br/download/' | relative_url }}) (todos os builds
ficam no último release do GitHub).

## Requisitos

- **git** no seu `PATH` (o devhub lê e roda git para os seus projetos).
- **Docker** — opcional, apenas para projetos Docker Compose e o painel de
  containers.

## Linux

**AppImage** (portátil, auto-atualizável):

```bash
chmod +x devhub-*.AppImage
./devhub-*.AppImage
```

**.deb** (Debian / Ubuntu / Pop!_OS):

```bash
sudo dpkg -i devhub_*_amd64.deb
# depois abra o "devhub" pelo menu de apps
```

## Windows

Rode o instalador NSIS (`.exe`). Se o SmartScreen avisar sobre um editor
desconhecido, escolha **Mais informações → Executar assim mesmo** (os builds não
são assinados).

## macOS

Abra o `.dmg` e arraste o devhub para Aplicativos. Como os builds não são
assinados, o primeiro início precisa de clique-direito → **Abrir**, ou limpe a
flag de quarentena:

```bash
xattr -cr /Applications/devhub.app
```

## Atualizações

O app verifica atualizações ao iniciar. AppImage e Windows atualizam no lugar;
outros builds notificam você. Veja [Auto-update]({{ '/pt-br/docs/desktop/auto-update/' | relative_url }}).

## A seguir

Continue em [Primeiro início]({{ '/pt-br/docs/getting-started/first-launch/' | relative_url }}).
