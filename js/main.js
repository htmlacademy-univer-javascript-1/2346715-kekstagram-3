
// #1
// Gets random number from range including boundaries by floor:
function getRandomNumberFromRange(a, b) {
  if (a < 0 || b < 0) {
    return -1;
  }
  return Math.floor((b >= a)
    ? Math.random() * (b + 1 - a) + a
    : Math.random() * (a + 1 - b) + b);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


let result1 = '';
for (let i = 0; i < 100; i++) {
  result1 += (getRandomNumberFromRange(5,0)) + ', ';
}
console.log(result1.slice(0, result1.length - 2));


// #2
// Checks if length of string is not undefined
// and is not bigger than non-negative max value
function isStringLengthSuitable(string, maxLength) {
  if (!(string === undefined || string === null || maxLength <= 0)) {
    return String(string).length <= maxLength;
  }
}
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String


let obj = {
  str: "value",
  num: 1
};

console.log(isStringLengthSuitable('hi!', 2));
console.log(isStringLengthSuitable('hi!', 3));
console.log(isStringLengthSuitable('hi!', 4));
console.log(isStringLengthSuitable('hi!', 0));
console.log(isStringLengthSuitable('hi!', -1));
console.log(isStringLengthSuitable(null, 10));
console.log(isStringLengthSuitable(undefined, 10));
console.log(isStringLengthSuitable(obj, 10));
console.log(isStringLengthSuitable(obj, 20));
