// Load the libraries
const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Store the express application
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup a static directory to serve
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
// Method to navigate to the help page route
app.get('/help', (req, res) => {
	res.render('help', {
		titleText: 'This is some helpfull text',
		title: 'Help',
		name: 'Georgios Kokotinis',
	});
});
// Method to navigate to the weather page route
app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'Address must be provided',
		});
	}
	res.send({
		forecast: 'Rainy weather',
		location: 'Landmark, VA',
		address: req.query.address,
	});
});

app.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'You must provide a search term',
		});
	}
	console.log(req.query.search);
	res.send({
		products: [],
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Georgios Kokotinis',
		errorMessage: 'Help article not found',
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Georgios Kokotinis',
		errorMessage: 'Page not found',
	});
});

// Method that starts the server
app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
