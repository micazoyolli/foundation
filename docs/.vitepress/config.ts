import { defineConfig } from 'vitepress';

const repo = 'https://github.com/micazoyolli/foundation';

export default defineConfig({
  base: '/',
  title: '@micazoyolli/foundation',
  description: 'Fundamentos no visuales para el ecosistema Micazoyolli.',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    codeTransformers: [],
  },
  themeConfig: {
    logo: undefined,
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Foundations', link: '/foundations/philosophy' },
      { text: 'Utilities', link: '/utilities/typescript' },
      { text: 'Patterns', link: '/patterns/dos-and-donts' },
      { text: 'Examples', link: '/examples/visual-examples' },
      { text: 'Changelog', link: '/changelog' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/getting-started/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Start a new project', link: '/getting-started/start-a-new-project' },
          { text: 'Versioning updates', link: '/foundations/versioning' },
        ],
      },
      {
        text: 'Foundations',
        collapsed: false,
        items: [
          { text: 'Philosophy', link: '/foundations/philosophy' },
          { text: 'Architecture', link: '/foundations/architecture' },
          { text: 'Compatibility', link: '/foundations/compatibility' },
          { text: 'Naming conventions', link: '/foundations/naming' },
        ],
      },
      {
        text: 'SCSS',
        collapsed: false,
        items: [
          { text: 'Breakpoints', link: '/scss/breakpoints' },
          { text: 'Spacing and radius', link: '/scss/spacing' },
          { text: 'Motion', link: '/scss/motion' },
          { text: 'Mixins', link: '/scss/mixins' },
        ],
      },
      {
        text: 'Utilities',
        collapsed: false,
        items: [
          { text: 'TypeScript utilities', link: '/utilities/typescript' },
          { text: 'DOM and accessibility', link: '/typescript/dom' },
          { text: 'SEO and build', link: '/typescript/seo' },
          { text: 'Utils reference', link: '/typescript/utils' },
        ],
      },
      {
        text: 'Patterns',
        collapsed: false,
        items: [
          { text: 'Do and do not', link: '/patterns/dos-and-donts' },
          { text: 'SEO build pattern', link: '/patterns/seo-build' },
          { text: 'Accessible overlay pattern', link: '/patterns/accessible-overlays' },
          { text: 'Atomic UI future', link: '/patterns/atomic-ui' },
        ],
      },
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Visual examples', link: '/examples/visual-examples' },
          { text: 'Framework examples', link: '/examples/frameworks' },
        ],
      },
      {
        text: 'Project',
        collapsed: false,
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Roadmap', link: '/roadmap' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: repo },
    ],
    editLink: {
      pattern: `${repo}/edit/master/docs/:path`,
      text: 'Editar esta pagina',
    },
    footer: {
      message: 'Sin React, sin marca, sin componentes visuales.',
      copyright: 'MIT License.',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#6d5dfc' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '@micazoyolli/foundation' }],
    ['meta', { property: 'og:description', content: 'Fundamentos no visuales para el ecosistema Micazoyolli.' }],
  ],
});
