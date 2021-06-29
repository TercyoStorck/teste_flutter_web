'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/icons/back_space.svg": "ab7303cd7b9729d30792921d606cbbfc",
"assets/assets/icons/categories_active.svg": "c2186f6115a9e42b8ded566186ac0518",
"assets/assets/icons/bottom_bar/financial.png": "46531ad7d1aef7b66981a99b363d76b2",
"assets/assets/icons/bottom_bar/home.svg": "2524dec9c1abe3696e3f67962adbab3d",
"assets/assets/icons/bottom_bar/transactions_active.svg": "422bf295c566b544072c5dcc25c14342",
"assets/assets/icons/bottom_bar/home.png": "3ca8ee2901ab196ed10428e9c286d442",
"assets/assets/icons/bottom_bar/notifications_active.svg": "aa4d3d7b338db9f7ac0a368173906935",
"assets/assets/icons/bottom_bar/home_active.svg": "0b4fb0b76e87195e67c988491ea9df70",
"assets/assets/icons/bottom_bar/options_active.svg": "dc15a0a9fdc926358a6a051afc2629c2",
"assets/assets/icons/bottom_bar/options.svg": "8b3f71e3cb36afd1562e5c8ee0af996c",
"assets/assets/icons/bottom_bar/notifications.svg": "0d1b9331efeb6d558c2182cb8acbbfcc",
"assets/assets/icons/bottom_bar/dolar.svg": "f19061afcd65e7f3228b83c88ce1782b",
"assets/assets/icons/bottom_bar/financial.svg": "dde5bc6feaf0328855a5a72a5b805571",
"assets/assets/icons/bottom_bar/transactions.svg": "29dde569669c1a5638d448b05cf6c2c2",
"assets/assets/icons/bottom_bar/barn_silo.svg": "987258f00b11d9b9765666f6416615ed",
"assets/assets/icons/icon_launcher/icon_launcher.svg": "c26a41391d9ca68127f53aafc53eaac5",
"assets/assets/icons/icon_launcher/icon_launcher.jpeg": "0e5f5dcd69b676471e1babbaf8786f2c",
"assets/assets/icons/add.svg": "e4fbb9507700f1a00879a5a92ecb77f9",
"assets/assets/icons/property.svg": "281cdd4cd4ca311a9450698d1c897698",
"assets/assets/icons/add_photo_selected.svg": "08543116695642b8cd47eafb20448ffb",
"assets/assets/icons/arrow_right_mini.svg": "0e09762e72d7c972055ba37ddce98d24",
"assets/assets/icons/contact.svg": "7fdf0cf3c1061a7857d787282d6f9260",
"assets/assets/icons/collaborator_icon.svg": "24f5f173c8ae680917443ed543737aae",
"assets/assets/icons/logout.svg": "66c7cdbbd25501006a8b020ae05e967a",
"assets/assets/icons/edit.svg": "0f6ac469b122cf071af3010f7e15899e",
"assets/assets/icons/sync.svg": "b1026edabbde2192605f2ff9a382d54e",
"assets/assets/icons/down.svg": "4e69689724dc7fe81695a6958684e037",
"assets/assets/icons/arrow_left.svg": "cbc32034e2ca8502215a44bd8943f53e",
"assets/assets/icons/select_radial_disabled.svg": "ce35ca0449b3b5709efbc67599a5d25d",
"assets/assets/icons/add_photo.svg": "435bc04a317b70377b6aade4b63e40cd",
"assets/assets/icons/select_radial_enabled.svg": "33772b2cdc107e60548b41d8a3fd262c",
"assets/assets/icons/field_crop.svg": "563bc5c4c07e5dde87ddb56735788a8b",
"assets/assets/icons/backspace.svg": "cca0da3e1ec5935ea5e644f50c158452",
"assets/assets/icons/camera.svg": "f850beade3799de855e11efaeb0240c5",
"assets/assets/icons/search.svg": "9a1fdd7ea87f9602af6faccb682d5fb5",
"assets/assets/icons/cafe.svg": "e209b6a3fa1399456d02373e4f67e07e",
"assets/assets/icons/clear.svg": "14fb6fa7e68aee83fdd77d1d73c8f468",
"assets/assets/icons/small_logo.svg": "8a38eaef6517aa374679030ce5f8aabb",
"assets/assets/icons/down_secondary.svg": "6f1f095f03a3c025562603718562d926",
"assets/assets/icons/camera_primary_color.svg": "759171fef61b8d05da4e3f6ccb315443",
"assets/assets/icons/terms.svg": "5a96701a3da9593304f9c0a1a0ce7d36",
"assets/assets/icons/arrow_right.svg": "7a62fbb23a6a68b6d64398c6fd7da5e6",
"assets/assets/icons/scheduled_payments.svg": "79b5a719bbc3bd7059349a9c8db27b46",
"assets/assets/icons/check.svg": "9f0e393a10b580865b13936a20907700",
"assets/assets/icons/settings.svg": "16e260ec8011e6f8b79f5e6b3a5793d6",
"assets/assets/icons/sync_not.svg": "a77fee362ec7efb1e5ea169e9488d880",
"assets/assets/icons/delete.svg": "ceea161503f0cf50149349da3edb62ef",
"assets/assets/icons/eye.svg": "e6ad2862aaba2768f2bde0e7a3d1b412",
"assets/assets/icons/trash.svg": "47253b5b530c7bb3e61736d93cf30c17",
"assets/assets/icons/check_box_enable.svg": "55a17fd0dafd0d1a0a78b0adb3a8be67",
"assets/assets/icons/green_logo.svg": "85072c8a1004b5758e5813dc30cf83ec",
"assets/assets/icons/categories.svg": "c5f62335ff7eb085d8708707f793bdf8",
"assets/assets/icons/arrow_up.svg": "0587e8222f88e796e4e992e4b2755a47",
"assets/assets/icons/crop.svg": "9fdf4e3a02c7ae80b883f55d2eb628c3",
"assets/assets/icons/check_box_disable.svg": "b7c4fe039c6cc59474cae060f46b54ca",
"assets/assets/icons/collaborator.svg": "3abe919a641732aa30b205116558fe61",
"assets/assets/icons/sync_load.svg": "a460c884d3edd3ef11fc64e003dc8971",
"assets/assets/icons/finger_print.svg": "99b2da4a65889f48bccfdef84e838ece",
"assets/assets/icons/rate.svg": "dd9488ec45992265e366b766a4bc4270",
"assets/assets/icons/field.svg": "6fba35f1e0176ef9f628e96f7998229f",
"assets/assets/icons/question.svg": "1c375b8ebe81829fbee3dca866c5d4a8",
"assets/assets/icons/arrow_down.svg": "ddec78192fb25c31d4b5292b2b4a2c9f",
"assets/assets/icons/white_logo.svg": "30e9dc6bb94a9452a3e0516180fcc098",
"assets/assets/launcher_icon/launcher_icon.jpeg": "0e5f5dcd69b676471e1babbaf8786f2c",
"assets/assets/launcher_icon/launcher_icon_foreground.png": "5b783dae2993317f4b5687e51ba769c2",
"assets/assets/images/intro.png": "743380f46a82d36f94c29926603622e7",
"assets/assets/images/login_banner.png": "e7e1186ccf3d021f000b60a1e69e1ff9",
"assets/assets/images/mock_profile_picture.jpeg": "ed3a84fc5308e9ff9a92faad7791be40",
"assets/AssetManifest.json": "05194f83022d27b158bce95587b1f1b8",
"assets/NOTICES": "f4909a04d1fcf6be0233d701b0e90e89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"manifest.json": "2ee6405651c0d0286b63c53b14ac74dd",
"icons/_Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/_Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "03219a316c1311b429078da7bc841e1a",
"icons/Icon-512.png": "03219a316c1311b429078da7bc841e1a",
"favicon.png": "03219a316c1311b429078da7bc841e1a",
"index-bkp.html": "a471aaab02332d4709155647693bdec5",
"main.dart.js": "8b376118d070bb5e73aaaaebdd7bda71",
"index.html": "4152d1f3f59d5e073d11e13a960352dc",
"/": "4152d1f3f59d5e073d11e13a960352dc",
"version.json": "54cf0d92c3e661c8ba7d69df68536067",
"_favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
