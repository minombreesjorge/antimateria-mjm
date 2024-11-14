var colors = require('colors');
const { Estadistica } = require("./clases/estadistica");

const estadistica = new Estadistica();

console.log(`La combinatoria de 6C2 es: ${estadistica.combinatoria(6, 2)}`.blue);
