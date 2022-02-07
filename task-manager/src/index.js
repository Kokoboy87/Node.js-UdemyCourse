// returns
const express = require('express');
// Creating new Express application
const app = express();
// Port Value for Heroku deployment
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server is up on port');
});
