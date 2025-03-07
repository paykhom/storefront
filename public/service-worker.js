// src/service-worker.js

const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/public/styles.css',
    '/app.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
     // Check if the request is for an internal resource or api
    const isInternalResource = urlsToCache.some(url => event.request.url.endsWith(url));
      const isApiCall = event.request.url.startsWith('https://jsonplaceholder.typicode.com');

  if (!isInternalResource && !isApiCall) {
    // If not, let the browser handle it normally
    return fetch(event.request);
   }

    event.respondWith(
        caches.match(event.request) // Check the cache first
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse; // Serve from cache
                }

                // Check if it is an api endpoint.
                 if (isApiCall) {
                   return fetch(event.request)
                      .then(networkResponse => {
                         const networkResponseClone = networkResponse.clone();
                           caches.open(CACHE_NAME)
                           .then(cache => {
                               cache.put(event.request, networkResponseClone);
                          });
                          return networkResponse;
                     });

                }
                return fetch(event.request) // If not in cache, fetch from network
                    .then(networkResponse => {
                        // Optionally, cache the fetched response for future use
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, networkResponse.clone());
                            });
                        return networkResponse;
                    });
            })
    );
});