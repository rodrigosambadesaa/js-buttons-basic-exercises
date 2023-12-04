document // Page Visibility API
  .addEventListener(
    'visibilitychange',
    function () {
      const URL = document.hidden ? '../img/favicon.ico' : '../img/favicon-active.ico'
      document.querySelector('[rel*="icon"]')
          .setAttribute('href', URL)
    }
  )

function miFuncion() {
    alert("Hola, Rodrigo")
}

const bt1 = document.querySelector('#bt-1')

bt1.addEventListener('click', miFuncion)

function decirNombre() {
    const nombre = prompt("Introduzca su nombre")
    alert(nombre)
}

const bt2 = document.querySelector('#bt-2')

bt2.addEventListener('click', decirNombre)

function botonAsignar() {
    let a
    let b = 2
    a = 7
    b = a
    console.log(a, b)
}

const bt3 = document.querySelector('#bt-3')

bt3.addEventListener('click', botonAsignar)

function dameResultado () {
    const a = 5, b = 10, c = "Estudio informática"
    console.log(a + b + c)
}

const bt4 = document.querySelector('#bt-4')

bt4.addEventListener('click', dameResultado)

function cambiarValorConPrompt() {
    let i = 1
    i = parseInt(prompt('Introduzca el nuevo valor de i'))
    console.log("El valor de i es: " + i)
}

// Ejercicio 5
let estudiosDelAlumno
let operador1
let resultadoFinal

const bt6 = document.querySelector('#bt-6')

bt6.addEventListener('click', cambiarValorConPrompt)

function cocienteResto() {
    const dividendo = 5
    const divisor = 3
    const cociente = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor
    console.log("La división entre " + dividendo + " y " + divisor + " tiene de cociente " + cociente + " y resto " + resto) 
}

const bt7 = document.querySelector('#bt-7')

bt7.addEventListener('click', cocienteResto)

function nombreConcatenado() {
    const nombre = "Rodrigo"
    const apellidos = " Sambade Saá"
    alert(nombre + apellidos)
}

const bt8 = document.querySelector('#bt-8')

bt8.addEventListener('click', nombreConcatenado)