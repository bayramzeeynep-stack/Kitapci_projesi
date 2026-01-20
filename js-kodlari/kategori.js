const butonlar = document.querySelectorAll(".kategori-btn");
const kutular = document.querySelectorAll(".kategori-kutu");

butonlar.forEach(btn => {
    btn.addEventListener("click", () => {

        // buton aktiflik
        butonlar.forEach(b => b.classList.remove("aktif"));
        btn.classList.add("aktif");

        // kategori ID’si
        const kategori = btn.getAttribute("data-kategori");

        // tüm kutuları kapat
        kutular.forEach(k => k.style.display = "none");

        // seçilen kutuyu aç
        const secilen = document.getElementById(kategori);
        secilen.style.display = "block";
    });
});