'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ad5b9e1090064b55868a734c10168bdd",
"index.html": "f138a1915e1b0ffc38af421e844d7616",
"/": "f138a1915e1b0ffc38af421e844d7616",
"main.dart.js": "044407ff3e91e90b157f6d2f6dc9c9c0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "42c1838e28600a9068c8b45b2d6176ea",
"assets/AssetManifest.json": "f3c57c9693db964d9a098d1cd3e75d19",
"assets/NOTICES": "664fd1e375409e1e76efb55320e33fdc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6cc4c09f3553c8d4bef4e8f50b655a6b",
"assets/fonts/MaterialIcons-Regular.otf": "4ffc317735fb079f12e8484a0840d0c7",
"assets/assets/gambar/img_1.png": "b6a5295c425e406537fe1223ed918b4f",
"assets/assets/gambar/yt.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/gambar/img_2.png": "2b8dffb95409d3c25a7e187445cd8f58",
"assets/assets/gambar/img_3.png": "ec19b4de58c556c35c3f688a1952cd36",
"assets/assets/gambar/mail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/gambar/logo%2520pmii.png": "6933aa8996944408646d5e49d505b735",
"assets/assets/gambar/misivisi.png": "9dcb1d8b0ec58d04dd5aff871df88411",
"assets/assets/gambar/fb.png": "662c5115db8888e88163c537572d8dc8",
"assets/assets/gambar/img.png": "9b2a45f67caa505df56bb0c05842bbf9",
"assets/assets/gambar/kom.png": "2e354c90524f5968aed6c3e5edfa3921",
"assets/assets/gambar/pon.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/assets/gambar/KET.KOM.png": "2e354c90524f5968aed6c3e5edfa3921",
"assets/assets/gambar/pr.png": "ece9b29d406642ad66c1a50dcb60c12a",
"assets/assets/gambar/kopri.png": "ed62eaf4f6885b7f39be2d081ea340ec",
"assets/assets/gambar/ig.png": "8290266a5fb402a34b96f890bbdb2d60",
"assets/assets/gambar/visi.png": "0f3d7c522dc2e539ea8a93db79086827",
"assets/assets/gambar/hdd.png": "643193fc33ecf3c3c7f69522a11cf061",
"assets/assets/gambar/ffb.png": "3cb7eff95a4159cf61806234d813d84e",
"assets/assets/gambar/foto.png": "04171579e3029db5a20d2ec7f66abff9",
"assets/assets/gambar/sejarah.jpeg": "45b6bd431aec1f97c5bac0b55a406f21",
"assets/assets/gambar/berita2.jpg": "def64c4c890473151214f9c20e3f7622",
"assets/assets/gambar/KET.KOPRI.png": "ed62eaf4f6885b7f39be2d081ea340ec",
"assets/assets/gambar/wa.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/gambar/berita1.jpg": "c6110119f798c53d88477ec3d4d0d340",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
