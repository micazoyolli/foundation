# Convenciones de naming

Estas convenciones ayudan a mantener el ecosistema consistente sin convertir foundation en una librería visual.

## Tokens

Usar nombres semánticos de escala, no de marca.

Correcto:

```scss
$space-4: 1rem;
$radius-md: 8px;
$z-modal: 1100;
```

Incorrecto:

```scss
$purple-button-padding: 1rem;
$pocoyo-card-radius: 16px;
```

## Helpers

Usar verbos claros para acciones y prefijos específicos cuando el dominio lo requiere.

Correcto:

```ts
getCanonicalUrl();
buildSitemapXml();
upsertMeta();
```

Incorrecto:

```ts
doSeoStuff();
makeNiceUrl();
```

## Clases CSS locales

Foundation no exporta clases CSS globales. En proyectos consumidores, preferir clases por responsabilidad:

```scss
.productCard {}
.productCardTitle {}
.productCardAction {}
```

## Atomic UI futuro

La sección futura de Atomic UI debe usar nombres por nivel solo si algún día existen piezas visuales aprobadas:

- átomos: `Button`, `IconButton`, `TextInput`;
- moléculas: `SearchField`, `ProductCard`, `InviteSummary`;
- organismos: `Header`, `Sidebar`, `ProductGrid`.

Por ahora esos nombres son convenciones reservadas, no APIs existentes.
