// function

// 반환받기
// return
function multiply(x, y) {
  return x * y;
};

const result1 = multiply(2, 4);
console.log(result1);

const multiplyThree = function(x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log(multiplyThree(4, 5, 6));

const multiplayAll = function(...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplayAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function(x, y) {
  console.log(x * y);
})(4, 5);
