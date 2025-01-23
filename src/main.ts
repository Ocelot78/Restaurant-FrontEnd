function kopiuj(element :HTMLButtonElement){
    if (element === null){
        console.error("Brak elementu do skopiowania")
    }else{
        navigator.clipboard.writeText(element.value)
    }

}
document.addEventListener('DOMContentLoaded', () =>{
    const telefon :any = document.getElementById("telefonKopiuj")
    const adres :any = document.getElementById("adresKopiuj")
    telefon.addEventListener('click', () =>{
        kopiuj(telefon)
    })
    adres.addEventListener('click', () =>{
        kopiuj(adres)
    })

})
