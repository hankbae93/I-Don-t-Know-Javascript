function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("RETURN");

any1.toString();

// any는 계속해서 전파됨
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    const a = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({ num: 2 });
console.log(c)
c.indexOf("0");