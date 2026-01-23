// 1. LOCALSTORAGE'DAN SEPETİ AL
let sepet = JSON.parse(localStorage.getItem("sepet")) || [];

// 2. HTML ELEMENTLERİ
const liste = document.getElementById("sepetListesi");
const urunSayisi = document.getElementById("urunSayisi");
const toplamTutar = document.getElementById("toplamTutar");
const sepetiBosaltBtn = document.getElementById("sepetiBosalt");

// 3. SEPETİ LOCALSTORAGE'A KAYDET
function sepetiKaydet() {
    localStorage.setItem("sepet", JSON.stringify(sepet));
}

function sepetiYazdir() {
    liste.innerHTML = "";

    if (sepet.length === 0) {
        liste.innerHTML = "<p>Sepetiniz boş.</p>";
        urunSayisi.textContent = "0";
        toplamTutar.textContent = "0 TL";
        return;
    }

    sepet.forEach((urun, i) => {
        liste.innerHTML += `
            <div class="sepet-kart">
                <img src="${urun.kapak}" class="sepet-img">

                <div class="kitap-bilgi">
                    <h4>${urun.baslik}</h4>
                    <p>${urun.yazar}</p>
                    <p class="fiyat">${urun.fiyat} </p>
                </div>

                <div class="adet-kutu">
                    <button class="adet-btn" onclick="adetAzalt(${i})"> - </button>
                    <span>${urun.adet}</span>
                    <button class="adet-btn" onclick="adetArtir(${i})"> + </button>
                </div>

                <button class="sil-btn" onclick="urunuSil(${i})">Sil</button>
            </div>
        `;
    });

    // Toplam hesapla
    let adetToplam = sepet.reduce((t, u) => t + u.adet, 0);
    let fiyatToplam = sepet.reduce((t, u) => t + (parseInt(u.fiyat) * u.adet), 0);

    urunSayisi.textContent = adetToplam;
    toplamTutar.textContent = fiyatToplam + " TL";
}

function adetArtir(i) {
    sepet[i].adet++;
    sepetiKaydet();
    sepetiYazdir();
}

function adetAzalt(i) {
    if (sepet[i].adet > 1) {
        sepet[i].adet--;
    }
    sepetiKaydet();
    sepetiYazdir();
}

function urunuSil(i) {
    sepet.splice(i, 1);
    sepetiKaydet();
    sepetiYazdir();
}

sepetiBosaltBtn.addEventListener("click", () => {
    sepet = [];
    sepetiKaydet();
    sepetiYazdir();
});

sepetiYazdir();