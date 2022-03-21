async function fetchUser() {
	// return new Promise((resolve, reject) => {
	// 	resolve("ranja");
	// });
	return "ranja";
}

const user = fetchUser();
console.log(user);

async function delay(ms) {
	await setTimeout(() => {}, 1000);
}

async function getApple() {
	await delay(1000);
	return "🥋";
}
async function getBanna() {
	await delay(1000);
	return "🍍";
}

function pickAllFruits() {
	return Promise.all([getApple(), getBanna()]).then((fruits) =>
		fruits.join("+")
	);
}

function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}
