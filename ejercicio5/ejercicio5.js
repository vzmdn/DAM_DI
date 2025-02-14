let cansado = false;
let aburrido = true;

let siesta = (estado) => estado ? cansado : aburrido;

console.log(siesta(aburrido));