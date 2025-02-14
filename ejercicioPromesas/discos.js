discos = [
    {
        "nombre": "Hybrid Theory",
        "grupo": "Linkin Park",
        "año": "2000",
        "estilo": "rock",
        "localizacion": 9,
        "prestado": false
    },
    {
        "nombre": "Meteora",
        "grupo": "Linkin Park",
        "año": "2003",
        "estilo": "rock",
        "localizacion": 9,
        "prestado": false
    },
    {
        "nombre": "Abbey Road",
        "grupo": "The Beatles",
        "año": "1969",
        "estilo": "rock",
        "localizacion": 10,
        "prestado": true
    },
    {
        "nombre": "The Dark Side of the Moon",
        "grupo": "Pink Floyd",
        "año": "1973",
        "estilo": "rock",
        "localizacion": 5,
        "prestado": true
    },
    {
        "nombre": "Back in Black",
        "grupo": "AC/DC",
        "año": "1980",
        "estilo": "rock",
        "localizacion": 7,
        "prestado": false
    },
    {
        "nombre": "Thriller",
        "grupo": "Michael Jackson",
        "año": "1982",
        "estilo": "pop",
        "localizacion": 1,
        "prestado": false
    },
    {
        "nombre": "Nevermind",
        "grupo": "Nirvana",
        "año": "1991",
        "estilo": "grunge",
        "localizacion": 4,
        "prestado": false
    },
    {
        "nombre": "London Calling",
        "grupo": "The Clash",
        "año": "1979",
        "estilo": "punk",
        "localizacion": 3,
        "prestado": true
    },
    {
        "nombre": "In the Aeroplane Over the Sea",
        "grupo": "Neutral Milk Hotel",
        "año": "1998",
        "estilo": "indie",
        "localizacion": 2,
        "prestado": true
    },
    {
        "nombre": "Random Access Memories",
        "grupo": "Daft Punk",
        "año": "2013",
        "estilo": "electrónica",
        "localizacion": 7,
        "prestado": false
    }
]

let indie = discos.filter(d => d.estilo == 'indie');
let ordenados = discos.sort((a, b) => a.nombre.localeCompare(b.nombre));
let pre1970 = discos.filter(d => d.año < 1970);
let post1970 = discos.filter(d => d.año >= 1970);

console.log("indie:" );
console.log(indie);
console.log("ordenados: ");
console.log(ordenados);
console.log("discos antes de 1970: ");
console.log(pre1970);
console.log("discos después de 1970: ");
console.log(post1970);