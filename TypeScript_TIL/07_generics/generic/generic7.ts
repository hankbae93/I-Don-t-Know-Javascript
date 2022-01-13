interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "Mark",
  age: 39,
};

type Keys = keyof IPerson; // Iperson의 키만 리터럴 타이핑 "name", "age"만 가능하다.
const keys: Keys = "age";

// function getProp(obj: IPerson, key: "name" | "age"): string | number {
// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// function getProp<IPerson, "name">(obj: IPerson, key: "name"): string
getProp(person, "name");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}
// function setProp<IPerson, "name">(obj: IPerson, key: "name", value: string): void
setProp(person, "name", "ranja");
