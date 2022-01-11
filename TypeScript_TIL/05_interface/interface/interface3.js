"use strict";
function hello3(person) {
    console.log(`${person.name}`);
}
const p31 = {
    name: "Rnaa",
    age: 38,
};
const p32 = {
    name: "Mark",
    age: 38,
    phone: "010-231-332",
};
console.log(p32.phone);
const p33 = {
    name: "ANN",
    age: 33,
    father: p31,
    mother: p32,
};
hello3(p33);
