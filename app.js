var colors = require('colors');
const { Estadistica } = require("./clases/estadistica");
const { Calculadora } = require("./clases/calculadora");

const estadistica = new Estadistica();
const calculadora = new Calculadora();

console.log(`Bienvenido al programa de cálculos estadísticos`.yellow);


console.log(`El factorial de 5 es: ${estadistica.factorial(5)}`.blue);
console.log(`La combinatoria de 6C2 es: ${estadistica.combinatoria(6, 2)}`.blue);
console.log(`La permutación de 8P1 es: ${estadistica.factorial(8)}`.blue);
console.log(`El factorial de -1 es: ${estadistica.factorial(-1)}`.blue);
console.log(`La resta de factoriales 5! - 4! es: ${estadistica.factorial(5) - estadistica.factorial(4)}`.blue);

let numeroA = 10;
let numeroB = 5;
console.log(`La división de ${numeroA} entre ${numeroB} es: ${calculadora.division(numeroA, numeroB)}`.blue);

console.log("Gracias por usar el programa. ¡Adiós!".yellow);
