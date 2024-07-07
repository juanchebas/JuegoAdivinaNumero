/////////////////////////////inicio codigo///////////////////////////////////////
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numMaxPosible = 10;
let numMinPosible = 1;
let intentos = 1;
let maxIntentos = 3;
console.log(numeroSecreto);
mensajesIniciales();
document.getElementById('iniciar').removeAttribute('disabled');
//////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////
function botonIntentar() {
    let numeroUsuario = parseInt(document.getElementById("valorInput").value);

    if (numeroUsuario == numeroSecreto) {
        textoElementos('h1', 'GANASTE!!!');
        textoElementos('p', `Adivinaste el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').setAttribute("disabled", 'true');
    }  else  {
        limpiarCaja();
        if (numeroUsuario > maxIntentos) {
            textoElementos('p', `Número invalido!!! ❌ intentos restantes: ${maxIntentos - intentos}`);
        }  else if (numeroUsuario < 1) {
            textoElementos('p', `El número secreto es menor al rango solicitado, número de intentos restantes ${maxIntentos - intentos}`);
        }  else if (numeroUsuario > numeroSecreto){
            textoElementos('p', 'El número secreto es menor');
        }  else if (numeroUsuario < numeroSecreto){
            textoElementos('p', 'El número secreto es mayor');
        }  else {
            textoElementos('p', `Intento perdido, debe digitar un número entre ${numMinPosible} y ${numMaxPosible}`);
        }
        intentos++;
    }

    if (intentos > maxIntentos) {
        textoElementos('h1', 'PERDISTE!!! JUEGA DE NUEVO');
        textoElementos('p', `Perdiste:  Intentos realizados: ${maxIntentos}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').setAttribute("disabled", 'true');
    }
}
//////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////
function textoElementos(elemento, texto) {
    let element = document.querySelector(elemento);
    element.innerHTML = texto;
    return;
}
//////////////////////////////////////////////////////////////////////////////////////
function limpiarCaja() {
    let vaciarCaja = document.getElementById("valorInput");
    vaciarCaja.value = "";
    return;
}
//////////////////////////////////////////////////////////////////////////////////////////
function botonNuevo() {
    limpiarCaja();
    mensajesIniciales();
    document.querySelector('#reiniciar').setAttribute("disabled", 'true');
    intentos = 1;
    document.getElementById('iniciar').removeAttribute('disabled');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mensajesIniciales() {
    textoElementos('h1', 'JUEGO ADIVINAR NÚMERO');
    textoElementos('p', `Elige un número entre ${numMinPosible} y ${numMaxPosible}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////


