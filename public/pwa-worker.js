class ApplicationServiceWorker {
    constructor() {
      this.cacheName = 'static-file-cache-v1';
      this.metadataCacheName = 'static-file-metadata-cache-v1';
      this.urlsToCache = [
        '/_assets/images/logo/paykhom.png', // at least one!
  
        // Add more paths to other static files here
      ];
  
      this.mimeTypesToCache = [
        'image/apng', 
        'image/avif', 
        'image/gif', 
        'image/jpeg', 
        'image/png', 
        'image/svg+xml', 
        'image/webp',
        'text/css',
        'application/javascript',
        'text/javascript',
        'font/otf',
        'font/ttf',
        'font/woff',
        'font/woff2',
        'application/x-javascript',
        'application/wasm',
        // NO! 'text/html',
        'application/json',
        'text/less',
        'text/x-scss',
        'text/x-sass',
        'application/xml',
        'text/xml'
      ];
    }
  
    initialize() {
      self.addEventListener('install', this.onInstall.bind(this));
      self.addEventListener('activate', this.onActivate.bind(this));
      self.addEventListener('fetch', this.onFetch.bind(this));
    }
  
    isCacheable(request, response) {
      const serviceWorkerFilename = self.registration.scope.split('/').pop();
  
      if (request.url === `${self.registration.scope}${serviceWorkerFilename}`) {
        return false;
      }
  
      const contentType = response.headers.get('Content-Type');
      return response.status === 200 &&
        request.url.startsWith(self.location.origin) &&
        request.method === 'GET' &&      
        contentType && this.mimeTypesToCache.some(type => contentType.includes(type));
    }
  
    async onInstall(event) {
      event.waitUntil(
        caches.open(this.cacheName)
          .then(cache => cache.addAll(this.urlsToCache))
      );
    }
  
    async onActivate(event) {
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.filter(cacheName => cacheName !== this.cacheName && cacheName !== this.metadataCacheName)
              .map(cacheName => caches.delete(cacheName))
          );
        })
      );
    }
  
    async onFetch(event) {
      const { request } = event;
  
      event.respondWith(
        this.getResponseFromCache(request).then(cachedResponse => {
          const fetchPromise = this.fetchAndCache(request);
  
          if (cachedResponse) {
            console.log(`Cache HIT for ${request.url}`);
            event.waitUntil(fetchPromise);
            return cachedResponse;
          } else {
            console.log(`Cache MISS for ${request.url}`);
            return fetchPromise;
          }
        }).catch(error => {
          console.error('Error fetching resource:', error);
          return new Response(null, { status: 500, statusText: 'Internal Server Error' });
        })
      );
    }
  
    async getResponseFromCache(request) {
      const cache = await caches.open(this.cacheName);
      const metadataCache = await caches.open(this.metadataCacheName);
  
      const cachedResponse = await cache.match(request);
      if (!cachedResponse) {
       console.log(`Cache MISS for ${request.url}`);
        return null;
      }
  
      const metadata = await metadataCache.match(request);
      if (!metadata) {
       console.log(`Cache invalidated (no metadata) for ${request.url}`);
        await cache.delete(request);
        return null;
      }
  
      const metadataJson = await metadata.json();
      const expirationTime = metadataJson.expirationTime;
  
      if (Date.now() > expirationTime) {
       console.log(`Cache invalidated (expired) for ${request.url}`);
        await cache.delete(request);
        await metadataCache.delete(request);
        return null;
      }
  
     console.log(`Cache HIT for ${request.url}`);
      return cachedResponse;
    }
  
    async fetchAndCache(request) {
      try {
        const response = await fetch(request);
  
        if (!this.isCacheable(request, response)) {
          return response;
        }
  
        const cacheHeaders = response.headers;
        const cacheControl = cacheHeaders.get('Cache-Control');
        const expires = cacheHeaders.get('Expires');
        let shouldCache = true;
        let expirationTime = Date.now() + (24 * 60 * 60 * 1000); // Default expiration time: 24 hours
  
        if (cacheControl) {
          const maxAgeMatch = cacheControl.match(/max-age=(\d+)/);
          if (maxAgeMatch) {
            const maxAgeSeconds = parseInt(maxAgeMatch[1]);
            expirationTime = Date.now() + (maxAgeSeconds * 1000);
          }
        } else if (expires) {
          expirationTime = new Date(expires).getTime();
        }
  
        if (shouldCache) {
          const cache = await caches.open(this.cacheName);
          const metadataCache = await caches.open(this.metadataCacheName);
  
          const metadata = {
            expirationTime
          };
  
          cache.put(request, response.clone());
          metadataCache.put(request, new Response(JSON.stringify(metadata)));
        }
  
        return response;
      } catch (error) {
        console.error('Fetch error:', error);
        return new Response(null, { status: 500, statusText: 'Internal Server Error' });
      }
    }
  }
  
  const applicationServiceWorker = new ApplicationServiceWorker();
  applicationServiceWorker.initialize();
  