const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

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
