let imgCoords = "0";

interface RSP {
	readonly ROCK: "0";
	readonly SCISSORS: "-142px";
	readonly PAPER: "-284px";
}

const rsp: RSP = {
	ROCK: "0",
	SCISSORS: "-142px",
	PAPER: "-284px",
};

const score = {
	ROCK: 0,
	SCISSORS: 1,
	PAPER: -1,
};

function computerChoice(imgCoords): "ROCK" | "SCISSORS" | "PAPER" {
	return Object.keys(rsp).find((k) => rsp[k] === imgCoords);
}

document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", function () {
		const myChoice = this.textContent;
		const myScore = score[myChoice];
		const computerScore = score[computerChoice(imgCoords)];
		const diff = myScore - computerScore;

		if (diff === 0) {
			console.log("비김");
		} else if ([-1, 2].indexOf(diff)) {
			console.log("이겻습니다");
		} else {
			console.log("졋습니다.");
		}
	});
});
