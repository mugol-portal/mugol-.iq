const CACHE_NAME = 'mugol-iq-v9';

// Yerel dosyalar (sw.js'e göre göreli) — hepsi kurulumda indirilir
const LOCAL_ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'logo.png', 'icon-192.png', 'icon-512.png',
  '2048.html', 'adam-asmaca.html', 'block-puzzle.html', 'cark.html',
  'enerji-toplari.html', 'fiil.html', 'hanoi-kuleleri.html',
  'kelime_puzzle.html', 'kizma-birader.html', 'masa-hokeyi.html',
  'mayin-tarlasi.html', 'nexus-flow.html', 'parca-birlestir.html',
  'satranc.html', 'sos.html', 'tugla-kirici.html', 'turk-damasi.html',
  'yapboz-oyunu.html',
  'kelime/kelimeler-kategorili.js',
  'level/levels.js', 'level/tekseviye.js',
  'sorular/kelimeler.js'
];

// Dış kaynaklar (yazı tipleri, ikonlar, PNG aracı) — en iyi çabayla önbelleğe alınır
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Source+Code+Pro:wght@400;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=Sarabun:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Sora:wght@500;700;800&family=Manrope:wght@500;700;800&display=swap'
];

// Reklam / takip istekleri önbelleğe alınmaz
const SKIP_HOSTS = ['pagead2.googlesyndication.com', 'googleads.g.doubleclick.net',
  'cdn.ampproject.org', 'picsum.photos', 'fastly.picsum.photos'];

// CSS içindeki url(...) dosyalarını (font vb.) da önbelleğe al
async function cacheExternal(cache, url) {
  try {
    const res = await fetch(url, { mode: 'cors' });
    if (!res.ok) return;
    await cache.put(url, res.clone());
    if (/\.css(\?|$)|fonts\.googleapis\.com/.test(url)) {
      const css = await res.text();
      const refs = [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)]
        .map(m => new URL(m[1], url).href)
        .filter(u => !u.startsWith('data:'));
      await Promise.all([...new Set(refs)].map(async u => {
        try {
          const r = await fetch(u, { mode: 'cors' });
          if (r.ok) await cache.put(u, r);
        } catch (e) { /* çevrimdışı: sonra denenir */ }
      }));
    }
  } catch (e) { /* çevrimdışı: sonra denenir */ }
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Yerel dosyalar: biri eksikse bile kurulum bozulmasın
    await Promise.all(LOCAL_ASSETS.map(async (p) => {
      try { await cache.add(new Request(p, { cache: 'reload' })); }
      catch (e) { console.warn('Önbelleğe alınamadı:', p); }
    }));
    await Promise.all(EXTERNAL_ASSETS.map(u => cacheExternal(cache, u)));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (!/^https?:$/.test(url.protocol)) return;
  if (SKIP_HOSTS.includes(url.hostname)) return;

  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // Önce ağ (güncel kalsın), olmazsa önbellek — eskisi gibi
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(async () => {
          const hit = await caches.match(req, { ignoreSearch: true });
          if (hit) return hit;
          if (req.mode === 'navigate') return caches.match('index.html');
          return Response.error();
        })
    );
    return;
  }

  // Dış kaynaklar (yazı tipi, ikon): önce önbellek, arkada güncelle
  event.respondWith(
    caches.match(req, { ignoreVary: true }).then((hit) => {
      const net = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit || Response.error());
      return hit || net;
    })
  );
});
