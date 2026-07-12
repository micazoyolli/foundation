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

## Visual result

<div class="breakpoint-demo">
  <div class="breakpoint-track"></div>
  <div class="breakpoint-labels"><span>xs 320</span><span>sm 425</span><span>md 768</span><span>lg 1024</span><span>xl 1280</span></div>
</div>

The demo shows the relative scale. It does not mean every project must use every breakpoint.

## Compatibility

Sass in Vite, Next.js, Vue, Angular and Astro projects.
