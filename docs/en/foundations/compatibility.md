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

## Supported compatibility

- **Node:** the package declares support for Node `>=20`. Ecosystem documentation scripts are validated with Node `24.x`.
- **Modules:** Foundation is published as ESM. Consumers should use ESM imports or a compatible bundler.
- **Browsers:** DOM helpers target modern browsers with standard DOM APIs.
- **SSR:** importing Foundation during SSR is safe. Helpers that mutate `document` should run only on the client or receive an explicit `documentRef`.
- **Frameworks:** Foundation does not depend on React, Vue, Angular, Astro or Next.js. Each framework decides where DOM/client-side helpers run.
