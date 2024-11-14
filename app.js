const { Estadistica } = require("./clases/estadistica");

const estadistica = new Estadistica();

// Mensaje de bienvenida en amarillo
console.log("\x1b[33m%s\x1b[0m", "Bienvenido al programa de cálculos estadísticos");

// Función factorial (ejemplo independiente)
const factorial = (numero) => {
  if (numero > 0) {
    return factorial(numero - 1) * numero;
  } else if (numero == 0) {
    return 1;
  } else {
    console.log("\x1b[31m%s\x1b[0m", "No está definido el factorial de números negativos");
    return NaN;
  }
};

// Calcular y mostrar resultados en azul
/*console.log("\x1b[34m%s\x1b[0m", El factorial de 5 es: ${estadistica.factorial(5)});
console.log("\x1b[34m%s\x1b[0m", La combinatoria de 6C2 es: ${estadistica.combinatoria(6, 2)});
console.log("\x1b[34m%s\x1b[0m", La permutación de 8P1 es: ${estadistica.factorial(8)});
console.log("\x1b[34m%s\x1b[0m", El factorial de -1 es: ${estadistica.factorial(-1)});
console.log("\x1b[34m%s\x1b[0m", La resta de factoriales 5! - 4! es: ${estadistica.factorial(5) - estadistica.factorial(4)});*/

// Mensaje de despedida en rojo
console.log("\x1b[31m%s\x1b[0m", "Gracias por usar el programa. ¡Adiós!");