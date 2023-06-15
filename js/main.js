
// #1
// Gets random number from range including boundaries using floor rounding:
function getRandomNumberFromRange(a, b) {
  if (a < 0 || b < 0) {
    return -1;
  }
  return Math.floor((b >= a)
    ? Math.random() * (b + 1 - a) + a
    : Math.random() * (a + 1 - b) + b);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

getRandomNumberFromRange(1, 5);


getRandomNumberFromRange(5, 0);

// #2
// Checks if length of string is not bigger than non-negative max value
function isStringLengthSuitable(string, maxLength) {
  if (!(string === undefined || string === null || maxLength <= 0)) {
    return String(string).length <= maxLength;
  }
}
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

isStringLengthSuitable('hi!', 3);


function createPhotosArray() {
  const arr = [];
  for (let i = 1; i <= 25; i++) {
    arr.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Wonderful photo with a number '.concat(i),
      likes: getRandomNumberFromRange(15, 200),
      comments: getRandomNumberFromRange(0, 200)
    });
  }
  return arr;
}

createPhotosArray();
