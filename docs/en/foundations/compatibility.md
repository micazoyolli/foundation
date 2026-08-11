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

The docs and ecosystem builds use Node `24.18.1`, with compatible range `>=24.18.1 <25`.

## Supported compatibility

- **Node:** the package requires Node `>=24.18.1 <25`. Ecosystem documentation scripts are validated with Node `24.18.1` and Yarn `1.22.22`.
- **Modules:** Foundation is published as ESM. Consumers should use ESM imports or a compatible bundler.
- **Browsers:** DOM helpers target modern browsers with standard DOM APIs.
- **SSR:** importing Foundation during SSR is safe. Helpers that mutate `document` should run only on the client or receive an explicit `documentRef`.
- **Frameworks:** Foundation does not depend on React, Vue, Angular, Astro or Next.js. Each framework decides where DOM/client-side helpers run.
