// loops
// 1) for
// 2) while

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// };

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// };

// for(let i = 0; i < 3; i++) {
//   for(let j = 3; j > 0; j--) {
//     console.log(i, j);
//   };
// };

// *을 이용해서 6*6 정사각형을 출력
let square = '';
let side = 6;

// for(let i = 0; i < side; i++) {
//   for(let j = 0; j < side; i++) {
//     square += '*';
//   }
//   square += '\n';
// }

// console.log(square);

console.log('-------------');

// ! for...in
const yuJin = {
  name: '안유진',
  year: 2003
};

for(let key in yuJin) {
  console.log(key); // name year
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for(let key in iveMembersArray) {
  console.log(key); // 0 1 2 3 4 5
  console.log(`${key}:${iveMembersArray[key]}`);  // 0:안유진, 1:가을, 2:레이, 3:장원영, 4:리즈, 5:이서
};

// ! for...of

for(let value of iveMembersArray) {
  console.log(value); // 안유진, 가을, 레이, 장원영, 리즈, 이서
}

// While
let number = 0;

while(number < 10) {
  number++;
};

console.log(number);  // 10

// do...while
number = 0;

do {
  number++;
} while(number < 10);

console.log(number);

// break
console.log('-------------');
for(let i = 0; i < 10; i++) {
  if(i === 5) {
    break;
  }
  console.log(i);
}

number = 0;

console.log('------------');
while(number < 10) {
  if(number === 5) {
    break;
  }
  number++;
  console.log(number);
}

// continue
console.log('------------');
for(let i = 0; i < 10; i++) {
  if(i === 5) {
    continue;
  }
  console.log(i);
}

number = 0;

console.log('------------');

while(number < 10) {
  number++;

  if(number === 5) {
    continue;
  }

  console.log(number);
}