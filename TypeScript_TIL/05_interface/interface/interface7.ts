// 함수 타이핑
interface HelloPerson {
  (name: string, age?: number): void;
}
// 타입체크는 여기까지만
const helloPerson: HelloPerson = function (name: string, age?: number) {
  console.log(`${name}입니다`);
};

helloPerson("Ranja");
