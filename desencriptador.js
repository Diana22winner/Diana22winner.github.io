var desencriptar = document.querySelector("#desencriptar")
var desencriptadotexto = document.querySelector("#contenidoencriptado")

desencriptar.addEventListener("click", function() {

    var Mensaje = document.querySelector("#mensaje")
    var listamensaje = Mensaje.value.split('')

    var letra = ["a","e","i","o","u"];
    var palabra = ["ai","enter","imes","ober","ufat"];    
    var dsencriptado = [];
    var textofinal = "";
    

    var desencriptarPalabra = 1
    for(var i = 0; i < listamensaje.length; i += desencriptarPalabra){

        var contador = 0//para contar y ver si eaa letra no es una vocal entonces q tambien la ponga en el texto final
        desencriptarPalabra = 1
      
        for(var j = 0; j < letra.length; j++){

            if (listamensaje[i] == letra[j]) {

                desencriptarPalabra = palabra[j].length
                var palabrilla = Mensaje.value.substring(i,desencriptarPalabra+i)
               
                if (palabra[j] == palabrilla) {

                    dsencriptado.push(letra[j])
                    textofinal += letra[j]
                    contador++

                }

            }

        }

        if (contador == 0) {

            textofinal += listamensaje[i]

        }


    }

    console.log(dsencriptado)
    desencriptadotexto.textContent = textofinal
    Mensaje.value = ""

})

