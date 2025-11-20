function contarCaracteres(texto) {
  const caracteres = []; // aquí haremos push

  // Recorrer todo el texto
  for (let i = 0; i < texto.length; i++) {
    caracteres.push(texto[i]); // añadimos cada carácter
  }

  return Total de caracteres: ${caracteres.length}; // usamos length
}

// Ejemplo:
console.log(contarCaracteres("Hola 123!"));
// → "Total de caracteres: 9"