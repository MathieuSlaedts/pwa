if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service.js")
            .then(function(reg) {
                console.log("notify", "Service Worker is starting " + reg);
            })
            .catch((error) => {
                console.log("alert", "Erreur de serviceWorker with " + error);
            });
    });
} else {
    console.log(
        "alert",
        "Votre navigateur n'est pas compatible avec nos services"
    );
}