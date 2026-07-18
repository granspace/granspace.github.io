---
title: Recovery
section: Security
description: Recovery key, changing the password, and resetting the vault.
---

## Recovery key

When you first set a master password, devhub shows a **recovery key** — a
one-time string. Save it somewhere safe (a password manager). It's shown **once**.

If you forget your password, use **Recover** with the recovery key to set a new
password **without losing your secrets** (thanks to
[envelope encryption]({{ '/docs/security/secrets/' | relative_url }})).

## Change password

**Settings → Security → Change password** re-wraps the data key with a new
password. Your encrypted secrets are untouched.

## Reset

If you've lost both the password and the recovery key, **Reset** clears the vault
so you can start over. This **wipes the encrypted secret values** (non-secret
data is unaffected). Reset is available even while locked, for exactly this case.

<div class="callout">
  Changed the crypto scheme recently? If you set a password before an update that
  reworked encryption, use <strong>Reset</strong> and set it again.
</div>
