//# obj01.js

let computer1 = {
  name: '삼성 노트북'
}

let computer2 = computer1;

console.log('=== 복사 후 컴퓨터 2 ===')
console.log(computer2);

computer1.name = '맥북';

console.log();
console.log(computer2);

function changeName(computer) {
  computer.name = '아이패드';
}

changeName(computer2);
console.log(computer2);
console.log(computer1);

console.log('===============================');

// 얕은 복사
let animal1 = {
  name: '피카츄',
  owner: {
    name: '지우',
    age: 12
  }
}

let animal2 = animal1;

animal2.name = '롱스톤';
animal2.owner.name = '웅이';

console.log(animal1);

console.log('===============================');

// 깊은 복사
let book1 = {
  title: '어린왕자',
  auther: '생택쥐페리',
  publishYear: 2024
}

let book2 = JSON.parse(JSON.stringify(book1));

book2.title = 'litlle prince';
book2.publishYear = 2023;

console.log(book1);
console.log(book2);

// 속성 존재 확인
console.log('title' in book1);
console.log('auther' in book1);
console.log('age' in book1);

console.log('===============================');

// 속성 삭제
delete book1.auther;
console.log(book1);
console.log('auther' in book1);

