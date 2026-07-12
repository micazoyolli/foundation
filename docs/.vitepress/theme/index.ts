import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import { useData } from 'vitepress';
import './custom.css';

let escapeHandlerReady = false;

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
  enhanceApp(...args) {
    DefaultTheme.enhanceApp?.(...args);

    if (typeof window === 'undefined' || escapeHandlerReady) return;
    escapeHandlerReady = true;

    window.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;

      const hamburger = document.querySelector<HTMLButtonElement>('.VPNavBarHamburger.active');

      if (hamburger) {
        hamburger.click();
        hamburger.focus();
      }
    });
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(FoundationFooter),
    });
  },
};
