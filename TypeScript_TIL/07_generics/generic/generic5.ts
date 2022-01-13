class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

// 인자가 있으면 인자로 추론, 없으면 제네릭으로
new Person("Raja", 21);
new Person<string, number>("Raja", 21);
