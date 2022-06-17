//detron de los "[]" tenemos que poner todas las rutas que tenga nuestra app
const CACHE_ELEMENTS = [
    "./",        //pagina de inicio
    "./styles.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
];

//nombre que le vamos a poner al cahe
const CACHE_NAME = "v3  _cache_contador_react";


    
self.addEventListener("install", (e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache=>{
            cache.addAll(CACHE_ELEMENTS).then((good)=>{
                self.skipWaiting();
                console.log(good)
            }).catch(console.log)
        })
    )
});  //install es el primer ciclo de vida de un service worker


self.addEventListener("activate", (e)=>{
    const cacheWhiteList= [CACHE_NAME]
    e.waitUntil(
       caches.keys().then(cacheNames=>{
        return Promise.all(cacheNames.map(cacheName =>{
            return cacheWhiteList.indexOf(cacheName)=== -1 && caches.delete(cacheName)
        }))
       }).then(()=> self.clients.claim())
    
    )
});  




self.addEventListener("fetch", (e)=>{
    e.respondWith(
        caches.match(e.request).then((res)=>(res ? res: fetch(e.request)))
    )
});  