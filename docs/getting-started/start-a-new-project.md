# Start a new project

Esta guia describe como integrar `@micazoyolli/foundation` desde el inicio sin acoplar el proyecto a una arquitectura visual prematura.

## 1. Instala el paquete

```bash
yarn add @micazoyolli/foundation
```

## 2. Define que usara el proyecto

Empieza solo con lo necesario:

- `cx` para composicion simple de clases;
- tokens SCSS base si el proyecto usa Sass;
- helpers SEO/build si el proyecto genera HTML estatico o sitemap;
- helpers DOM/a11y si hay overlays, drawers o metadata client-side.

## 3. Configura SCSS

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.section {
  padding-block: foundation.$space-6;
}
```

Archivo/export relacionado:
[src/scss/index.scss](https://github.com/micazoyolli/foundation/blob/master/src/scss/index.scss)

## 4. Usa helpers TypeScript de forma local

```ts
import { cx, isNonEmptyString } from '@micazoyolli/foundation';

export const getButtonClass = (variant?: string) =>
  cx('button', isNonEmptyString(variant) && `button--${variant}`);
```

Archivo/export relacionado:
[src/utils/cx.ts](https://github.com/micazoyolli/foundation/blob/master/src/utils/cx.ts)

## 5. Mantén datos de proyecto fuera de foundation

Correcto:

```ts
import { getCanonicalUrl } from '@micazoyolli/foundation';

const canonical = getCanonicalUrl(SITE_URL, route.path);
```

Incorrecto:

```ts
// No agregar SITE_URL, rutas o metadata de marca a foundation.
const canonical = getMicazoyolliCanonical(route.path);
```

## 6. Valida antes de adoptar mas helpers

```bash
yarn lint
yarn build
yarn smoke
```

## Checklist inicial

- El proyecto instala la version npm estable.
- No se importan archivos internos de `src` o `dist`.
- No se mueven componentes visuales al paquete.
- Los tokens de marca viven localmente.
- La metadata especifica vive localmente.
- El build y smoke pasan antes de escalar adopcion.
