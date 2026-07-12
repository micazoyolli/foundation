# Framework examples

## React

```tsx
import { cx } from '@micazoyolli/foundation';

export function Button({ active }: { active?: boolean }) {
  return <button className={cx('button', active && 'buttonActive')} />;
}
```

## Next.js

Use DOM helpers only in client components.

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
```

## Astro

```astro
---
import { getCanonicalUrl } from '@micazoyolli/foundation';
const canonical = getCanonicalUrl(Astro.site?.toString() ?? '', Astro.url.pathname);
---
```

## Node

```ts
import { buildSitemapXml } from '@micazoyolli/foundation';

await fs.writeFile('dist/sitemap.xml', buildSitemapXml(entries));
```
