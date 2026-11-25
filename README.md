# Coachella — Beyond the Music

Sitio web estático de rediseño conceptual con Lineup, itinerario, mapa interactivo, ediciones pasadas y páginas de Explora. Es un sitio no oficial; la programación mostrada está sujeta a confirmación.

## Ejecutar localmente

En la carpeta del proyecto, ejecuta `python3 -m http.server 8000` y abre `http://localhost:8000/`. No requiere compilación. Las tipografías externas requieren conexión a Internet.

## Publicación con GitHub Pages

En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`. El archivo `.nojekyll` permite servir todos los recursos estáticos sin procesamiento adicional.

El archivo `HANDOFF.md` documenta las secciones, recursos y decisiones de implementación.
