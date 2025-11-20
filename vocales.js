function contarVocales(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vocalesEncontradas = [];
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            vocalesEncontradas.push(texto[i]);
        }
    }
    
    return `Cantidad de vocales: ${vocalesEncontradas.length}`;
}

// Ejemplo de uso
const entrada = "Educación";
const salida = contarVocales(entrada);
console.log(salida); // Salida: "Cantidad de vocales: 5"

// Más ejemplos
console.log(contarVocales("Hola Mundo")); // Cantidad de vocales: 4
console.log(contarVocales("JavaScript")); // Cantidad de vocales: 3
console.log(contarVocales("AEIOU")); // Cantidad de vocales: 5