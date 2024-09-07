/*
  All about object

  객체를 선언할때 사용할 수 있는 방법
  1. object를 생성해서 객체 생성 - 기본기 {}
  2. class를 인스턴스화해서 생성 - class와 OOP
  3. function을 사용해서 객체 생성
*/

//? 1. object를 생성해서 객체 생성 - 기본기 {} 
const yuJin = {
  name: '안유진',
  year: 2003,
}
console.log(yuJin); // { name: '안유진', year: 2003 }


//? 2. class를 인스턴스화해서 생성 - class와 OOP
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
console.log(new IdolModel('안유진', 2003)); // IdolModel { name: '안유진', year: 2003 }

//? 3. function을 사용해서 객체 생성 - 생성자 함수!!
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

// 기존에는 const gaEul = IdolFunction(); 형식으로 실행하는데
// this 키워드로 퍼로퍼티를 할당해준 경우만 new키워드로 객체 생성 가능
const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul); // IdolFunction { name: '가을', year: 2002 }