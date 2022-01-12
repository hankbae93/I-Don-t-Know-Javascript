# strictPropertyInitialization

```ts
class Person {
  name: string = "Ranja";
  age: number;
}

const p1: Person = new Person();
console.log(p1.age); // undefined
```

분명 p1.age는 type이 number임에도 undefined라는 결과를 보게 된다.
런타임에서 undefined로 나오는 것까지는 class가 알수 없다.

-tsconfig.json

```js
{
    ...,
    strictNullChecks: true,
    strictPropertyInitialization: true,
}
```

# public vs private

1. public

- 외부에서 생성자에 접근할 수 있게 설정

```ts
class Person {
  public name: string = "Ranja";
  public age: number;

  public constructor(age?: number) {
    this.age = age ?? 20;
  }

  public async init() {}
}
const p1: Person = new Person(32);
```

2. private

- 외부에서 생성자에 접근할 수 없게 설정
- 관례적으로 언더바를 붙여서 네이밍한다. (\_age, \_name 등등)

```ts
class Person {
  private name: string = "Ranja";
  private _age!: number;

  private constructor(age?: number) {}

  private async init() {}
}
const p1: Person = new Person(32); //error
```

3. initialize

```ts
class Person {
  public constructor(public name: string, public age: number) {
    //   this.name = name; 이런게 생략되고
    // 인자에 public을 붙여주면 할당할때 this.name에 할당하게 된다.
  }
}

const p1: Person = new Person("ranaj", 32);
console.log(p1); // Person { name: 'ranaj', age: 32 }
```

# Getter vs Setter

1. getter

- get을 하면서 실행하는 함수

```ts
class Person {
  public constructor(public _name: string, public age: number) {}

  get name() {
    console.log("GET");
    return this._name;
  }
}
const p1: Person = new Person("ranaj", 32);
console.log(p1.name);
// GET
// ranaj
```

2. setter

- set(값 변경 등)을 하면서 실행하는 함수

```ts
class Person {
  public constructor(public _name: string, public age: number) {}

  set name(n: string) {
    this._name = n;
  }
}
const p1: Person = new Person("ranaj", 32);
console.log(p1.name);
p1.name = "ranja";
console.log(p1.name);
// SET
// ranja
```

3. private 처리

```ts
class Person {
  public constructor(private _name: string, public age: number) {}

  get name() {
    return this._name + " Function";
  }

  set name(n: string) {
    console.log("SET");
    this._name = n;
  }
}

const p1: Person = new Person("ranaj", 32);
// console.log(p1._name) 접근 불가
console.log(p1.name);
p1.name = "아이유";
console.log(p1.name);
/*
- console
ranaj Function
SET
아이유 Function
*/
```

getter와 setter를 활용하면 다른 사람이 이 클래스를 활용할 때 한계를 정해줄 수 있다.

# ReadOnly

```ts
class Person {
  public readonly name: string = "RANJA";
  public constructor(private _name: string, public age: number) {}
}

const p1: Person = new Person("ranaj", 32);
console.log(p1.name); // getter
p1.name = "아이유"; // Error 발생
```

```ts
class Person {
  public readonly name: string = "RANJA";
  private readonly country: string = "korea";
  public constructor(private _name: string, public age: number) {
    this.country = "Korea";
  }

  hello() {
    // 처음 할당할때를 제외하고 readonly는 내부, 외부 둘다 바꿀 수 없다.
    this.country = "Korea"; // error
  }
}
```

# 동적인 class 처리

```ts
// class => object
// { mark: 'male', jade: 'female'}

class Students {
  [index: string]: "male" | "female";

  ranja: "male" = "male";
}

const aClass = new Students();
aClass.mark = "male";
aClass.jade = "female";

console.log(aClass); // Students { mark: 'male', jade: 'female' }
```

# Class의 static

instance가 아닌 Class 자체의 어떤 값들을 공유가능

```ts
class Person {
  public static CITY = "Seoul";
  public static hello() {
    console.log("HELL");
  }
}

const p1 = new Person();
// p1.hello(); error 발생
Person.hello(); // "HELL"
```

```ts
class Person {
  public static CITY = "Seoul";
  public hello() {
    console.log("HELL", Person.CITY);
  }
  public change() {
    Person.CITY = "LA";
  }
}

const p1 = new Person();
const p2 = new Person();
p1.hello();
p2.change();
p1.hello();
// HELL Seoul
// HELL LA
```

# 싱글톤 패턴

어플리케이션이 실행되는 중간에 클래스에서 단하나의 오브젝트만 생성해서 사용

```ts
class ClassName {
  private static instance: ClassName | null = null;

  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object가 있으면 그걸 리턴
    // 없으면? 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  private constructor() {}
}
//const a = new ClassName();  error
//const b = new ClassName(); // error 이제부턴 무조건 클래스에 접근해야한다.
const a = ClassName.getInstance();
const b = ClassName.getInstance();
console.log(a === b); // true, 두 개는 정확히 같은 object를 가리키고 잇다.
```

# 상속

1. protected

```ts
class Parent {
  // protected: 외부에서 접근할수는 없지만 상속관계에서 사용가능
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고 나이는 ${this._age}`);
  }
}

const p = new Parent("Ranja", 32);
p._name; // error
p.print(); //이름은 Ranja이고 나이는 32
```

2. 상속

```ts
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고 나이는 ${this._age}`);
  }
}

const p = new Parent("Ranja", 39);
p.print();

class Child extends Parent {
  public gender = "male";
}

const c = new Child("RanjaJA", 0);
```

3. override

```ts
class Child extends Parent {
  public _name = "IU"; // 위 코드에서의 _name이 protected처리가 되어있음에도 부모의 속성을 덮어씌울 수 있다.

  public gender = "male";
}

const c = new Child("RanjaJA", 0);
console.log(c._name); // IU
```

```ts
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고 나이는 ${this._age}`);
  }

  protected printName(): void {
    console.log(`이름-${this._name} 나이-${this._age}`);
  }
}

class Child extends Parent {
  public gender = "male";

  constructor(age: number) {
    // 상속을 받은 생성자인경우에 무조건 부모를 먼저 호출한다. super
    super("IU", age);
    this.printName();
  }
}

const c = new Child(22);
c.print();
/*
이름-IU 나이-22
이름은 IU이고 나이는 22
*/
```

# Abstract Classes

완전하지 않은 클래스를 표현가능. new로 생성불가능하고 상속해서 생성

```ts
abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}
// const a = new AbstractPerson() Cannot create an instance of an abstract class

class Person extends AbstractPerson {
  // abstract 완전하지않은 setName을 구현하라고 에러발생
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person();
p.setName("Ranja");

console.log(p); // Person { _name: 'Ranja' }
```
