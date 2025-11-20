function contarConsonantes(texto) {
  // Convertimos a minúsculas y eliminamos acentos
  const limpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (const letra of limpio) {
    // Verifica que sea una letra de la a–z
    if (/[a-z]/.test(letra) && !vocales.includes(letra)) {
      contador++;
    }
  }

  return Cantidad de consonantes: ${contador};
}
     
// Ejemplo:
console.log(contarConsonantes("Hola")); // → "Cantidad de consonantes: 2"