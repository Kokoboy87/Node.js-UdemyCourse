const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=ff8269c5b0bd46ba6e40cce113c0e3e8&query=${latitude}, ${longitude}`;

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service!');
		} else if (response.body.error) {
			callback('Inaccurate location!');
		} else {
			const current = response.body.current;
			callback(undefined, `${current.weather_descriptions}. It is currently ${current.temperature} celsius out. It feels like ${current.feelslike} celsius out.`);
		}
	});
};

module.exports = forecast;
