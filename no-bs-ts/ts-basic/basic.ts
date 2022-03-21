let username: string = "seo";
let hasLoggedIn: boolean = true;

// hasLoggedIn += "Herrington";
// TS2322: Type 'string' is not assignable to type 'boolean'.
console.log(username);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = username.split("");
const myValues: Array<number> = [1, 2, 3];

interface Person {
	first: string;
	last: string;
}

const myPerson: Person = {
	first: "Jack",
	last: "Herringthon",
};

const ids: Record<number, string> = {
	10: "a",
	20: "b",
};

ids[30] = "c";

[1, 2, 3].forEach((v) => console.log(v));
//(parameter) v: number 파라미터의 타입을 미리알수잇다.
