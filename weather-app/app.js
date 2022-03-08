const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

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
