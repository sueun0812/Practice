// 타입 변환
// Type Conversion
// 1) 명시적
// 2) 암묵적
let age = 32;

// 명시적
let stringA = age.toString();
console.log(typeof stringA, stringA);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

// 명시적 변환 몇가지 더 배우기
console.log('------------------')
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));

let myage = '30';
console.log(parseInt(myage));
console.log(typeof myage);

console.log('--------------');
// Boolean 타입으로의 변환
// string의 경우 값이 있는지 없는지에 따라 true, false로 구분
console.log(!!'x');  // true
console.log(!!'');  // false

// number의 경우 값이 있는지 0인지에 따라 true, false로 구분
console.log(!!0); // false
console.log(!!1); // true;
console.log(!!-1);  // true;

console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null);  // false

// object, array의 경우 값이 있던지 없던지 무조건 true
console.log(!!{});  // true
console.log(!![]);  // true