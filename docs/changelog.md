# Changelog

Este changelog resume cambios relevantes del paquete. Para cambios detallados, revisar los commits del repositorio.

## 0.3.1

- Refina la documentación navegable y README para npm.
- Mejora legibilidad de código, hero, footer y ejemplos integrados.
- No cambia exports ni comportamiento runtime.

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
  - normalización de canonical;
  - generación de sitemap XML;
  - reemplazo de metadata en HTML;
  - output path para HTML estático por ruta.
- Ajusta la salida TypeScript para consumo desde scripts Node ESM.
- Mantiene el paquete sin React y sin datos de marca.

## 0.1.2

- Publicación npm pública.
- Ajustes de licencia y metadatos del paquete.

## 0.1.0

- Primera versión de fundamentos no visuales.
- Tokens SCSS base.
- Breakpoints y mixins responsive.
- `cx`.
- Guards TypeScript pequeños.
- Utilidades básicas de DOM, teclado y media protegida.

## Política de cambios

- Nuevos helpers compatibles: versión minor.
- Correcciones internas o documentación: versión patch.
- Cambios incompatibles en API: versión major.
