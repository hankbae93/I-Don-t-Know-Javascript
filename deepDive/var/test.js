// console.log(a);
/*
var hoisting
자바스크립트 엔진이 먼저 소스코드를 평가하고 모든 선언문(var, function, const 등 모든 식별자)을 인지한 후
그 선언문들을 제외한 코드를 순차적으로 실행한다.
*/
var a;

// console.log(score, "score");

score = 80;
var score;

// console.log(score, "score"); // 80, 당연히 undefined인줄알았다. ;;

var tee = "이게 \n \\맞냐";
console.log(tee);
