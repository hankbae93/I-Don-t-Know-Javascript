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

# interface

```ts
interface A {
	a: string;
}

interface A {
	b: number;
}

type B = {
	a: string;
};

type B = {
	b: string;
}; // error
```

interface는 분해해도 하나로 합쳐진다.

# keyof

```ts
interface Color {
	white: "#fff";
	black: "#000";
}
// keyof Color === 'white |
const getColors = (colorname: keyof Color) => {
	console.log(colorname);
};

getColors("white");
getColors("blue"); // error
```

객체의 키값들만 받을 수 있게 타이핑할때 keyof를 활용한다.

반대로 객체의 존재하는 value만 타이핑해줄수도잇다.

```ts
interface Color {
	white: "#fff";
	black: "#000";
}
//colorname : "#fff" | "#000"
const getColors = (colorname: Color[keyof Color]) => {
	console.log(colorname);
};
```

# !

타입시스템에서는 없다고 나오지만 일단 개발하는입장에서 무시하고싶을때 끝에 느낌표를 붙여준다.

# this

ts에서는 this를 핸들러함수 첫번째 인자로 타이핑을 해줘야 에러를 겪지않는다.

```ts
document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", function (this: HTMLButtonElement, e: Event) {
		const myChoice = this.textContent;
	});
});
```

두번째로 타입스크립트의 한계라고 볼 수 있는데 d.ts에서 textContent가 string | null 타입으로 명시되지만
실제로 우리는 null이 아닌걸 알 수 잇을때 as로 타입을 변환해준다.
