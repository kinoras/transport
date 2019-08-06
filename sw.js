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
       '/imgs/android-icon-144x144.png',
       '/imgs/android-icon-192x192.png',
       '/imgs/android-icon-36x36.png',
       '/imgs/android-icon-48x48.png',
       '/imgs/android-icon-72x72.png',
       '/imgs/android-icon-96x96.png',
       '/imgs/apple-icon-114x114.png',
       '/imgs/apple-icon-120x120.png',
       '/imgs/apple-icon-144x144.png',
       '/imgs/apple-icon-152x152.png',
       '/imgs/apple-icon-180x180.png',
       '/imgs/apple-icon-57x57.png',
       '/imgs/apple-icon-60x60.png',
       '/imgs/apple-icon-72x72.png',
       '/imgs/apple-icon-76x76.png',
       '/imgs/apple-icon-precomposed.png',
       '/imgs/apple-icon.png',
       '/imgs/browserconfig.xml',
       '/imgs/favicon-16x16.png',
       '/imgs/favicon-32x32.png',
       '/imgs/favicon-96x96.png',
       '/imgs/favicon.ico',
       '/imgs/ms-icon-144x144.png',
       '/imgs/ms-icon-150x150.png',
       '/imgs/ms-icon-310x310.png',
       '/imgs/ms-icon-70x70.png'
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
