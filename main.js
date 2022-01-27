
// Se pide el nombre al usuario
var monto, cuota,nombre_cliente,componentes_computadora;
function ingresar_computadora() {
    nombre_cliente = prompt("Cual es su nombre");
    componentes_computadora = prompt("¿Que componentes desea incluir?");

    monto = parseInt(prompt("Ingrese su monto total:"));
    cuota = parseInt(prompt("¿En cuantas cuotas desea pagar?"));

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
const cliente_01 = new computadora(nombre_cliente,componentes_computadora,monto,cuota);

cliente_01.saludar();
let monto_cuotas = cliente_01.calculo_cuotas(cliente_01.precio,cliente_01.cuotas);
cliente_01.mostrar_precio_final(monto_cuotas,precio_final);