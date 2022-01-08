const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

// Goal: Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorhand in forecast.js and geocode.js
// 3. Test your work and ensure app still works

if (!address) {
	console.log('Address need to be provided!');
} else {
	geocode(address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return console.log(error);
		}

		forecast(longitude, latitude, (error, forecastData) => {
			if (error) {
				return console.log(error);
			}
			console.log(location);
			console.log(forecastData);
		});
	});
}
