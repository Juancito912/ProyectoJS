let URL = "https://hp-api.herokuapp.com/api/characters";

const personajes = [{name:"Seleccione su personaje"}];
function lista(array) {
    let opciones = "";
    let i = 0;
    array.forEach(personaje => opciones += `<option value="${i++}"> ${personaje.name} </option>`);
    return `<select> ${opciones} </select>`;
    
}
$(document).ready(()=>{
    $.get(URL,function (data, state) {
            if(state === "success"){
                personajes.push(...data)
                console.log(personajes)
                $("#contenedor").prepend(`<div> Personajes: ${lista(personajes)}</div>`);
                $("#carito").prepend(`<div id="salidaPersonajes"></div>`)
            }
        },
        
    );
});