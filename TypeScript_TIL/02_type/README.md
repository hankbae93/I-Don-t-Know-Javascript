# Type

Static Types (개발 중간에 타입체크) vs Dynamic Types (런타임에서 에러 확인 가능)

```ts
// javascript
function add(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") { 
        throw new Error('Incorrect input');// 런타임 때 에러를 수동적으로 던져서 체크가능
    }
    return n1 + n2;
}
const result = add (39, 28);

// typeScript
function add(n1: number, n2: number) {
    return n1 + n2;
}
const result = add (39, 28);
```

<br />

# 기본 자료형 (Primitive Type)
- Boolean, Number, String, Null, Undefined, Symbol, Array:object형
```ts
// X, 래퍼객체로 타이핑하는 것은 권장하지않음 
function checkString(s: String): String {
    return s.split("").join(",")
}

// O
function checkString(s: string): string {
    return s.split("").join(",")
}

let isOk:Boolean = true; // 리터럴 값으로 변수 타입 설정 가능

let isNotOk: boolean = new Boolean(true); // 레퍼객체로 할당할 시 에러 발생
```


- 원시형 내장함수를 사용가능함
```ts
let name = "mark";
name.toString();
```



# 프로그래밍을 도울 타입
- Any, Void, Never, Unknown, Enum, Tuple