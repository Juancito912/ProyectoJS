var nombre;
// Se le pide el nombre al usuario
function pedir_info(){
    nombre = prompt("Ingrese su nombre por favor");

    //si es invalido, se le obliga a repetir la operacion
    if (!nombre != ""){
        alert("ERROR, ingrese un nombre valido");
        pedir_info();
    }
    // Se saluda al usuario
    else 
        alert(nombre.toLocaleUpperCase() + ", Bienvenido a la Tienda de Computacion")

}

// Funcion q dependiendo las cuotas, le incrementa el monto total
function aplicar_recargo_cuotas (monto,cant_cuotas){
    const suma = function (a,b) {return a + b};

    switch(cant_cuotas) {
        case 3:
            return suma(monto,monto*0.08);
        case 6:
            return suma(monto,monto*0.1);
        case 12:
            return suma(monto,monto*0.15);
    }
}

// Funcion q le resta un porcentaje al monto inicial, dependiendo del decuento q tenga
function aplicar_descuento(monto,descuento){
    const resta = function (a,b) {return a - b};
    return resta(monto,monto*descuento);
}

// Calcula el monto por cuota
function aplicar_cuotas(monto,cant_cuotas){
    return monto/cant_cuotas;
}

let precio,cuotas,descuento;
// Funcion q da valores a las variables dependiendo que gama se desea
function elejir_computadora(){
    let tipo = prompt("¿Que gama de computadora desea?(baja,media o alta)");

    switch(tipo) {

        case "baja" :
            precio = 1200;
            cuotas = 3;
            descuento = 0.1;
            break;

        case "media" :
            precio = 2500;
            cuotas = 6;
            descuento = 0.15;
            break;

        case "alta" :
            precio = 3700;
            cuotas = 12;
            descuento = 0.2;
            break;

        default :
        alert("Escriba la gama correctamente");
        elejir_computadora();
    }

}

// llama a las anteriores funciones para darle datos al usuario
function montrar_montos_finales(){
    alert("El precio en un pago es de " + precio + " incluyendo el descuendo le queda en " + aplicar_descuento(precio,descuento));
    alert("En cambio en "+cuotas + " cuotas el nuevo precio es de "+ aplicar_recargo_cuotas(precio,cuotas) 
    + " siendo asi " + aplicar_cuotas(aplicar_recargo_cuotas(precio,cuotas),cuotas) + " por cuota");
}
// Se despide al usuario por consola
function despedir (){
    console.log(nombre + " ,muchas gracias por su visita");
}

pedir_info(); 
elejir_computadora();
montrar_montos_finales();
despedir();