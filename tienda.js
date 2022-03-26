// Constructor
class Computadora {
    constructor(computadora){
        this.id = computadora.id;
        this.gama = computadora.gama;
        this.precio = computadora.precio;
        this.precioTotal = computadora.precio;
        this.cantidad = 0;
        this.descripcion=computadora.descripcion;
        this.img = computadora.img;
    }
    agregarUnidad(){
        this.cantidad++;
    }
    quitarUnidad(){
        this.cantidad--;
    }
    calculoTotal(){
        this.precioTotal = this.precio*this.cantidad;
    }
}

// Variables
const computadoras = [
    {
        id:0,
        gama:"Computadora Gama Baja",
        descripcion:"A3 PC INTEL CORE I3 SSD 240GB RAM 8GB",
        precio: 500,
        img:"./img/compu_mala.jpg",
        cantidad:0,
    },
    {
        id:1,
        gama:"Computadora Gama Media",
        descripcion:"A6 PC INTEL CORE I5 SSD 480GB RAM 16GB GT730",
        precio: 700,
        img:"./img/compu_media.jpg",
        cantidad:0,
    },
    {
        id:2,
        gama:"Computadora Gama Alta",
        descripcion:"B6 PC INTEL CORE I7 SSD 960GB RAM 16GB GT1030",
        precio: 1000,
        img:"./img/compu_buena.jpg",
        cantidad:0,
    },
    {
        id:3,
        gama:"Notebook Gama Baja",
        descripcion:"BNA NOT HP PB440G7 I510210U 8GB 256GB W10P 8ZQ89LT",
        precio: 600,
        img:"./img/nb_baja.jpg",
        cantidad:0,
    },
    {
        id:4,
        gama:"Notebook Gama Media",
        descripcion:"MACBOOK AIR 13 M1 8GB 512GB MGN73LE",
        precio: 800,
        img:"./img/nb_media.jpg",
        cantidad:0,
    },
    {
        id:5,
        gama:"Notebook Gama Alta",
        descripcion:"APPLE MBP 2GHZ 4C GEN10 I5 1TB 13.3I MWP52LE/A",
        precio: 1100,
        img:"./img/nb_alta.jpg",
        cantidad:0,
    },
];

let carrito = [];
const moneda = "$";

// Funciones

function imprimirCatalogo(computadoras){

    for(const computadora of computadoras){
        
        $("#contenedor").append(`
        <div class="card m-2 bg-light">
            <div class="card-body text-center">
                <img src="${computadora.img}"class="card-img-top img-fluid" alt=" ${computadora.gama}">
                <h2 class="card-title"> ${computadora.gama} </h2>
                <h6 class="card-subtitle text-muted">${computadora.descripcion}</h5>
                <p class="card-text">${computadora.precio} ${moneda}</p>
                <div class="btn-group">
                    <button class="btn btn-dark" type="button" id="agregar${computadora.id}"> Agregar </button>
                </div>
            </div>
        </div>
        `);

        $(`#agregar${computadora.id}`).on("click", () => {
            agregarProducto(computadora.id);
        });
    }

}


function buscarProducto(array,id){
    if(array.length === 0){
        return undefined;
    }
    let computadora = array.find((e) => {
        if(e.id == id){
            return true;
        }
    });
    return computadora;
}

function buscarIndexProducto(array,id){
    let index = array.findIndex((e)=> {
        if (e.id == id) {
            return true;
        } 
    });
    return index;
}

function agregarProducto(id){
    let compuEnCarrito = buscarProducto(carrito,id);

    if(!compuEnCarrito){
        carrito.push(new Computadora(computadoras[id]));
    }

    let index = buscarIndexProducto(carrito,id);
        carrito[index].agregarUnidad();
        carrito[index].calculoTotal();
        
    console.log(carrito);
    dibujarCarrito(carrito);
}

function eliminarProductoUno(id){
    let compuEnCarrito = buscarProducto(carrito,id);
    let index = buscarIndexProducto(carrito,id);
    if(compuEnCarrito.cantidad > 1){
        carrito[index].quitarUnidad();
        carrito[index].calculoTotal();
    }else{
        carrito.splice(index,1);
    }
    dibujarCarrito(carrito);
}

function eliminarProducto(id){
    let index = buscarIndexProducto(carrito,id);
    carrito.splice(index,1);
    dibujarCarrito(carrito);
}

function calculoTotalCompra(array){
    let total =0;
    for(let computadora of array){
        total += computadora.precioTotal;
    }
    return total;
}

function dibujarCarrito(array){

    $("#carrito").html("");

    $("#carrito").append(`<h2 class="mb-4 mt-4 fw-bold text-decoration-underline text-center"> Carrito de Compras </h2>`);

    if(array.length === 0){
        $("#carrito").append(`
        <div class="text-center mt-3">
            <h4 class="mb-3"> No hay elementos en el carrito </h4>
            <button class="btn btn-dark" type="button" > <a href="#header">Seguir comprando </a> </button>
        </div>
        `);
    } else {
        $("#carrito").append(`
        <table class="table table-light table-bordered fs-5">
            <thead>
                <tr class="table-info">
                    <th scope="col">  </th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">  </th>
                </tr>
            </thead>
            <tbody id="tabla">

            </tbody>
        </table>
        `);
        for(const computadora of array){
            $("#tabla").append(`
                <tr class="">
                <td> <img src="${computadora.img}"class="img-fluid img-car" alt=" ${computadora.gama}"> </td>
                <td class="p-4">${computadora.descripcion}</td>
                <td class="p-4">${computadora.precio} ${moneda}</td>
                <td class="p-4"><button class="btn btn-dark" type="button" id="sumar${computadora.id}"> + </button> <span>${computadora.cantidad} </span> <button class="btn btn-dark" type="button" id="sacar${computadora.id}"> - </button></td>
                <td class="p-4">${computadora.precioTotal} ${moneda}</td>
                <td class=""><img src="img/icono.png" id="eliminarProducto${computadora.id}" class="icon m-2" alt="icono"></td>
                </tr>
            `);
            $(`#sumar${computadora.id}`).on("click", () => {
                agregarProducto(computadora.id);
            });
            $(`#sacar${computadora.id}`).on("click", () => {
                eliminarProductoUno(computadora.id);
            });
            $(`#eliminarProducto${computadora.id}`).on("click", () => {
                eliminarProducto(computadora.id);
            });
        }
        
    }
}
imprimirCatalogo(computadoras);