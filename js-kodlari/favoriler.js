document.addEventListener("DOMContentLoaded", () => {
    favorileriYukle();
});

function favorileriYukle() {
    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
    const liste = document.getElementById("favoriListesi");

    liste.innerHTML = "";

    if (favoriler.length === 0) {
        liste.innerHTML = `<p>Favorileriniz boş.</p>`;
        return;
    }

    favoriler.forEach((urun, index) => {
        liste.innerHTML += `
            <div class="favori-kart">
                <img src="${urun.kapak}" class="favori-img">

                <div class="favori-bilgi">
                    <h4>${urun.baslik}</h4>
                    <p>${urun.yazar}</p>
                    <p>${urun.fiyat} </p>
                </div>

                <button class="favori-sil-btn" onclick="favoriSil(${index})">Sil</button>
            </div>
        `;
    });
}

function favoriSil(i) {
    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
    favoriler.splice(i, 1);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
    favorileriYukle();
}


let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

const urun = {
    baslik: modalBaslik.textContent,
    yazar: modalYazar.textContent,
    fiyat: modalFiyat.textContent.replace(" TL", ""),
    kapak: modalKapak.src
};

favoriler.push(urun);
localStorage.setItem("favoriler", JSON.stringify(favoriler));