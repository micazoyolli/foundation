# TypeScript: SEO y build

Estos helpers son puros y no conocen rutas, dominios, marcas ni metadata específica. Cada proyecto conserva sus propios registros SEO.

## `escapeHtml(value)`

### Qué hace

Escapa `&`, `<`, `>` y `"` para usar valores dentro de HTML.

### Cuándo usarlo

Antes de insertar títulos, descripciones o nombres en tags HTML generados por scripts.

### Cuándo no usarlo

- Si el valor ya fue escapado.
- Para sanitizar HTML arbitrario de usuarios. No es un sanitizador.

### Parametros

- `value: unknown`

### Valor de retorno

`string`

## `escapeXml(value)`

### Qué hace

Aplica `escapeHtml` y además escapa `'` como `&apos;`.

### Cuándo usarlo

Para `sitemap.xml` o XML generado en build.

### Cuándo no usarlo

Para contenido HTML normal si no necesitas escapar apostrofes.

## `normalizeBaseUrl(baseUrl)`

Elimina slashes finales de un dominio/base URL.

## `normalizeRoutePath(routePath)`

Normaliza rutas a formato `/ruta` sin slash final, excepto `/`.

## `isAbsoluteUrl(value)`

Detecta URLs `http` o `https`.

## `getCanonicalUrl(baseUrl, routePath, options)`

### Qué hace

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

### Qué hace

Devuelve `value` si ya es absoluta; si es relativa, genera una URL canonical con `baseUrl`.

### Cuándo usarlo

Para imágenes OG que pueden venir como `/meta.jpg` o como URL absoluta.

## `buildSitemapXml(entries, options)`

### Qué hace

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

### Resultado visual

<div class="visual-card sitemap-demo">
  &lt;url&gt;<br />
  &nbsp;&nbsp;&lt;loc&gt;https://foundation.nadia.dev/&lt;/loc&gt;<br />
  &lt;/url&gt;
</div>

## `applyHtmlMetadata(html, metadata, alternates)`

### Qué hace

Reemplaza o inserta tags SEOcomúnes en un HTML ya generado.

### Cuándo usarlo

- En SPAs que generan HTML estático por ruta.
- En scripts postbuild.
- Para compartir la mecánica de reemplazo sin mover metadata de marca a foundation.

### Cuándo no usarlo

- Para SSR completo.
- Para metadata que depende de ejecución en servidor por request.
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

### Resultado visual

<div class="metadata-preview">
  <div class="metadata-preview-image">@micazoyolli/foundation</div>
  <div class="metadata-preview-body">
    <strong>Foundation documentation</strong>
    <p>Canonical, Open Graph y Twitter metadata siguen viviendo en cada proyecto.</p>
  </div>
</div>

## `upsertMetaTag(html, selector, tag)` y `upsertLinkTag(html, selector, tag)`

### Qué hacen

Reemplazan un tag existente por selector textual simple o insertan el tag antes de `</head>`.

### Cuándo usarlos

Para casos específicos que `applyHtmlMetadata` no cubre, como un `apple-touch-icon` local.

### Cuándo no usarlos

Para parsear HTML complejo o transformar documentos arbitrarios. Si el caso crece, usa un parser.

## `removeAlternateLinks(html)` y `getAlternateLinkTags(alternates)`

Helpers para regenerar `hreflang` sin duplicados.

## `getStaticRouteOutputPath(routePath)`

### Qué hace

Convierte una ruta pública a archivo HTML estático.

### Ejemplo

```ts
getStaticRouteOutputPath('/categoria/boda');
// "categoria/boda/index.html"
```

## Uso en producción

Foundation se utiliza como base compartida para generar metadata, canonical y sitemaps en sitios de producción, aplicaciones de negocio y experiencias interactivas. Puedes conocer más del ecosistema en [nadia.dev](https://nadia.dev).

## Metadata DOM client-side

Estos helpers actualizan el documento actual en navegador. Son intencionalmente pequeños y no dependen de React.

## `updateDocumentTitle(title, documentRef)`

### Qué hace

Asigna `document.title`.

### Cuándo usarlo

- En SPAs que actualizan metadata al navegar.
- Cuando el title viene de un registro local de rutas.

### Cuándo no usarlo

- En SSR/SSG donde el title ya se genera en HTML inicial.
- Si usas un framework que gestiona metadata por ruta.

### Parametros

- `title: string`
- `documentRef?: Document`

### Valor de retorno

`void`

## `upsertMeta(selector, attributes, documentRef)`

### Qué hace

Busca un `<meta>` por selector. Si existe, actualiza atributos; si no existe, crea uno y lo agrega al `head`.

### Cuándo usarlo

- Para `description`, Open Graph, Twitter Cards o robots en SPAs.
- Para reemplazar helpers locales repetidos de metadata client-side.

### Cuándo no usarlo

- Para metadata específica del proyecto dentro de foundation.
- Para transformar HTML estático; usa `applyHtmlMetadata`.

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

### Qué hace

Crea o actualiza `<link rel="canonical">`.

### Parametros

- `href: string`
- `documentRef?: Document`

### Valor de retorno

`HTMLLinkElement`

## `upsertAlternate(hreflang, href, documentRef)`

### Qué hace

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

## Uso en producción

Estos helpers se usan como capa compartida para metadata client-side en proyectos donde el contenido específico vive localmente.
