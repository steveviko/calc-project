const staticDevCalc = "dev-calc-project-site"
const assets = [
  "/",
  "/index.html",
  "/static/style.css",
  "/static/script.js",
 
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticDevCalc).then(cache => {
        cache.addAll(assets)
      })
    )
  })


  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })