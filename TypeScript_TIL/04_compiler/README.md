# Compliation Context
어떤 파일을 컴파일하고 그룹핑할 것인지, 어떤 옵션으로 컴파일할 것인지 tsconfig.json에 선언

# tsconfig scheme
http://json.schemastore.org/tsconfig
해당 파일에서 타입과 자세한 설명을 볼 수 있다.

## extends
다른 파일의 옵션을 상속받을 수 있다.

https://github.com/tsconfig/bases
```json
npm install --save-dev @tsconfig/recommended
{
    "extends": "@tsconfig/recommended/tsconfig.json"
}
```

## files, include, exclude
어떤 파일을 컴파일하고 제외할 것인지 정한다. 셋다 설정이 없으면 전부다 컴파일
1. files
- 상대 혹은 절대 경로 리스트 배열 

2. include, exclude
- glob 패턴 (마치 .gitignore)
- include
    - exclude 보다 약함
    - * 같은 걸 사용하면 .ts / .tsx / .d.ts 만 include (allowJS 같은 라이브러리 추가 필요)

- exclude
    - <strong>설정을 안하면 4가지(node_modules, bower_components, jspm_packages, outDir)를 default로 제외함</strong>
    - outDir: 컴파일러 옵션에서 설정하는데 항상 제외됨

## compileOptions

1. typeRoots, types

    외부라이브러리같은 경우 js로 타이핑이 안되어있어서 컴파일옵션에서 설정이 필요하다.

    ```js
    유명한 모듈인경우 타이핑이 된 버전이 준비되어잇다
    npm i --save-dev @types/react
    ```
    - typeRoots: node_modules/@types처럼 기본 라이브러리 모듈폴더로 설정할 수 있다. 유명하지 않은 라이브러리들을 새로 타이핑한 경우 이런식으로 새로 만들기도 한다.
        - 배열 안에 들어있는 경로들 아래서만 가져옴

    - types: node_modules/@types안에 있는 패키지네임을 배열로 묶어서 그 이름의 모듈을 가져온다.

    - 같이 사용하지는 않는다.

2. target, lib
    - target: 빌드를 어떤 버전으로 컴파일할 지 설정 
        - es5, es6 등 코드가 몇 버전으로 컴파일될지 설정 가능 
        - 지정안하면 es3 요즘은 es2016

    - lib: 기본 type definition 라이브러리를 어떤 것으로 사용할 것인가
        - 지정하지않으면 target에 따라 자동 지정됨
        - http://kangax.github.io/compat-table/es2016plus/ 

3. outDir, outFile, rootDir
    - outFile: 하나의 자바스크립트파일로 번들링해줌(라이브러리 필요)
    - outDir: 컴파일할 결과물 폴더를 지정
    - rootDir: 루트설정. 이 루트폴더에서 소스를 가져와 outDir의 폴더에 컴파일
    ```json
    {
        "rootDir": "./src",        
        "outDir": "./dist", // dist라는 폴더안에 컴파일
    }
    ```

## strict

strict는 무조건 true

1. --noImplicitAny

    타입스크립츠가 추론을 실패한 경우 any가 맞으면(개발자가 any라고 지정했으면) any라고 지정하라

    ```ts
    function noImplicitAny(arg) { //error
        console.log(arg)
    }
    ```

2. --noImplicitThis

    this 표현식에 any 타입 지정안하고 any로 사용할 경우 에러 발생
    ```ts
    // ts에만 있는 문법, this의 타입을 정해준다
    function noImplicitThis(this, name: string, age: number) {
        this.name = name; 
        this.age = age;
    }
    Class에서는 에러발생하지않음
    ```

3. --strictNullChecks

    모든 타입은 null, undefined값을 가질 수 있어서 직접 명시하게 error발생시킴

    필요하면 union type으로 명시

4. --strictFunctionTypes

    매개 변수는 서브타입만 가능하게 함

5. --strictPropertyInitialization

    클래스의 속성이 초기값이 할당되지 않은 경우 error 발생

    ```ts
    class Person {
        private _name: string;
        private _age: number;
        
        // constructor로 초기값할당해야 error 발생하지않음
        // 다른 함수로 initialize하는 경우도 있다.
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
    }
    ```

6. --strictBindCallApply

    bind, call, apply를 더 엄격히 수행

7. --alwaysStrict

    "use strict" 추가됨