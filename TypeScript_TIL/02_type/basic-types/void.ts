function returnVoid(message: string): void {
    console.log(message)

    return undefined;
}
// void타입에는 undefined를 제외한 어떤타입도 할당할 수가 없다
// const r = returnVoid("ss");
returnVoid("ss")
