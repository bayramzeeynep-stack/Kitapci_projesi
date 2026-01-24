document.addEventListener("DOMContentLoaded", () => {
    const aramaInput = document.getElementById("aramaInput");
    const oneriKutusu = document.getElementById("aramaOneriKutusu");

    let kitaplar = [];

    // Kategoriler sayfasından kitapları çek
    fetch("./html_sayfalari/kategoriler.html")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const kartlar = doc.querySelectorAll(".kitap-kart");

            kartlar.forEach(k => {
                kitaplar.push({
                    baslik: k.dataset.baslik,
                    yazar: k.dataset.yazar
                });
            });
        });

    // YAZDIKÇA ÖNERİ GELSİN
    aramaInput.addEventListener("input", () => {
        const kelime = aramaInput.value.trim().toLowerCase();
        oneriKutusu.innerHTML = "";
        oneriKutusu.style.display = "none";

        if (kelime.length < 2) return;

        const filtre = kitaplar.filter(k =>
            k.baslik.toLowerCase().includes(kelime) ||
            k.yazar.toLowerCase().includes(kelime)
        );

        filtre.forEach(k => {
            const div = document.createElement("div");
            div.className = "arama-oneri-item";
            div.textContent = `${k.baslik} – ${k.yazar}`;

            div.addEventListener("click", () => {
                window.location.href = "./html_sayfalari/kategoriler.html";
            });

            oneriKutusu.appendChild(div);
        });

        if (filtre.length > 0) {
            oneriKutusu.style.display = "block";
        }
    });

    // BOŞA TIKLAYINCA KAPANMA
    document.addEventListener("click", (e) => {
        if (!aramaInput.contains(e.target)) {
            oneriKutusu.style.display = "none";
        }
    });
});