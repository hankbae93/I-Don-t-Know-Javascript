let numberOne = getRandom();
let numberTwo = getRandom();
let result = numberOne * numberTwo;

const wordNumber = document.createElement("div");
wordNumber.textContent = `${numberOne} 곱하기 ${numberTwo}`;
document.body.append(wordNumber);

const form = document.createElement("form");
document.body.append(form);

const input = document.createElement("input");
input.type = "number";
form.append(input);

const button = document.createElement("button");
button.textContent = "입력!";
form.append(button);

const resultDiv = document.createElement("div");
document.body.append(resultDiv);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (result === Number(input.value)) {
		resultDiv.textContent = "딩동댕";
		numberOne = getRandom();
		numberTwo = getRandom();
		result = numberOne * numberTwo;
		wordNumber.textContent = `${numberOne} 곱하기 ${numberTwo}`;
	} else {
		resultDiv.textContent = "땡";
		input.value = "";
		input.focus();
	}
});

function getRandom() {
	return Math.ceil(Math.random() * 9);
}
