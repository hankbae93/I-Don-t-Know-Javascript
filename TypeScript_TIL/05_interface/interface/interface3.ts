interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // a['index'] 객체의 키값
}

function hello3(person: Person3): void {
  console.log(`${person.name}`);
}

const p31: Person3 = {
  name: "Rnaa",
  age: 38,
};

const p32: Person3 = {
  name: "Mark",
  age: 38,
  phone: "010-231-332",
};
console.log(p32.phone);

const p33: Person3 = {
  name: "ANN",
  age: 33,
  father: p31,
  mother: p32,
};

hello3(p33);
