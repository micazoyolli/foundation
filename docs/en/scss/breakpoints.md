# SCSS: Breakpoints

Breakpoints define a shared responsive scale without imposing visual layouts.

| Token | Value |
| --- | --- |
| `$breakpoint-xs` | `320px` |
| `$breakpoint-sm` | `425px` |
| `$breakpoint-md` | `768px` |
| `$breakpoint-lg` | `1024px` |
| `$breakpoint-xl` | `1280px` |

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.gallery {
  grid-template-columns: repeat(3, 1fr);

  @include foundation.down(foundation.$breakpoint-md) {
    grid-template-columns: 1fr;
  }
}
```

Use them for shared responsive decisions. Do not use them when a component should respond to its container instead.
