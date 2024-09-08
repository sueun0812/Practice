// Scope

var numberOne = 20;

function levelOne() {
  // 함수 실행 시 함수 밖의 변수에 접근 가능
  console.log(numberOne);
}

levelOne(); // 20

function levelOne() {
  var numberOne = 40;

  console.log(numberOne);
};

levelOne(); // 40


//? 함수 스코프 안에서 변수(numberOnne)를 선언하면 상위 스코프의 변수(numberOne)를 덮어쓰지 않음
console.log(numberOne); // 20

console.log('--------------------');

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    // levelTwo에는 numberOne이 없기 때문에 상위 스코프인 One에서 가져옴
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
/*
  levelTwo numberTwo : 99
  levelTwo numberOne : 40
  levelOne numberOne : 40
*/
console.log(numberOne); // 20

//? 하위 스코프에는 접근 불가
// console.log(numberTwo); - Error

//! JS -> Lexical Scope
// >> 선언된 위치가 상위 스코프를 정한다

// <반대> Dynamic Scope (JS X)
// >> 실행한 위치가 상위 스코프를 정한다

var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne();  // 3

//* var 사용 x
// // var 키워드로 스코프가 새로 생기는 경우는 함수 선언때 뿐
// // >> for, if, while의 경우 var 키워드를 썼을 때 새로운 스코프 생성 X
// var i = 999;

// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(`i in global scope : ${i}`);  // i in global scope : 10


//? let과 const 키워드는 함수 뿐 아니라 for, if, while과 같은 block level scope 생성 O
i = 999;
for(let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i in global scope : ${i}`);  // i in global scope : 999



