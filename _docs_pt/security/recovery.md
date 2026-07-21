---
title: Recuperação
section: Segurança
description: Chave de recuperação, mudança de senha e reset do cofre.
---

## Chave de recuperação

Quando você define uma senha-mestra pela primeira vez, o granspace mostra uma
**chave de recuperação** — uma string única. Guarde-a em lugar seguro (um
gerenciador de senhas). Ela é mostrada **uma única vez**.

Se esquecer a senha, use **Recuperar** com a chave de recuperação para definir uma
nova senha **sem perder seus secrets** (graças à
[criptografia de envelope]({{ '/pt-br/docs/security/secrets/' | relative_url }})).

## Mudar senha

**Configurações → Segurança → Mudar senha** reenvelopa a chave de dados com uma
nova senha. Seus secrets criptografados ficam intactos.

## Reset

Se você perdeu tanto a senha quanto a chave de recuperação, **Resetar** limpa o
cofre para você começar de novo. Isso **apaga os valores secretos criptografados**
(dados não secretos não são afetados). O reset fica disponível mesmo trancado,
exatamente para esse caso.

<div class="callout">
  Mudou o esquema de criptografia recentemente? Se você definiu uma senha antes de
  uma atualização que reformulou a criptografia, use <strong>Resetar</strong> e
  defina de novo.
</div>
