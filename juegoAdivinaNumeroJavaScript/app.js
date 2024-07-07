
generarNumeroSecreto();
console.log(numeroSecreto);
let intentos = 1;
let numMaxIntentos = 3;

mensajesIniciales();


///////////////////////////////////////////////////////////////
function mensajesIniciales() {
    llamarElemento('h1', 'Adivina el número secreto');
    llamarElemento('p', 'Elige un número entre 1 y 10');
}
////////////////////////////////////////////////////////////
function botonIntentar() {
    let numeroUsuario = parseInt(document.getElementById('cajaNumero').value);

    if (numeroUsuario == numeroSecreto) {
        llamarElemento('h1', 'Adivinaste el número !!!');
        llamarElemento('p', `Ganaste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        onOffBotones();
    }  else {
        limpiarCaja();
        if (numeroUsuario > numeroSecreto) {
            llamarElemento('p', 'El número secreto es menor');
        } else if (numeroUsuario < numeroSecreto) {
            llamarElemento('p', 'El número secreto es mayor');
        }
        intentos++;

        if (intentos > numMaxIntentos) {
            llamarElemento("h1", `Has perdido!!!`);
            llamarElemento("p" ,`El número secreto era: ${numeroSecreto}`);
            onOffBotones();
        }   
    }
    return;
}
////////////////////////////////////////////////////////////
function llamarElemento(elemento, texto){
    let etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto;
    return;
}  
////////////////////////////////////////////////////////////
function limpiarCaja() {
    let vaciarCaja = document.getElementById("cajaNumero");
    vaciarCaja.value = "";
    return;
}
//////////////////////////////////////////////////////////////
function reiniciarJuego() {
    mensajesIniciales();
    limpiarCaja();
    intentos = 1;
    generarNumeroSecreto();
    console.log(numeroSecreto);
    document.getElementById("intento").removeAttribute('disabled');
    document.getElementById("reiniciar").setAttribute('disabled', 'true');
}
/////////////////////////////////////////////////////////////
function generarNumeroSecreto() {
    numeroSecreto =  Math.floor(Math.random() * 10) + 1;
}


function onOffBotones() {
    document.getElementById("intento").setAttribute('disabled', 'true');
    document.getElementById("reiniciar").removeAttribute('disabled');
    return;
}
///////////////////////////////////////////////////////////////////////////////////


