/*
Coloca un mensaje de bienvenida al usuario en amarillo
*/

/* 
    colocar lso errores de las funciones en rojo
*/
const factorial = (numero) => {
  if (numero > 0) {
    return factorial(numero - 1) * numero;
  } else if (numero == 0) {
    return 1;
  } else {
    console.log("No esta definido el factorial de números negativos");
    return NaN;
  }
};
/* 
    colocar las salidas del sistemas en azul
*/
let numero = 6;
console.log(`El facotiral de `, `${numero}`, ` es: `, `${factorial(6)}`);
//SALIDAS SOLICITADAS
/*
    1. Calcule el factorial de 5
    2. Calcule la combinatoria de 6C2
    3. Calcule la permutacion de 8P1
    4. Calcule el factorial de -1
    5. Calcule la resta del factorial de 5! - el factorial de 4!
*/

/*
Coloca un mensaje de despedida al usuario en rojo
*/
