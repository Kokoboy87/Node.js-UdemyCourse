const request = require('request');
const geocode = require('./utils/geocode');

// // API weather service (weatherstack.com)
// const url = 'http://api.weatherstack.com/current?access_key=ff8269c5b0bd46ba6e40cce113c0e3e8&query=37.8267,-122.4233&units=f';
// // Weather service request
// request({ url: url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service!');
// 	} else if (response.body.error) {
// 		console.log('Inaccurate location!');
// 	} else {
// 		const current = response.body.current;
// 		console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degreess out. It feels like ${current.feelslike} degreess out.`);
// 	}
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
	console.log('Error', error);
	console.log('Data', data);
});

// ======================================================================= //

geocode('dc', (error, data) => {
	console.log('Error', error);
	console.log('Data', data);
});
