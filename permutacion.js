var colors = require('colors');
const { Estadistica } = require("./clases/estadistica");

const estadistica = new Estadistica();

console.log(`La permutación de 8P1 es: ${estadistica.factorial(8)}`.blue);
