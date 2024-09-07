// Static Keyword
// class IdolModel {
//   name;
//   year;
//   static groupNmae = '아이브';

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGroupName() {
//     return '아이브';
//   }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }

// ? 스테틱 키워드를 사용한 객체 및 함수 호출 방법
// console.log(IdolModel.groupNmae); // 아이브
// console.log(IdolModel.returnGroupName()); // 아이브

// factory constructor
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new IdolModel(
      object.name,
      object.year,
    );
  }

  static fromList(list) {
    return new IdolModel(
      list[0],
      list[1],
    )
  }
}

const yuJin2 = IdolModel.fromObject({
  name: '안유진',
  year: 2003,
});
console.log(yuJin2);  // IdolModel { name: '안유진', year: 2003 }

const wonYoung = IdolModel.fromList(
  [
    '장원영',
    2033
  ]
);

console.log(wonYoung);  // IdolModel { name: '장원영', year: 2033 }