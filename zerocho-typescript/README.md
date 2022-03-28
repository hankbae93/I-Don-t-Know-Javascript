# setting

```ts
npm init -y
npm i typescript -D
npx tsc app.ts --watch
```

# 타입스크립트를 쓰는 이유

```ts
const a = 1;
const b = "1";
// number === string
if (a === b) {
	// error: 'number' 및 'string' 형식에 겹침이 없기 때문에 이 조건은 항상 'false'을(를) 반환합니다.ts(2367)
	console.log("일치");
}
```

코드에는 타입스크립트가 하나도 없음에도 ts파일이라는 이유만으로 컴파일단계에서 에러를 미리 표시해준다.

# d.ts vs ts

d.ts 는 타입만 쭉 적어놓은 파일로 모두 적어놓고 임포트하는식으로 사용한다.

ts는 우리의 스크립트들이 들어있다.

- tsconfig.json의 declaration 옵션 true 시 d.ts 파일 생성

# types

```ts
const a = {
	a: "b",
} as const;
/*
a: {
    readonly a: "b";
}
*/

type AddNext = (c: number) => string;

function add(a: number, b: number): AddNext {
	return (c: number) => {
		return `${c + a + b}`;
	};
}

console.log(add(1, 2)(6));

const b: HTMLDivElement = document.createElement("div");
// interface HTMLDivElement extends HTMLElement
const d = b as HTMLElement;
// const e = b as string; error
```

# as const

리터럴 타입으로 고정해주고 싶을 때 사용

```ts
// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
```
