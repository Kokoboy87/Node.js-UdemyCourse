// load and store the path library
const path = require('path');
//variable to load the library Express
const express = require('express');

//console.log(__dirname);
//console.log(path.join(__dirname, '../public'));

// Store the express application
const app = express();
// A static way to navigate to the html page route
const publicDirectoryPath = path.join(__dirname, '../public');
// Method to set a value and get handlebars set up.
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));
// Method to navigate to the home page route
app.get('', (req, res) => {
	// rendering dynamic content
	res.render('index', {
		title: 'Weather',
		name: 'Georgios Kokotinis',
	});
});
// Method to navigate to the about page route
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About me',
		name: 'Georgios Kokotinis',
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'You get helped by',
		name: 'Georgios Kokotinis',
	});
});

// Method to navigate to the weather page route
app.get('/weather', (req, res) => {
	res.send({
		forecast: 'Rainy weather',
		location: 'Landmark, VA',
	});
});

// Method that starts the server
app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
