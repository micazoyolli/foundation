# Uso correcto e incorrecto

## Correcto: mover mecánica repetida

```ts
import { buildSitemapXml } from '@micazoyolli/foundation';

const xml = buildSitemapXml(routes.map((route) => ({ loc: route.canonical })));
```

La ruta, dominio y metadata siguen viviendo en el proyecto.

## Incorrecto: mover datos de marca

```ts
// No pertenece a foundation.
export const WTFASHION_ROUTES = [...];
```

## Correcto: usar tokens base

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.stack {
  gap: foundation.$space-4;
}
```

## Incorrecto: reemplazar decisiones visuales de marca

```scss
// Si este radio es parte del arte visual de la marca, déjalo local.
.heroCard {
  border-radius: foundation.$radius-md;
}
```

## Correcto: helpers DOM sin React

```ts
import { lockBodyScroll, unlockBodyScroll } from '@micazoyolli/foundation';

const lock = lockBodyScroll();
unlockBodyScroll(lock);
```

## Incorrecto: crear wrappers por framework dentro de foundation

```ts
// No agregar hooks React al paquete.
useBodyScrollLock();
```
