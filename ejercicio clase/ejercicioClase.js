let alumnos = new Array(3);

let numeroAlumnos = 10;
const nombres = [
    "Ana", "Carlos", "María", "José", "Laura",
    "David", "Sofía", "Juan", "Isabel", "Miguel",
    "Lucía", "Javier", "Claudia", "Daniel", "Elena",
    "Andrés", "Patricia", "Pedro", "Teresa", "Luis",
    "Carmen", "Fernando", "Victoria", "Raúl", "Nuria",
    "Alejandro", "Sara", "Francisco", "Marta", "Pablo",
    "Valentina"
];
let maxTotal = 0;
let maxTotalNombre = "";
let minTotal = 10;
let minTotalNombre = "";
let mediaMasAlta = 0;
let mediaMasAltaNombre = "";
let mediaMasBaja = 10;
let mediaMasBajaNombre = "";
let mediaTotal = 0;

for (let i = 0; i < numeroAlumnos; i++) {
    console.log("\n"+ (i+1) + " - " + nombres[Math.round(Math.random()*nombres.length)]);
    let notas = [];
    for (let i = 0; i < 6; i++) {
        notas.push(Number((Math.random() * 10).toFixed(1)));
    }
    let n = 0;
    for (let i = 0; i < notas.length; i++) {
        n += notas[i];
    }
   
    let max = Math.max(...notas).toFixed(1);
    let min = Math.min(...notas).toFixed(1);
    let media = Number(n / notas.length).toFixed(1);
    mediaTotal += parseInt(media);

    console.log("notas: " + notas);
    console.log("max: " + max);
    console.log("min: " + min);
    console.log("media: " + media);
    if(max>maxTotal){
        maxTotal = max;
        maxTotalNombre = nombres[i];
    }
    if(min<minTotal){
        minTotal = min;
        minTotalNombre = nombres[i];
    }
    if(media>mediaMasAlta){
        mediaMasAlta = media;
        mediaMasAltaNombre = nombres[i];
    }
    if(media<mediaMasBaja){
        mediaMasBaja = media;
        mediaMasBajaNombre = nombres[i];
    }
}
mediaTotal /= numeroAlumnos;

console.log("\n------------------------\n")
console.log("nota mas alta: " + maxTotal + " de " + maxTotalNombre);
console.log("nota mas baja: " + minTotal + " de " + minTotalNombre);
console.log("media mas alta: " + mediaMasAlta + " de " + mediaMasAltaNombre);
console.log("media mas baja: " + mediaMasBaja + " de " + mediaMasBajaNombre);
console.log("media total: " + mediaTotal.toFixed(1));
