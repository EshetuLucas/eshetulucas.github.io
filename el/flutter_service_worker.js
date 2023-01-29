'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "06b3ea6ec8a2e4d21f505119bc3af24e",
"/": "06b3ea6ec8a2e4d21f505119bc3af24e",
"main.dart.js": "9df06a269aecf2fe1140735fcd8fb54a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "292da175bc30c40d437f86e7774e40ad",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "6c686c8a5ac69737efd9c2d069217f09",
"assets/NOTICES": "54fb12c80af869fcd5b889416b516bf1",
"assets/FontManifest.json": "4b3021491781ea473dc77e03c656e93b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/port.png": "758eca8dac7f52de457efb25d8341fce",
"assets/assets/images/dane.jpeg": "776265eddef667461298cb8447d238cc",
"assets/assets/images/8.png": "e39d6807d3fa208f6e869184dd27289c",
"assets/assets/images/9.png": "c2281c83670e31d8aaab7cb642b824db",
"assets/assets/images/14.png": "aba9b8da43bc34dc18b53100712710eb",
"assets/assets/images/15.png": "794350cff01c2d46fb81fe7a4c3bb703",
"assets/assets/images/16.png": "25a1e5ea2b5273877254e7c49745e2f3",
"assets/assets/images/gmail.png": "9427f4c3586b306fda70c4b1515cc40c",
"assets/assets/images/12.png": "1afdd3b2f7107072ffa80729d253b651",
"assets/assets/images/jamn.png": "340e95f0b1439dfe5cbaf67cb354f7f9",
"assets/assets/images/13.png": "a64d743d0a556cc4cf0635d81990dd9d",
"assets/assets/images/rc.png": "a20e905aeba896bf9161248dd670db2f",
"assets/assets/images/ra.png": "b4d141a17e600bd86c40609f83cdc6a5",
"assets/assets/images/amakari.png": "10d7600ddaa572c122c7e2a112207d2b",
"assets/assets/images/11.png": "9a825e4ef5bdef24a12c1ed44518f92a",
"assets/assets/images/maya.jpg": "00636aaed2e75a9fa86724f1af827ea4",
"assets/assets/images/10.png": "efdd3ed79e29e64c477c00c61c18ac28",
"assets/assets/images/placeholder.png": "292da175bc30c40d437f86e7774e40ad",
"assets/assets/images/isaac.jpeg": "6fb2796d2179659fde2ae587eda75eb2",
"assets/assets/images/fo.png": "441aa70f4337435f9f35fcb7edc57e65",
"assets/assets/images/foot.png": "6f22dc1ac2ad3e87943b6f5ec810d179",
"assets/assets/images/4.png": "6775b7b39418360f5f4702f94e38113c",
"assets/assets/images/5.png": "791fd49688b92734788d45efce27341a",
"assets/assets/images/e.jpeg": "5a7a40d1dfa1c1de12968bbd6c55e3e5",
"assets/assets/images/7.png": "d6eda9f75edcbe5c8fe92b8772adedd1",
"assets/assets/images/6.png": "accf2dd021b104337a79a246809c89c0",
"assets/assets/images/2.png": "19fe187d82dd382086dd18a457fb8b01",
"assets/assets/images/mechot.jpg": "61061cea63fdcc4ace6f3f5b6c0513c1",
"assets/assets/images/3.png": "186553e516de2d50bca6523905e8416a",
"assets/assets/images/1.png": "e461c71a31062f4b260c01bfef5625e0",
"assets/assets/images/0.png": "dfe33ccfbaad137d8e811190101497f9",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
