---
Source: https://docs.astro.build/en/reference/errors/astro-glob-used-outside
Generated: 2026-04-19
Updated: 2026-04-19
---

# Astro.glob() used outside of an Astro file.

Deprecated

This error was removed in Astro v6.0.0 along with the removal of `Astro.glob()`.

> **AstroGlobUsedOutside**: `Astro.glob(GLOB_STR)` can only be used in `.astro` files. `import.meta.glob(GLOB_STR)` can be used instead to achieve a similar result.

## What went wrong?

[](#what-went-wrong)

`Astro.glob()` can only be used in `.astro` files. You can use [`import.meta.glob()`](https://vite.dev/guide/features.html#glob-import) instead to achieve the same result.

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
