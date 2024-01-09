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
  const op_soported = "+*/-%";
  let ant = "_";
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] == " ") {
      continue;
    }
    if (ant === "_") {
      if (exp[i] !== '-' && isNaN(exp[i])) {
        return false
      }
      ant = exp[i];
      continue;
    }

    if (exp[i] === '.') {
      if (isNaN(parseInt(ant)) || exp[i - 1] === ' ' || exp[i + 1] === ' ') return false;
    }

    if (!isNaN(parseInt(exp[i]))) {
      if (!op_soported.includes(ant) && isNaN(parseInt(ant)) && ant !== '.') return false;
    }

    if (op_soported.includes(exp[i])) {
      if (exp[i] !== "-" && isNaN(parseInt(ant))) {
        return false
      }
      if (exp[i] === "-") {
        if (op_soported.includes(ant) && exp[i + 1] === ' ') {
          return false
        }

      }
    }

    ant = exp[i];
  }
  return true;
};



console.log(check_expresion("-5.2 + -64 / 7 - -4")); //true
console.log(check_expresion("´s5  * --3 + 3.32 * -56")); //false
