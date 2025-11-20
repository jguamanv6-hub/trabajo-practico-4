function contarParrafos(texto) {
  const lineas = texto.split("\n"); 
  const parrafos = []; // aquí usaremos push

  for (const linea of lineas) {
    // Quitamos espacios para evitar párrafos vacíos
    if (linea.trim().length > 0) {
      parrafos.push(linea); // usamos push
    }
  }

  return Número de párrafos: ${parrafos.length}; // usamos length
}

// Ejemplo de uso
const entrada = "Hola mundo\nEsto es un segundo párrafo";
console.log(contarParrafos(entrada));