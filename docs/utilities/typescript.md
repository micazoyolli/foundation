# TypeScript utilities

Las utilidades TypeScript son pequenas, sin framework y sin estado global.

## Exports principales

- `cx`: composicion simple de clases.
- `isNonEmptyString`: guard para strings con contenido.
- DOM/a11y: focus, keyboard, media protegida y targets.
- SEO/build: escaping, canonical, sitemap, metadata y HTML estatico.

Archivo/export relacionado:
[src/index.ts](https://github.com/micazoyolli/foundation/blob/master/src/index.ts)

## Ejemplo correcto

```ts
import { cx, isNonEmptyString } from '@micazoyolli/foundation';

const className = cx('field', hasError && 'fieldError');
const label = isNonEmptyString(value) ? value.trim() : 'Sin titulo';
```

## Ejemplo incorrecto

```ts
// No usar foundation para esconder reglas de negocio.
const label = getProjectSpecificProductLabel(product);
```

## Referencias

- [DOM y accesibilidad](../typescript/dom.md)
- [SEO y build](../typescript/seo.md)
- [Utils](../typescript/utils.md)
