# TypeScript utilities

The TypeScript utilities are small, framework-free and global-state-free.

Main exports:

- `cx`: simple class composition.
- `isNonEmptyString`: guard for strings with content.
- DOM/a11y: focus, keyboard, protected media and targets.
- SEO/build: escaping, canonical URLs, sitemap, metadata and static HTML.

```ts
import { cx, isNonEmptyString } from '@micazoyolli/foundation';

const className = cx('field', hasError && 'fieldError');
const label = isNonEmptyString(value) ? value.trim() : 'Untitled';
```

Related export:
[src/index.ts](https://github.com/micazoyolli/foundation/blob/main/src/index.ts)
