// Constructor
class Computadora {
    constructor(computadora){
        this.id = computadora.id;
        this.gama = computadora.gama;
        this.precio = computadora.precio;
        this.precioTotal = computadora.precio;
        this.cantidad;
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
        <div class="card m-2 bg-dark">
            <div class="card-body text-center">
                <img src="${computadora.img}"class="card-img-top img-fluid" alt="computadora">
                <h2 class="card-title"> ${computadora.gama} </h2>
                <h6 class="card-subtitle text-muted">${computadora.descripcion}</h5>
                <p class="card-text">${computadora.precio} ${moneda}</p>
            
                <div class="btn-group">
                    <button class="btn btn-light me-3" type="button"> - </button>
                    <span class="pt-1">${computadora.cantidad} </span>
                    <button class="btn btn-light ms-3" type="button"> + </button>
                </div>
            </div>
        </div>
        `);

    }

}

imprimirCatalogo(computadoras);