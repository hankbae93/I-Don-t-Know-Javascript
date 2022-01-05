"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
let isOk = true; // 리터럴 값으로 변수 타입 설정 가능, 레퍼객체로 할당할 시 에러 발생
// let isNotOk: boolean = new Boolean(true); // error
