# Instalacion

## Requisitos

- Node `>=22.13.0` recomendado en los proyectos del ecosistema.
- Yarn 1 en los repos actuales.
- Sass si se consume el entrypoint SCSS.

## Instalacion

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

El paquete usa versionado semantico:

- `patch`: correcciones internas o documentacion.
- `minor`: nuevos helpers compatibles hacia atras.
- `major`: cambios incompatibles en nombres, parametros o comportamiento.

## Cuando actualizar

Actualiza un proyecto cuando el cambio aporte valor real en ese repo. No migres por inercia.

## Cuando NO actualizar

No actualices si:

- el proyecto no usa los helpers nuevos;
- el cambio solo aumentaria el diff;
- hay una fase de deploy critica y no hay tiempo de validar build/smoke.

## Validacion minima despues de instalar

```bash
yarn install
yarn build
```

Si el repo tiene smoke checks:

```bash
yarn smoke
```

## Proyectos que ya lo usan

- TeInvitaASu.Party: helpers SCSS, TypeScript y SEO/build.
- Micazoyolli: helpers SCSS, TypeScript y SEO/build.
- TeInvitaASu Invitaciones: fundamentos compartidos dentro de `@teinvitaasu/ui`.
- Estilo Natura, OhMamaMXX y WTFashion: adopcion selectiva de utilidades no visuales.
