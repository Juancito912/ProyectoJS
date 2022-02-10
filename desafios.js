// Se pide el nombre al usuario
// var monto, cuota,nombre_cliente,componentes_computadora;
// function ingresar_computadora() {
//     nombre_cliente = prompt("Cual es su nombre");
//     componentes_computadora = prompt("¿Que componentes desea incluir?");

//     monto = parseInt(prompt("Ingrese su monto total:"));
//     cuota = parseInt(prompt("¿En cuantas cuotas desea pagar?"));

// }
// var componentes = [];

// function ingresar_componentes(){
//     // var componente = prompt("Ingrese sus componentes q desea");
//     do {

//         var componente = prompt("Ingrese sus componentes q desea");
//         componentes.push(componente);

//     }while (componente != null);
//     alert ("Sus componenete son:" + componentes.join(", "));
// }


class computadora{
    constructor(id,gama,precio,cuotas){

        this.id = id;
        this.gama = gama;
        this.cantidad = 1;
        this.precio = Number(precio);
        this.cuotas = Number(cuotas);
        this.precio_total = precio;
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
    agregar_cantidad(){
        this.cantidad++;
    }
    calculo_precio_final(){
        this.precio_total = this.precio * this.cantidad;
    }
    mostrar_precio_final(monto_cuota,monto_total){
        document.write ("Sacado en "+ this.cuotas + " cuotas seria un monto por cuota de: " + monto_cuota + " con un monto final de: " + monto_total);
    }
}
// ingresar_computadora();
const computadoras = [];

// computadoras.push(new computadora(nombre_cliente,componentes_computadora,monto,cuota));
computadoras.push(new computadora(0,"baja",300,12));
computadoras.push(new computadora(1,"media",400,3));
computadoras.push(new computadora(2,"alta ",500,6));

let carrito = [];
let carritoEnHtml = document.getElementById("carrito");

// --FUNCIONES--

function imprimir_catalogo_HTML(computadoras){

    let contenedor = document.getElementById("contenedor");

    for (computadora of computadoras) {
        let caja = document.createElement("div")

        caja.innerHTML = `

            <div class=caja">
                <h2 class="caja-titulo"> ${computadora.gama} </h2>
                <p class="caja-precio">$${computadora.precio}</p>
                <p class="caja-cuotas">${computadora.cuotas} cuotas</p>
            </div>
    `;
    contenedor.appendChild(caja);
    }
}

function seleccionar_producto() {
    let id_producto =
    prompt(`Escriba el número del producto a comprar, o escriba 'ESC' para finalizar

0:${computadoras[0].gama}, Precio: ${computadoras[0].precio}, Cuotas: ${computadoras[0].cuotas}
1:${computadoras[1].gama}, Precio: ${computadoras[1].precio}, Cuotas: ${computadoras[1].cuotas}
2:${computadoras[2].gama}, Precio: ${computadoras[2].precio}, Cuotas: ${computadoras[2].cuotas}`);

    return id_producto;
}

function menu_compras(){
    let id_producto = seleccionar_producto();

    while (id_producto !== "ESC"){
    let mensaje = document.createElement("div");
    mensaje.textContent = `Se ha añadido al carrito el alfajor ${computadoras[id_producto].gama}`;
    carritoEnHtml.appendChild(mensaje);

    // Verificamos si ese tipo de alfajor ya se encuentra en el array
    // con el método find()
    // Este método en caso de dar true, nos devuelve el primer elemento del array
    // que cumple con la condición de búsqueda
    let alfajorEnCarrito = carrito.find((elemento) => {
        if (elemento.id == id_producto) {
            return true;
        }
    });

    if (alfajorEnCarrito) {
      // Si el alfajor se encuentra en el carrito, alfajorEnCarrito devolverá
      // true, por lo cual se ejecutará este bloque de código
      // y se le sumará uno a la cantidad de esa marca en el carrito

      // Primero debemos hallar el index donde se encuentra
      // el alfajor en el carrito (ya que no va a ser el mismo que el del array alfajores);
    let index = carrito.findIndex((elemento) => {
        if (elemento.id === alfajorEnCarrito.id) {
            return true;
        }
    });

    carrito[index].agregar_cantidad();
    carrito[index].calculo_precio_final();
    } else {
      // El alfajor no se encuentra en el carrito, así que
      // lo pusheamos al array asignándole la clase Alfajor
      // para poder acceder a sus métodos
        carrito.push(computadoras[id_producto]);
    }

    // Una vez que terminamos de agregar el producto al carrito
    // Volvemos a preguntar al usuario si desea seguir comprando
    // para que se siga ejecutando el while
    id_producto = seleccionar_producto();
}

  // Una vez que finalizamos la compra informamos
  // el precio total de la misma
    let precio_final = obtener_precio_total();
    imprimir_precio_total(precio_final);
}

function obtener_precio_total() {
    let precio_final = 0;

    for (const producto of carrito) {
    precio_final += producto.precio_total;
    }

    return precio_final;
}
function imprimir_precio_total(precio_total) {
    // Se imprime en el contenedor del carrito el precio total
    // Creamos el div que contendrá el mensaje
    let mensaje = document.createElement("div");

    // Agregamos el mensaje a dicho div
    mensaje.textContent = `El precio total de tu compra es de ${precio_total}`;

    // Enlazamos el div del mensaje en el div con la info del carrito
    carritoEnHtml.appendChild(mensaje);
}

imprimir_catalogo_HTML(computadoras);
menu_compras();
// function ordenar_clientes_precio (){
//     clientes.sort(function(a,b){
//         if (a.precio > b.precio) {
//             return 1;
//         }
//         if (a.precio < b.precio) {
//             return -1;
//         }
//         return 0;
//     })
//     console.log(clientes);
// }

// function ordenar_clientes_cuotas(){
//     clientes.sort(function(a,b){
//         if (b.cuotas > a.cuotas) {
//             return 1;
//         }
//         if (b.cuotas < a.cuotas) {
//             return -1;
//         }
//         return 0;
//     })
//     console.log(clientes)
// }
// ordenar_clientes_precio();
