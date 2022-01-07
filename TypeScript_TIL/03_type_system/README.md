# Type System
```ts
function mutipleTriple(a) { // a의 타입을 명시해주지않으면 any로 된다.
    return a * 3;
}

console.log(mutipleTriple(1)); // 3
console.log(mutipleTriple("ranaj")); // NaN , 의도치 않은 결과

==> tsconfig.json 에서 noImplicitAny 옵션을 켜서 
타입스크립트가 추론중 'any'로 판단하게 되면 컴파일 에러 발생
```
<br />

# 리턴 타입 추론
```ts
function mutipleTriple(a: number) { // a의타입으로 return type을 number | undefined로 추론한다.
    if (a > 0) {
        return a * 3;
    }    
}

console.log(mutipleTriple(1)); // 3
console.log(mutipleTriple(-5) + -5); // undefined + -5 = NaN 
분명 리턴타입은 number임에도 undefined가 리턴되는 것을 확인할 수 있다.

==> tsconfig.json 에서 strictNullChecks 옵션을 켜서 
모든 타입에 자동으로 포함되어있는 'null', 'undefined'를 제거해준다.

console.log(mutipleTriple(1)); // 3, type: number | undefined
=> 함수의 인자가 런타임 전에는 어떤 것이 올지 예상할 수 없기 때문에 타입스크립트에서는
리턴 후 런타임에서 에러를 던지고 의논하게 유도한다.
```

<br />

# 리턴 타입을 지정해야 될까

```ts
function mutipleTriple(a: number): number { // 다른 예외처리에서 컴파일 에러 발생
    if (a > 0) {
        return a * 3;
    }    
}

==> tsconfig.json 에서 noImplicitReturns 옵션을 켜서 
모든 함수에서 리턴을 직접 정해주지않으면 컴파일 에러 발생시킨다.
```

<br />

# 객체 리터럴 타입
```ts
function getIntroduce(a: { name: string, age: number }): string { 
    return `${a.name}은 나이가 ${a.age}`;
}
우리는 이런식으로 인자의 객체 타입을 정해줄 수 있는데 매번 객체 키 모두의 타입들을 적어줄 수 없기 때문에 
interface나 typeAlias를 활용한다.

interface PersonInterface {
    name: string;
    age: number;
}

type PersonTypeAlias = {
    name: string;
    age: number;
}

function getIntroduce(a: PersonInterface): string { 
    return `${a.name}은 나이가 ${a.age}`;
}
```

# Structural Type System
구조가 같으면, 같은 타입이다.
```ts
interface User {
    name: string;
}

type UserInfoType = {
    name: string;
}

let a: User = {} as any;
let b: UserInfoType = {} as any;

a = b;
b = a; 
```

nominal type system: 구조가 같아도 이름이 다르면 다른 타입이다 (java등)
```ts
type PersonID = string & { readOnly brand: unique symbol };

function PersonID(id: string): PersonID {
    return id as PersonID;
}

function getPersonById(id: PersonID) {}
getPersonByID(PersonID('id-2132')); 
getPersonByID('id-2132'); // error
```

duck typing (python)

<br />


