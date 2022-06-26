
var copiarboton = document.querySelector(".copiar")
var contenidoRectBlanco = document.querySelector("#contenidoencriptado")

copiarboton.addEventListener("click", function(){

    contenidoRectBlanco.select()
    document.execCommand('copy')

})