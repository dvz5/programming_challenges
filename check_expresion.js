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
const check_exprecion = (string) => {
  const op = "¿-+/%";
  let ant = "__";
  //validate string
  for (const ch of string) {
    const current = parseInt(ch);

    if (!op.includes(ch) && isNaN(current) && ch !== " ") {
      return false;
    }

    if (ant === "__") {
      ant = ch;
      continue;
    }

    if (ch == " ") continue;

    if (!isNaN(current)) {
      if (!op.includes(ant) && isNaN(parseInt(ant))) return false;
    }
    if (op.includes(ch)) {
      if (isNaN(parseInt(ant))) return false;
    }
    ant = ch;
  }
  return true;
};

//solution 2 with recursivity
function check_exprecion2(string, ant = "__") {
  const op = "*-+/%";

  if (string.length == 0) {
    return true;
  }
  //validate date
  const current = string.at(0);
  if (!op.includes(current) && isNaN(current) && current !== " ") {
    return false;
  }
  if (ant === "__") {
    return check_exprecion2(string.slice(1), current);
  }
  if (current == " ") return check_exprecion2(string.slice(1), ant);

  if (!isNaN(current)) {
    if (!op.includes(ant) && isNaN(parseInt(ant))) return false;
  }
  if (op.includes(current)) {
    if (isNaN(parseInt(ant))) return false;
  }

  return check_exprecion2(string.slice(1), current);
}

console.log(check_exprecion("5 +  6 / 7 - 4")); //true
console.log(check_exprecion("5 - 3 + 3 -/ 56")); //false

console.log(check_exprecion2("5 + 6 / 7 - 4")); //true
console.log(check_exprecion2("5 - 3 + 3 -/ 56")); //false
console.log(check_exprecion2("5-1/54*23-1")); //false
