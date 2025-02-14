const nombres = [
    "Juan", "María", "Carlos", "Lucía", "Pedro", "Ana", "José", "Laura", "Miguel",
    "Sofía", "Luis", "Elena", "Andrés", "Marta", "Diego", "Carmen", "Javier",
    "Paula", "David", "Isabel", "Fernando", "Clara", "Sergio", "Adriana",
    "Pablo", "Verónica", "Ricardo", "Valeria", "Roberto", "Lorena"
];

const asignaturas = [
    "Acceso a Datos", "Interfaces", "Sistemas de Gestión Empresarial", "EIE", "Procesos y Servicios", "Programacion Multimedia"
];

let alumnos = new Array(20);

for (let i = 0; i < alumnos.length; i++) {
    alumnos[i] = new Array(asignaturas.length);
    for (let j = 0; j < asignaturas.length; j++) {
        alumnos[i][j] = new Array(2);
        alumnos[i][j][0] = asignaturas[j];
        alumnos[i][j][1] = (Math.random() * 10).toFixed(1);
    }
}

let notaMasAltaGlobal = 0;
let notaMasBajaGlobal = 10;
let sumaGlobal = 0;
let totalNotas = 0;

for (let i = 0; i < alumnos.length; i++) {
    let notaMasAlta = 0;
    let notaMasBaja = 10;
    let sumaNotas = 0;

    console.log(`Alumno: ${nombres[i]}`);
    console.log("Notas:");

    for (let j = 0; j < asignaturas.length; j++) {
        let nota = parseFloat(alumnos[i][j][1]);
        console.log(`  ${alumnos[i][j][0]}: ${nota}`);

        sumaNotas += nota;
        totalNotas += 1;

        if (nota > notaMasAlta) notaMasAlta = nota;
        if (nota < notaMasBaja) notaMasBaja = nota;

        if (nota > notaMasAltaGlobal) notaMasAltaGlobal = nota;
        if (nota < notaMasBajaGlobal) notaMasBajaGlobal = nota;
    }

    let mediaNotas = (sumaNotas / asignaturas.length).toFixed(2);
    sumaGlobal += sumaNotas;

    console.log(`Nota más alta: ${notaMasAlta}`);
    console.log(`Nota más baja: ${notaMasBaja}`);
    console.log(`Nota media: ${mediaNotas}`);
    console.log("--------------------------");
}

let mediaGlobal = (sumaGlobal / totalNotas).toFixed(2);

console.log("Resumen de todas las notas:");
console.log(`Nota más alta global: ${notaMasAltaGlobal}`);
console.log(`Nota más baja global: ${notaMasBajaGlobal}`);
console.log(`Nota media global: ${mediaGlobal}`);
