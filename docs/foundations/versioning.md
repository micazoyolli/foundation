# Versionado y actualizaciones

Foundation usa versionado semantico.

## Tipos de cambio

- `patch`: documentacion, tests o fixes internos compatibles.
- `minor`: helpers nuevos compatibles hacia atras.
- `major`: cambios incompatibles en nombres, parametros o comportamiento.

## Como adoptar una nueva version

1. Lee [Changelog](../changelog.md).
2. Actualiza la dependencia en un solo repo primero.
3. Ejecuta install con lockfile.
4. Corre lint/build/smoke del repo consumidor.
5. Revisa el diff generado.
6. Escala al siguiente proyecto solo si el cambio aporta valor.

```bash
yarn add @micazoyolli/foundation@^0.3.0
yarn install --frozen-lockfile
yarn build
yarn smoke
```

## Cuando esperar

No actualices si el proyecto no consume los nuevos helpers, si no hay tiempo de validar o si la version entra durante una ventana critica de deploy.

## Que nunca debe romper una minor

- Imports existentes desde `@micazoyolli/foundation`.
- Imports existentes desde `@micazoyolli/foundation/scss`.
- Comportamiento documentado de helpers publicos.
