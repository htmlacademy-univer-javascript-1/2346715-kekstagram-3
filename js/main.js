'use strict';



// #1
// Gets random number from range including boundaries by floor:
function getRandomNumberFromRange(a, b) {
  if (a < 0 || b < 0) return -1;
  return Math.floor((b >= a)
      ? Math.random() * (b + 1 - a) + a
      : Math.random() * (a + 1 - b) + b);
}
// A Code Convention wasn't read yet so two tabs at the
// start of two last lines were typed just like in Java
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random



// #2
// Checks if length of string is not undefined
// and is not bigger than non-negative max value
function isStringLengthSuitable(string, maxLength) {
  if (!(string == undefined || maxLength <= 0)) {
    return String(string).length <= maxLength;
  }
}
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
