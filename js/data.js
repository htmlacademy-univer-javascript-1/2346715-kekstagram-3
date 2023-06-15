import {getRandomNumberFromRange} from '.util.js';

function getPhotosArray() {
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

getPhotosArray();
