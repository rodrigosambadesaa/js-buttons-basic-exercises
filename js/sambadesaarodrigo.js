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
    const apellidos = " Sambade Saa"
    alert(nombre + apellidos)
}

const bt8 = document.querySelector('#bt-8')

bt8.addEventListener('click', nombreConcatenado)