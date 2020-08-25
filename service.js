const version = "0.0.2";

// Enregistrement du serviceWorker
self.addEventListener("install", (event) => {
    // console.log("Install " + version);
    return self.skipWaiting();
});

// Activation du serviceWorker
self.addEventListener("activate", (event) => {
    // console.log("Activate");
    return self.clients.claim();
});

// Mise en cache
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
if (workbox) {
    console.log("workbox ok");
    /* workbox.precaching.precacheAndRoute([{
                        url: "index.html",
                    },
                    {
                        url: "styles.css",
                    },
                    {
                        url: "main.js",
                    },
                    {
                        url: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css",
                    },
                    {
                        url: "images/android/android-launchericon-192-192.png",
                    },
                ]); */
    workbox.routing.registerRoute(
        /(.*)\.(?:png|gif|jpg|jpeg|css)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "design-cache",
        })
    );

    workbox.routing.registerRoute(
        "https://api.punkapi.com/v2/beers",
        new workbox.strategies.NetworkFirst({
            cacheName: "api-cache",
        })
    );
} else {
    console.log("workbox not ok");
}
/* self.addEventListener("fetch", (event) => {
    const requestUrl = new URL(event.request.url);
    console.log(requestUrl);
}); */