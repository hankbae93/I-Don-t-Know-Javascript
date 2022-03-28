var imgCoords = "0";
var rsp = {
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px"
};
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; });
}
document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        var myChoice = this.textContent;
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비김");
        }
        else if ([-1, 2].indexOf(diff)) {
            console.log("이겻습니다");
        }
        else {
            console.log("졋습니다.");
        }
    });
});
