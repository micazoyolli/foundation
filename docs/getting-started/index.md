# Empezar

`@micazoyolli/foundation` centraliza fundamentos pequenos y agnosticos a marca que ya se repiten entre varios repos.

## Lecturas recomendadas

1. [Instalacion](../installation.md)
2. [Iniciar un proyecto nuevo](./start-a-new-project.md)
3. [Filosofia](../foundations/philosophy.md)
4. [Compatibilidad](../foundations/compatibility.md)
5. [Versionado y actualizaciones](../foundations/versioning.md)

## Uso minimo

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

Si una pieza depende de una marca, un layout visual o una decision de producto, debe vivir en el proyecto consumidor.
