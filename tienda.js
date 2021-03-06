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

const cuotas = [{num:"Seleccione una opci??n"},{num:1},{num:3},{num:6},{num:12},{num:24}];
function lista(array) {
    let opciones = "";
    array.forEach(cuota => opciones += `<option value="${cuota.num}"> ${cuota.num} </option>`);
    return `<select> ${opciones} </select>`;
}
let precio_final;
function calculoTotalRecargo(total,cuotas){
    const suma = function (a,b) {return a + b};
    
    switch(cuotas) {
        
        case 3 :
            precio_final = suma(total,total * 0.03);
            return precio_final / 3;

        case 6 :
            precio_final = suma(total,total * 0.06);
            return precio_final / 6;
        case 12:
            precio_final = suma(total,total * 0.12);
            return precio_final / 12;
        case 24:
            precio_final = suma(total,total * 0.24);
            return precio_final / 24;
        default :
            precio_final = total;
            return precio_final;
    }
    
}

function dibujarTotal(array){
    let total= calculoTotalCompra(array);
    $("#carrito").append(`
        <div class="bg-secondary carrito p-3">   
            <h2 class="text-decoration-underline fw-bold"> Total del carrito </h2>
            <table class="table table-borderless">
            <tbody>
                <tr>
                    <th> Subtotal </th>
                    <th> ${total} ${moneda} </th>
                </tr>
                <tr>
                    <th> Cuotas </th>
                    <th id="lista"> ${lista(cuotas)}</th>
                </tr>
                <tr>
                    <th> Env??o </th>
                    <th><ul class="p-1 m-0 bg-secondary">
                        <label class="list-group-item p-1 bg-secondary for="local">
                        <input class="form-check-input me-1" type="checkbox" name="envio" autocomplete="off" id="local" value="1"> Retiro en Sucursal </label>
                        <label class="list-group-item p-1 bg-secondary for="casa">
                        <input class="form-check-input me-1" type="checkbox" name="envio" autocomplete="off" id="casa" value="2" checked> Env??o a Domicilio </label>
                    </ul></th>
                </tr>
            </tbody>
            <tfoot class="table-dark" id="foot">
                
            </tfoot>
            </table>
        </div>
    `);
    $("#lista").change(function (e) {  
        
        let cuota =Number(e.target.value) ;
        console.log(cuota);
        $("#foot").html("");
        $("#foot").append(`
        <tr>
            <th> Total por cuota </th>
            <th> ${calculoTotalRecargo(total,cuota)} ${moneda}</th>
        </tr>
        <tr>
            <th> Total </th>
            <th> ${precio_final} ${moneda}</th>
        </tr>
    `);
    });
    
}

function vaciarCarrito(){
    carrito = [];
    dibujarCarrito(carrito);
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
        <table class="table table-light table-bordered fs-5 mb-2">
            <thead>
                <tr class="table-info">
                    <th scope="col" class="p-0">  </th>
                    <th scope="col" class="ps-4">Producto</th>
                    <th scope="col" class="ps-4">Precio</th>
                    <th scope="col" class="ps-4">Cantidad</th>
                    <th scope="col" class="ps-4">Subtotal</th>
                    <th scope="col" class="p-0">  </th>
                </tr>
            </thead>
            <tbody id="tabla">

            </tbody>
        </table>
        `);
        for(const computadora of array){
            $("#tabla").append(`
                <tr>
                    <td class="ps-2"> <img src="${computadora.img}"class="img-fluid img-car" alt=" ${computadora.gama}"> </td>
                    <td class="p-4">${computadora.descripcion}</td>
                    <td class="p-4">${computadora.precio} ${moneda}</td> 
                    <td class="p-4"><button class="btn btn-dark btn-carr me-2" type="button" id="sacar${computadora.id}"> - </button> <span>${computadora.cantidad} </span> <button class="btn btn-dark btn-carr ms-2" type="button" id="sumar${computadora.id}"> + </button></td>
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
        $("#carrito").append(` 
            <div class="btn-group float-end p-1">
                <button class="btn btn-dark p-2" type="button" id="vaciar"> Vaciar Carrito </button>
            </div>
            `); 
            $(`#vaciar`).on("click", () => {
                vaciarCarrito();
            });
        dibujarTotal(carrito);
    }
}
imprimirCatalogo(computadoras);