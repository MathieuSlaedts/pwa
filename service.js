const version = "0.0.1";

// Enregistrement du serviceWorker
self.addEventListener("install", (event) => {
    console.log("Install " + version);
    return self.skipWaiting();
});

// Activation du serviceWorker
self.addEventListener("activate", (event) => {
    console.log("Activate");
    return self.clients.claim();
});

// Ecouter les fetch
self.addEventListener("fetch", (event) => {
    const requestUrl = new URL(event.request.url);
    console.log(requestUrl);
});