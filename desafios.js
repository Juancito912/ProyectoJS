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


class Computadora{
    constructor(id,gama,precio,cuotas,img){

        this.id = id;
        this.gama = gama;
        this.cantidad = 1;
        this.precio = Number(precio);
        this.cuotas = Number(cuotas);
        this.precio_total = precio;
        this.img = img;
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
computadoras.push(new Computadora(0,"Baja",300,12,"./img/compu_mala.jpg"));
computadoras.push(new Computadora(1,"Media",400,3,"./img/compu_media.jpg"));
computadoras.push(new Computadora(2,"Alta ",500,6,"./img/compu_buena.jpg"));

let carrito = [];

// --FUNCIONES--

function imprimir_catalogo_HTML(computadoras){

    let contenedor = document.getElementById("contenedor")

    for (const computadora of computadoras) {

        let caja = document.createElement("div");

        caja.innerHTML = `
            <div class="card m-2 bg-dark">
                <div class="card-body text-center">
                    <img src="${computadora.img}"class="card-img-top img-fluid" alt="computadora">
                    <h2 class="card-title"> ${computadora.gama} </h2>
                    <p class="card-text">$${computadora.precio}</p>
                    <p class="card-text">${computadora.cuotas} cuotas</p>

                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button id="agregar${computadora.id}" type="button" class="btn btn-light">Agregar</button>
                    </div>
                </div>
            </div>
            `;
        
        contenedor.appendChild(caja);

        let boton = document.getElementById(`agregar${computadora.id}`);

        boton.onclick = () => agregar_carrito(computadora.id);

    }
    console.log(compu.id);
}


function agregar_carrito(id_producto){
    
    let computadora_en_carrito = carrito.find((elemento) => {
        if (elemento.id == id_producto) {
            return true;
        }
    });

    if (computadora_en_carrito) {
        
        let index = carrito.findIndex((elemento) => {
            if (elemento.id === computadora_en_carrito.id) {
                return true;
            }
        });

        carrito[index].agregar_cantidad();
        carrito[index].calculo_precio_final();
    } else {

        carrito.push(computadoras[id_producto]);
    }

    escribir_carrito(carrito);
}

function escribir_carrito(carrito) {
    let carritoEnHtml = document.getElementById("carrito");
    carritoEnHtml.innerHTML = "";

    let precio_final;

    precio_final = obtener_precio_total(carrito);

    let mensaje = document.createElement("div");
    
    mensaje.textContent = `Total:$${precio_final}`;

    carritoEnHtml.appendChild(mensaje);

    for(let computadora of carrito){
        let mensaje = document.createElement("div");

        mensaje.innerText = `${computadora.cantidad} Gama ${computadora.gama} $${computadora.precio_total}.
        `;


        carritoEnHtml.appendChild(mensaje);
    }

}
function obtener_precio_total(computadoras) {
    let precio_final = 0;

    for (const producto of computadoras) {
    precio_final += producto.precio_total;
    }

    return precio_final;
}

function imprimir_precio_total(precio_total) {
    
    let mensaje = document.createElement("div");

    // Agregamos el mensaje a dicho div
    mensaje.textContent = `El precio total de tu compra es de ${precio_total}`;

    carritoEnHtml.appendChild(mensaje);
}

imprimir_catalogo_HTML(computadoras);
// menu_compras();
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
