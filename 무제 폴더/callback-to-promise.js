const users = [
	{ id: "ranja", password: "func" },
	{ id: "jaRani", password: "hiol" },
];

class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const user = users.filter(
					(user) => user.id === id && user.password === password
				)[0];

				if (user) {
					resolve(user);
				} else {
					reject("not found");
				}
			}, 2000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const isAdmin = user.id === "ranja";
				if (isAdmin) {
					resolve({ name: user.id, role: "admin" });
				} else {
					reject("no access");
				}
			}, 1000);
		});
	}
}

const UserService = new UserStorage();

const id = prompt("아이디");
const pw = prompt("비번");

UserServicer.loginUser(id, pw) //
	.then(UserService.getRoles)
	.then((user) => alert(`${user.name}, ${user.role}`))
	.catch(console.log);
