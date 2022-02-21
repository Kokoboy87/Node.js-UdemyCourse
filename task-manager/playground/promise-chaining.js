require('../src/db/mongoose');
const User = require('../src/models/user');

// 620d96c99cd39af4b3fc34b2

User.findByIdAndUpdate('61fd7bad7e094ea1e8a3aa80', { age: 1 })
	.then((user) => {
		console.log(user);
		return User.countDocuments({ age: 1 });
	})
	.then((result) => {
		console.log(result);
	})
	.catch((e) => {
		console.log(e);
	});
