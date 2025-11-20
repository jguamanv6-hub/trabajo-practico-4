unction contarCaracter(texto, caracter) {
  const lista = []; // aquí usaremos push
  const caracterBuscar = caracter.toLowerCase();
  const textoLimpio = texto.toLowerCase();

  // Recorremos todo el texto
  for (let i = 0; i < textoLimpio.length; i++) {
    if (textoLimpio[i] === caracterBuscar) {
      lista.push(textoLimpio[i]); // guardamos coincidencias
    }
  }

  return El carácter '${caracter}' aparece ${lista.length} veces.;
}

// Ejemplo:
console.log(contarCaracter("Hola mundo", "o"));
// → El carácter 'o' aparece 2 veces.