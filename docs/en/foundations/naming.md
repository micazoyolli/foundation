# Naming conventions

These conventions keep the ecosystem consistent without turning Foundation into a visual library.

## Tokens

Use semantic scale names, not brand names.

```scss
$space-4: 1rem;
$radius-md: 8px;
$z-modal: 1100;
```

Do not use names like `$purple-button-padding` or `$pocoyo-card-radius`.

## Helpers

Use clear verbs and domain-specific prefixes when useful.

```ts
getCanonicalUrl();
buildSitemapXml();
upsertMeta();
```

## Atomic UI future

Atoms, molecules and organisms are reserved naming conventions only. They are not public APIs today.
