# Integración de Supabase

La URL y la clave publicable se configuran mediante `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Copia `.env.example` a `.env.local` y completa ambos valores si no están configurados. Nunca uses una clave secreta o service_role en variables públicas.

El esquema remoto tiene una migración llamada `sabor_global_private_user_data` que crea `sg_profiles`, `sg_favorites` y `sg_planner`, con RLS por usuario. Los datos del invitado permanecen en el navegador, separados de los de las cuentas; no se transfieren automáticamente al iniciar sesión.

En Supabase Auth, configura la URL del sitio y permite las URLs de redirección de cada entorno, incluyendo `/profile` para confirmación y `/update-password` para recuperación. En desarrollo normalmente serán `http://localhost:3000/profile` y `http://localhost:3000/update-password`. Antes de producción configura un proveedor SMTP y el dominio público. Comprueba registro, confirmación, inicio y recuperación usando una dirección de correo real.

El catálogo actual sigue siendo de demostración. La publicación de recetas por usuarios, gestión de imágenes y moderación todavía no están implementadas.
