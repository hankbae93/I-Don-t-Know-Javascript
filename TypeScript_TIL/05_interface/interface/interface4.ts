interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "ranja",
  age: 39,
  hello: function (): void {
    console.log(`${this.name}입니다.`);
  },
};

const p42: Person4 = {
  name: "ranja",
  age: 39,
  hello(): void {
    console.log(`${this.name}입니다.`);
  },
};

// const p43: Person4 = {
//   name: "ranja",
//   age: 39,
//   hello: (): void => {
//     console.log(`${this.name}입니다.`);
//     // The containing arrow function captures the global value of 'this'
//   },
// };

p41.hello();
p42.hello();
