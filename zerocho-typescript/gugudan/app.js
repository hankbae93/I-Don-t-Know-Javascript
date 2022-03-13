var numberOne = getRandom();
var numberTwo = getRandom();
var result = numberOne * numberTwo;
var wordNumber = document.createElement("div");
wordNumber.textContent = "".concat(numberOne, " \uACF1\uD558\uAE30 ").concat(numberTwo);
document.body.append(wordNumber);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement("input");
input.type = "number";
form.append(input);
var button = document.createElement("button");
button.textContent = "입력!";
form.append(button);
var resultDiv = document.createElement("div");
document.body.append(resultDiv);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = "딩동댕";
        numberOne = getRandom();
        numberTwo = getRandom();
        result = numberOne * numberTwo;
        wordNumber.textContent = "".concat(numberOne, " \uACF1\uD558\uAE30 ").concat(numberTwo);
    }
    else {
        resultDiv.textContent = "땡";
        input.value = "";
        input.focus();
    }
});
function getRandom() {
    return Math.ceil(Math.random() * 9);
}
