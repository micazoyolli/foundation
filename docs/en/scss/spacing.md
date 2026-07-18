# SCSS: Spacing and radius

The spacing scale names common separation values without binding them to a brand.

| Token | Value |
| --- | --- |
| `$space-0` | `0` |
| `$space-1` | `0.25rem` |
| `$space-2` | `0.5rem` |
| `$space-3` | `0.75rem` |
| `$space-4` | `1rem` |
| `$space-5` | `1.5rem` |
| `$space-6` | `2rem` |
| `$space-7` | `3rem` |
| `$space-8` | `4rem` |
| `$space-9` | `6rem` |
| `$space-10` | `8rem` |

```scss
.toolbar {
  display: flex;
  gap: foundation.$space-3;
  padding-block: foundation.$space-4;
}
```

Radius tokens:

| Token | Value |
| --- | --- |
| `$radius-none` | `0` |
| `$radius-xs` | `4px` |
| `$radius-sm` | `6px` |
| `$radius-md` | `8px` |
| `$radius-lg` | `12px` |
| `$radius-xl` | `16px` |
| `$radius-pill` | `999px` |

Use radius for neutral surfaces and controls. Do not use it when the silhouette is part of a brand identity.

## Spacing visual result

<div class="visual-card">
  <div class="space-demo"><span>$space-1</span><div class="space-box space-box--1"></div></div>
  <div class="space-demo"><span>$space-2</span><div class="space-box space-box--2"></div></div>
  <div class="space-demo"><span>$space-4</span><div class="space-box space-box--4"></div></div>
  <div class="space-demo"><span>$space-6</span><div class="space-box space-box--6"></div></div>
  <div class="space-demo"><span>$space-8</span><div class="space-box space-box--8"></div></div>
</div>

## Radius visual result

<div class="visual-grid">
  <div class="visual-card"><p><code>$radius-xs</code></p><div class="radius-sample radius-sample--xs"></div></div>
  <div class="visual-card"><p><code>$radius-md</code></p><div class="radius-sample radius-sample--md"></div></div>
  <div class="visual-card"><p><code>$radius-xl</code></p><div class="radius-sample radius-sample--xl"></div></div>
  <div class="visual-card"><p><code>$radius-pill</code></p><div class="radius-sample radius-sample--pill"></div></div>
</div>
