const ASSETS = [
  './images/nointernet.png',
  '/style.css',
  '/index.html',
  '/offline.html',
  '/',
]

let cache_name = 'ISLEC' // The string used to identify our cache

self.addEventListener('install', (event) => {
  console.log('installing...')
  event.waitUntil(
    caches
      .open(cache_name)
      .then((cache) => {
        return cache.addAll(assets)
      })
      .catch((err) => console.log(err)),
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.url === 'https://www.islec.edu.in/') {
    // or whatever your app's URL is
    event.respondWith(
      fetch(event.request).catch((err) =>
        self.cache
          .open(cache_name)
          .then((cache) => cache.match('/offline.html')),
      ),
    )
  } else {
    event.respondWith(
      fetch(event.request).catch((err) =>
        caches.match(event.request).then((response) => response),
      ),
    )
  }
})
