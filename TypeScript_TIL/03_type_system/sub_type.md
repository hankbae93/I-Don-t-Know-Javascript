# 타입 호환성
```ts
let sub1: 1 = 1; // sup1의 서브 타입
let sup1: number = sub1;
sub1 = sup1; //error , number가 더 큰 타입이기 때문에 반대만 가능하다

let sub2: number[] = [1]; // sup2의 서브타입 
let sup2: object = sub2;
sub2 = sup2; // error, 

let sub3: [number, number] = [1,2];
let sup3: number[] = sub3;
sub3 = sup3; //error;

let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4; // any는 에러없이 다 된다;;

let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5; //error 

class Animal {}
class Dog extends Animal {
    eat() {}
}
let sub6: Dog = new Dog();
let sup6:Animal = sub6;
sub6 = sup6; // error, eat이 없다고 뜬다.
```
1. 같거나 서브 타입인 경우 할당 가능 => 공변
```ts
let sub7: string = "";
let sup7: string | number = sub7;

let sub8: { a: string; b: number } = { a: "", b: 1 };
let sup8: { a: string | number; b: number } = sub8;

let sub9: Array<{ a: string; b: number }> = [{ a: "", b: 1 }];
let sup9: Array<{ a: string | number; b: number }> = sub9;
```
<br/ >

2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우 할당이 가능하다 => 반병
```ts
class Person {}
class Developer extends Person {
    coding() {}
}
class StartupDeveloper extends Developer {
    burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

tellme(function dToD(d: Developer): Developer {
    return new Developer();
})

tellme(function pToD(d: Person): Developer {
    return new Developer();
})

tellme(function sToD(d: StartupDeveloper): Developer {
    // StartupDeveloper의 burning이 위 인자 타입 시점에서는 없겟지만 일단 허용된다.
    return new Developer();
})

tsconfig.json의 strictFunctionTypes 옵션을 켜면 슈퍼타입이나 타입이 같을 때만 인자에 할당가능하게 된다.
마지막 함수에서 에러 발생

```
