const C='madeira-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
if(r.method!='GET'||r.headers.has('range')||/\.m4a$/.test(u.pathname))return;
if(u.origin!=location.origin&&!/cdn\.jsdelivr\.net|wikimedia\.org/.test(u.host))return;
e.respondWith(caches.match(r).then(h=>h||fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));return res}).catch(()=>h)))});
