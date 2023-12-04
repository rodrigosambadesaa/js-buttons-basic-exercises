function miFuncion() {
    alert("Hola, Rodrigo")
}

document.querySelector('#bt-1').addEventListener('click', miFuncion)

function decirNombre() {
    const nombre = prompt("Introduzca su nombre")
    alert(nombre)
}

document.querySelector('#bt-2').addEventListener('click', decirNombre)

function botonAsignar() {
    let a
    let b = 2
    a = 7
    b = a
    console.log(a, b)
}

document.querySelector('#bt-3').addEventListener('click', botonAsignar)

function dameResultado () {
    let a = 5, b = 10, c = "Estudio informática"
    console.log(a + b + c)
}

document.querySelector('#bt-4').addEventListener('click', dameResultado)

function cambiarValorConPrompt() {
    let i = 1
    i = parseInt(prompt('Introduzca el nuevo valor de i'))
}

document.querySelector('#bt-6').addEventListener('click', cambiarValorConPrompt)

function cocienteResto() {
    let dividendo = 5
    let divisor = 3
    let cociente = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor 
}

document.querySelector('#bt-7').addEventListener('click', cocienteResto)

function nombreConcatenado() {
    const nombre = "Rodrigo"
    const apellidos = " Sambade Saá"
    alert(nombre + apellidos)
}

document.querySelector('#bt-8').addEventListener('click', nombreConcatenado)