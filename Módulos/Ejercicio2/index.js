// index.js

const { agregarPersona, borrarPersona } = require('./personas');

// Vector de personas
let personas = ['Juan', 'Ana', 'Pedro'];

async function gestionarPersonas() {
    try {
        console.log("Lista inicial de personas:", personas);

        // Agregar una persona
        personas = await agregarPersona(personas, 'María');
        console.log("Después de agregar a María:", personas);

        // Borrar una persona
        personas = await borrarPersona(personas, 'Juan');
        console.log("Después de borrar a Juan:", personas);

        // Intentar agregar a una persona que ya existe
        await agregarPersona(personas, 'Ana');
    } catch (error) {
        console.error("Error:", error.message);
    }

    try {
        // Intentar borrar una persona que no existe
        await borrarPersona(personas, 'Luis');
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Ejecutar la función
gestionarPersonas();
