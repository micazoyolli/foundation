# SCSS: Z-index

The z-index scale avoids magic numbers for common layers.

| Token | Value | Expected use |
| --- | --- | --- |
| `$z-base` | `0` | Normal layer |
| `$z-raised` | `1` | Local raised elements |
| `$z-sticky` | `10` | Sticky elements |
| `$z-header` | `100` | Fixed navigation |
| `$z-overlay` | `1000` | Backdrops and overlays |
| `$z-modal` | `1100` | Modals and drawers |
| `$z-toast` | `1200` | Temporary messages |

<div class="visual-card z-demo">
  <div class="z-layer base">$z-base</div>
  <div class="z-layer overlay">$z-overlay</div>
  <div class="z-layer modal">$z-modal</div>
</div>

Do not use z-index tokens to hide stacking bugs without checking `position`, `transform` and `overflow`.
