const CACHE_NAME = "baralho-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./imagens/carta01.png",
  "./imagens/carta02.png",
  "./imagens/carta03.png",
  "./imagens/carta04.png",
  "./imagens/carta05.png",
  "./imagens/carta06.png",
  "./imagens/carta07.png",
  "./imagens/carta08.png",
  "./imagens/carta09.png",
  "./imagens/carta10.png",
  "./imagens/carta11.png",
  "./imagens/carta12.png",
  "./imagens/carta13.png",
  "./imagens/carta14.png",
  "./imagens/carta15.png",
  "./imagens/carta16.png",
  "./imagens/carta17.png",
  "./imagens/carta18.png",
  "./imagens/carta19.png",
  "./imagens/carta20.png",
  "./imagens/carta21.png",
  "./imagens/carta22.png",
  "./imagens/carta23.png",
  "./imagens/carta24.png",
  "./imagens/carta25.png",
  "./imagens/carta26.png",
  "./imagens/carta27.png",
  "./imagens/carta28.png",
  "./imagens/carta29.png",
  "./imagens/carta30.png",
  "./imagens/carta31.png",
  "./imagens/carta32.png",
  "./imagens/carta33.png",
  "./imagens/carta34.png",
  "./imagens/carta35.png",
  "./imagens/carta36.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  const cacheWhitelist = ["baralho-v2"];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (!cacheWhitelist.includes(cache)) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
