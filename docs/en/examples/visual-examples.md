# Visual examples

These examples show the expected result of using real Foundation APIs. They are not exported components.

## Spacing scale

<div class="visual-card">
  <div class="space-demo"><span>$space-1</span><div class="space-box" style="width: 0.25rem"></div></div>
  <div class="space-demo"><span>$space-2</span><div class="space-box" style="width: 0.5rem"></div></div>
  <div class="space-demo"><span>$space-4</span><div class="space-box" style="width: 1rem"></div></div>
  <div class="space-demo"><span>$space-6</span><div class="space-box" style="width: 2rem"></div></div>
  <div class="space-demo"><span>$space-8</span><div class="space-box" style="width: 4rem"></div></div>
</div>

## Radius

<div class="visual-grid">
  <div class="visual-card"><p><code>$radius-xs</code></p><div class="radius-sample" style="border-radius: 4px"></div></div>
  <div class="visual-card"><p><code>$radius-md</code></p><div class="radius-sample" style="border-radius: 8px"></div></div>
  <div class="visual-card"><p><code>$radius-xl</code></p><div class="radius-sample" style="border-radius: 16px"></div></div>
  <div class="visual-card"><p><code>$radius-pill</code></p><div class="radius-sample" style="border-radius: 999px"></div></div>
</div>

## Breakpoints

<div class="breakpoint-demo">
  <div class="breakpoint-track"></div>
  <div class="breakpoint-labels"><span>xs 320</span><span>sm 425</span><span>md 768</span><span>lg 1024</span><span>xl 1280</span></div>
</div>

## Z-index

<div class="visual-card z-demo">
  <div class="z-layer base">$z-base</div>
  <div class="z-layer overlay">$z-overlay</div>
  <div class="z-layer modal">$z-modal</div>
</div>

## Motion and reduced motion

<div class="visual-card">
  <p>Hover the block. If your system requests reduced motion, the movement is removed.</p>
  <div class="motion-demo"></div>
</div>

## Focus visible

<div class="visual-card">
  <a class="focus-demo" href="#focus-visible">Focus me with Tab</a>
</div>

## Protected media

<div class="visual-card protected-media-demo">
  <div class="protected-media-thumb" data-protected-media>IMG</div>
  <p>Protection applies to the marked element, not the whole page.</p>
</div>

## Metadata preview

<div class="metadata-preview">
  <div class="metadata-preview-image">@micazoyolli/foundation</div>
  <div class="metadata-preview-body"><strong>Foundation documentation</strong><p>Canonical, Open Graph and Twitter metadata stay in each project.</p></div>
</div>

## Focus management and scroll lock

<div class="visual-card overlay-demo">
  <div class="overlay-demo-panel"><strong>Overlay demo</strong><p>The pattern preserves focus, locks background scroll and supports Escape.</p><button class="focus-demo">Close</button></div>
</div>
