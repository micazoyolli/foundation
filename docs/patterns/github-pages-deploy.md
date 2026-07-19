# GitHub Pages deploy

`micazoyolli-gh-pages-deploy` publica el directorio `dist` de un proyecto consumidor en `origin/gh-pages` sin crear commits en `main`.

Este comando pertenece a la capa de tooling de build/deploy de Foundation. No se exporta desde `src/index.ts` porque no es código runtime para navegador ni una utilidad que deba importarse en una aplicación.

## Qué hace

1. Valida que el directorio actual pertenece a un repositorio Git.
2. Confirma que la rama actual es `main`.
3. Confirma que el working tree está limpio.
4. Confirma que `main` está sincronizada con `origin/main`.
5. Verifica que `dist` existe y no está vacío.
6. Verifica que `origin/gh-pages` existe.
7. Crea un worktree temporal desde `origin/gh-pages`.
8. Reemplaza el contenido del worktree con `dist`.
9. Crea el commit solo dentro del worktree temporal.
10. Publica el commit en `origin/gh-pages`.
11. Limpia el worktree temporal aunque ocurra un error.

## Prerrequisitos

- Git disponible en la terminal.
- Rama fuente `main`.
- Remoto `origin`.
- Rama remota `origin/gh-pages` ya existente.
- Build generado en `dist`.
- Working tree limpio.
- `main` sincronizada con `origin/main`.

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

## Fallos

El comando falla antes de modificar el deploy si el repositorio no cumple los prerrequisitos. Los errores son intencionalmente accionables para evitar publicar desde una rama equivocada, con cambios locales o con un build incompleto.

Si el contenido generado es idéntico al contenido ya publicado, no crea commit y termina correctamente.

## Por qué no es runtime

Este CLI usa Node, Git y el filesystem. No debe importarse desde aplicaciones ni exponerse como parte de la API runtime de Foundation. La API runtime sigue viviendo en `@micazoyolli/foundation`; el comando se consume como binario de paquete.
