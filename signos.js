function contarSignosPuntuacion(texto) {
    // Arreglo con los signos de puntuación a buscar
    let signosBuscados = [".", ",", ";", ":", "!", "?", "¿", "¡", '"'];
    
    // Arreglo para acumular los signos encontrados
    let signosEncontrados = [];
    
    // Recorrer cada caracter de la cadena
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        
        // Verificar si el caracter es un signo de puntuación
        let esSigno = false;
        for (let j = 0; j < signosBuscados.length; j++) {
            if (caracter === signosBuscados[j]) {
                esSigno = true;
                break;
            }
        }
        
        // Si es un signo, lo agregamos al arreglo
        if (esSigno) {
            signosEncontrados.push(caracter);
        }
    }
    
    return signosEncontrados.length;
}