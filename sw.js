// Le compte est bus — permet d'ouvrir l'appli même sans réseau.
// Toujours la version en ligne d'abord ; la copie en cache sert seulement hors connexion.
const CACHE = 'compte-est-bus-v6';
const TIMEOUT_MS = 3500; // au-delà, on sert la copie locale (réseau faible dans le bus)
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './img/mascotte.png',
  './img/logo.jpg',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/apple-touch-icon.png',
  './img/favicon.png',
  './fonts/permanent-marker.woff2',
  './fonts/atkinson-400.woff2',
  './fonts/atkinson-700.woff2',
  './fonts/atkinson-mono-400.woff2',
  './fonts/atkinson-mono-600.woff2',
  './fonts/atkinson-mono-700.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !isFont) return;

  const cached = () => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined));
  const network = fetch(req).then(res => {
    const sameHost = (() => { try { return new URL(res.url).origin === self.location.origin; } catch (e) { return false; } })();
    const cacheable = res && res.ok && !res.redirected && (sameHost || isFont || res.type === 'opaque');
    if (cacheable) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  });
  const timeout = new Promise(resolve => setTimeout(() => resolve(null), TIMEOUT_MS));
  e.respondWith(
    Promise.race([network.catch(() => null), timeout])
      .then(res => (res && (res.ok || res.type === 'opaque')) ? res : cached().then(c => c || res || Response.error()))
  );
});
