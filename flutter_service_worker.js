'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ad5b9e1090064b55868a734c10168bdd",
"index.html": "5b390e3cd2df3747a6e5e7314e0eb87a",
"/": "5b390e3cd2df3747a6e5e7314e0eb87a",
"main.dart.js": "b5f7273e284d9a860af156e768d4015d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "42c1838e28600a9068c8b45b2d6176ea",
".git/config": "c67047f45ea6aea17736d1e8b55fe4fc",
".git/objects/59/759021f4ac9d21bf1c2ad0d6c467f17bd83967": "6be372da13b76f919863c09c81681cef",
".git/objects/66/aa34b7139257bf404dff95d333ad5989f4a563": "76af16d33ed5decbe891d0e0ad5240d0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/a97852d1aedbaf255b8911ed06642ed5c40077": "6044249c14fafa3b0d85b7c805d29bc0",
".git/objects/9e/7410b197b80346ee93951b745ba9b7b59dbe6b": "c01145f259bd30e0e666b7a3c181067b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/446aac0640baa55a55a7cafd29efc4550ea266": "b896edfecae13d863c3e18f5d2c9b3d1",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/519a10ae13c61b5c1febc8b43716f93058570d": "3f79d04c3327f8b4e932f15662a4b610",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/dd2c6d3437fa6744ab68d562c575e903134d9f": "6ff89552550c723eac7f34cf61aba39b",
".git/objects/94/e8072fff4b7478a459bd3daef7b0683b88c7ea": "053042f82c2d1700e4b1d334bb6c335d",
".git/objects/0e/675e2545d9134e6daba1ddbf8f26db0c008e08": "8e0715f1e86b3fbc72496844f3b992ab",
".git/objects/5a/bdb7b454d7a7517691c791513490743855e486": "c96830f72114395048e3a41c8aa3688f",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/be11f7786bf883d359e93eb585b255a9981ccf": "cae8b70e703d34f320dfa73c37dc98bd",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d1/d86bbdd1e2cd7958eab645ba7328cb15bd3fe3": "959f49716d77cccd32f639221dc9a2b1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f80e34e51c051676158737f5fd13c1b04a58d3": "f77bb5235e5993495d7816f4f8bbbb74",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c1/138dc1e94e1896e671835e6b8437c9b63ec914": "9f449f72255035bb83462b74ab6e7bcb",
".git/objects/ec/454f91b86139962282486ce77341092ffc4818": "4db3fa28ee1f960cce806f2619e8cf35",
".git/objects/11/bd4bb35a4f0bafd42147ab9dd0284579943a47": "894644a885634e121c01d90af680c76a",
".git/objects/29/a7a3174faa01f2f0d7b92769b199a3d5bcd978": "0a089e81ee8bafa423b3fe3ba7594379",
".git/objects/29/5d67d2b07ec821596f05847acef678292a70a7": "6f88dcf789c66118a521d39fa84387c9",
".git/objects/42/d6c31d496d81033ff6416968b098f90a6b13f1": "70bb1afb293ab36ef620153456190387",
".git/objects/73/afade4166667e26af53ead6cf6115a1d9326a9": "0b3ebb51168e737dff448650a9280c29",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3c7d28a4506b6372856fbc0d96e874bd9ae675": "455ef584dad8e166ba1eae8f2ce3924f",
".git/objects/10/2ab1a747fc6ae2eb0cf9470ac50e21b28089c8": "f93278e90790ac429f5e17e53d90954e",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/26ea4561c7dba1c5e42d2b71f4d1d215266b74": "477ed3474187c164ab3eea4c4bff1c9f",
".git/objects/72/510c4c457c708da1e08267cc4c948a9783917e": "2f2138b5138f08ccf2f5986f3fc3e5fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/e806d5761d2484063873a32725061eefefa788": "50c3ed8c2472df5ed93739e708a4c893",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/5e/47e2dd261cb62828c9411113da9aa97ab12708": "b426a6e57d86cefc6f675c4727ec5874",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/3f7a0a7427bc62605de719fc96ea2d453501f9": "cfbdc8fde26bd82e584c767fb8ac76e4",
".git/objects/6c/99c9b1fe6e13a6b1eb794c13c38759c02a4818": "a4c12c6b4d551e14f5eac9c3786909e6",
".git/objects/63/e8af89cd81436a88a938aa5e32c8c14ed3cc07": "8acf837d67b31875de4f967be1182099",
".git/objects/90/ec3d14910bdc687ed01b9ec7151ff01541f4db": "bbd3024e0f22fe29ae520d217c00f690",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/53d453021e6cc74c9dc570c1f016158895621d": "d3c4428ada669b4eaba5be45ea717db8",
".git/objects/a7/43b30afb868a11da0c1553e5804627a68d7460": "b3e0f4141ab6de90a532a157f10f6749",
".git/objects/b6/51234ee58e2438c63e26d36358665324db53fd": "c83adf22db7cff20ee188e7fe7002c5c",
".git/objects/a9/6f5d9e99c7a76e108791bec71c992f041dc0fe": "5f6fd492498b7e9f7c7901653e0a4653",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/5593ca2dd1e284f914a5f3b3ccddddd8903178": "fe42dac224b92cf9b90596c53ed46eb7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/ebfdd6ef0042c770d828be64048470074cd75e": "0eae3c4c00a313cda4d88e2086881a26",
".git/objects/cd/1e541677e9967087a06723f8e13c6e9e9624a0": "e5cbc92cabdd5cfec0d4598dea3b051f",
".git/objects/ff/c2cdec6bf78ab65cc712394fb14b22eaa0731d": "11d6fc352b71097c0edf7641aa35ed96",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/c8f5ef27d11cd562f1c864dec33ae187daa5bf": "4b551a7138569104d9a95c772d0046d1",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/1d80683a500726e6833a8660329e2bd72e9341": "57c7164be0a6646b0ca65ee9d2cf4eac",
".git/objects/76/a2f26a8c03cce0f282fa92fd941a5cbb3067be": "ce08364f14648849967ec3780dc75b1a",
".git/objects/82/ef3a39f01b60c0df4edd33ce13524fc8816113": "f1d9c91970fdc7630ffcb5db50a30012",
".git/objects/49/aedfffc98e15b88b55dd28a1be1937f8df6136": "81dbf9e683a9fc6911124310a7601f5b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9920f00336b5271629cf357fc3f8869a",
".git/logs/refs/heads/master": "9920f00336b5271629cf357fc3f8869a",
".git/logs/refs/remotes/origin/master": "b241f05496a380165fc112087f4153fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "9b884970140f81c96c4fab39c0e65524",
".git/refs/remotes/origin/master": "9b884970140f81c96c4fab39c0e65524",
".git/index": "5b7870948051ed977ac6cf181f3ad9cb",
".git/COMMIT_EDITMSG": "baef8d40b44a96f8a6bfb9d24a13cfce",
"assets/AssetManifest.json": "0a9251dd025fa66e53d9b84578db089e",
"assets/NOTICES": "5c1c3defcdeac4f6a873a06a8e4e38af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d1d66b51de9e0f3da0370daacbf67b31",
"assets/fonts/MaterialIcons-Regular.otf": "4ffc317735fb079f12e8484a0840d0c7",
"assets/assets/images/demo6.png": "e5be9d11bb1c6a108d9f98b9277b51ff",
"assets/assets/images/demo7.png": "cc3838efa6659ea2a29fe1001989d507",
"assets/assets/images/demo4.png": "172c5c043e5596a889ccf45d78558386",
"assets/assets/images/demo1.png": "7c349f24938599613c2c4e3b0755e960",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/demo2.png": "5dfef022b1a5adedda2e1af89f57efd6",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/hand_phone.png": "b30acde68544c18ffd0243e3f59a0ba2",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/test1.jpeg": "9bb4e188581240286417187e232c4b38",
"assets/assets/images/background.png": "0564de0c80dbcae74ffce0f6a09dc3c0",
"assets/assets/images/test2.jpeg": "11346c7dce688552f9b834067e2120d5",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/test3.jpeg": "74e1950d7c75cce212743bfd5a0bf432",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/slide_back.png": "41d7584e24759e4aa73152af7143c39c",
"assets/assets/images/ktm_wallpaper.png": "ab82cefa0d8668ffb703ad7d39ede660",
"assets/assets/images/horizontal_logo.png": "f8c809d0c5ad5b3c71d6341c3a15eb7b",
"assets/assets/images/vertical_logo.png": "602bd12b46803b71df53eb960ba6834a",
"assets/assets/gambar/img_1.png": "b6a5295c425e406537fe1223ed918b4f",
"assets/assets/gambar/yt.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/gambar/img_2.png": "2b8dffb95409d3c25a7e187445cd8f58",
"assets/assets/gambar/img_3.png": "ec19b4de58c556c35c3f688a1952cd36",
"assets/assets/gambar/mail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/gambar/logo%2520pmii.png": "6933aa8996944408646d5e49d505b735",
"assets/assets/gambar/misivisi.png": "9dcb1d8b0ec58d04dd5aff871df88411",
"assets/assets/gambar/fb.png": "662c5115db8888e88163c537572d8dc8",
"assets/assets/gambar/img.png": "9b2a45f67caa505df56bb0c05842bbf9",
"assets/assets/gambar/pon.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/assets/gambar/pr.png": "ece9b29d406642ad66c1a50dcb60c12a",
"assets/assets/gambar/ig.png": "8290266a5fb402a34b96f890bbdb2d60",
"assets/assets/gambar/visi.png": "0f3d7c522dc2e539ea8a93db79086827",
"assets/assets/gambar/hdd.png": "643193fc33ecf3c3c7f69522a11cf061",
"assets/assets/gambar/ffb.png": "3cb7eff95a4159cf61806234d813d84e",
"assets/assets/gambar/foto.png": "04171579e3029db5a20d2ec7f66abff9",
"assets/assets/gambar/sejarah.jpeg": "45b6bd431aec1f97c5bac0b55a406f21",
"assets/assets/gambar/berita2.jpg": "def64c4c890473151214f9c20e3f7622",
"assets/assets/gambar/wa.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/gambar/berita1.jpg": "c6110119f798c53d88477ec3d4d0d340",
"assets/assets/icon/shopping_cart.png": "82249d25133cec87466a78df35425112",
"assets/assets/icon/menu_icon.png": "3e1581b00e03d291225e0d4698436079",
"assets/assets/icon/payment_method.png": "5536ddb8409c698c0ef2a16082671fe8",
"assets/assets/icon/package.png": "a889ce714f211c55d90cfdc51d7f5b10",
"assets/assets/icon/gift_packaging.png": "379207eff0ad75fbfc3346ac4e877273",
"assets/assets/icon/twitter.png": "595cf657dbb8fa4aa7b56b95341722c5",
"assets/assets/icon/youtube.png": "db6af12db54246f95a0784d1bfe26877",
"assets/assets/icon/delivery_time.png": "1e2683e82203baab8d7563f1e141b493",
"assets/assets/icon/facebook.png": "029fc0a57933652ba2702d7f16954d5c",
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
