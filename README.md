# TotalBetGames — página web

Página pública del juego (GitHub Pages):

- `index.html`: descarga del APK, cómo instalar, cómo recargar monedas (WhatsApp + Yape) y preguntas.
- `privacidad.html`: política de privacidad y condiciones de recarga.
- `admin/`: panel del administrador (inicia sesión con la cuenta del juego; solo funciona si esa cuenta está en la tabla `admins`).
- `config.js`: número de WhatsApp, enlace del APK, montos y datos del responsable.

La seguridad no depende de esta página: la base de datos (Supabase) solo deja cargar monedas a los administradores.
1 moneda = S/ 0,10. Las monedas no se cambian por dinero.
