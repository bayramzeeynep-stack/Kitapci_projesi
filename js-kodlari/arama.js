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


const turkEdebiyati = [
{ ad: "Ben Sana Mecburum", id: "ben-sana-mecburum" },
{ ad: "Zeytindağı", id: "zeytindagi" },
{ ad: "İçimizdeki Şeytan", id: "icimizdeki-seytan" },
{ ad: "Anayurt Oteli", id: "anayurt-oteli" },
{ ad: "Aşk-ı Memnu", id: "aski-memnu" },
{ ad: "Türkçülüğün Esasları", id: "turkculugun-esaslari" },
{ ad: "Gulyabani", id: "gulyabani" },
{ ad: "Masumiyet Müzesi", id: "masumiyet-muzesi" },
{ ad: "Puslu Kıtalar Atlası", id: "puslu-kitlar-atlasi" }
]

const ingilizEdebiyati = [
    { ad: "Orlando", id: "orlando" },
    { ad: "1984", id: "1984" },
    { ad: "Aşk ve Gurur", id: "ask-ve-gurur" },
    { ad: "Hamlet", id: "hamlet" },
    { ad: "İki Şehrin Hikayesi", id: "iki-sehrin-hikayesi" },
    { ad: "Jane Eyre", id: "jane-eyre" },
    { ad: "Dorian Gray’in Portresi", id: "dorian-grayin-portresi" },
    { ad: "Romeo ve Juliet", id: "romeo-ve-juliet" },
    { ad: "Uğultulu Tepeler", id: "ugultulu-tepeler" }
]

const japonEdebiyati = [
{ ad: "Bir Kedi, Bir Adam, İki Kadın", id: "bir-kedi-bir-adam-iki-kadin" },
{ ad: "Çılgın Bir İhtiyarın Güncesi", id: "cilgin-bir-ihtiyarin-guncesi" },
{ ad: "Dedektif Hanshiçi'nin Tuhaf Vaka Defteri", id: "dedektif-hanshicinin-tuhaf-vaka-defteri" },
{ ad: "İnsanlığımı Yitirirken", id: "insanligimi-yitirirken" },
{ ad: "Kadın Maskeleri", id: "kadin-maskeleri" },
{ ad: "Kurbanı Beslemek", id: "kurbani-beslemek" },
{ ad: "Ölmek İstiyorum Ama Tteokbokki de Yemek İstiyorum", id: "olmek-istiyorum-ama-tteokbokki-de-yemek-istiyorum" },
{ ad: "Şeytanın Çırağı", id: "seytanin-ciragi" },
{ ad: "Yaşamak", id: "yasamak" },
] 

const cocukEdebiyati = [
    { ad: "Küçük Prens", id: "kucuk-prens" },
    { ad: "Şeker Portakalı", id: "seker-portakali" },
    { ad: "Abartma Tozu", id: "abartma-tozu" },
    { ad: "Çizgili Pijamalı Çocuk", id: "cizgili-pijamali-cocuk" },
    { ad: "Dedemin Bakkalı", id: "dedemin-bakkali" },
    { ad: "Fadiş", id: "fadis" },
    { ad: "Matilda", id: "matilda" },
    { ad: "Momo", id: "momo" },
    { ad: "Robinson Crusoe", id: "robinson-crusoe" },
]

const bilim = [
    { ad: "Alfa ve Omega - Evrenin Başlangıcı ve Sonu", id: "alfa-ve-omega-evrenin-baslangici-ve-sonu" },
    { ad: "Atomik Alışkanlıklar", id: "atomik-aliskanliklar" },
    { ad: "Beynini Doğru Besle", id: "beynini-dogru-besle" },
    { ad: "Ceviz Kabuğundaki Evren", id: "ceviz-kabugundaki-evren" },
    { ad: "Gen Bencildir", id: "gen-bencildir" },
    { ad: "Bilinçaltının Gücü", id: "bilincaltinin-gucu" },
    { ad: "Kendini Değiştirmek, Dünyayı Değiştirmek", id: "kendini-degistirmek-dunyayi-degistirmek" },
    { ad: "Kuantum", id: "kuantum" },
    { ad: "Rezonans Kanunu", id: "rezonans-kanunu" },
]

const tarihSiyaset = [
{ ad: "Avrupa Neden Dünyayı Fethetti", id: "avrupa-neden-dunyayi-fethetti" },
{ ad: "Devlet", id: "devlet" },
{ ad: "Gizlenen Dünya Tarihi", id: "gizlenen-dunya-tarihi" },
{ ad: "Kısa Dünya Tarihi", id: "kisa-dunya-tarihi" },
{ ad: "Milliyetçilikten Önce Milletler", id: "milliyetcilikten-once-milletler" },
{ ad: "Nutuk", id: "nutuk" },
{ ad: "Prens", id: "prens" },
{ ad: "Tarih Nedir", id: "tarih-nedir" },
{ ad: "Tek Adam", id: "tek-adam" },
]

const felsefeDusunce = [       
   
    { ad: "Bilinçaltı", id: "bilincalti" },
    { ad: "İnsanın Anlam Arayışı", id: "insanin-anlam-arayisi" },
    { ad: "Kaderini Sev Çünkü Aslında Hayatın Bu", id: "kaderini-sev-cunku-aslinda-hayatin-bu" },
    { ad: "Mutlu Olma Sanatı", id: "mutlu-olma-sanati" },
    { ad: "Nevrozlar", id: "nevrozlar" },
    { ad: "Freud ve Psikanaliz", id: "freud-ve-psikanaliz" },
    { ad: "Siyaset Felsefesi Sözlüğü", id: "siyaset-felsefesi-sozlugu" },
    { ad: "Sofie'nin Dünyası", id: "sofienin-dunyasi" },
    { ad: "Sokrates'in Savunması", id: "sokratesin-savunmasi" },

];

const kitaplar = [
    ...turkEdebiyati,
    ...ingilizEdebiyati,
    ...japonEdebiyati,
    ...cocukEdebiyati,
    ...bilim,
    ...tarihSiyaset,
    ...felsefeDusunce
];


