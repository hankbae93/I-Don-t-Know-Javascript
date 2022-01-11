interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

// IPerson2를 상속하면서 IKorean의 값도 할당해야한다.
const k: IKorean = {
  name: "rNAJA",
  city: "seoul",
};
