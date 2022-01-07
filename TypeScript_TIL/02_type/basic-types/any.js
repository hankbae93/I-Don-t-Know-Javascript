"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("RETURN");
any1.toString();
// any는 계속해서 전파됨
let looselyTyped = {};
const d = looselyTyped.a.b.c.d;
