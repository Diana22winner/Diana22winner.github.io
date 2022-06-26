

var botonencriptar = document.querySelector("#encriptar")

var imagen = document.querySelector("#munequito")
var encontrar = document.querySelector("#encontrar")
var rectangulo = document.querySelector("#rectangulo")
var ingresar = document.querySelector("#ingresar")

var parteRect = document.querySelector("#parteRectangulo")

var elementosRect = document.querySelector("#partesdelRect")

var operacion = document.querySelector("#contenidoencriptado")


//var operacion = document.querySelector("#contenidoencriptado")


botonencriptar.addEventListener("click", function () {

    var Mensaje = document.querySelector("#mensaje")
    
    imagen.classList.add("desaparecer")
    encontrar.classList.add("desaparecer")
    ingresar.classList.add("desaparecer")
    parteRect.classList.remove("desaparecer")

   
    elementosRect.remove()

    var listamensaje = Mensaje.value.split('');
    console.log(listamensaje)
    var letra = ["a","e","i","o","u"];
    var palabra = ["ai","enter","imes","ober","ufat"];
    var encriptado = [];
    var palabrilla = "";
    

for (var i = 0; i < listamensaje.length; i++) {

    var contador = 0;
    for (var j = 0; j < letra.length; j++) {
        if (listamensaje[i] == letra[j]){

            encriptado.push(palabra[j])
            palabrilla = palabrilla + palabra[j]
            contador += 1

        } 

        
    }

    if (contador < 1) {

            palabrilla = palabrilla + listamensaje[i]
    }

}
/*parteRect.classList.remove("parteRectangulo")
parteRect.classList.add("parteRectangulomostrar")*/

console.log(encriptado)
console.log(palabrilla)

operacion.textContent = palabrilla

Mensaje.value = ""



})

//AHORA PARA QUE DEFRENTE AL HACER CLCK E EL RECTANGULO BLANCO PUEDAS ESCRIBIR TU MENSAJE





