# Start a New Project

Esta guia ayuda a iniciar un proyecto con Foundation desde el principio sin mezclar fundamentos compartidos con decisiones de marca.

## 1. Instala Foundation

```bash
yarn add @micazoyolli/foundation
```

## 2. Crea una estructura local clara

```txt
src/
  styles/
    tokens/
      _brand.scss
      _typography.scss
    main.scss
  seo/
    routes.ts
    build-sitemap.ts
  utils/
  components/
```

Foundation vive en imports. La marca vive en tu proyecto.

## 3. Configura SCSS

```scss
@use '@micazoyolli/foundation/scss' as foundation;

@use './tokens/brand' as brand;

.section {
  padding-block: foundation.$space-6;
  color: brand.$color-text;
}
```

Correcto: usar spacing base para estructura comun.

Incorrecto: mover `brand.$color-primary` a Foundation.

## 4. Define tokens de marca localmente

```scss
$color-primary: #884ea0;
$font-title: 'Barriecito', cursive;
```

Los colores finales, logos, fuentes y sombras de marca no pertenecen a Foundation.

## 5. Accesibilidad inicial

```ts
import { createEscapeKeyHandler, lockBodyScroll, unlockBodyScroll } from '@micazoyolli/foundation';
```

Usa las primitivas solo cuando tengas overlays, drawers, modales o interacciones globales reales.

## 6. Metadata y sitemap

```ts
import { buildSitemapXml, getCanonicalUrl } from '@micazoyolli/foundation';

const canonical = getCanonicalUrl('https://example.com', '/faq');
const sitemap = buildSitemapXml([{ loc: canonical }]);
```

Tu proyecto debe conservar:

- `SITE_URL`;
- rutas reales;
- titulos;
- descripciones;
- imagenes OG;
- reglas de robots.

## 7. Smoke tests minimos

Valida lo barato antes de escalar:

```bash
yarn build
yarn smoke
```

Recomendado:

- rutas criticas;
- metadata basica;
- errores de consola;
- un flujo interactivo clave.

## 8. Favicons y PWA

Mantén estos recursos separados:

- `favicon`: icono pequeño, puede ser transparente;
- `apple-touch-icon`: icono para iOS;
- `manifest icons`: iconos PWA, normalmente 192x192 y 512x512;
- `maskable`: solo cuando el diseño fue preparado para ese proposito.

No reutilices automaticamente un icono de manifest como favicon si cambia el aspecto original.

## React + Vite

```tsx
import { cx } from '@micazoyolli/foundation';

export function Button({ active }: { active?: boolean }) {
  return <button className={cx('button', active && 'buttonActive')}>Guardar</button>;
}
```

## Next.js

Usa helpers DOM solo en componentes client-side. Para metadata SSR, Foundation puede ayudar con URLs, pero la metadata final vive en Next.

```ts
import { getCanonicalUrl } from '@micazoyolli/foundation';

export const canonical = getCanonicalUrl('https://example.com', '/contacto');
```

## Vue + Vite

```ts
import { cx } from '@micazoyolli/foundation';

const className = computed(() => cx('panel', open.value && 'panelOpen'));
```

## Angular

Foundation funciona como utilidades TS/SCSS. No incluye directivas ni servicios Angular.

```ts
import { isNonEmptyString } from '@micazoyolli/foundation';
```

## Astro

Usa SEO/build en frontmatter o scripts. Helpers DOM solo en scripts client-side.

```astro
---
import { getCanonicalUrl } from '@micazoyolli/foundation';
const canonical = getCanonicalUrl(Astro.site?.toString() ?? '', Astro.url.pathname);
---
```

## Node/build scripts

```ts
import { applyHtmlMetadata } from '@micazoyolli/foundation';

const html = applyHtmlMetadata(template, route.metadata);
```

## Regla principal

Si una decision cambia la identidad del proyecto, se queda en el proyecto. Si una mecanica se repite sin marca en varios repos, puede ser candidata para Foundation.
