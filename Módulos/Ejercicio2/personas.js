// personas.js

function agregarPersona(personas, persona) {
    return new Promise((resolve, reject) => {
        if (personas.includes(persona)) {
            return reject(new Error("La persona ya está en la lista."));
        }
        personas.push(persona);
        resolve(personas);
    });
}

function borrarPersona(personas, persona) {
    return new Promise((resolve, reject) => {
        const index = personas.indexOf(persona);
        if (index === -1) {
            return reject(new Error("La persona no se encuentra en la lista."));
        }
        personas.splice(index, 1);
        resolve(personas);
    });
}

// Exportar los métodos
module.exports = {
    agregarPersona,
    borrarPersona
};
