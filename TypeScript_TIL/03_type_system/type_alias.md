# 타입 별칭
타입을 만드는 개념은 아니고 만들어진 타입의 refer로 사용됨


1. Aliasing Primitive
```ts
type MyStringType = string;

const str = 'world';
let myStr: MyStringType = 'dd';
```

<br />

2. Aliasing Union Type
```ts
type StringOrNumber = string | number;

let data: StringOrNumber = 0;
data = 'heelo';
```
<br />

2. Aliasing Tuple
```ts
type PersonTuple = [string, number];

const data: PersonTuple = ["ranja", 29];
```
<br />

3. Aliasing Function
```ts
type EatType = (food: string) => void;
```
<br />