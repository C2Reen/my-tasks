const PREFIX='mytasks-pwa-';const CACHE=PREFIX+'2026-10-25-1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const r=event.request;const u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(self.registration.scope))return;
if(r.mode==='navigate'){event.respondWith(fetch(r).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put('./index.html',copy)))}return response}).catch(()=>caches.open(CACHE).then(c=>c.match('./index.html'))));return;}
event.respondWith(caches.match(r).then(cached=>cached||fetch(r)));});