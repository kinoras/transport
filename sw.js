importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/manifest.json',
       '/index.html',
       '/style.css',
       '/js/script.js',
       '/js/jquery.js',
       '/js/vue.js',
       '/imgs/apple-icon-57x57.png',
       '/imgs/apple-icon-60x60.png',
       '/imgs/apple-icon-72x72.png',
       '/imgs/apple-icon-76x76.png',
       '/imgs/apple-icon-114x114.png',
       '/imgs/apple-icon-120x120.png',
       '/imgs/apple-icon-144x144.png',
       '/imgs/apple-icon-152x152.png',
       '/imgs/apple-icon-180x180.png',
       '/imgs/android-icon-192x192.png',
       '/imgs/iphone5_splash.png',
       '/imgs/iphone6_splash.png',
       '/imgs/iphoneplus_splash.png',
       '/imgs/iphonex_splash.png',
       '/imgs/iphonexr_splash.png',
       '/imgs/iphonexsmax_splash.png',
       '/imgs/ipad_splash.png',
       '/imgs/ipadpro1_splash.png',
       '/imgs/ipadpro3_splash.png',
       '/imgs/ipadpro2_splash.png',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
