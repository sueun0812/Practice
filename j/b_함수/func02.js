// # func02.js

// forEach
const numbers = [23, 45, 85, 34];

numbers.forEach(function(value, index, array) {
  console.log(`${index + 1}번째 요소 : ${value}`);
});

// map
const newNumbers = numbers.map(function(value) {
  let multiply = value * value;
  return multiply;
});

console.log(newNumbers);

// const newNumbers = numbers.map(value => value * value);

// filter
const basicArray = [0, 1, 2, 3, 4, 5];

const evenNumber = basicArray.filter(function(value) {
  return value % 2 === 0;
});

console.log(evenNumber);

// 메서드 체이닝
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numberArray
  .filter(value => value % 2 === 0)
  .map(value => value * value)
  .forEach(value => console.log(value));
