// ELEMENTLER
const modal = document.getElementById("girisModal");
const hesapButon = document.getElementById("hesapButon");
const kapatButon = document.querySelector(".kapat");

// MODAL AÇ
hesapButon.addEventListener("click", () => {
    modal.style.display = "flex";
});

// MODAL KAPAT
kapatButon.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }

// PANEL DEĞİŞTİR (Giriş <-> Kayıt)
function panelDegistir() {
    document.querySelector(".giris-panel").classList.toggle("kapali");
    document.querySelector(".kayit-panel").classList.toggle("kapali");
}

// KAYIT
function kayitOl() {
    const ad = document.getElementById("kayitKullanici").value;
    const sifre = document.getElementById("kayitSifre").value;

    if (!ad || !sifre) {
        alert("Boş bırakma.");
        return;
    }

    localStorage.setItem("kullaniciAdi", ad);
    localStorage.setItem("kullaniciSifre", sifre);

    alert("Kayıt başarılı!");
    panelDegistir();
}

// GİRİŞ
function girisYap() {
    const ad = document.getElementById("girisKullanici").value;
    const sifre = document.getElementById("girisSifre").value;

    const kayitAd = localStorage.getItem("kullaniciAdi");
    const kayitSifre = localStorage.getItem("kullaniciSifre");

    if (ad === kayitAd && sifre === kayitSifre) {
        alert("Giriş başarılı!");
        modal.style.display = "none";
        location.reload();
    } else {
        alert("Hatalı giriş!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const hesapButon = document.getElementById("hesapButon");
    const kullanici = localStorage.getItem("kullaniciAdi");

    if (kullanici) {
        hesapButon.textContent = "Hesabım";
    } else {
        hesapButon.textContent = "Giriş / Kayıt Ol";
    }
});

function cikisYap() {
    localStorage.removeItem("kullaniciAdi");
    localStorage.removeItem("kullaniciSifre");
    alert("Çıkış yapıldı.");
    location.reload();
}