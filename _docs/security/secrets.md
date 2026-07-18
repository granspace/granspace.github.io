---
title: Encrypted secrets
section: Security
description: How devhub encrypts secret environment variables behind a master password.
---

Environment variables you mark as **secret** are encrypted at rest so that
someone browsing the local database can't read them.

## Master password

Set a **master password** in **Settings → Security**. From it, devhub can encrypt
and decrypt your secrets. The password itself is **never stored** — you unlock
the vault once per session to view secrets or run projects that use them.

## How it works

devhub uses **envelope encryption**:

- A random **data key** (AES-256-GCM) encrypts the secret values. It lives only
  in memory while unlocked.
- That data key is **wrapped** (encrypted) by two things: a key derived from your
  **password** (scrypt), and a key derived from your **recovery key**.

Because the data key is wrapped twice, you can [recover]({{ '/docs/security/recovery/' | relative_url }})
access with the recovery key without losing your secrets, and you can change your
password without re-encrypting every value.

## Unlocking

When the vault is configured, devhub asks for the password to **unlock** for the
session. Locked secrets stay masked and are omitted from `.env` sync and
`devhub.json` until you unlock.

<div class="callout warn">
  If you forget both the password and the recovery key, secrets can't be
  recovered — you can <a href="{{ '/docs/security/recovery/' | relative_url }}">reset</a>
  the vault, which wipes the encrypted secrets.
</div>
