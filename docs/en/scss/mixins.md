# SCSS: Mixins

Foundation exposes small responsive and motion mixins. They do not include visual styles.

## `down($breakpoint)`

Generates `@media (max-width: $breakpoint)`.

## `up($breakpoint)`

Generates `@media (min-width: $breakpoint)`.

## `between($min-breakpoint, $max-breakpoint)`

Generates a media query between two widths.

## `reduced-motion`

Wraps styles in `@media (prefers-reduced-motion: reduce)`.

```scss
@include foundation.between(foundation.$breakpoint-md, foundation.$breakpoint-lg) {
  grid-template-columns: repeat(2, 1fr);
}
```
