const art = document.getElementById("art");

const ART_SETTINGS_KEY = "artSettings";

const artSettings = {
    randomArt: true,
    images: [
        {
            name: "pink-cars",
            url: "https://w.wallhaven.cc/full/k8/wallhaven-k881zd.jpg",
        },
        {
            name: "blue-computers",
            url: "https://w.wallhaven.cc/full/7j/wallhaven-7jp81o.jpg",
        },
        {
            name: "japan-minimini",
            url: "https://w.wallhaven.cc/full/e8/wallhaven-e88yjo.jpg",
        },
        {
            name: "compic-painting",
            url: "https://w.wallhaven.cc/full/9o/wallhaven-9oozpx.png",
        },
        {
            name: "astronaut",
            url: "https://w.wallhaven.cc/full/qr/wallhaven-qrrlzr.jpg",
        },
    ],
};

function loadArtFromLocal() {
    const savedArtSettings = localStorage.getItem(ART_SETTINGS_KEY);
    if (savedArtSettings) {
        let deserialized = JSON.parse(savedArtSettings);
        setArt(deserialized.artName, deserialized.random, false);
    } else {
        setArt(undefined, true, true);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    artSettings.images.forEach((image) => {
        const option = document.createElement("option");
        option.value = image.name;
        option.textContent = image.name;
        artName.appendChild(option);
    });
    loadArtFromLocal();
});

artNameSelect.addEventListener("change", () => {
    setArt(artNameSelect.value, false, true);
    randomArtCheckbox.checked = false;
});

randomArtCheckbox.addEventListener("change", () => {
    setArt(artNameSelect.value, true, true);
});

function saveArtSettingsToLocal() {
    localStorage.setItem(
        ART_SETTINGS_KEY,
        JSON.stringify({ artName: artName.value, random: randomArt.checked }),
    );
}

const setArt = (artName, random, save) => {
    const img = document.createElement("img");

    if (random) {
        let image =
            artSettings.images[
                Math.floor(Math.random() * artSettings.images.length)
            ];
        img.src = image.url;
        randomArtCheckbox.checked = true;
    } else {
        if (!artName) return;
        img.src = artSettings.images.filter((x) => x.name === artName)[0].url;
        artNameSelect.value = artName;
        randomArtCheckbox.checked = false;
    }

    art.innerHTML = "";
    art.appendChild(img);

    if (save) saveArtSettingsToLocal();
};
