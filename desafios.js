// Se pide el nombre al usuario
var monto, cuota,nombre_cliente,componentes_computadora;
function ingresar_computadora() {
    nombre_cliente = prompt("Cual es su nombre");
    componentes_computadora = prompt("¿Que componentes desea incluir?");

    monto = parseInt(prompt("Ingrese su monto total:"));
    cuota = parseInt(prompt("¿En cuantas cuotas desea pagar?"));

}
var componentes = [];

function ingresar_componentes(){
    // var componente = prompt("Ingrese sus componentes q desea");
    do {

        var componente = prompt("Ingrese sus componentes q desea");
        componentes.push(componente);

    }while (componente != null);
    alert ("Sus componenete son:" + componentes.join(", "));
}

let precio_final = 0;
class computadora{
    constructor(nombre,componentes,precio,cuotas){

        this.nombre = nombre.toUpperCase();
        this.componentes = componentes;
        this.precio = Number(precio);
        this.cuotas = Number(cuotas);
    }
    saludar(){
        alert("Bienvenido " + this.nombre);
    }
    calculo_cuotas (precio,cuota){
        const suma = function (a,b) {return a + b};
        switch(cuota) {
    
            case 3 :
                precio_final = suma(precio,precio * 0.03);
                return precio_final / 3;
    
            case 6 :
                precio_final = suma(precio,precio * 0.06);
                return precio_final / 6;
            case 12:
                precio_final = suma(precio,precio * 0.12);
                return precio_final / 12;
            case 24:
                precio_final = suma(precio,precio * 0.24);
                return precio_final / 24;
            default :
                precio_final = precio;
                return precio;
        }
    }
    mostrar_precio_final(monto_cuota,monto_total){
        document.write ("Sacado en "+ this.cuotas + " cuotas seria un monto por cuota de: " + monto_cuota + " con un monto final de: " + monto_total);
    }
}
ingresar_computadora();
const clientes = [];

clientes.push(new computadora(nombre_cliente,componentes_computadora,monto,cuota));
clientes.push(new computadora("Stefano","mother 2 y ram 3",450,12));
clientes.push(new computadora("Juan","mother 1 ram 1",500,3));
clientes.push(new computadora("Gaston","mother 3 ram 2 ",300,6));
clientes.push(new computadora("Fran","mother 2 ram 3",360,24));


function ordenar_clientes_precio (){
    clientes.sort(function(a,b){
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        return 0;
    })
    console.log(clientes);
}

function ordenar_clientes_cuotas(){
    clientes.sort(function(a,b){
        if (b.cuotas > a.cuotas) {
            return 1;
        }
        if (b.cuotas < a.cuotas) {
            return -1;
        }
        return 0;
    })
    console.log(clientes)
}
ordenar_clientes_precio();
