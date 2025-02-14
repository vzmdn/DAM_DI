while(true){
    jugar();
}

function jugar(){

let user = prompt("qué juegas?");

let n = Math.floor((Math.random() * 3)+1);

machine = "";


switch(n){
    case 1 : machine = "piedra"; break;
    case 2 : machine = "papel"; break;
    case 3 : machine = "tijera"; break;
}
alert("la máquina juega " + machine)

switch(user){
    case 'piedra' :
        switch(machine){
            case 'piedra': alert("empate"); break;
            case 'papel': alert("gana la máquina"); break;
            case 'tijera': alert("has ganado gg"); break;
        }
        break;
    case 'papel' :
        switch(machine){
            case 'piedra': alert("has ganado gg"); break;
            case 'papel': alert("empate"); break;
            case 'tijera': alert("gana la máquina"); break;
        }
        break;
    case 'tijera' :
        switch(machine){
            case 'piedra': alert("gana la máquina"); break;
            case 'papel': alert("has ganado gg"); break;
            case 'tijera': alert("empate"); break;
        }
        break;
        default: alert("no puedes jugar eso");     
}
}