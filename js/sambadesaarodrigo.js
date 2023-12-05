function cocienteResto() {
    let dividendo = prompt("Introduzca el dividendo")

    if (dividendo != null) {
        let divisor = prompt("Introduzca el divisor")
    
        if (divisor != null) {
            let cociente = dividendo / divisor
            let resto = dividendo % divisor
            alert("La división entre " + dividendo + " y " + divisor + " tiene de cociente " + cociente + " y de resto " + resto)  
        }
    }
}

const bt7 = document.querySelector('#bt-7')

bt7.addEventListener('click', cocienteResto)

function nombreConcatenado() {
    let nombre = prompt("Introduzca su nombre")

    if (nombre != null) {
        let apellidos = prompt("Introduzca sus apellidos")

        if (apellidos != null) {
            alert(nombre + " " + apellidos)
        }
    }
}

const bt8 = document.querySelector('#bt-8')

bt8.addEventListener('click', nombreConcatenado)