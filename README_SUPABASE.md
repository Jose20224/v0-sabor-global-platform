# Integración de Supabase

La URL y la clave publicable se configuran mediante `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Copia `.env.example` a `.env.local` y completa ambos valores si no están configurados. Nunca uses una clave secreta o service_role en variables públicas.

El esquema remoto tiene una migración llamada `sabor_global_private_user_data` que crea `sg_profiles`, `sg_favorites` y `sg_planner`, con RLS por usuario. Los datos del invitado permanecen en el navegador, separados de los de las cuentas; no se transfieren automáticamente al iniciar sesión.

En Supabase Auth, configura la URL del sitio y permite las URLs de redirección de cada entorno, incluyendo `/profile` para confirmación y `/update-password` para recuperación. En desarrollo normalmente serán `http://localhost:3000/profile` y `http://localhost:3000/update-password`. Antes de producción configura un proveedor SMTP y el dominio público. Comprueba registro, confirmación, inicio y recuperación usando una dirección de correo real.

El catálogo actual sigue siendo de demostración. La publicación de recetas por usuarios, gestión de imágenes y moderación todavía no están implementadas.

## Catálogo de recetas

El catálogo utiliza TheMealDB. En desarrollo usa la clave de prueba pública 1; para una instalación de producción se debe configurar MEALDB_API_KEY con una clave propia autorizada por el proveedor. Sin ella el catálogo mostrará un mensaje de servicio no configurado. Los datos se muestran en su idioma original y se mantienen separados de la comunidad. Las recetas de demostración anteriores se conservan para no romper favoritos ni planes existentes.

## Spoonacular

Configura `SPOONACULAR_API_KEY` en `.env.local` para desarrollo y como variable privada de servidor en producción; nunca la publiques ni uses el prefijo NEXT_PUBLIC. El catálogo consulta Spoonacular desde el servidor, almacena las respuestas temporalmente y puede alcanzar la cuota del plan. El contenido está principalmente en inglés. Los favoritos de TheMealDB se conservan y requieren su configuración anterior para mostrarse. Las etiquetas y nutrientes son orientativos y no sustituyen la revisión de ingredientes y alérgenos.

## Catálogo de recetas

El catálogo utiliza TheMealDB. En desarrollo usa la clave de prueba pública 1; para una instalación de producción se debe configurar MEALDB_API_KEY con una clave propia autorizada por el proveedor. Sin ella el catálogo mostrará un mensaje de servicio no configurado. Los datos se muestran en su idioma original y se mantienen separados de la comunidad. Las recetas de demostración anteriores se conservan para no romper favoritos ni planes existentes.

## Spoonacular

Configura `SPOONACULAR_API_KEY` en `.env.local` para desarrollo y como variable privada de servidor en producción; nunca la publiques ni uses el prefijo NEXT_PUBLIC. El catálogo consulta Spoonacular desde el servidor, almacena las respuestas temporalmente y puede alcanzar la cuota del plan. El contenido está principalmente en inglés. Los favoritos de TheMealDB se conservan y requieren su configuración anterior para mostrarse. Las etiquetas y nutrientes son orientativos y no sustituyen la revisión de ingredientes y alérgenos.
