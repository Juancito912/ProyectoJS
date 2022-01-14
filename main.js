// Se pide el nombre al usuario
var monto, cuotas;
function ingresar() {
    monto = parseInt(prompt("Ingrese su monto total:"));
    cuotas = parseInt(prompt("¿En cuantas cuotas desea pagar?"));

    document.write ("Su monto total es: " + monto + " $ a pagar en " + cuotas +" cuotas");

    document.write("<br>");
}

let precio_final = 0;

function calculo_cuotas (precio_inicial,cuota){
    const suma = function (a,b) {return a + b};
    switch(cuota) {

        case 3 :
            precio_final = suma(precio_inicial,precio_inicial * 0.03);
            return precio_final / 3;

        case 6 :
            precio_final = suma(precio_inicial,precio_inicial * 0.06);
            return precio_final / 6;
        case 12:
            precio_final = suma(precio_inicial,precio_inicial * 0.12);
            return precio_final / 12;
        case 24:
            precio_final = suma(precio_inicial,precio_inicial * 0.24);
            return precio_final / 24;
        default :
            precio_final = precio_inicial;
            return precio_inicial;
    }

}

function mostrar_precio_final(precio,cuota,monto_cuota,monto_total){

    document.write ("Su precio inicial es:" + precio +" Pesos");
    document.write("<br>");
    document.write ("Sacado en "+ cuota + " cuotas seria un monto por cuota de: " +monto_cuota + " con un monto final de: " + monto_total);

}
ingresar();
calculo_cuotas(monto,cuotas)
mostrar_precio_final(monto,cuotas,calculo_cuotas(monto,cuotas),precio_final);
document.write("<br>");
