# TypeScript: SEO y build

Estos helpers son puros y no conocen rutas, dominios, marcas ni metadata especifica. Cada proyecto conserva sus propios registros SEO.

## `escapeHtml(value)`

### Que hace

Escapa `&`, `<`, `>` y `"` para usar valores dentro de HTML.

### Cuando usarlo

Antes de insertar titulos, descripciones o nombres en tags HTML generados por scripts.

### Cuando NO usarlo

- Si el valor ya fue escapado.
- Para sanitizar HTML arbitrario de usuarios. No es un sanitizer.

### Parametros

- `value: unknown`

### Valor de retorno

`string`

## `escapeXml(value)`

### Que hace

Aplica `escapeHtml` y ademas escapa `'` como `&apos;`.

### Cuando usarlo

Para `sitemap.xml` o XML generado en build.

### Cuando NO usarlo

Para contenido HTML normal si no necesitas escapar apostrofes.

## `normalizeBaseUrl(baseUrl)`

Elimina slashes finales de un dominio/base URL.

## `normalizeRoutePath(routePath)`

Normaliza rutas a formato `/ruta` sin slash final, excepto `/`.

## `isAbsoluteUrl(value)`

Detecta URLs `http` o `https`.

## `getCanonicalUrl(baseUrl, routePath, options)`

### Que hace

Construye una URL canonical estable desde dominio y ruta.

### Parametros

- `baseUrl: string`
- `routePath: string`
- `options.rootTrailingSlash?: boolean`
- `options.trailingSlash?: boolean`

### Valor de retorno

`string`

### Ejemplo

```ts
getCanonicalUrl('https://nadia.dev/', '/en/about/');
// "https://nadia.dev/en/about"
```

## `getAbsoluteUrl(value, baseUrl, options)`

### Que hace

Devuelve `value` si ya es absoluta; si es relativa, genera una URL canonical con `baseUrl`.

### Cuando usarlo

Para imagenes OG que pueden venir como `/meta.jpg` o como URL absoluta.

## `buildSitemapXml(entries, options)`

### Que hace

Genera XML de sitemap desde entradas ya normalizadas.

### Parametros

- `entries: SitemapEntry[]`
- `options.lastmod?: string`

`SitemapEntry`:

```ts
type SitemapEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
};
```

### Valor de retorno

`string` con XML completo.

### Ejemplo real

```ts
import { buildSitemapXml, getCanonicalUrl } from '@micazoyolli/foundation';

const xml = buildSitemapXml([
  {
    loc: getCanonicalUrl('https://teinvitaasu.party', '/categoria/boda', {
      rootTrailingSlash: true,
    }),
    changefreq: 'monthly',
    priority: '0.8',
  },
], { lastmod: '2026-07-11' });
```

## `applyHtmlMetadata(html, metadata, alternates)`

### Que hace

Reemplaza o inserta tags SEO comunes en un HTML ya generado.

### Cuando usarlo

- En SPAs que generan HTML estatico por ruta.
- En scripts postbuild.
- Para compartir la mecanica de reemplazo sin mover metadata de marca a foundation.

### Cuando NO usarlo

- Para SSR completo.
- Para metadata que depende de ejecucion en servidor por request.
- Si el HTML no tiene `</head>`.

### Parametros

- `html: string`
- `metadata: HtmlMetadata`
- `alternates?: AlternateLink[]`

### Valor de retorno

`string` con metadata aplicada.

### Ejemplo real

```ts
const html = applyHtmlMetadata(template, {
  canonical: 'https://nadia.dev/en/about',
  description: 'Frontend engineer and UI engineer portfolio.',
  image: 'https://nadia.dev/meta.jpg',
  lang: 'en',
  siteName: '&lt;micazoyolli /&gt;',
  title: 'About | Nadia',
}, [
  { hreflang: 'es', href: 'https://nadia.dev/sobre-mi' },
  { hreflang: 'en', href: 'https://nadia.dev/en/about' },
]);
```

## `upsertMetaTag(html, selector, tag)` y `upsertLinkTag(html, selector, tag)`

### Que hacen

Reemplazan un tag existente por selector textual simple o insertan el tag antes de `</head>`.

### Cuando usarlos

Para casos especificos que `applyHtmlMetadata` no cubre, como un `apple-touch-icon` local.

### Cuando NO usarlos

Para parsear HTML complejo o transformar documentos arbitrarios. Si el caso crece, usa un parser.

## `removeAlternateLinks(html)` y `getAlternateLinkTags(alternates)`

Helpers para regenerar `hreflang` sin duplicados.

## `getStaticRouteOutputPath(routePath)`

### Que hace

Convierte una ruta publica a archivo HTML estatico.

### Ejemplo

```ts
getStaticRouteOutputPath('/categoria/boda');
// "categoria/boda/index.html"
```

## Proyectos que ya los usan

- TeInvitaASu.Party: sitemap y HTML estatico por ruta.
- Micazoyolli: sitemap, HTML estatico por idioma/ruta y hreflang.

## Metadata DOM client-side

Estos helpers actualizan el documento actual en navegador. Son intencionalmente pequenos y no dependen de React.

## `updateDocumentTitle(title, documentRef)`

### Que hace

Asigna `document.title`.

### Cuando usarlo

- En SPAs que actualizan metadata al navegar.
- Cuando el title viene de un registro local de rutas.

### Cuando NO usarlo

- En SSR/SSG donde el title ya se genera en HTML inicial.
- Si usas un framework que gestiona metadata por ruta.

### Parametros

- `title: string`
- `documentRef?: Document`

### Valor de retorno

`void`

## `upsertMeta(selector, attributes, documentRef)`

### Que hace

Busca un `<meta>` por selector. Si existe, actualiza atributos; si no existe, crea uno y lo agrega al `head`.

### Cuando usarlo

- Para `description`, Open Graph, Twitter Cards o robots en SPAs.
- Para reemplazar helpers locales repetidos de metadata client-side.

### Cuando NO usarlo

- Para metadata especifica del proyecto dentro de foundation.
- Para transformar HTML estatico; usa `applyHtmlMetadata`.

### Parametros

- `selector: string`
- `attributes: { content: string; name?: string; property?: string }`
- `documentRef?: Document`

### Valor de retorno

`HTMLMetaElement`

### Ejemplo

```ts
upsertMeta('meta[name="description"]', {
  name: 'description',
  content: route.description,
});
```

## `upsertCanonical(href, documentRef)`

### Que hace

Crea o actualiza `<link rel="canonical">`.

### Parametros

- `href: string`
- `documentRef?: Document`

### Valor de retorno

`HTMLLinkElement`

## `upsertAlternate(hreflang, href, documentRef)`

### Que hace

Crea o actualiza `<link rel="alternate" hreflang="...">`.

### Parametros

- `hreflang: string`
- `href: string`
- `documentRef?: Document`

### Valor de retorno

`HTMLLinkElement`

### Ejemplo real

```ts
updateDocumentTitle(route.title);
upsertCanonical(canonical);
upsertAlternate('es', spanishUrl);
upsertAlternate('en', englishUrl);
```

## Proyectos con metadata DOM client-side

- TeInvitaASu.Party.
- Micazoyolli.
- OhMamaMXX.
- Estilo Natura.
