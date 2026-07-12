# Why Foundation

Foundation solves a specific problem: several independent projects were repeating the same low-level mechanics with slightly different names, styles and decisions.

## What problem it solves

- Repeated breakpoints and SCSS scales.
- Small helpers like `cx` duplicated across repositories.
- Protected media handled inconsistently.
- Metadata, canonical URLs, sitemaps and static HTML solved multiple times.
- Focus, Escape and scroll lock primitives copied between modals, drawers and overlays.

## Why it exists

It was extracted after those patterns were validated in real projects. It did not start as an aspirational library; it became useful once the repetition was clear.

<div class="principle-grid">
  <div class="principle-card"><strong>SCSS base</strong><span>Spacing, radius, z-index, motion, breakpoints and mixins.</span></div>
  <div class="principle-card"><strong>TypeScript</strong><span><code>cx</code>, guards, DOM targets and keyboard helpers.</span></div>
  <div class="principle-card"><strong>Accessibility</strong><span>Focus, Escape, scroll lock, protected media and selectors.</span></div>
  <div class="principle-card"><strong>SEO & Build</strong><span>Canonical URLs, sitemaps, HTML metadata and escaping.</span></div>
</div>

## What it is not

Foundation is not a framework, not a visual Design System and not a component library. It does not know project domains, routes, specific metadata, logos, final colors or business rules.
