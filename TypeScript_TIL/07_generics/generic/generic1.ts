function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

function hello(message: any): any {
  return message;
}

console.log(hello("ull").length);
console.log(hello(39).length);

function helloGeneric<T>(message: T): T {
  return message;
}
const message = helloGeneric<string>("ull");
const number = helloGeneric<number>(22);
// const number = helloGeneric<string>("ull");
console.log(helloGeneric("ull").length); // 리터럴 타입으로 정해지게 됨
