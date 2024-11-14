class Estadistica {
  constructor() {}

  factorial = (numero) => {
    if (numero > 0) {
      return this.factorial(numero - 1) * numero;
    } else if (numero == 0) {
      return 1;
    } else {
      console.log("No está definido el factorial de números negativos");
      return NaN;
    }
  };

  combinatoria = (n, r) => {
    const numerador = this.factorial(n);
    const denominador = this.factorial(r) * this.factorial(n - r);
    if (denominador === 0) {
      console.log("No es posible calcular la combinatoria");
      return;
    }
    if (r > n || n < 0 || r < 0) {
      console.log(
        "No es posible calcular la combinatoria: Parámetros incorrectos"
      );
      return;
    }
    return numerador / denominador;
  };
}

module.exports = {
  Estadistica,
};