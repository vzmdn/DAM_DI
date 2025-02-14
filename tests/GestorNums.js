function esPar(n){
    return n%2 == 0;
}

let esImpar = (n) = n => n%2 != 0;

function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= n/2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


module.exports = {
    esPar,
    esImpar,
    esPrimo    
};