# Do and do not

## Do: move repeated mechanics

```ts
import { buildSitemapXml } from '@micazoyolli/foundation';

const xml = buildSitemapXml(routes.map((route) => ({ loc: route.canonical })));
```

Routes, domain and metadata stay in the project.

## Do not: move brand data

```ts
// Does not belong in Foundation.
export const WTFASHION_ROUTES = [...];
```

## Do: use base tokens

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.stack {
  gap: foundation.$space-4;
}
```

## Do not: replace brand decisions

```scss
// If this radius is part of the brand art direction, keep it local.
.heroCard {
  border-radius: foundation.$radius-md;
}
```
