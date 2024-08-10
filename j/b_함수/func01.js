// # func01.js

function callback1(callbackFunc) {
  for (i = 0; i < 3; i++) {
    callbackFunc(i);
  }
}

function print(index) {
  console.log(`${index}번째 함수 호출`);
}

callback1(print);

console.log('============================');

let print2 = function (count) {
  console.log(`${count}번째 함수 호출`);
}

callback1(print2);

console.log('============================');

function callback2(number, callbackFunc, other) {
  if (number % 2 === 0) {
    callbackFunc(number);
  } else {
    other(number);
  }
}

const print3 = (even) => {
  console.log(`${even}은 짝수입니다.`)
};

const print4 = (odds) => {
  console.log(`${odds}는 홀수입니다.`)
};

callback2(3, print3, print4);
callback2(8, print3);

