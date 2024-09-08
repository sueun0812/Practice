/*
  Property Attribute

  1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
  2) 엑세서 프로퍼티 - 자체적으로 값을 갖고있찌 않지만 다른 값을 가져오거나 설정할 때
                      호출되는 함수로 구성된 프로퍼티
                      ex) getter와 setter
*/
const yuJin = {
  name: '안유진',
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));  // { value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));  // { value: 2003, writable: true, enumerable: true, configurable: true }

/*
  1) value - 실제 프로퍼티의 값
  2) writable - 값을 수정 할 수 있는지 여부, false로 설정하면 프로퍼티 값 수정 불가
  3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면 true 반환
  4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
                    flase일 경우 프로퍼티 삭제나 어트리뷰터 변경이 금지된다.
                    단, writable이 ture인 경우 값 변경과 writable을 변경하는건 가능
*/

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

console.log(Object.getOwnPropertyDescriptors(yuJin)); 
/* 
{
  name: {
    value: '안유진',
    writable: true,
    enumerable: true,
    configurable: true
  },
  year: { value: 2003, writable: true, enumerable: true, configurable: true }
}
*/
const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yuJin2);  // { name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age);  // 21

yuJin2.age = 32;
console.log(yuJin2.age);  // 32
console.log(yuJin2.year); // 1992

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
/*
  {
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
  }
*/

// 프로퍼티 액트리뷰트 수정 방법
Object.defineProperty(yuJin2, 'height', {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

//? Writable
Object.defineProperty(yuJin2, 'height', {
  writable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log(('----------------------'));
yuJin2.height = 172;
console.log(yuJin2);  // { name: '안유진', year: 1992, age: [Getter/Setter], height: 180 }

//? Enumerable
console.log(Object.keys(yuJin2)); // [ 'name', 'year', 'age', 'height' ]
for(let key in yuJin2) {
  console.log(key);
}
/*
  name
  year
  age
  height
*/

Object.defineProperty(yuJin2, 'name', {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); //{ value: '안유진', writable: true, enumerable: false, configurable: true }

console.log('--------------');
console.log(Object.keys(yuJin2)); // [ 'year', 'age', 'height' ]
for(let key in yuJin2) {
  console.log(key);
}
/*
  year
  age
  height
*/
console.log(yuJin2);  // { year: 1992, age: [Getter/Setter], height: 180 }
console.log(yuJin2.name); // 안유진

//? Configurable
Object.defineProperty(yuJin2, 'height', {
  writable: true,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//   enumerable: false,
// })

Object.defineProperty(yuJin2, 'height', {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Configurable이 false일 때 writabl을 true > false 변경은 가능하나 false > true 변경은 불가
Object.defineProperty(yuJin2, 'height', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//   writable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); - Error
