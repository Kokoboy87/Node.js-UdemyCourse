// CRUD create read update delete

//const mongodb = require('mongodb');
//const MongoClient = mongodb.MongoClient;
//const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

//const id = new ObjectId();
//console.log(id);
//console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database');
	}

	const db = client.db(databaseName);

	//db.collection('users').findOne({ _id: new ObjectId('61ef9f18bb9154009e4d6fb3') }, (error, user) => {
	//	if (error) {
	//		return console.log('Unable to fetch user');
	//	}

	//	console.log(user);
	//});

	//db.collection('users')
	//	.find({ age: 34 })
	//	.toArray((error, users) => {
	//		console.log(users);
	//	});
	db.collection('tasks').findOne({ _id: new ObjectId('61ef369e5427e1d6da3d455c') }, (error, task) => {
		if (error) {
			return console.log('Unable to fetch tasks');
		}

		console.log(task);
	});

	db.collection('tasks')
		.find({ completed: false })
		.toArray((error, tasks) => {
			if (error) {
				return console.log('Unable to fetch tasks');
			}

			console.log(tasks);
		});
});
