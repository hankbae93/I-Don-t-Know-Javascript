function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop():never {
    while(true) {

    }
}

// never는 모든타입의 subtype
// never에는 그 어떤 것도 할당할 수 없음

// let a: string = "hello";
declare const a: string | number;

if (typeof a !== 'string') {
    a; // never로 나온다.
    // string이 아니면 number로 타입가드를 친다.
}

// 조건부 타입 
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// T, 인자가 스트링인가? 조건문
type ObjectIndexable = Indexable<{}>

// const b: Indexable<{}> = ""; // error, 잘못된 타입을 넣지못하게 방지하는 효과가 된다.