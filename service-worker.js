self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("csq-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./cover.png",
        "./logo.jpg",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
