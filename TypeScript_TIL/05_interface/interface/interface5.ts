interface IPeroson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPeroson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

// 외부에서는 인터페이스만 노출하고 내부는 클래스에 작업
const person: IPeroson1 = new Person("Ranja");
person.hello();
