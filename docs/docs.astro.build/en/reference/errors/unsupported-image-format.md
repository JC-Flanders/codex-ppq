---
Source: https://docs.astro.build/en/reference/errors/unsupported-image-format
Generated: 2026-04-19
Updated: 2026-04-19
---

# Unsupported image format

> **UnsupportedImageFormat**: Received unsupported format `FORMAT` from `IMAGE_PATH`. Currently only SUPPORTED\_FORMATS.JOIN(’, ’) are supported by our image services.

## What went wrong?

[](#what-went-wrong)

The built-in image services do not currently support optimizing all image formats.

For unsupported formats such as GIFs, you may be able to use an `img` tag directly:

```astro
---import rocket from '../assets/images/rocket.gif';---
<img src={rocket.src} width={rocket.width} height={rocket.height} alt="A rocketship in space." />
```

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
