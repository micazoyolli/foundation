# Getting Started

`@micazoyolli/foundation` is the non-visual base of Nad’s frontend ecosystem. It shares small, stable and reusable foundations across independent repositories without introducing React components, brand styles or product decisions.

## Includes

- Base SCSS tokens: breakpoints, spacing, radius, z-index and motion.
- Small SCSS mixins for responsive behavior and reduced motion.
- TypeScript helpers for classes, DOM, keyboard, protected media and guards.
- SEO/build helpers for sitemaps, canonical URLs, static HTML and escaping.

## Use Foundation when

- the utility is repeated across projects;
- it does not depend on a brand, layout or specific component;
- it can be documented with clear rules;
- it reduces technical debt without hiding important behavior.

## Do not use Foundation for

- visual React components;
- final buttons, cards, layouts or brand grids;
- final color or typography tokens;
- project-specific metadata;
- business rules;
- one-off helpers.

## Quick install

```bash
yarn add @micazoyolli/foundation
```
