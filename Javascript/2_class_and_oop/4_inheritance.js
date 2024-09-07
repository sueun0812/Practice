// Inheritance

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return '여자 아이돌이 춤을 춥니다.';
  }
}

class MaleIdolMode extends IdolModel {
  sing() {
    return '남자 아이돌이 노래를 부릅니다.';
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003 }

const jiMin = new MaleIdolMode('지민', 1995);
console.log(jiMin); // MaleIdolMode { name: '지민', year: 1995 }

console.log(yuJin.dance()); // 여자 아이돌이 춤을 춥니다.
console.log(yuJin.name);  // 안유진

console.log(jiMin.sing());  // 남자 아이돌이 노래를 부릅니다.
console.log(jiMin.year);  // 1995

// console.log(yuJin.sing()); - Error 

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);  // IdolModel { name: '코드팩토리', year: 1992 }

console.log(cf.name); // 코드팩토리
// console.log(cf.dance()); - Error

// ? 상속받은 부모의 클래스의 모든 프로퍼티를 자식 클래스가 받을 수 있지만
//   부모가 자식 클래스의 프로퍼티를 받을 수는 없음

// instanceof 인스턴스 확인 방법
// 변수명 instanceof 확인할클래스명
console.log(yuJin instanceof IdolModel);  // true
console.log(yuJin instanceof FemaleIdolModel);  // true
console.log(yuJin instanceof MaleIdolMode); // false

console.log("----------------");
console.log(jiMin instanceof IdolModel);  // true
console.log(jiMin instanceof FemaleIdolModel);  // false
console.log(jiMin instanceof MaleIdolMode); // true

console.log("----------------")
console.log(cf instanceof IdolModel);  // true
console.log(cf instanceof FemaleIdolModel);  // false
console.log(cf instanceof MaleIdolMode); // false



