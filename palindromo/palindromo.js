function palindromo(cadena) {
    let cadenaInvertida = voltear(cadena);
    let esPalindromo = cadena.replace(/ /g, '') === cadenaInvertida.replace(/ /g, '');

    // Get the result div to display the result
    const resultDiv = document.getElementById("result");
    
    // Display the results
    resultDiv.innerHTML = `<p>Tu cadena: ${cadena}</p>
                           <p>Cadena invertida: ${cadenaInvertida}</p>
                           <p>${esPalindromo ? "Es palíndromo" : "No lo es"}</p>`;
}

function voltear(s) {
    return s.split("").reverse().join("");
}

// Event listener for the form submission
document.getElementById("palindromeForm").addEventListener("submit", function (event)) {
    event.preventDefault(); // Prevent form submission
    const inputValue = document.getElementById("name").value; // Get the input value
    palindromo(inputValue); // Check if it's a palindrome
}



