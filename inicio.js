// Constructores y variables
class Persona {
    constructor(a,b,c,d){
        this.nombre = a;
        this.apellido = b;
        this.mail = c;
        this.contraseña = d;
    }
}

// Funciones
function guardarPersona(){
    $("#myForm").submit(function(e){

        e.preventDefault();
        
            let datos = $("input");
            let cliente = new Persona(datos[0].value,datos[1].value,datos[2].value,datos[3].value);
            console.log(cliente);
            verificarInfo(cliente);
        
    })
}

function verificarInfo(persona){
    
    const checkNoNum = function (string){
        let numeros = ["0","1","2","3","4","5","6","7","8","9"];
        for (var i = 0; i< string.length; i++) {
            let caracter = string.charAt(i);
            if(numeros.findIndex(element => element === caracter) != -1) {
                return false;
            }
        }
        return true;
    }
    
    const checkMail = function (string) {
        if(string.search("@") != -1){
            return true;
        }
        return false;
    } 
    const checkContra = function(string){
        if(string.length < 6){
            return false;
        }
        for (var i = 0; i< string.length; i++) {
            var caracter = string.charAt(i);
            if(caracter === caracter.toUpperCase()) {
                return true;
            }
        }
        return false;
    }
    if(!persona.nombre != "" || !checkNoNum(persona.nombre)){
        alert("Por favor, ingrese un nombre válido");
        return false;
    }
    if(!persona.apellido != ""|| !checkNoNum(persona.apellido)){
        alert("Por favor, ingrese un apellido válido");
        return false;
    }
    if(!persona.mail != "" || !checkMail(persona.mail)){
        alert("Por favor, ingrese un mail válido");
        return false;
    }
    if(!persona.contraseña != "" || !checkContra(persona.contraseña)|| checkNoNum(persona.contraseña)){
        alert(`Escriba una contraseña correcta.
Debe tener al menos 6 digitos, una letra mayuscula y un numero.`);
        return false;
        
    }

    alert(`Bienvenido a la tienda de computación, ${persona.nombre} ${persona.apellido}.

A continuacion le mostraremos nuestra tienda.`);
    window.open("tienda.html");

    return true;
}

guardarPersona();