interface Person2 {
  name: string;
  age?: number; // 있을수도 있고 없을 수도 있을때
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

hello2({ name: "Ranja" });
hello2({ name: "Ranja", age: 22 });
