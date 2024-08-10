// # j_a.js

number = -10;

if (number > 0) {
  console.log('양의 정수입니다.')
} else if (number < 0) {
  console.log('음의 정수입니다.')     // number이 0보다 작으므로 음의 정수입니다.가 출력
} else {
  console.log('0입니다.')
}

let fruit = 'banana';

switch (fruit) {
  case 'apple':
    console.log('사과');
    break;
  case 'banana':
    console.log('바나나');         // 바나나가 출력됨
    break;
  default:
    console.log('일치하는 값이 없습니다.');
}