function agregarTexto(texto, fragmento) {
  const inicioArray = [];
  const finalArray = [];

  // Al inicio:
  inicioArray.push(fragmento);     // Hoy
  inicioArray.push(texto);         // Aprender programación
  const alInicio = inicioArray.join(" ");

  // Al final:
  finalArray.push(texto);          // Aprender programación
  finalArray.push(fragmento);      // Hoy
  const alFinal = finalArray.join(" ");

  return {
    inicio: Al inicio: "${alInicio}",
    final: Al final: "${alFinal}"
  };
}

// Ejemplo:
const resultado = agregarTexto("Aprender programación", "Hoy");
console.log(resultado.inicio);
console.log(resultado.final);