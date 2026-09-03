const CACHE_NAME = 'control-voley-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/index_menu.html',
  '/index_atletas.html',
  '/index_datos.html',
  '/index_ficha.html',
  '/index_cumple.html',
  '/index_estad.html',
  '/img/banner.png',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
];

// Instalación: Guardar todo en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Estrategia: Intentar red, si falla usar caché (Network First)
// Esto permite que si haces cambios en los archivos, se vean con internet,
// pero si no hay señal, la app abra lo guardado.
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
