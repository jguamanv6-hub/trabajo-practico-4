function contarMayusculasIniciales(texto) {
  const palabras = texto.split(" ");
  const mayusculas = []; // aquí haremos push

  for (const palabra of palabras) {
    if (palabra.length === 0) continue; // evitar palabras vacías

    const primera = palabra[0];

    // Condición: si está entre A y Z, es mayúscula
    if (primera >= "A" && primera <= "Z") {
      mayusculas.push(palabra); // usamos push
    }
  }

  return Palabras con mayúscula inicial: ${mayusculas.length}; // usamos length
}

// Ejemplo:
console.log(contarMayusculasIniciales("Hola mundo Bonito"));