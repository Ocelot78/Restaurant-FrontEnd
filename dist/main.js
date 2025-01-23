"use strict";
function kopiuj(element) {
    if (element === null) {
        console.error("Brak elementu do skopiowania");
    }
    else {
        navigator.clipboard.writeText(element.value);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const telefon = document.getElementById("telefonKopiuj");
    const adres = document.getElementById("adresKopiuj");
    telefon.addEventListener('click', () => {
        kopiuj(telefon);
    });
    adres.addEventListener('click', () => {
        kopiuj(adres);
    });
});
