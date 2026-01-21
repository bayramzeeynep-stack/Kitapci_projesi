// =========================
// 1) KATEGORİ BUTONLARI
// =========================
const butonlar = document.querySelectorAll(".kategori-btn");
const kutular = document.querySelectorAll(".kategori-kutu");

butonlar.forEach(btn => {
    btn.addEventListener("click", () => {

        // Aktif butonu değiştir
        butonlar.forEach(b => b.classList.remove("aktif"));
        btn.classList.add("aktif");

        // Butondaki kategoriyi al
        let kategori = btn.getAttribute("data-kategori");

        // Tüm kutuları gizle
        kutular.forEach(k => k.style.display = "none");

        // Sadece seçilen kategoriyi göster
        document.getElementById(kategori).style.display = "block";
    });
});

// ==========================
// 1) MODAL ELEMANLARI
// ==========================
const modal = document.getElementById("kitapModal");
const modalKapak = document.getElementById("modalKapak");
const modalBaslik = document.getElementById("modalBaslik");
const modalYazar = document.getElementById("modalYazar");
const modalFiyat = document.getElementById("modalFiyat");
const modalAciklama = document.getElementById("modalAciklama");
const modalClose = document.querySelector(".modal-close");
const modalKalp = document.getElementById("modalKalp");  // FAVORİ KALBİ
const sepeteEkleBtn = document.getElementById("sepeteEkleBtn");

// ==========================
// 2) MODAL AÇMA — Kart tıklanınca
// ==========================
const kitapKartlari = document.querySelectorAll(".kitap-kart");

kitapKartlari.forEach(kart => {
    kart.addEventListener("click", () => {

        modalKapak.src = kart.dataset.kapak;
        modalBaslik.textContent = kart.dataset.baslik;
        modalYazar.textContent = kart.dataset.yazar;
        modalFiyat.textContent = kart.dataset.fiyat;
        modalAciklama.textContent = kart.dataset.aciklama;

        modalFavoriKontrol(kart.dataset.baslik);

        modal.style.display = "flex";
    });
});

// ==========================
// 3) MODAL KAPATMA
// ==========================
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

// ==========================
// 4) SEPETE EKLE
// ==========================
sepeteEkleBtn.addEventListener("click", function () {

    const kitap = {
        baslik: modalBaslik.textContent,
        yazar: modalYazar.textContent,
        fiyat: modalFiyat.textContent,
        kapak: modalKapak.src
    };

    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    sepet.push(kitap);
    localStorage.setItem("sepet", JSON.stringify(sepet));

    alert("Kitap sepete eklendi!");
});

// ==========================
// 5) FAVORİ KALP — TIKLAYINCA DÖNÜŞ YAPAN SİSTEM ❤️🤍
// ==========================
modalKalp.addEventListener("click", function () {

    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
    const kitap = modalBaslik.textContent;

    const varMi = favoriler.some(f => f.baslik === kitap);

    if (varMi) {
        // ❌ FAVORİDEN ÇIKAR
        favoriler = favoriler.filter(f => f.baslik !== kitap);
        modalKalp.classList.remove("dolu");
        modalKalp.textContent = "🤍";
    } else {
        // ❤️ FAVORİYE EKLE
        favoriler.push({
            baslik: modalBaslik.textContent,
            yazar: modalYazar.textContent,
            fiyat: modalFiyat.textContent,
            kapak: modalKapak.src
        });
        modalKalp.classList.add("dolu");
        modalKalp.textContent = "❤️";
    }

    localStorage.setItem("favoriler", JSON.stringify(favoriler));
});

// ==========================
// 6) MODAL AÇILIRKEN KALBİ DOĞRU DURUMA GETİR
// ==========================
function modalFavoriKontrol(baslik) {
    const favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

    const varMi = favoriler.some(f => f.baslik === baslik);

    if (varMi) {
        modalKalp.classList.add("dolu");
        modalKalp.textContent = "❤️";
    } else {
        modalKalp.classList.remove("dolu");
        modalKalp.textContent = "🤍";
    }
}