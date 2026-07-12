# Instalación

## Requisitos

- Node `>=22.13.0` recomendado en los proyectos del ecosistema.
- Yarn 1 en los repos actuales.
- Sass si se consume el entrypoint SCSS.

## Instalación

```bash
yarn add @micazoyolli/foundation
```

## Import TypeScript

```ts
import { cx, getCanonicalUrl } from '@micazoyolli/foundation';
```

El paquete no tiene dependencias runtime y no incluye React.

## Import SCSS

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

El entrypoint SCSS expone tokens y mixins mediante `@forward`.

## Versionado

El paquete usa versionado semántico:

- `patch`: correcciones internas o documentación.
- `minor`: nuevos helpers compatibles hacia atrás.
- `major`: cambios incompatibles en nombres, parámetros o comportamiento.

## Cuándo actualizar

Actualiza un proyecto cuando el cambio aporte valor real en ese repo. No migres por inercia.

## Cuándo no actualizar

No actualices si:

- el proyecto no usa los helpers nuevos;
- el cambio solo aumentaría el diff;
- hay una fase de deploy crítica y no hay tiempo de validar build/smoke.

## Validación mínima después de instalar

```bash
yarn install
yarn build
```

Si el repo tiene smoke checks:

```bash
yarn smoke
```

## Uso en producción

Foundation se utiliza como base compartida en sitios de producción, aplicaciones de negocio y experiencias interactivas. Puedes conocer más del ecosistema en [nadia.dev](https://nadia.dev).
