// function printImmediately(print) {
// 	print();
// }

// function printWithDelay(print, timeout) {
// 	setTimeout(print, timeout);
// }

// console.log(1);
// setTimeout(() => {
// 	console.log(1.5, "async");
// }, 1);
// console.log(2);
// console.log(3);
// printImmediately(() => console.log("dd"));
// printWithDelay(() => console.log("async callback", 2000));

const users = [
	{ id: "ranja", password: "func" },
	{ id: "jaRani", password: "hiol" },
];

class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			const user = users.filter(
				(user) => user.id === id && user.password === password
			)[0];
			if (user) {
				onSuccess(user);
			} else {
				onError(new Error("not found"));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			const isAdmin = user.id === "ranja";

			if (isAdmin) {
				onSuccess({ name: user.id, role: "admin" });
			} else {
				onError(new Error("no access"));
			}
		}, 1000);
	}
}

const USER = new UserStorage();

function getInput() {
	const id = prompt("아이디");
	const pw = prompt("비번");
	USER.loginUser(
		id,
		pw,
		(user) => {
			USER.getRoles(
				user,
				(user) => {
					alert(`Hello ${user.name}님, ${user.role}`);
				},
				(err) => console.log(err)
			);
		},
		(err) => {
			console.log(err);
		}
	);
}

getInput();
