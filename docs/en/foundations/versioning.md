# Versioning and updates

Foundation uses semantic versioning.

- `patch`: documentation, tests or compatible internal fixes.
- `minor`: new backwards-compatible helpers.
- `major`: incompatible changes in names, parameters or behavior.

## How to adopt a new version

1. Read the [Changelog](../changelog).
2. Update one repository first.
3. Run install with the lockfile.
4. Run the consumer repository lint/build/smoke.
5. Review the generated diff.
6. Move to the next project only when the change adds real value.

```bash
yarn add @micazoyolli/foundation@^0.3.0
yarn install --frozen-lockfile
yarn build
yarn smoke
```

Do not update during a critical deploy window if you cannot validate the consumer project.
