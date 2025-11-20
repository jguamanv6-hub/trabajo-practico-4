function invertirTexto(texto) {
  const arregloInvertido = []; // aquí haremos push

  // Recorremos el texto desde el final hasta el inicio
  for (let i = texto.length - 1; i >= 0; i--) {
    arregloInvertido.push(texto[i]); // usamos push
  }

  // Convertimos el array en una cadena
  return arregloInvertido.join("");
}

// Ejemplo:
console.log(invertirTexto("Hola")); 
// → "aloH"
console.log(invertirtexto ("javascrot"))