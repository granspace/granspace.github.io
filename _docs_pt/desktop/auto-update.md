---
title: Auto-update
section: App desktop
description: Como o Granspace se atualiza em cada plataforma.
---

O app desktop verifica se há uma versão mais nova ao iniciar, contra o feed
público de releases.

## Por plataforma

| Plataforma | Comportamento |
| --- | --- |
| **Linux — AppImage** | Atualiza **no lugar** (baixa em segundo plano, instala ao sair — uma notificação oferece "reiniciar agora"). |
| **Windows** | Atualiza **no lugar** (NSIS). |
| **Linux — .deb** | Mostra uma notificação de **"nova versão disponível"** com link para o download. |
| **macOS (não assinado)** | Mesmo fluxo de notificação-e-download. |

## Verificação manual

**Help → Verificar atualizações** roda uma verificação sob demanda e te diz se
está atualizado ou oferece o download. Também está no menu da bandeja.

## De onde vêm as atualizações

Builds e metadados de atualização são publicados nos
[releases públicos do site]({{ site.repos.releases }}). Veja a
[página de download]({{ '/pt-br/download/' | relative_url }}).
