// Loading express
const express = require('express');
// require the mongoose file
require('./db/mongoose');
// require user file to load the user
const User = require('./models/user');
// require task file to load the Tasks
const Task = require('./models/task');
// Creating new Express application
const app = express();
// Port Value for Heroku deployment
const port = process.env.PORT || 3000;
// setting up a call function to parse income json to an object so we can access it in our request handlers.
app.use(express.json());
// ---- setting up the path and the callback function ---- //
app.post('/users', (req, res) => {
	const user = new User(req.body);

	user.save()
		.then(() => {
			// HTTP status code
			res.status(201).send(user);
		})
		.catch((e) => {
			// HTTP status code
			res.status(400).send(e);
		});
});

app.get('/users', (req, res) => {
	User.find({})
		.then((users) => {
			res.status(201).send(users);
		})
		.catch((e) => {
			res.status(500).send();
		});
});

app.get('/users/:id', (req, res) => {
	const _id = req.params.id;

	User.findById(_id)
		.then((user) => {
			if (!user) {
				return res.status(404).send();
			}

			res.send(user);
		})
		.catch((e) => {
			res.status(500).send();
		});
});

// ---- setting up the path and the callback function ---- //
app.post('/tasks', (req, res) => {
	const task = new Task(req.body);

	task.save()
		.then(() => {
			// HTTP status code
			res.status(201).send(task);
		})
		.catch((e) => {
			// HTTP status code
			res.status(400).send(e);
		});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});

app.get('/tasks', (req, res) => {
	Task.find({})
		.then((tasks) => {
			res.status(201).send(tasks);
		})
		.catch((e) => {
			res.status(500).send();
		});
});

app.get('/tasks/:id', (req, res) => {
	const _id = req.params.id;

	Task.findById(_id)
		.then((task) => {
			if (!task) {
				return res.status(404).send();
			}

			res.send(task);
		})
		.catch((e) => {
			res.status(500).send();
		});
});
