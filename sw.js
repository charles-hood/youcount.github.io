/* global noConnection:false */
var CACHE_NAME = 'youcount-cache-1.1';
var urlsToCache = [
  '/index.html',
  '/images/social.png',
  '/js/script.js'
];
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  try {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  } catch (err) {
    noConnection('Service Worker failed to fetch!');
  }
});
