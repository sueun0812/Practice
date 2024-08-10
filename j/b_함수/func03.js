// # func03.js

let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, value) => {
  return acc + value;
},);

console.log(typeof numbers);

console.log(sum); // 10
console.log(typeof sum);

// 예시 2
let cars = ['audi', 'bmw', 'hyundai', 'kia'];

let combinedCar = cars.reduce((acc, value) => {
  return acc + ', ' + value;
});

console.log(combinedCar);


// sort
let numArray = [5, 4, 6, 8, 1, 3];

console.log(numArray.sort());

// reverse
console.log(numArray.reverse());


let nums = [5, 7, 1, 6, 1];

let firstOverFive = nums.find(num => num > 5);
let firstOverFiveIndex = nums.findIndex(num => num > 5);


console.log(firstOverFive);
console.log(firstOverFiveIndex);