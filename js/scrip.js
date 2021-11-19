const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const boton = document.getElementById('btn');
const boton2 = document.getElementById('btn2');
const boton3 = document.getElementById('btn3');
const boton4 = document.getElementById('btn4');
const resultado = document.getElementById('resultado');
const btnBorrar = document.getElementById('borrar');

const camposVacios = 'Todos los campos deben estar completos'
const agregaEstilo = resultado.classList.add('error');
const sacarEstilo = resultado.classList.remove('error');

boton.addEventListener('click', sumar)
boton2.addEventListener('click', restar)
boton3.addEventListener('click', multiplicar)
boton4.addEventListener('click', dividir)
btnBorrar.addEventListener('click', borrar)


function esvalido() {
    if (num1.value === '' || num2.value === '') {
        return false
    }else {
        return true
    }

}

function sumar() {
    if ( !esvalido() ) {        
        alert(camposVacios) 
        return;
    }
    resultado.classList.remove('error');
    var resultadocuenta = Number(num1.value) + Number(num2.value)
    resultado.value = resultadocuenta
}

function restar() {
    if ( !esvalido() ) {
        alert(camposVacios) 
        return;
    }
    var resultadocuenta2 = Number(num1.value) - Number(num2.value)
    resultado.value = resultadocuenta2
}

function multiplicar () {
    if ( !esvalido() ) {
        alert(camposVacios) 
        return;
    }    
    var resultadocuenta3 = Number(num1.value) * Number(num2.value)
    resultado.value = resultadocuenta3
}

function dividir () {
    if ( !esvalido() ) {
        alert(camposVacios) 
        return;
    }    
    if (Number(num2.value) === 0) {
        alert('No podes dividir por 0')
        return; 
    }
    var resultadocuenta4 = Number(num1.value) / Number(num2.value)
    resultado.value = resultadocuenta4
}

function borrar() {
    num1.value = ''; 
    num2.value = ''; 
    resultado.value = '';

}

function setearError() {
    resultado.classList.add('error');
    resultado.value = 'ERROR'
}