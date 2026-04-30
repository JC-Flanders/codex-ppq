---
Source: https://docs.astro.build/en/reference/errors/file-glob-not-supported
Generated: 2026-04-19
Updated: 2026-04-19
---

# Glob patterns are not supported in the file loader

> **FileGlobNotSupported**: Glob patterns are not supported in the `file` loader. Use the `glob` loader instead.

## What went wrong?

[](#what-went-wrong)

The `file` loader must be passed a single local file. Glob patterns are not supported. Use the built-in `glob` loader to create entries from patterns of multiple local files.

**See Also:**

-   [Astro’s built-in `file()` loader](/en/reference/content-loader-reference/#file-loader)

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
