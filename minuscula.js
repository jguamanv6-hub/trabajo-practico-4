function contarMinusculasIniciales(texto) {
  const palabras = texto.split(" ");
  const minusculas = []; // aquí guardaremos las palabras que empiezan en minúscula

  for (const palabra of palabras) {
    if (palabra.length === 0) continue; // evitar espacios dobles

    const primera = palabra[0];

    // Condición: si la primera letra está entre 'a' y 'z'
    if (primera >= "a" && primera <= "z") {
      minusculas.push(palabra); // usamos push
    }
  }

  return Palabras con minúscula inicial: ${minusculas.length}; // usamos length
}

// Ejemplo:
console.log(contarMinusculasIniciales("hola Mundo bonito"));
// → "Palabras con minúscula inicial: 2"