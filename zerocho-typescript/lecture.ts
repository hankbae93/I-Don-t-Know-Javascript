let imgCoords: RSP[keyof RSP] = "0";

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

interface Example {
	a: 3;
	b: 7;
	[key: string]: number;
}

const score = {
	ROCK: 0,
	SCISSORS: 1,
	PAPER: -1,
};

// imgCoords: "0" | "-142px" | "-284px"
function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
	return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find(
		(k) => rsp[k] === imgCoords
	)!;
}
let interval: number;
document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", function (this: HTMLButtonElement, e: Event) {
		clearInterval(interval);
		setTimeout(intervalMaker, 2000);
		const myChoice = this.textContent as keyof RSP;
		const myScore = score[myChoice];
		const computerScore = score[computerChoice(imgCoords)];
		const diff = myScore - computerScore;
		console.log(diff);

		if (diff === 0) {
			console.log("비김");
		} else if ([-1, 2].indexOf(diff)) {
			console.log("이겻습니다");
		} else {
			console.log("졋습니다.");
		}
	});
});

function intervalMaker() {
	interval = setInterval(function () {
		if (imgCoords === rsp.ROCK) {
			imgCoords = rsp.SCISSORS;
		} else if (imgCoords === rsp.SCISSORS) {
			imgCoords = rsp.PAPER;
		} else {
			imgCoords = rsp.ROCK;
		}

		const computer = document.querySelector<HTMLDivElement>("#computer");
		if (computer) {
			computer.style.background =
				"url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
				imgCoords +
				" 0";
		}
	}, 100);
}
intervalMaker();
