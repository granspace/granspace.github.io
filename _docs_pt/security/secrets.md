---
title: Secrets criptografados
section: Segurança
description: Como o Granspace criptografa variáveis de ambiente secretas atrás de uma senha-mestra.
---

Variáveis de ambiente que você marca como **secretas** são criptografadas em
repouso, para que quem navegue no banco de dados local não consiga lê-las.

## Senha-mestra

Defina uma **senha-mestra** em **Configurações → Segurança**. A partir dela, o
Granspace consegue criptografar e descriptografar seus secrets. A senha em si
**nunca é guardada** — você destranca o cofre uma vez por sessão para ver secrets
ou rodar projetos que os usam.

## Como funciona

O Granspace usa **criptografia de envelope**:

- Uma **chave de dados** aleatória (AES-256-GCM) criptografa os valores secretos.
  Ela vive apenas em memória enquanto destrancada.
- Essa chave de dados é **envelopada** (criptografada) por duas coisas: uma chave
  derivada da sua **senha** (scrypt), e uma chave derivada da sua **chave de
  recuperação**.

Como a chave de dados é envelopada duas vezes, você pode
[recuperar]({{ '/pt-br/docs/security/recovery/' | relative_url }}) o acesso com a
chave de recuperação sem perder seus secrets, e pode mudar a senha sem
recriptografar cada valor.

## Destrancando

Quando o cofre está configurado, o Granspace pede a senha para **destrancar** pela
sessão. Secrets trancados ficam mascarados e são omitidos do sync de `.env` e do
`granspace.json` até você destrancar.

<div class="callout warn">
  Se você esquecer tanto a senha quanto a chave de recuperação, os secrets não
  podem ser recuperados — você pode <a href="{{ '/pt-br/docs/security/recovery/' | relative_url }}">resetar</a>
  o cofre, o que apaga os secrets criptografados.
</div>
