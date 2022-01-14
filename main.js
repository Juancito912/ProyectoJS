// Se pide el nombre al usuario
var num_ingresado;
function ingresar() {
    num_ingresado = parseInt(prompt("Ingrese su precio de costo:"));

    document.write ("El precio de costo es: " + num_ingresado + " Pesos");

    document.write("<br>");
}
let precio_final = 0;

function sumar_IVA (precio_inicial){
    const suma = function (a,b) {return a + b};
    const sacar_IVA = function (a) {return a * 0.21}

    precio_final = suma(precio_inicial,sacar_IVA(precio_inicial));
}

function mostrar_precio_final(precio){

    document.write ("Su precio con IVA es: " + precio +" Pesos");

}
ingresar();
sumar_IVA(num_ingresado);
mostrar_precio_final(precio_final);
document.write("<br>");

var num1,num2;

function ingresar_multiplos (){

    num1 = parseInt(prompt("ingrese un numero"));
    num2 = parseInt(prompt("ingrese otro numero"));

    if(!parseInt(num1) || !parseInt(num2)){
        alert("ingrese numeros validos");
        ingresar_multiplos();
    }
    else{
        document.write("Sus numeros a verificar si son multiplos son " + num1 +", " + num2);
    }

}
let es_multiplo;
function _es_multiplo(numero1,numero2){
    if(numero1 % numero2 == 0){
        es_multiplo = true;
    }
    else {
        es_multiplo = false;
    }
}

function mostrar_resultado(respuesta){
    if(respuesta == true){
        alert("Sus numeros son multiplos");
    }
    else{
        alert("Sus numeros no son multiplos");
    }
}

ingresar_multiplos();
_es_multiplo(num1,num2);
mostrar_resultado(es_multiplo);