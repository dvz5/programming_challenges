/**
 * Crea una función que reciba una expresión matemática (String)
 * y compruebe si es correcta. Retornará true o false.
 * - Para que una expresión matemática sea correcta debe poseer
 *   un número, una operación y otro número separados por espacios.
 *   Tantos números y operaciones como queramos.
 * - Números positivos, negativos, enteros o decimales.
 * - Operaciones soportadas: + - * / %
 *
 * Ejemplos:
 * "5 + 6 / 7 - 4" -> true
 * "5 a 6" -> false
 **/

//Solution 1
const check_expresion = (exp) => {
  const operators_soported = "+*/-%";
  let ant = "_";

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] == " ") {
      continue;
    }

    const isOperator = operators_soported.includes(exp[i])
    const isNumber = !isNaN(parseInt(exp[i]))

    if (!isOperator && !isNumber && exp[i] !== '.') {
      return false
    }

    if (ant === "_") {
      ant = exp[i];
      continue;
    }

    if (exp[i] === '.' && (isNaN(parseInt(ant)) || exp[i - 1] === ' ' || exp[i + 1] === ' ')) {
      return false;
    }

    if (isNumber && (!operators_soported.includes(ant) && isNaN(parseInt(ant)) && ant !== '.')) {
      return false;
    }

    if (isOperator) {
      if (exp[i] !== "-" && isNaN(parseInt(ant))) {
        return false
      }
      if (exp[i] === "-" && operators_soported.includes(ant) && exp[i + 1] === ' ') {
        return false

      }
    }

    ant = exp[i];
  }
  return true;
};



console.log(check_expresion("   -15.2 + -64 / 2 * -4")); //true
console.log(check_expresion("´s5  * --3 + 3.32 * -56")); //false
