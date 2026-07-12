# Compatibility matrix

Compatibility depends on the helper type. Foundation does not require React.

<table class="compat-table">
  <thead><tr><th>Area</th><th>React</th><th>Next.js</th><th>Vue</th><th>Angular</th><th>Astro</th><th>Vite</th><th>Node</th></tr></thead>
  <tbody>
    <tr><td>SCSS tokens/mixins</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
    <tr><td><code>cx</code> and guards</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>DOM/a11y</td><td>Browser</td><td>Client only</td><td>Browser</td><td>Browser</td><td>Client only</td><td>Browser</td><td>No</td></tr>
    <tr><td>SEO/build HTML</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Client-side metadata</td><td>Browser</td><td>Client only</td><td>Browser</td><td>Browser</td><td>Client only</td><td>Browser</td><td>No</td></tr>
  </tbody>
</table>

Recommended Node version for docs and ecosystem builds: `24.x`.
