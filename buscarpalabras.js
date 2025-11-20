function buscarPalabra(texto, palabra) {
  const palabras = texto.toLowerCase().split(" "); 
  const palabraBuscada = palabra.toLowerCase();

  const encontradas = []; // aquí vamos a usar push

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabraBuscada) {
      encontradas.push(palabras[i]); // usamos push
    }
  }

  // Si el array tiene al menos 1 elemento, la palabra existe
  if (encontradas.length > 0) {
    return La palabra '${palabra}' sí se encuentra en el texto.;
  } else {
    return La palabra '${palabra}' NO se encuentra en el texto.;
  }
}

// Ejemplo:
const texto = "Me gusta programar en JavaScript";
const palabra = "programar";

console.log(buscarPalabra(texto, palabra));