# GitHub Pages deploy

`micazoyolli-gh-pages-deploy` publica el directorio `dist` de un proyecto consumidor en `origin/gh-pages` sin crear commits en `main`.

Este comando pertenece a la capa de tooling de build/deploy de Foundation. No se exporta desde `src/index.ts` porque no es código runtime para navegador ni una utilidad que deba importarse en una aplicación.

## Qué hace

1. Valida que el directorio actual pertenece a un repositorio Git.
2. Confirma que la rama actual es `main`.
3. Confirma que el working tree está limpio.
4. Confirma que `main` está sincronizada con `origin/main`.
5. Verifica que `dist` existe y no está vacío.
6. Verifica que `dist` no esté trackeado por Git.
7. Reutiliza `origin/gh-pages` si existe o prepara un primer deploy si todavía no existe.
8. Reemplaza el contenido del worktree con `dist`.
9. Crea el commit solo dentro del worktree temporal.
10. Publica el commit en `origin/gh-pages`.
11. Limpia el worktree temporal aunque ocurra un error.

## Prerrequisitos

- Git disponible en la terminal.
- Rama fuente `main`.
- Remoto `origin`.
- Build generado en `dist`.
- `dist/` ignorado en `.gitignore` y no trackeado por Git.
- Working tree limpio.
- `main` sincronizada con `origin/main`.

Si `dist/` ya fue commiteado en la rama fuente, retíralo del índice antes de usar el CLI:

```bash
git rm -r --cached dist
```

El CLI no ejecuta este comando automáticamente porque no modifica `main`.

## Uso en un consumidor

```json
{
  "scripts": {
    "deploy": "yarn build && find dist -name .DS_Store -delete && yarn deploy:dist",
    "deploy:dist": "micazoyolli-gh-pages-deploy"
  }
}
```

El comando resuelve el repositorio consumidor desde `process.cwd()`. Por defecto usa:

- rama fuente: `main`;
- remoto: `origin`;
- rama de deploy: `gh-pages`;
- directorio de build: `dist`.

`origin/gh-pages` no necesita existir para el primer deploy. Si no existe, el comando crea la rama durante el push normal.

## Fallos

El comando falla antes de modificar el deploy si el repositorio no cumple los prerrequisitos. Los errores son intencionalmente accionables para evitar publicar desde una rama equivocada, con cambios locales o con un build incompleto.

Si el contenido generado es idéntico al contenido ya publicado, no crea commit y termina correctamente.

En GitHub Actions, usa este CLI solo si el checkout deja una rama local `main` limpia y sincronizada. Para deploys completamente automatizados en CI, el flujo oficial de GitHub Pages con artifacts puede ser más apropiado.

## Por qué no es runtime

Este CLI usa Node, Git y el filesystem. No debe importarse desde aplicaciones ni exponerse como parte de la API runtime de Foundation. La API runtime sigue viviendo en `@micazoyolli/foundation`; el comando se consume como binario de paquete.
