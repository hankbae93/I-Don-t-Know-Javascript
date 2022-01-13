function helloArray<T>(message: T[]): T {
  return message[0];
}

// function helloArray<string>(message: string[]): string 타입추론이 됨
helloArray(["Hello", "World"]);

// function helloArray<string | number>(message: (string | number)[]): string | number
helloArray(["Hello", 5]);

function helloTupple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTupple(["Hello", "World"]);

// function helloTupple<string, number>(message: [string, number]): string
helloTupple(["Hello", 5]);
