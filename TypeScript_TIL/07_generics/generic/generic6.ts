//                 T는 string과 number만 가능하다
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("ranja");
new PersonExtends(39);
// new PersonExtends(true);
