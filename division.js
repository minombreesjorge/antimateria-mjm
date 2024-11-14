var colors = require('colors');
const { Calculadora } = require("./clases/calculadora");

const calculadora = new Calculadora();

let numeroA = 10;
let numeroB = 5;
console.log(`La división de ${numeroA} entre ${numeroB} es: ${calculadora.division(numeroA, numeroB)}`.blue);