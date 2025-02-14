let booksJSON = "";
let booksVector = [];

//Lectura del fichero y conversión a vector.
lecturaFichero();
conversionVector();

//2. Guardar fichero.
//guardarFichero();

//3. Añadir, eliminar, modificar.
añadir();
eliminar();
modificar();

//4. Ver libros.
verLibros();

//5. Ver cómics.
verComics();

console.log(booksVector);

function lecturaFichero() {
    const fs = require('fs');
    booksJSON = fs.readFileSync('./Ejercicios JSON/books.json', 'utf8');
}
function conversionVector() {
    booksVector = JSON.parse(booksJSON);
}
function añadir(){
    booksVector.push({
        "title":"titulo",
        "author":"autor",
        "price":"precio",
        "img":"si",
        "esLibro":false
    });
}
function eliminar(){
    let index = 0
    booksVector.splice(index,1);
}
function modificar(){
    booksVector[1].author = "yo";
}
function verLibros(){
    let libros = booksVector.filter(b => b.esLibro == true);
    console.log("libros: ");
    console.log(libros);
}
function verComics(){
    let comics = booksVector.filter(c => c.esLibro == false);
    console.log("comics: ");
    console.log(comics)
}