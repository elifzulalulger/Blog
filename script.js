const arama = document.getElementById("arama");
const kartlar = document.querySelectorAll(".kart");
const sonucSayaci = document.getElementById("sonucSayaci");
const bosMesaj = document.getElementById("bosMesaj");
const temizle = document.getElementById("temizle");

arama.addEventListener("input", function () {
    const arananKelime = arama.value.trim().toLocaleLowerCase("tr");
        let bulunan = 0;

            kartlar.forEach(function (kart) {
                    const baslik = kart.querySelector("h3").textContent.toLocaleLowerCase("tr");

                            if (baslik.includes(arananKelime)) {
                                        kart.style.display = "block";
                                                    bulunan++;
                                                            } else {
                                                                        kart.style.display = "none";
                                                                                }
                                                                                    });

                                                                                        sonucSayaci.textContent = bulunan + " yazı bulundu.";
                                                                                            bosMesaj.hidden = bulunan !== 0;
                                                                                            });

                                                                                            temizle.addEventListener("click", function () {
                                                                                                arama.value = "";
                                                                                                    arama.dispatchEvent(new Event("input"));
                                                                                                        arama.focus();
                                                                                                        });