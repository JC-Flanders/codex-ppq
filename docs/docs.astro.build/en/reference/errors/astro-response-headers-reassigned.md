---
Source: https://docs.astro.build/en/reference/errors/astro-response-headers-reassigned
Generated: 2026-04-19
Updated: 2026-04-19
---

# Astro.response.headers must not be reassigned.

> **AstroResponseHeadersReassigned**: Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.

## What went wrong?

[](#what-went-wrong)

Thrown when a value is being set as the `headers` field on the `ResponseInit` object available as `Astro.response`.

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
