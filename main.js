axios.get("https://api.punkapi.com/v2/beers").then((res) => {
    let beersUl = document.querySelector(".beers");
    let beers = "";
    res.data.forEach((el) => {
        beers += `<li>${el.name}</li>`;
    });
    console.log(beers);
    beersUl.innerHTML = beers;
});

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

const installBtn = document.querySelector(".installer");
let defferedPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    defferedPrompt = e;
    installBtn.style.display = "block";
});

installBtn.addEventListener("click", (e) => {
    installBtn.style.display = "none";
    defferedPrompt.prompt();

    defferedPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
            console.log("installation réussie");
        } else {
            console.log("installation refusée");
        }
        defferedPrompt = null;
    });
});