type EatType = (food: string) => void;
interface IEat {
  (food: string): void;
}

type List = string[];
interface PersonList {
  [index: number]: string;
}

// 여러 타입 다루기
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtistResponseType = ArtistsData & ErrorHandling;
interface IArtistResponseType extends ArtistsData, ErrorHandling {}

// union type
type Color = "green" | "blue"; // 이렇게 될 경우 "green"이나 "blue"만 할당할 수 있다.

interface Bird {
  fly(): void;
}

interface Dog {
  bark(): void;
}
type PetType = Bird | Dog;

// interface IPet extends PetType {} interface에서는 union 상속 error 발생
// class Pet implements PetType {}

// interface에서는 머징이 가능하지만 type alias에서는 불가능하다
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
