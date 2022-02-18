// --COSNTRUCTOR--
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
    eliminar_cantidad(){
        this.cantidad--;
    }
    calculo_precio_final(){
        this.precio_total = this.precio * this.cantidad;
    }
}

// --VARIABLES Y CONSTANTES--
const computadoras = [];

computadoras.push(new Computadora(0,"Baja",300,12,"./img/compu_mala.jpg"));
computadoras.push(new Computadora(1,"Media",400,3,"./img/compu_media.jpg"));
computadoras.push(new Computadora(2,"Alta ",500,6,"./img/compu_buena.jpg"));

let carrito;

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
                        <button id="agregar${computadora.id}" type="button" class="boton btn btn-light">Agregar</button>
                    </div>
                </div>
            </div>
            `;
        
        contenedor.appendChild(caja);

        let boton = document.getElementById(`agregar${computadora.id}`);

        boton.onclick = () => agregar_carrito(computadora.id);

    }
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
    // guarda los datos en el storage
    localStorage.setItem("carrito_storage", JSON.stringify(carrito));

    escribir_carrito(carrito);
}

function escribir_carrito(carrito) {

    let contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";

    let table = document.createElement("div");

    table.innerHTML= `
    <table class="table table-dark table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Gama</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Acción</th>
            </tr>
        </thead>
        <tbody id="table_body">
            
        </tbody>
    </table>
    `;

    contenedor.appendChild(table);

    let table_body = document.getElementById("table_body");

    for(const computadora of carrito){

        let compra = document.createElement("tr");
        compra.innerHTML = `
        
            <th scope="row">${computadora.id+1}</th>
                <td>${computadora.gama}</td>
                <td>${computadora.cantidad}</td>
                <td>$${computadora.precio_total}</td>
                <td><button id="eliminar${computadora.id}" type="button" class="boton2 btn btn-dark">Eliminar</button></td>
        `;

        table_body.appendChild(compra);
        let boton_eliminar = document.getElementById(`eliminar${computadora.id}`);
        boton_eliminar.onclick = () => eliminar_carrito(computadora.id);
    }
    
    escribir_total(table_body);
    
}

function escribir_total(tabla){
    let precio_final = obtener_precio_total(carrito);
    let table;
    
    table = document.createElement("tr");

    table.innerHTML =`
    <th scope="row" class="table-active"></th>
        <td colspan="2" class="table-active">TOTAL</td>
        <td class="table-active">$${precio_final}</td>
        <td class="table-active"><button id="eliminar" type="button" class="boton2 btn btn-dark">Eliminar carrito</button>
    `;
    tabla.appendChild(table);
    let boton_eliminar = document.getElementById("eliminar");
    boton_eliminar.onclick = () => vaciar_carrito();
}

function vaciar_carrito(){

    for(let computadora of carrito){
        computadora.cantidad = 1;
        computadora.calculo_precio_final();
        eliminar_carrito(computadora.id);
    }
    
}
function eliminar_carrito(id_producto){

    let compu_eliminado = carrito.find((elemento) => elemento.id === id_producto);

    let index = carrito.findIndex((elemento) => {
        if (elemento.id === compu_eliminado.id) {
            return true;
        }
    });

    if(compu_eliminado.cantidad > 1){
        carrito[index].eliminar_cantidad();
        carrito[index].calculo_precio_final();
    } else {
        carrito.splice(index,1);
    }

    // elimina los datos en el storage
    localStorage.setItem("carrito_storage", JSON.stringify(carrito));

    escribir_carrito(carrito);
}

function obtener_precio_total(computadoras) {
    let precio_final = 0;

    for (const producto of computadoras) {
    precio_final += producto.precio_total;
    }

    return precio_final;
}

function chequear_storage (){

    let contenido_storage = JSON.parse(localStorage.getItem("carrito_storage"));
    

    let compus = [];
    if(contenido_storage){
        
        for (let i = 0; i < contenido_storage.length; i++) {
            let computadora = new Computadora(
                contenido_storage[i].id,
                contenido_storage[i].gama,
                contenido_storage[i].precio,
                contenido_storage[i].cuotas,
                contenido_storage[i].img);
            computadora.cantidad = contenido_storage[i].cantidad;
            computadora.calculo_precio_final();
            compus.push(computadora);
            
        }
    }
    return compus;
}

imprimir_catalogo_HTML(computadoras);

// --consulta al storage si hay datos
// si hay, se refresca la pagina con los datos
carrito = chequear_storage();
escribir_carrito(carrito);
