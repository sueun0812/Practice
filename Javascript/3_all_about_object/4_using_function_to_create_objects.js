// Using function to create objects

function IdolModel(name, year) {
  // new 키워드를 사용하지 않은 경우를 대비하여 new 키워드 생성해주는 조건문
  if(!new.target) {
    return new IdolModel(name, year);
  }

  this.name = name;
  this.year = year;

  this.dance = function() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance()); // 안유진이 춤을 춥니다.

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);  // undefined (사용 x)

// console.log(global.name); // 안유진 (사용 x)

//! new 키워드를 쓸 수 있는 함수는 일반 함수에서 사용 
// >> 화살표 함수에서는 사용 불가
// const IdolModelArrow = (name, year) => {
//   this.name = name;
//   this.year = year;
// };

// const yuJin3 = new IdolModelArrow('안유진', 2003); - Error