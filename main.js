// Se pide el nombre al usuario
const nombre = prompt("Ingrese su nombre:")

if (nombre != ""){
// Se saluda al usuario en la consola
    console.log("Hola " + nombre + ", Bienvenido al curso")
}
else
//Se alerta al usuario
alert("ERROR: No ingresaste el nombre de usuario")


// Se pide un numero al usuario
let numIngresado = prompt("Ingrese un numero");
let num2 = parseInt(numIngresado); // Se transforma el string a un number

if((numIngresado > 0) && (numIngresado < 100)) {
    alert("Su numero es positivo y menor que 100")
}

else if(numIngresado == 100){
    alert("Su numero es 100")
}

else if (numIngresado <0){
    alert("Su numero es negativo")
}

else {
    alert("Su numero es mayor que 100")
}
