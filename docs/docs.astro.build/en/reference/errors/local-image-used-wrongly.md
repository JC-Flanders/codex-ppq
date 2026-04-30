---
Source: https://docs.astro.build/en/reference/errors/local-image-used-wrongly
Generated: 2026-04-19
Updated: 2026-04-19
---

# Local images must be imported.

> **LocalImageUsedWrongly**: `Image`’s and `getImage`’s `src` parameter must be an imported image or an URL, it cannot be a string filepath. Received `IMAGE_FILE_PATH`.

## What went wrong?

[](#what-went-wrong)

When using the default image services, `Image`’s and `getImage`’s `src` parameter must be either an imported image or an URL, it cannot be a string of a filepath.

For local images from content collections, you can use the [image() schema helper](/en/guides/images/#images-in-content-collections) to resolve the images.

```astro
---import { Image } from "astro:assets";import myImage from "../my_image.png";---
<!-- GOOD: `src` is the full imported image. --><Image src={myImage} alt="Cool image" />
<!-- GOOD: `src` is a URL. --><Image src="https://example.com/my_image.png" alt="Cool image" />
<!-- BAD: `src` is an image's `src` path instead of the full image object. --><Image src={myImage.src} alt="Cool image" />
<!-- BAD: `src` is a string filepath. --><Image src="../my_image.png" alt="Cool image" />
```

**See Also:**

-   [Images](/en/guides/images/)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
