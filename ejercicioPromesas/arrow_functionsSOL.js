/*
Ejercicio para practicar con "arrow functions"
Definimos una función para añadir personas a un vector, y otra para borrarlas
*/

// Vector inicial de personas
let datos = [
    { nombre: "Nacho", telefono: "966112233", edad: 40 },
    { nombre: "Ana", telefono: "911223344", edad: 35 },
    { nombre: "Mario", telefono: "611998877", edad: 15 },
    { nombre: "Laura", telefono: "633663366", edad: 17 }
];


function promptPersona() {
    let nombre = prompt("nombre?");
    if(nombre.trim().length === 0){
        alert("el nombre no puede estar vacio");
        return;
    }
    let telefono = prompt("telefono?");
    if(telefono.trim().length === 0){
        alert("el telefono no puede estar vacio");
        return;
    }
    let edad = prompt("edad?");
    if(edad.trim().length === 0){
        alert("la edad no puede estar vacia");
        return;
    }
    if (nombre != null && telefono != null && edad != null) {
        nuevaPersona({ nombre, telefono, edad });
        mostrarPersonas();
    }
}

function mostrarPersonas() {
    let personas = "";
    for (let i = 0; i < datos.length; i++) {
        personas
            += " nombre: " + datos[i].nombre
            + " teléfono: " + datos[i].telefono
            + " edad: " + datos[i].edad
            + "<br>";

    }
    document.getElementById("personas").innerHTML = personas;
}



// Arrow function para añadir personas, siempre que no exista ya su teléfono
let nuevaPersona = persona => {
    let existe = datos.filter(pers => pers.telefono === persona.telefono);
    if (existe.length == 0)
        datos.push(persona);
    else alert("ya existe ese teléfono");
}

// Arrow function para borrar una persona por su teléfono
let borrarPersona = telefono => {
    datos = datos.filter(persona => persona.telefono != telefono);
}

// Programa principal
/*
nuevaPersona({nombre: "Juan", telefono:"965661564", edad: 60});
console.log(datos);
nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20});
console.log(datos);
borrarPersona("910011001");
console.log(datos);
*/