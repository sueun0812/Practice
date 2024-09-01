// # func04.js

function greet(name='쪼꼬') {
  console.log(`hello, ${name}`);
}

// greet();

setTimeout(greet, 2000);
setTimeout(greet, 4000, '파이');

// 익명 함수 사용
setTimeout(function() {
  console.log('4초 뒤에 실행됩니다.');
}, 4000);

setTimeout(function() {
  console.log('5초 뒤에 실행됩니다.');
}, 5000);

// 타이머 취소
const timeId = setTimeout(function() {
  console.log('오잉');
}, 2000);

// clearTimeout(timeId);

// setInterval
// let count = 1;

// let id = setInterval(() => {
//   console.log(`2초마다 실행됩니다. ${count}번째`);
//   count++;
// }, 2000);

// setTimeout(() => {
//   console.log('타이머를 종료합니다.');
//   clearInterval(id);
// }, 14000);



