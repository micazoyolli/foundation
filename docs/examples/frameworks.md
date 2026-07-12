# Framework examples

## React

```tsx
import { cx } from '@micazoyolli/foundation';

export function Button({ active }: { active?: boolean }) {
  return <button className={cx('button', active && 'buttonActive')} />;
}
```

## Next.js

Usa SEO/build en scripts o funciones de build; usa DOM helpers solo en componentes client-side.

```ts
import { getCanonicalUrl } from '@micazoyolli/foundation';

export const canonical = getCanonicalUrl('https://example.com', '/faq');
```

## Vue

```ts
import { cx } from '@micazoyolli/foundation';

const className = computed(() => cx('panel', open.value && 'panelOpen'));
```

## Angular

```ts
import { isNonEmptyString } from '@micazoyolli/foundation';

const label = isNonEmptyString(value) ? value.trim() : 'Sin titulo';
```

## Astro

```astro
---
import { getCanonicalUrl } from '@micazoyolli/foundation';
const canonical = getCanonicalUrl(Astro.site?.toString() ?? '', Astro.url.pathname);
---
```

## Vite

```ts
import { applyHtmlMetadata } from '@micazoyolli/foundation';

const html = applyHtmlMetadata(template, route.metadata);
```

## Node

```ts
import { buildSitemapXml } from '@micazoyolli/foundation';

await fs.writeFile('dist/sitemap.xml', buildSitemapXml(entries));
```
