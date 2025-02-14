/*let n = Math.round(Math.random());

let promesaMoneda = new Promise((resolve, reject) => {
    if (n === 1) {
        resolve("cruz");
    } else {
        reject("cara");
    }
});

promesaMoneda
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
*/

//PROMESA CON PARAMETRO

let promesaConParam = (n) => {
    return new Promise((resolve, reject) => {
        if (n === 1) {
            resolve("cruz");
        } else {
            reject("cara");
        }
    });
};

promesaConParam(0)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
