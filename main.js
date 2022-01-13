// Se pide el nombre al usuario
var numIngresado = parseInt(prompt("Ingrese su numero:"));
var numMaxRep =parseInt(prompt(" ¿Cuantas veces le sumamos 1? "))

for(let i = 0; i < numMaxRep; i++){
// escribe en el html el numero ingresado 
    document.write(numIngresado);
// aumenta el numero ingresado
    numIngresado += 1;
// pne un cambio de linea en el html
    document.write("<br>");
}

let entrada = prompt ("ingresa un dato")

while(entrada != null) {
    
    document.write(entrada);

    entrada = prompt("Ingresa otro dato");
}
document.write("<br>");

let numero = 0;
do {
    let numSumar = parseInt(prompt("ingrese el numero para sumar"));

    numero += numSumar;
    document.write(numero);
    document.write("<br>");

} while(parseInt(numero));