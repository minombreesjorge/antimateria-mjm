const { Estadistica } = require("./clases/estadistica");
const { Calculadora } = require("./clases/calculadora");

const estadistica = new Estadistica();
const calculadora = new Calculadora();

console.log("Bienvenido al programa de cálculos estadísticos");


console.log(`El factorial de 5 es: ${estadistica.factorial(5)}`);
console.log(`La combinatoria de 6C2 es: ${estadistica.combinatoria(6, 2)}`);
console.log(`La permutación de 8P1 es: ${estadistica.factorial(8)}`);
console.log(`El factorial de -1 es: ${estadistica.factorial(-1)}`);
console.log(`La resta de factoriales 5! - 4! es: ${estadistica.factorial(5) - estadistica.factorial(4)}`);

let numeroA = 10;
let numeroB = 5;
console.log(`La división de ${numeroA} entre ${numeroB} es: ${calculadora.division(numeroA, numeroB)}`);

console.log("Gracias por usar el programa. ¡Adiós!");
