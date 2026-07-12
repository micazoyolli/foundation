# SCSS: Motion

Motion tokens define durations, easings and a `prefers-reduced-motion` mixin.

| Token | Value |
| --- | --- |
| `$duration-instant` | `75ms` |
| `$duration-fast` | `150ms` |
| `$duration-base` | `250ms` |
| `$duration-slow` | `400ms` |
| `$ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `$ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` |
| `$ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` |

```scss
.card {
  transition: transform foundation.$duration-base foundation.$ease-standard;

  @include foundation.reduced-motion {
    transition: none;
  }
}
```

Use this for decorative movement. Do not remove essential state feedback without an alternative.

## Visual result

<div class="visual-card">
  <p>Hover the block. If your system requests reduced motion, the movement is removed.</p>
  <div class="motion-demo"></div>
</div>

## Considerations

Respect `prefers-reduced-motion`. Do not remove essential feedback without a visible alternative.
