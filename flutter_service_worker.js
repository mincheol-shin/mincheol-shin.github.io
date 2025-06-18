'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e7d09e53b492b55ff5919b4014c5eca7",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "ff5cbeb6e3d652b5697dbab6066469fa",
"/": "ff5cbeb6e3d652b5697dbab6066469fa",
"main.dart.js": "80dc95e8f1cc3725e4418a991f590476",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"manifest.json": "f018d94abfce9a86830b450a1ab6fc1a",
"assets/AssetManifest.json": "a00703f9bffd77ff9ba2b07f336c3777",
"assets/NOTICES": "6088c2e81a0c4f007c6f4dd42c51924c",
"assets/FontManifest.json": "73a9c92fae8382337a4ce16329cd7018",
"assets/AssetManifest.bin.json": "9c5d28e605a2d92a9b6d0074289b40d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4eb72a2e85c2c11b64a39589d7372ccb",
"assets/fonts/MaterialIcons-Regular.otf": "c0a6c780f01bb087f0b9956a1610f6ae",
"assets/assets/l10n/en.json": "2e4289edab576c8c47850c120fd67da8",
"assets/assets/l10n/ko.json": "6b2734e22ac513beca3497a63dc4016a",
"assets/assets/images/project-sudoku-02.webp": "98bbe4ea72214f1835963806eb8a4c14",
"assets/assets/images/proejct-key-snap-01.png": "6889270fa43810b9109c77241c02ed55",
"assets/assets/images/proejct-enko-01.png": "04945fa8289837190474fad13cf490d8",
"assets/assets/images/proejct-key-snap-02.png": "bd9a2002b10c8baf3ea6d8fed884b252",
"assets/assets/images/project-ring-timer-02.webp": "26d18448c55866947ba240c005787891",
"assets/assets/images/proejct-enko-02.png": "54690d8622d92f52abe259d7d391e076",
"assets/assets/images/proejct-auto-shot-02.png": "ab748c2bac00a24864cef288143851f3",
"assets/assets/images/key-snap-logo.webp": "2c4ac42020bc58ff72ecd5397242b47a",
"assets/assets/images/project-ring-timer-03.webp": "bacbeed5a4ef645f28442865d64d5877",
"assets/assets/images/proejct-auto-shot-01.png": "6b2d3535905f983b01e455bb7bbc3dc6",
"assets/assets/images/project-thumbnail-maker-06.webp": "70326c032afc70dfa43370c9c955cb78",
"assets/assets/images/sorialbum-logo.webp": "9e4b683e74932f04ab39f626dcdbcf44",
"assets/assets/images/project-sudoku-03.webp": "f1804046e93426307fe3b4e1bd7505ee",
"assets/assets/images/company-babybilly-08.PNG": "c54804d1026636079e898ac7e9ffe1af",
"assets/assets/images/company-homeden-02.png": "add69f64d2dee7d7b06a7107118d4199",
"assets/assets/images/project-sorialbum-01.PNG": "bade92cd4a21765bcc4b2286d9a2426d",
"assets/assets/images/project-ring-timer-04.webp": "e81b3e2b5f6ba553c8f362fdf734e985",
"assets/assets/images/company-homeden-03.png": "77a1626e248c3a20b302dbefbe8af5d2",
"assets/assets/images/company-babybilly-09.PNG": "aab4fb819cb23d2cb3013f05bcd3857b",
"assets/assets/images/project-sudoku-04.webp": "5ba5884a5678f81d6747000e1be16b71",
"assets/assets/images/project-sorialbum-02.PNG": "a2db6001b5b1f1ee0b681704bedff481",
"assets/assets/images/project-sorialbum-03.PNG": "f5cb2c8b855f6de1a68992941996af87",
"assets/assets/images/dwr-logo.webp": "c9c48cc9880637b8c264f1a23a5bf4b9",
"assets/assets/images/project-thumbnail-maker-01.webp": "f55efcd694e04615fea22e6f4fb4c97c",
"assets/assets/images/company-homeden-10.png": "818271f9ca68ec089ce1c09bf7ebe5a1",
"assets/assets/images/company-homeden-04.png": "af5e0aa5bdd4f299b1aa5aa6b662a6cf",
"assets/assets/images/babybilly.webp": "bfd77d77b6d5ecb1afe2d36b77bb083a",
"assets/assets/images/project-sudoku-05.webp": "92d6a851a7d064c78baaf083c473c9cd",
"assets/assets/images/company-homeden-05.png": "51ec0e768c59f8e4f2e238b87b8b7e5c",
"assets/assets/images/company-homeden-11.png": "8734b6d720812f33c81443f273aace0b",
"assets/assets/images/project-bible-bot-01.jpeg": "97693aff11954c8bbd97b35796b04d2a",
"assets/assets/images/company-homeden-07.png": "90414d2226620d5cf3cd651d95b74699",
"assets/assets/images/project-sorialbum-04.PNG": "d5dc219a7170f6ea181f53512f0a8aaa",
"assets/assets/images/project-ring-timer-05.webp": "334a6d18a47ceccd9fd85de6606995a4",
"assets/assets/images/project-sorialbum-05.PNG": "a03b17beddb538bcce6b99f5801f87d9",
"assets/assets/images/company-homeden-06.png": "801334cc192633d61e5fa5279a9cd008",
"assets/assets/images/product-hunt-icon.png": "8d2bf2ac12c838e2d89f87eb91afcccc",
"assets/assets/images/company-babybilly-01.PNG": "29eab9ae9af15a86cb47bb2cb64e0a80",
"assets/assets/images/project-thumbnail-maker-03.webp": "a400810b8749f1e201fb58b419660f00",
"assets/assets/images/sudoku-logo.webp": "29da37c02017439cdc8521a598c4f6e0",
"assets/assets/images/company-babybilly-02.PNG": "045541e171e429739d003ddb92a231ba",
"assets/assets/images/company-homeden-08.png": "2c03999ff8f5da986cf811b35bd91d7a",
"assets/assets/images/project-sudoku-06.webp": "95649a1768a4e3db675049e5ed34074e",
"assets/assets/images/bible-bot-logo.png": "bf429fd5658842c5a1ee845b5254f382",
"assets/assets/images/company-homeden-09.png": "ceec740dc731cf9e99889f6c6bd57c14",
"assets/assets/images/project-bible-bot-02.jpeg": "e2f24e0eb925842c91c622720471a2b2",
"assets/assets/images/company-babybilly-03.PNG": "c5ed2ac0bb5ac3dc60309716ff0e6580",
"assets/assets/images/flutter-logo.png": "218c4c5df83b068f8cb476f89832d5dd",
"assets/assets/images/auto-shot-logo.webp": "4ba6068ec742d1c4992a425b45e5395e",
"assets/assets/images/project-bible-bot-03.jpeg": "14f6608874678716aaca69868a3822f4",
"assets/assets/images/company-babybilly-07.PNG": "d80b6e71a9c1df6d27962b905404b898",
"assets/assets/images/homeden.webp": "1b9c88909a715b60522a8117424138b8",
"assets/assets/images/company-babybilly-06.PNG": "177869e074fdcb1395c1e03d418e0cde",
"assets/assets/images/project-thumbnail-maker-02.webp": "cf9b03e3ff81a500e194389b7abe8d05",
"assets/assets/images/profile.jpg": "4c1c28afb8de8b877190e1009de72cc6",
"assets/assets/images/company-babybilly-04.PNG": "295ddc86b1ab10a35cf9fb0b4cb0634e",
"assets/assets/images/enko-logo.webp": "950d56778e813a7ec4442efaacd99a65",
"assets/assets/images/company-babybilly-05.PNG": "b963dd5e942cafe98642f1aaa08a3bcc",
"assets/assets/images/project-thumbnail-maker-05.webp": "52887daed8e637ecf8c953b60d8b0a00",
"assets/assets/images/project-ring-timer-01.webp": "600f09a3254c5df7827ce61e68ebc57c",
"assets/assets/images/thumbnail-maker-logo.webp": "76eeb317b3d34fba7501006fb8980f00",
"assets/assets/images/proejct-dwr-01.png": "32a13dd887bf91b634e7ab2c12910f1e",
"assets/assets/images/github-logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/project-sudoku-01.webp": "8931fbabdd7f85a560bc124d4978c177",
"assets/assets/images/ring-timer-logo.webp": "c1b95089b2dedc8256f09d0401a16c20",
"assets/assets/images/proejct-dwr-02.png": "7cf32a55c4de307d422358e67ad78b0b",
"assets/assets/images/project-thumbnail-maker-04.webp": "75f5df00927836ba7e5b6b198de0b4e0",
"assets/assets/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
