# Atomic UI — Futuro

Foundation Core no incluye componentes visuales. Esta pagina prepara el criterio para una capa futura sin crear APIs ficticias.

## Estado actual

- No hay componentes React.
- No hay botones.
- No hay cards.
- No hay layouts.
- No hay tokens de marca.
- No hay tipografias finales.

## Atoms

Si algun dia existen, deberan ser piezas pequeñas, accesibles y sin marca final.

Ejemplos de nombres reservados:

- `Button`;
- `IconButton`;
- `TextInput`;
- `VisuallyHidden`.

No existen hoy como exports.

## Molecules

Deberan componer atoms reales y resolver un patron probado en varios proyectos.

Ejemplos de nombres reservados:

- `SearchField`;
- `MediaGuard`;
- `MetadataPreview`.

No existen hoy como exports.

## Organisms

Solo tendrian sentido si varios proyectos comparten estructura y comportamiento, no solo apariencia.

Ejemplos de nombres reservados:

- `Header`;
- `Sidebar`;
- `ProductGrid`.

No existen hoy como exports.

## Requisitos para entrar

- Uso repetido en al menos varios proyectos.
- Accesibilidad validada.
- Props pequeñas y estables.
- Sin tokens de marca.
- Documentacion con ejemplo correcto/incorrecto.
- Tests o smoke visual cuando aplique.

## Por que no forma parte de Core

Core debe seguir siendo agnostico a frameworks. Atomic UI probablemente viviria en otro paquete o en una extension claramente separada para no obligar a todos los consumidores a cargar React o estilos visuales.
