//let max = prompt("cuantos numeros?");
let altura = 9;
let num = 1;  // Número inicial

for (let i = 1; i <= (altura/2)+1; i++) {
    let linea = '';

    // Agregar espacios antes de los números
    for (let j = 0; j < altura - i; j++) {
        linea += ' ';
    }

    // Agregar los números
    for (let k = 0; k < (2 * i - 1); k++) {
        linea += num;
    }

    // Imprimir la línea actual
    console.log(linea);

    // Incrementar el número en 2 para la siguiente fila
    num += 2;
}


