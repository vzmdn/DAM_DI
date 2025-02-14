const nombres = [
    "Ana", "Carlos", "María", "José", "Laura",
    "David", "Sofía", "Juan", "Isabel", "Miguel",
    "Lucía", "Javier", "Claudia", "Daniel", "Elena",
    "Andrés", "Patricia", "Pedro", "Teresa", "Luis",
    "Carmen", "Fernando", "Victoria", "Raúl", "Nuria",
    "Alejandro", "Sara", "Francisco", "Marta", "Pablo",
    "Valentina"
];

const asignaturas = [
    "Desarrollo de interfaces", "Acceso a datos", "Sistemas de gestión empresarial", "Procesos", "Programación multimedia"
];

const evaluaciones = [
    "1a evaluación", "2da evaluación"
];

let numAlumnos = 20;
let alumnos = [];

for (let i = 0; i < numAlumnos; i++) {
    // Choose a random student name
    let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    let asignaturasEvaluaciones = [];

    for (let j = 0; j < asignaturas.length; j++) {
        let evaluacionesData = [];

        for (let k = 0; k < evaluaciones.length; k++) {
            evaluacionesData.push({
                evaluacion: evaluaciones[k],
                nota: Number((Math.random() * 10).toFixed(1))
            });
        }

        asignaturasEvaluaciones.push({
            asignatura: asignaturas[j],
            evaluaciones: evaluacionesData
        });
    }

    alumnos.push({
        nombre: nombreAleatorio,
        asignaturas: asignaturasEvaluaciones
    });
}

// Printing the results
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i].nombre);
    for (let j = 0; j < alumnos[i].asignaturas.length; j++) {
        console.log("\t" + alumnos[i].asignaturas[j].asignatura);
        for (let k = 0; k < alumnos[i].asignaturas[j].evaluaciones.length; k++) {
            console.log("\t\t" + alumnos[i].asignaturas[j].evaluaciones[k].evaluacion + ": " + alumnos[i].asignaturas[j].evaluaciones[k].nota);
        }
    }
}
