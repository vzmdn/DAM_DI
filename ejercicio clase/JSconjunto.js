//declaramos una variable global para el inventario
let inventario = [];

//agregamos 3 productos
agregarProducto("Boli", 5, 1);
agregarProducto("Boli", 3, 1);
agregarProducto("Lapiz", 6, 0.4);
agregarProducto("Goma", 2, 1.2);

//eliminamos un producto
eliminarProducto("Boli");

//actualizamos la cantidad de un producto
actualizarCantidad("Lapiz",50)

//mostramos el inventario
mostrarInventario();

//calculamos el valor total
calcularValorTotal();

//buscamos un producto que sí existe y otro que no
buscarProducto("Lapiz");
buscarProducto("Estuche");


//recorremos inventario, si el producto existe, incrementamos la cantidad, sino, lo creamos
function agregarProducto(nombre, cantidad, precio) {
    let duplicado = false;
    for (let i = 0; i < inventario.length; i++) {
        const item = inventario[i];
        if (item.nombre == nombre) {
            duplicado = true;
            item.cantidad += cantidad;
        }
    }
    if (!duplicado) inventario.push({ "nombre": nombre, "cantidad": cantidad, "precio": precio });
}

//recorremos el inventario y buscamos que coincida con el nombre del que queremos borrar
//si existe, lo borramos
function eliminarProducto(nombre) {
    for(let i = 0; i < inventario.length; i++){
        let item = inventario[i];
        if (item.nombre === nombre) {
            inventario.splice(i,1);
            break;
        }
    }
}
function actualizarCantidad(nombre, cantidad){
    for(let i = 0; i < inventario.length; i++){
        let item = inventario[i];
        if (item.nombre === nombre) {
            inventario[i].cantidad = cantidad;
            break;
        }
    }
}
//console log del inventario
function mostrarInventario(){
    console.log(inventario);
}

//recorremos el inventario y calculamos el valor de cada producto, este lo sumamos a un valor total
function calcularValorTotal(){
    let valorTotal = 0;
    for(let i = 0; i < inventario.length; i++){
        let item = inventario[i];
        valorTotal += (item.cantidad*item.precio);
    }
    console.log("valor total: " + valorTotal);
}
//recorremos el inventario y si encontramos un producto con ese nombre lo mostramos
function buscarProducto(nombre){
    for(let i = 0; i < inventario.length; i++){
        let item = inventario[i];
        if (item.nombre == nombre) {
            console.log(item);
            return;
        }
    }
    console.log("no existe el producto: " + nombre);
}