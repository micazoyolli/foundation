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

<div class="visual-card">
  <div class="z-scale-demo">
    <div class="z-scale-row"><span class="z-scale-chip">$z-base · 0</span><span class="z-scale-level"></span><span class="z-scale-note">base content</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-raised · 1</span><span class="z-scale-level"></span><span class="z-scale-note">raised content</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-header · 100</span><span class="z-scale-level"></span><span class="z-scale-note">header/sticky</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-overlay · 1000</span><span class="z-scale-level"></span><span class="z-scale-note">overlay</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-modal · 1100</span><span class="z-scale-level"></span><span class="z-scale-note">modal/drawer</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-toast · 1200</span><span class="z-scale-level"></span><span class="z-scale-note">toast</span></div>
  </div>
</div>

Do not use z-index tokens to hide stacking bugs without checking `position`, `transform` and `overflow`.
