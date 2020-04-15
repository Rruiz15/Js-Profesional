import '@babel/polyfill'
self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event=>{
    const request = event.request
    //get
    if (request.method != 'GET') {
        return
    }
    //buscar en cache
    event.respondWith(cacheResponse(request))

    //actualizar cache
    
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open('v1')
    return cache.addAll([
        /* '/',
        './index.html',
        './assets/index.js',
        './assets/MediaPlayer.js',
        './assets/plugins/autoPause.js',
        './assets/plugins/autoPlay.js',
        './assets/index.css',
        './assets/BigBuckBunny.mp4', */
    ])
}

async function cacheResponse (request){
    const cache = await caches.open('v1')
    const response = await cache.match(request)
    return response || fetch(request)
}
async function updateCache (request){
    const cache = await caches.open('v1')
    const response = await fetch(request)
     return cache.put(request,response)

}