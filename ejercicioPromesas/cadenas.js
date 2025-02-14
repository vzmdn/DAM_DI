let cadena = "holsa";

let promesaMoneda = new Promise((resolve, reject) => {
    if (cadena === "hola") {
        resolve("las cadenas son iguales");
    } else {
        reject("las cadenas NO son iguales");
    }
});

promesaMoneda
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
