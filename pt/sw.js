self.addEventListener('install',event=>{event.waitUntil(self.skipWaiting())});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('ab7-original-app-')).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',()=>{});
