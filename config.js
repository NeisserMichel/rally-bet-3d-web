// Configuración de la página de TotalBetGames (antes Rally Bet 3D).
// La clave "publishable" es pública por diseño (ya va dentro del juego); la seguridad real
// está en la base de datos: solo los administradores pueden cargar monedas.
window.RALLY = {
  supabaseUrl: "https://xswvzzrxvfmleltmyhnk.supabase.co",
  supabaseKey: "sb_publishable_9q0LPhg82vM-o_HBrm8qNA_SrLhPnOa",

  whatsappNumber: "51917486188",
  whatsappDisplay: "+51 917 486 188",

  // El APK está en la raíz de esta misma página (se reemplaza en cada versión nueva)
  apkUrl: "TotalBetGames.apk",
  apkVersion: "2.4.1",
  apkVersionCode: 24,   // el mismo número que version.json y AppVersion.Code del juego

  solesPerCoin: 0.10,
  amounts: [3, 5, 10, 20],

  // Responsable del tratamiento de datos (Ley 29733). Completar con datos reales.
  responsable: "Neisser Michel Calla Delgado (RUC 10759639524)",
  contactoEmail: ""
};
