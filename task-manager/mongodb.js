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

	//db.collection('users')
	//	.updateOne(
	//		{
	//			_id: new ObjectId('61eb1be45500508d0bb3b301'),
	//		},
	//		{
	//			$inc: {
	//				age: 35,
	//			},
	//		}
	//	)
	//	.then((result) => {
	//		console.log(result);
	//	})
	//	.catch((error) => {
	//		console.log(error);
	//	});

	db.collection('tasks')
		.updateMany(
			{
				completed: false,
			},
			{
				$set: {
					completed: true,
				},
			}
		)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
});
