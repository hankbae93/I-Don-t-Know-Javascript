declare const maybe: unknown; // 타입가드를 통해 타입이 정해지는 것

const aNumber: number = maybe;

// 타입 가드
if (maybe === true) { 
    // maybe가 true면 maybe의 타입은 boolean일수 밖에 없기에 타입가드를 해준다.
    // any와 다르게 전파되지않는다.
    const aBoolean: boolean = maybe;
    
    // const aString: string = maybe; // error
}

if (typeof maybe === 'string') {
    const aString: string = maybe;
    // const aBoolean: boolean = maybe; error
}