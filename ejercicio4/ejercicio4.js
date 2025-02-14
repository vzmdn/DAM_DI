function cadenas (){
    let cadena = prompt("escribe una frase");
    let caracter = prompt("escribe un caracter");
    let cadenaArray = cadena.split("");
    let count = 0;
    for(let i = 0; i < cadenaArray.length; i++){
        if(cadenaArray[i] == caracter) count++;
    }
    let result = caracter + " aparece " + count + " en la cadena: " + cadena;
    document.getElementById("result").innerHTML = result;
}

function precios(){
    let result = "error al introducir los datos";
    let nombreProducto = prompt("nombre del producto?");
    let precio = parseFloat(prompt("precio del producto?"));
    let impuesto = parseFloat(prompt("impuesto del producto?"));
    String(nombreProducto);
    if(typeof precio === 'number' && typeof impuesto === 'number'){
        result = nombreProducto + ": " + (precio*(1+impuesto/100));
    }
    document.getElementById("result").innerHTML = result;
}

function datos(){
    let result = "";
    let nombre = prompt("nombre?","Carlos");
    let primerApellido = prompt("primer apellido?","Vozmediano");
    let segundoApellido = prompt("segundo apellido?","Ruiz");
    let telefono = prompt("teléfono?","654987213");
    let email = prompt("email?","vozmediano.edu@gmail.com");
    let codigoPostal = prompt("código postal?","46110");

    cadena = nombre+":"+primerApellido+segundoApellido
    +":"+telefono+":"+email+":"+codigoPostal;

    result += "cadena en mayúsculas: " + cadena.toUpperCase()+"<br>";
    result += cadena + "<br>";
    result += cadena.replaceAll(':',',') + "<br>";
    result += primerApellido + "<br>";
    result += telefono + "<br>";
    result += telefono.replaceAll('6','9');

    document.getElementById("result").innerHTML = result;
}

