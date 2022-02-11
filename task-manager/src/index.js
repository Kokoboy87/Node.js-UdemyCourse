// Loading express
const express = require('express');
// require the mongoose file
require('./db/mongoose');
// require user file to load the user
const User = require('./models/user');
// Creating new Express application
const app = express();
// Port Value for Heroku deployment
const port = process.env.PORT || 3000;
// setting up a call to pass income
app.use(express.json());

app.post('/users', (req, res) => {
	const user = new User(req.body);

	user.save()
		.then(() => {
			res.send(user);
		})
		.catch(e => {
			res.status(400).send(e);
		});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
