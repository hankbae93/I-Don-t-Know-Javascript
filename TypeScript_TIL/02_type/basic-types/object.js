"use strict";
const person1 = { name: "mark", age: 39 };
// name:string, age:number 타입이 자동으로 정해진다. literal
// 그러나 person1이 object타입으로 정해지지않는다
const person2 = Object.create({ name: "mark", age: 39 });
// 원시형 타입을 제외한 타입을 받고싶을때 사용한다.
// [], {}, 등등 
const isObj = new Number(1);
console.log(isObj); // [Number: 1] ?????
