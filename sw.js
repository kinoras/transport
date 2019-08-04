importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/style.css',
       '/js/script.js',
       '/js/jquery.js',
       '/js/vue.js',
       '/img/apple-icon-57x57.png',
       '/img/apple-icon-60x60.png',
       '/img/apple-icon-72x72.png',
       '/img/apple-icon-76x76.png',
       '/img/apple-icon-114x114.png',
       '/img/apple-icon-120x120.png',
       '/img/apple-icon-144x144.png',
       '/img/apple-icon-152x152.png',
       '/img/apple-icon-180x180.png',
       '/img/android-icon-192x192.png'
     ]);
   })
 );
});
