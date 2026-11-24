# Sabor Global — Rediseño visual (parte 1)

**Proyecto destino:** `Jose20224/v0-sabor-global-platform`  
**Referencias:** `Jose20224/cosas`, especialmente las plantillas `paginas_Sabor_global_Corregido` y `perfil_Corregido`.

## Instalación

1. Crea una rama de trabajo en tu copia de `v0-sabor-global-platform`.
2. Descomprime el ZIP. Copia las carpetas `app/`, `components/` y `lib/` sobre las carpetas correspondientes del repositorio, **sin eliminar los archivos que no estén en el ZIP**.
3. **Conserva la carpeta `public/`** porque las recetas reutilizan sus imágenes.
4. Desde la raíz del repositorio, ejecuta:

```bash
pnpm install
pnpm dev
pnpm build
```

5. Comprueba las rutas `/`, `/recipes`, `/recipes/paella-valenciana`, `/community`, `/profile`, `/my-recipes`, `/planner`, `/login`, `/register` y `/recover`.

## Implementado

- Identidad visual consistente: naranja `#f47b25`, fondos cálidos, tipografía Plus Jakarta Sans y tarjetas redondeadas.
- Cabecera adaptable y enlaces correctos de Next.js.
- Inicio editorial, exploración de recetas, detalle paso a paso y comunidad.
- **12 recetas de demostración** con imágenes ya existentes en `public/`.
- Búsqueda por texto o ingredientes y filtros por categoría, país, dificultad y tiempo máximo.
- Favoritos guardados en `localStorage`, accesibles en `/my-recipes`.
- Perfil visual editable con preferencias guardadas localmente.
- Planificador semanal sencillo con guardado local.
- Login, registro y recuperación visualmente consistentes, con avisos explícitos cuando falta autenticación.

## Pendiente para otra fase

- Autenticación real y recuperación mediante correo electrónico.
- Backend y base de datos para recetas, perfiles, publicaciones y comunidad.
- Subida de imágenes y gestión de recetas por usuarios; moderación.
- Sincronización entre dispositivos de favoritos, preferencias y planificación.
- Datos nutricionales verificados y manejo seguro de alérgenos.

**Seguridad alimentaria:** las restricciones del perfil NO aplican automáticamente un filtro de alergias. Revisa siempre los ingredientes y posibles alérgenos de cualquier receta; el catálogo es de demostración.

## Consideraciones técnicas

No se incrustaron las plantillas HTML originales: contienen enlaces `.html`, JavaScript del navegador y estilos independientes. Se adaptó su identidad visual a componentes React/Next.js para evitar inconsistencias entre pantallas.

Los archivos `.tsx` y `.ts` del paquete pasaron una revisión de sintaxis mediante el analizador de TypeScript. **No se pudo ejecutar `pnpm build` contra el repositorio completo con las dependencias instaladas.** El código no añade dependencias nuevas.

**No hay cambios publicados en GitHub:** la conexión permitió leer ambos repositorios, pero GitHub respondió 403 (`Resource not accessible by integration`) a los intentos de crear rama y blob. Este ZIP es una entrega para aplicar localmente.
