# TypeScript: Utils

## `cx(...classes)`

Composes CSS classes while filtering falsy values.

```ts
import { cx } from '@micazoyolli/foundation';

const className = cx('menuItem', isActive && 'menuItemActive');
```

Do not use it when you need object syntax, Tailwind deduplication or complex class logic.

## `isNonEmptyString(value)`

Checks whether a value is a string with trimmed content.

```ts
import { isNonEmptyString } from '@micazoyolli/foundation';

const label = isNonEmptyString(value) ? value.trim() : 'Untitled';
```
