import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import { useData } from 'vitepress';
import './custom.css';

const FoundationFooter = () => {
  const { lang } = useData();
  const year = new Date().getFullYear();
  const isEnglish = lang.value.startsWith('en');
  const copy = isEnglish ? 'A creation by' : 'Una creacion de';

  return h('footer', { class: 'foundation-footer' }, [
    h('p', [
      `© ${year} · ${copy} `,
      h('a', { href: 'https://nadia.dev', target: '_blank', rel: 'noreferrer' }, '<micazoyolli />'),
    ]),
  ]);
};

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(FoundationFooter),
    });
  },
};
