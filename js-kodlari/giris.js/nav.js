document.addEventListener("DOMContentLoaded", () => {

    const hesapButon = document.getElementById("hesapButon");
    const kullanici = localStorage.getItem("kullaniciAdi");

    // Giriş yapılmışsa
    if (kullanici) {
        hesapButon.textContent = "Hesabım";
        hesapButon.style.cursor = "pointer";
        hesapButon.removeAttribute("href"); // Modal açılacak
    } 
    // Giriş yapılmamışsa
    else {
        hesapButon.textContent = "Giriş / Kayıt Ol";
        hesapButon.setAttribute("href", "#");
    }
});

function cikisYap() {
    localStorage.removeItem("kullaniciAdi");
    localStorage.removeItem("kullaniciSifre");

    alert("Çıkış yapıldı.");
    location.reload();
}



// ====================
// MODAL KODLARI 
// ====================

const hesapButon = document.getElementById("hesapButon");
const girisModal = document.getElementById("girisModal");
const kapat = document.querySelector(".kapat");
const girisPanel = document.querySelector(".giris-panel");
const kayitPanel = document.querySelector(".kayit-panel");

// Modalı aç
hesapButon.addEventListener("click", function () {
    girisModal.style.display = "flex";
});

// Modalı kapat
kapat.onclick = function () {
    girisModal.style.display = "none";
};

// Boş alana tıklayınca kapatsın
window.onclick = function (e) {
    if (e.target === girisModal) {
        girisModal.style.display = "none";
    }
};

// Giriş <-> Kayıt arası geçiş
function panelDegistir() {
    girisPanel.classList.toggle("kapali");
    kayitPanel.classList.toggle("kapali");
}