"use strict";
class AbstractPerson {
    constructor() {
        this._name = "Mark";
    }
}
// const a = new AbstractPerson() Cannot create an instance of an abstract class
class Person extends AbstractPerson {
    // abstract 완전하지않은 setName을 구현하라고 에러발생
    setName(name) {
        this._name = name;
    }
}
const p = new Person();
p.setName("Ranja");
console.log(p);
