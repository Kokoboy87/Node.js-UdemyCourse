const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is not valid');
			}
		},
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minLength: 7,
		validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error("Password can't be 'password'");
			}
		},
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		},
	},
});

//const me = new User({
//	name: '  Georgios  ',
//	email: 'KoKotinis@gmail.com   ',
//	password: 'pass',
//});

//me.save()
//	.then((me) => {
//		console.log(me);
//	})
//	.catch((error) => {
//		console.log('Error!', error);
//	});

const Tasks = mongoose.model('Tasks', {
	description: {
		type: String,
		trim: true,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const task = new Tasks({
	description: 'I Have to cook   ',
	//completed: true,
});

task.save()
	.then(() => {
		console.log(task);
	})
	.catch((error) => {
		console.log('Error!', error);
	});
