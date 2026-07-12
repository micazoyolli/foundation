# Empezar

`@micazoyolli/foundation` centraliza fundamentos pequeños y agnósticos a marca que ya se repiten entre varios repos.

## Lecturas recomendadas

1. [Instalación](../installation.md)
2. [Iniciar un proyecto nuevo](./start-a-new-project.md)
3. [Filosofía](../foundations/philosophy.md)
4. [Compatibilidad](../foundations/compatibility.md)
5. [Versionado y actualizaciones](../foundations/versioning.md)

## Uso mínimo

```bash
yarn add @micazoyolli/foundation
```

```ts
import { cx } from '@micazoyolli/foundation';

const className = cx('button', isActive && 'button--active');
```

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.stack {
  gap: foundation.$space-4;
}
```

## Regla de oro

Si una pieza depende de una marca, un layout visual o una decisión de producto, debe vivir en el proyecto consumidor.
