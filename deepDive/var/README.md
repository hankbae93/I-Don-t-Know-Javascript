# var로 볼 수 있는 엔진 실행 순서

```js
console.log(score, "score");

score = 80;
var score;

console.log(score, "score"); // 80, 당연히 undefined인줄알았다. ;;
```

    변수 선언과 값 할당은 별개로 실행한다. 한문장에 var score = 80;을 실행해도 엔진은
    똑같이 두 행위로 나눠서 순차진행한다.

    위 코드를 설명하자면
    1. 전체 코드를 읽고 식별자 판단 , var score 확인 및 메모리 할당 (undefiend)
    2. 식별자를 제외한 소스코드 진행
    console.log(score, "score"); // undefined
    3. score = 80; 값 할당
    - 여기서도 두번으로 나뉜다. 80이라는 리터럴을 새로운 메모리공간에 할당하고
    - score의 메모리 주소를 80이 위치한 메모리 주소로 바꾼다.
    => 첫 할당이 아니라 이미 시작부터 재할당한 셈이다.
    4. var score를 넘어가서 console.log(score) // 80

# unexpected Token

```js
const a = var x;
Uncaught SyntaxError: Unexpected token 'var'
```

이런 에러를 마주한 적이 있을 것이다. token은 statement의 최소 단위다.

const, a, =, var, x

이 문장들이 합쳐져서 명령문이 되는 것인데 하나의 리터럴을 token이라고 부른다.

1. 표현식

```js
// 그자체로 값처럼 사용할 수 있으면 표현식인 statement
x = 3;
what(12);

// 그게 아니면 statement가 아닌 문으로 본다. 조건문 등등
var x; //
if (x) {}

// 어렵지만 단순하게 할당해보면 알수 잇다.
let x = y = 100;
y = 100; // 표현식

x = var z; // error, 표현식이 아닌 선언문
```

# 데이터 타입이 필요한 이유

1. 값을 저장할 때 확보해야하는 메모리 공간의 크기를 결정하기 위해

2. 값을 참조할 때 한번에 읽어 들여야할 메모리 공간의 크기를 결정하기 위해

3. 메모리에서 읽어 들인 2진수를 어떻게 해석할 지 결정하기 위해

- 심벌테이블이라는 자료구조를 통해서 식별자를 키로 저장, 그 안에는 메모리 주소, 데이터 타입, 스코프 등등 관리한다.

```js
// 일단 2라는 리터럴이 무슨 타입인지 알아야 메모리 주소의 크기를 정한다
var num = 2;

// num2에 num 메모리를 참조해서 2진수 데이터를 불러와야 할 때 2진수데이터의 타입을 알아야 저장할 크기와 알맞는 해석을 할 수 있다.
// 0100 0001  숫자로는 65, 문자로는 'A'라고 한다. ;;
var num2 = num;
```
