import { readFileSync } from 'node:fs';
import { defineConfig } from 'vitepress';

const repo = 'https://github.com/micazoyolli/foundation';
const npm = 'https://www.npmjs.com/package/@micazoyolli/foundation';
const nadia = 'https://nadia.dev';
const packageJson = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf-8'),
) as { version: string };

const esNav = [
  { text: 'Inicio', link: '/' },
  { text: 'Empezar', link: '/getting-started/' },
  { text: 'Fundamentos', link: '/foundations/why-foundation' },
  { text: 'Utilidades', link: '/utilities/typescript' },
  { text: 'Patrones', link: '/patterns/dos-and-donts' },
  { text: 'Ejemplos', link: '/examples/frameworks' },
];

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Getting Started', link: '/en/getting-started/' },
  { text: 'Foundations', link: '/en/foundations/why-foundation' },
  { text: 'Utilities', link: '/en/utilities/typescript' },
  { text: 'Patterns', link: '/en/patterns/dos-and-donts' },
  { text: 'Examples', link: '/en/examples/frameworks' },
];

const esSidebar = [
  {
    text: 'Empezar',
    collapsed: false,
    items: [
      { text: 'Vista general', link: '/getting-started/' },
      { text: 'Instalación', link: '/installation' },
      { text: 'Iniciar un proyecto nuevo', link: '/getting-started/start-a-new-project' },
      { text: 'Versionado', link: '/foundations/versioning' },
    ],
  },
  {
    text: 'Fundamentos',
    collapsed: false,
    items: [
      { text: 'Por que Foundation', link: '/foundations/why-foundation' },
      { text: 'Filosofía', link: '/foundations/philosophy' },
      { text: 'Arquitectura', link: '/foundations/architecture' },
      { text: 'Compatibilidad', link: '/foundations/compatibility' },
      { text: 'Naming', link: '/foundations/naming' },
      { text: 'Usado en producción', link: '/foundations/used-in-production' },
    ],
  },
  {
    text: 'SCSS',
    collapsed: false,
    items: [
      { text: 'Breakpoints', link: '/scss/breakpoints' },
      { text: 'Spacing y radius', link: '/scss/spacing' },
      { text: 'Z-index', link: '/scss/z-index' },
      { text: 'Motion', link: '/scss/motion' },
      { text: 'Mixins', link: '/scss/mixins' },
    ],
  },
  {
    text: 'TypeScript',
    collapsed: false,
    items: [
      { text: 'Utilities', link: '/utilities/typescript' },
      { text: 'DOM', link: '/typescript/dom' },
      { text: 'Accesibilidad', link: '/typescript/accessibility' },
      { text: 'SEO & Build', link: '/typescript/seo' },
      { text: 'Utils', link: '/typescript/utils' },
    ],
  },
  {
    text: 'Patterns',
    collapsed: false,
    items: [
      { text: 'Correcto / Incorrecto', link: '/patterns/dos-and-donts' },
      { text: 'SEO build', link: '/patterns/seo-build' },
      { text: 'Overlays accesibles', link: '/patterns/accessible-overlays' },
      { text: 'Atomic UI — Future', link: '/patterns/atomic-ui' },
    ],
  },
  {
    text: 'Ejemplos',
    collapsed: false,
    items: [
      { text: 'Frameworks', link: '/examples/frameworks' },
    ],
  },
  {
    text: 'Proyecto',
    collapsed: false,
    items: [
      { text: 'Changelog', link: '/changelog' },
      { text: 'Roadmap', link: '/roadmap' },
    ],
  },
];

const enSidebar = [
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/getting-started/' },
      { text: 'Installation', link: '/en/installation' },
      { text: 'Start a New Project', link: '/en/getting-started/start-a-new-project' },
      { text: 'Versioning', link: '/en/foundations/versioning' },
    ],
  },
  {
    text: 'Foundations',
    collapsed: false,
    items: [
      { text: 'Why Foundation', link: '/en/foundations/why-foundation' },
      { text: 'Philosophy', link: '/en/foundations/philosophy' },
      { text: 'Architecture', link: '/en/foundations/architecture' },
      { text: 'Compatibility', link: '/en/foundations/compatibility' },
      { text: 'Naming', link: '/en/foundations/naming' },
      { text: 'Used in Production', link: '/en/foundations/used-in-production' },
    ],
  },
  {
    text: 'SCSS',
    collapsed: false,
    items: [
      { text: 'Breakpoints', link: '/en/scss/breakpoints' },
      { text: 'Spacing and radius', link: '/en/scss/spacing' },
      { text: 'Z-index', link: '/en/scss/z-index' },
      { text: 'Motion', link: '/en/scss/motion' },
      { text: 'Mixins', link: '/en/scss/mixins' },
    ],
  },
  {
    text: 'TypeScript',
    collapsed: false,
    items: [
      { text: 'Utilities', link: '/en/utilities/typescript' },
      { text: 'DOM', link: '/en/typescript/dom' },
      { text: 'Accessibility', link: '/en/typescript/accessibility' },
      { text: 'SEO & Build', link: '/en/typescript/seo' },
      { text: 'Utils', link: '/en/typescript/utils' },
    ],
  },
  {
    text: 'Patterns',
    collapsed: false,
    items: [
      { text: 'Do / Do not', link: '/en/patterns/dos-and-donts' },
      { text: 'SEO build', link: '/en/patterns/seo-build' },
      { text: 'Accessible overlays', link: '/en/patterns/accessible-overlays' },
      { text: 'Atomic UI — Future', link: '/en/patterns/atomic-ui' },
    ],
  },
  {
    text: 'Examples',
    collapsed: false,
    items: [
      { text: 'Frameworks', link: '/en/examples/frameworks' },
    ],
  },
  {
    text: 'Project',
    collapsed: false,
    items: [
      { text: 'Changelog', link: '/en/changelog' },
      { text: 'Roadmap', link: '/en/roadmap' },
    ],
  },
];

export default defineConfig({
  base: '/',
  cleanUrls: true,
  description: 'Fundamentos frontend no visuales para el ecosistema técnico de Nad.',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barriecito&family=La+Belle+Aurore&family=Titillium+Web:wght@400;600;700&display=swap' }],
    ['meta', { name: 'theme-color', content: '#1e214a' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '@micazoyolli/foundation' }],
    ['meta', { property: 'og:description', content: 'The technical foundation behind Nad frontend ecosystem.' }],
  ],
  lang: 'es-MX',
  lastUpdated: true,
  title: '@micazoyolli/foundation',
  locales: {
    root: {
      label: 'Español',
      lang: 'es-MX',
      title: '@micazoyolli/foundation',
      description: 'Fundamentos frontend no visuales para el ecosistema técnico de Nad.',
      themeConfig: {
        nav: esNav,
        sidebar: esSidebar,
        editLink: {
          pattern: `${repo}/edit/main/docs/:path`,
          text: 'Editar esta página',
        },
        lastUpdated: {
          text: 'Actualizado',
          formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'short',
          },
        },
        outline: {
          label: 'En esta página',
        },
        docFooter: {
          prev: 'Anterior',
          next: 'Siguiente',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: '@micazoyolli/foundation',
      description: 'Non-visual frontend foundations for Nad’s technical ecosystem.',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        editLink: {
          pattern: `${repo}/edit/main/docs/:path`,
          text: 'Edit this page',
        },
      },
    },
  },
  markdown: {
    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: repo },
      { icon: 'npm', link: npm },
      {
        icon: {
          svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.08a15.5 15.5 0 0 0-1.2-5.02A8.02 8.02 0 0 1 18.93 11ZM12 4.04c.83 1.2 1.55 3.55 1.78 6.96h-3.56C10.45 7.59 11.17 5.24 12 4.04ZM4.26 13h3.89c.11 1.82.42 3.5.9 4.9A8.02 8.02 0 0 1 4.26 13Zm3.89-2H4.26a8.02 8.02 0 0 1 4.79-4.9A17.63 17.63 0 0 0 8.15 11ZM12 19.96c-.83-1.2-1.55-3.55-1.78-6.96h3.56c-.23 3.41-.95 5.76-1.78 6.96Zm2.65-2.06c.48-1.4.79-3.08.9-4.9h3.89a8.02 8.02 0 0 1-4.79 4.9Z"/></svg>',
        },
        link: nadia,
        ariaLabel: 'nadia.dev',
      },
    ],
  },
});
