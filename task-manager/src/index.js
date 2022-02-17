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

app.post('/users', (req, res) => {
	const user = new User(req.body);

	user.save()
		.then(() => {
			res.status(201).send(user);
		})
		.catch(e => {
			res.status(400).send(e);
		});
});

app.post('/tasks', (req, res) => {
	const task = new Task(req.body);

	task.save()
		.then(() => {
			res.status(201).send(task);
		})
		.catch(e => {
			res.status(400).send(e);
		});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
