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
