/*let n = 18;

let entrada = new Promise((resolve, reject) => {
    if (n > 17) {
        resolve("puedes pasar");
    } else {
        reject("no entras");
    }
});

entrada
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
*/

function f(n) {
    return new Promise((resolve, reject) => {
        if (n > 17) {
            resolve("puedes pasar");
        } else {
            reject("no entras");
        }
    });
}


let i = 5;
while (i>0) {
    edad = Math.round(Math.random()*25+1);
    console.log("edad: " + edad);
    f(edad)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        }); 
        i--;
}
console.log("hola");