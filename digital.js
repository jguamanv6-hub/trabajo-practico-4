function contarDigitos(texto) {
  let contador = 0;

  for (const caracter of texto) {
    // Condición: si el carácter es un dígito entre 0 y 9
    if (caracter >= "0" && caracter <= "9") {
      contador++;
    }
  }

  return Cantidad de dígitos: ${contador};
}

// Ejemplo:
console.log(contarDigitos("Mi clave es 1234"));