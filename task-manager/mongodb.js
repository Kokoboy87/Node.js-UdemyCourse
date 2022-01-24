// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database');
	}

	const db = client.db(databaseName);

	// --------- That's the first of the CRUD operations 'Create'. --------- //
	//	db.collection('users').insertOne(
	//		{
	//			name: 'Georgios',
	//			age: 34,
	//		},
	//		(error, result) => {
	//			if (error) {
	//				return console.log('Unable to insert user');
	//			}
	//			console.log(result.insertedId);
	//		}
	//	);
	//db.collection('users').insertMany(
	//	[
	//		{
	//			name: 'Maria',
	//			age: 22,
	//		},
	//		{
	//			name: 'Antreas',
	//			age: 45,
	//		},
	//	],
	//	(error, result) => {
	//		if (error) {
	//			return console.log('Unable to insert documents!');
	//		}

	//		console.log(result.insertedIds);
	//	}
	//);

	// --------- That's the first of the CRUD operations 'Create'. --------- //
	db.collection('tasks').insertMany(
		[
			{
				description: 'Grocery shopping',
				completed: false,
			},
			{
				description: 'Give a bath to my dog',
				completed: false,
			},
			{
				description: 'Apply for jobs',
				completed: true,
			},
		],
		(error, result) => {
			if (error) {
				return console.log('Unable to insert documents!');
			}
			console.log(result.insertedIds);
		}
	);
});
