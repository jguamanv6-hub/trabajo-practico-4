function contarPares(texto) {
  const pares = [];

  for (let i = 0; i < texto.length; i++) {
    if (i % 2 === 0) {
      pares.push(texto[i]); // usamos push
    }
  }

  return Caracteres en posiciones pares: ${pares.length}; // usamos length
}

// Ejemplo:
console.log(contarPares("Hola"));