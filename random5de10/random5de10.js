let lista = [];
for(let i = 0; i < 10; i++){
    let num = Math.round(Math.random()*100+1);
    if(lista.includes(num)){}
    else {lista.push(num)}
}

console.log("\nlista inicial: " + lista);

let lista5 = [];

for(let i = 0; lista5.length < 5; i++){
    let num = Math.round(Math.random()*lista.length);
    if(lista5.includes(lista[num])){}
    else {lista5.push(lista[num])}
}


console.log("lista reducida: " + lista5);

 lista.sort(function(a, b) {
    return a - b;
  });

console.log("lista ordenada: " + lista5.sort()+"\n");
