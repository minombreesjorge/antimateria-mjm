class Calculadora {
    constructor() {}

    suma(a, b) {
        return a + b;
    }

    resta(a, b) {
        return a - b;
    }

    multiplicacion(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            console.log("Error: División por cero no está definida");
            return NaN;
        }
        return a / b;
    }
}

module.exports = { Calculadora };