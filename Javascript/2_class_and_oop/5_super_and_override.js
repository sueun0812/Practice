// super_and_override

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  // 노래, 춤
  part;

  // 4_inheritance의 클래스와는 다르게 자식 클래스에 새로운 프로퍼티를 추가한다면?
  constructor(name, year, part) {
    super(name, year);  // 기존 생성자를 그대로 사용하고 싶은 경우 super(); 키워드 사용
    this.part = part;
  }

  sayHello() {
    // constructor이 아닌 곳에서 부모의 프로퍼티(변수)를 불러올 때는 this를 사용
    // >> return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;

    // 부모의 함수를 불러올 때는 super 키워드 사용 가능
    return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);  // IdolModel { name: '장원영', year: 2002 }
console.log(wonYoung.sayHello()); // 안녕하세요 장원영입니다.
console.log(yuJin.sayHello());  // 안녕하세요 안유진입니다. 보컬를 맡고있습니다.
