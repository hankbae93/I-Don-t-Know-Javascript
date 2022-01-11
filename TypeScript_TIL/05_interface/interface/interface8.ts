interface Person8 {
  name: string;
  age: number;
  readonly gender: string; // 선언 이후 변경 불가능
}

const p81: Person8 = {
  name: "Ranaj",
  age: 20,
  gender: "male",
};

// p81.gender = "female"; error
