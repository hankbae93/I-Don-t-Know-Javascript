"use strict";
console.log(Symbol('foo') === Symbol("foo"));
// symbol은 원시형 타입의 값을 담아서 사용하는데 고유하고 수정불가능한 값을 줄때 사용
const sym = Symbol();
const obj = {
    // sym: "value", obj["sym"] 이러면 누구나 접근할수있다.
    [sym]: "value", // obj[sym] 심볼이 할당된 변수로 접근해야만 value 가져올 수있음
};
