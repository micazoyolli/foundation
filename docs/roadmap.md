# Roadmap

El roadmap prioriza consolidar `foundation` como una base estable y no visual. No busca convertirlo en una libreria UI.

## Principios

- Solo agregar helpers repetidos en varios proyectos.
- Mantenerlo sin React.
- Mantenerlo sin tokens de marca.
- Evitar dependencias runtime.
- Documentar antes de escalar adopcion.

## Corto plazo

1. Mantener la documentacion navegable alineada con la API publica.
2. Agregar ejemplos pequenos de consumo por entorno cuando aparezcan casos reales.
3. Identificar si `cx` necesita aceptar arrays u objetos antes de cambiarlo; por ahora no.
4. Evaluar si las primitivas de focus necesitan ejemplos adicionales por framework.

## Mediano plazo

1. Evaluar helpers adicionales solo si se repiten en tres o mas repos.
2. Documentar patrones recomendados para scripts postbuild.
3. Crear una checklist de adopcion por proyecto.
4. Evaluar export granular si el paquete crece.

## Fuera de alcance por ahora

- Componentes React.
- Design tokens de marca.
- Botones, cards, layouts o grids visuales.
- SEO metadata especifica de proyectos.
- Storybook.
- Smoke harness compartido.
- Binder de proteccion de media.
- Dependencias UI pesadas.

## Criterio para aceptar nuevos helpers

Un helper nuevo debe cumplir al menos cuatro puntos:

- se repite en varios proyectos;
- no depende de marca;
- no cambia resultado visual por si mismo;
- tiene una API facil de documentar;
- reduce codigo local;
- no agrega dependencia runtime;
- puede validarse con build o tests pequenos.
