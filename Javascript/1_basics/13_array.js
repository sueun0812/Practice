/*
  Array Functions
*/

let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서'
];

console.log(iveMembers);

// ! 기존 배열에 값을 추가
// push()
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('----------------');

// pop
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('----------------');

// shift()
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('----------------');

// splice
console.log(iveMembers.splice(0, 3)); // 몇번째 인덱스부터 몇개를 삭제할지 아규먼츠에 기재
console.log(iveMembers);

iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서'
];

console.log(iveMembers);

// ! 새로운 배열을 생성하여 값을 반환
// concat
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3)); // 몇번 인덱스부터 몇번 인덱스까지 삭제할지 아규먼츠에 작성 (+1 해야함)
console.log(iveMembers);

// spread operator
let iveMembers2 = [
  ...iveMembers
]

console.log(iveMembers2);

// join()
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/'));  // 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서
console.log(typeof iveMembers.join());  // string

// ! 정렬
// sort : 오름차순
iveMembers.sort();
console.log(iveMembers);  // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]

// reverse : 내림차순
console.log(iveMembers.reverse());  // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers = [
  1,
  9,
  7,
  5,
  3
];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});

console.log(numbers); // 오름차순 

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); // 내림차순

console.log('------------------------');

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브 : ${x}`));

console.log(iveMembers.map((x) => {
  if(x === '안유진'){
    return `아이브 : ${x}`;
  } else {
    return x;
  }
}));

console.log(iveMembers);
