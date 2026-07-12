# Matriz de compatibilidad

La compatibilidad depende del tipo de helper. Foundation no requiere React.

<table class="compat-table">
  <thead>
    <tr>
      <th>Area</th>
      <th>React</th>
      <th>Next.js</th>
      <th>Vue</th>
      <th>Angular</th>
      <th>Astro</th>
      <th>Vite</th>
      <th>Node</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SCSS tokens/mixins</td>
      <td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>No</td>
    </tr>
    <tr>
      <td><code>cx</code> y guards</td>
      <td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td>
    </tr>
    <tr>
      <td>DOM/a11y</td>
      <td>Sí, en navegador</td><td>Solo client-side</td><td>Sí, en navegador</td><td>Sí, en navegador</td><td>Solo client-side</td><td>Sí</td><td>No</td>
    </tr>
    <tr>
      <td>SEO/build HTML</td>
      <td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td>
    </tr>
    <tr>
      <td>Metadata DOM client-side</td>
      <td>Sí</td><td>Solo client-side</td><td>Sí</td><td>Sí</td><td>Solo client-side</td><td>Sí</td><td>No</td>
    </tr>
  </tbody>
</table>

## Notas por entorno

- React/Vue/Angular: los helpers DOM deben ejecutarse después de montar el componente.
- Next.js/Astro: no uses helpers DOM durante SSR; úsalos en efectos/client scripts.
- Node: usa SEO/build, `cx` y guards; no uses helpers que acceden a `document`.
- Vite: compatible con TypeScript, SCSS y scripts postbuild.

## Versión de Node recomendada

Para docs y builds del ecosistema se recomienda Node `24.x`.

## Compatibilidad soportada

- **Node:** el paquete declara soporte para Node `>=20`. Los scripts de documentación del ecosistema se validan con Node `24.x`.
- **Módulos:** Foundation se publica como ESM. Los consumidores deben usar importación ESM o un bundler compatible.
- **Navegadores:** los helpers DOM están pensados para navegadores modernos con soporte de APIs DOM estándar.
- **SSR:** importar Foundation durante SSR es seguro. Los helpers que modifican `document` deben ejecutarse solo en cliente o recibir un `documentRef` explícito.
- **Frameworks:** Foundation no depende de React, Vue, Angular, Astro ni Next.js. Cada framework decide dónde ejecutar helpers DOM/client-side.
