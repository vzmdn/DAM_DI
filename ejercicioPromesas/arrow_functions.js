let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];


function nuevaPersona(persona){
    for (let i = 0; i < datos.length; i++) {
        if(datos[i].telefono == persona.telefono) return;
    }
    datos.push(persona);
};

function borrarPersona(telefono){
    for (let i = 0; i < datos.length; i++) {
        if(datos[i].telefono == telefono)
            datos.splice(i,1);
    }
};



nuevaPersona({nombre: "Juan", telefono:"965661564", edad: 60});
nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20});
borrarPersona("611998877");

console.log(datos);