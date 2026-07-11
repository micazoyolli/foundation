# Changelog

Este changelog resume cambios relevantes del paquete. Para cambios detallados, revisar los commits del repositorio.

## 0.3.0

- Agrega helpers DOM para metadata client-side:
  - `updateDocumentTitle`;
  - `upsertMeta`;
  - `upsertCanonical`;
  - `upsertAlternate`.
- Agrega primitivas DOM de accesibilidad:
  - `getFocusableElements`;
  - `lockBodyScroll`;
  - `unlockBodyScroll`;
  - `restoreFocus`;
  - `trapTabKey`;
  - `createEscapeKeyHandler`.
- Agrega tests con `node:test`.
- Mantiene el paquete sin React y sin datos de marca.

## 0.2.0

- Agrega helpers SEO/build puros:
  - escaping HTML/XML;
  - normalizacion de canonical;
  - generacion de sitemap XML;
  - reemplazo de metadata en HTML;
  - output path para HTML estatico por ruta.
- Ajusta la salida TypeScript para consumo desde scripts Node ESM.
- Mantiene el paquete sin React y sin datos de marca.

## 0.1.2

- Publicacion npm publica.
- Ajustes de licencia y metadatos del paquete.

## 0.1.0

- Primera version de fundamentos no visuales.
- Tokens SCSS base.
- Breakpoints y mixins responsive.
- `cx`.
- Guards TypeScript pequenos.
- Utilidades basicas de DOM, teclado y media protegida.

## Politica de cambios

- Nuevos helpers compatibles: version minor.
- Correcciones internas o documentacion: version patch.
- Cambios incompatibles en API: version major.
