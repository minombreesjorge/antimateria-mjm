var colors = require('colors');
const { Estadistica } = require("./clases/estadistica");

const estadistica = new Estadistica();

console.log(`El factorial de 5 es: ${estadistica.factorial(5)}`.blue);
console.log(`El factorial de -1 es: ${estadistica.factorial(-1)}`.blue);
console.log(`La resta de factoriales 5! - 4! es: ${estadistica.factorial(5) - estadistica.factorial(4)}`.blue);
